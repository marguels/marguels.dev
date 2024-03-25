const fs = require('fs').promises;
const path = require('path');
const git = require('simple-git')({baseDir: path.resolve(__dirname, '../../')});
const matter = require('gray-matter');
const slugify = require('slugify');

const projectRoot = path.resolve(__dirname, '../../');
const graphDataDirectory = path.join(projectRoot, '_data');

const BRACKET_LINK_REGEX =
  /\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)#?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\|?([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€! ]+)?\]\]/g;

async function updateGraphData() {
  const status = await git.status();
  // gets all files that have been modified in the _posts directory
  const modifiedFilePaths = status.files
  .filter(file => file.path.startsWith('_posts/'))
  .map(file => path.join(projectRoot, file.path));

  const graphDataPath = path.join(graphDataDirectory, 'graphData.json');
  const graphData = JSON.parse(await fs.readFile(graphDataPath, 'utf-8'));

  for (const fullPath of modifiedFilePaths) {
    const content = await fs.readFile(fullPath, "utf8");
    const slug = path.basename(fullPath, '.md');
    // read file and add to nodes if no node with "id" equal to slug exists
    if (!graphData.nodes.find(node => node.id === slug)) {
      const { data } = matter(content);
      const name = data.title.replace(/\n/g, '');
      graphData.nodes.push({ id: slug, name: name, title: name });
    }

    const matches = Array.from(content.matchAll(BRACKET_LINK_REGEX));
    const links = matches.map(match => {
        const baseLink = slugify(match[1], { lower: true });
        const link = match[2]
              ? `${baseLink}#${slugify(match[1], { lower: true })}`
              : baseLink;
        if(!graphData.nodes.find(node => node.id === baseLink)) return;
        return {
            source: slug,
            target: link,
        };
    });

    const validLinks = links.filter(Boolean);

    for (const link of validLinks) {
        if (!graphData.links.find(l => l.source === link.source && l.target === link.target)) {
            graphData.links.push(link);
        }
    }

  }

  await fs.writeFile(graphDataPath, JSON.stringify(graphData));

  try {
    await git.add(graphDataPath);
  } catch (error) {
    console.error('Error adding graphData.json to commit:', error);
    throw error; // Rethrow the error to abort the commit
  }
}

updateGraphData().catch(console.error);