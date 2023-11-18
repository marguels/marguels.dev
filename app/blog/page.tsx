import {getPostMetadata} from "@/lib/posts";
import PostCard from "@/components/postCard/PostCard";

export default function BlogPage() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => {
    return (<PostCard key={post.slug} post={post}/>)});

  return (<div className="blog-container">
    <h1 className="blog-title">Connecting the <b className="accent">Dots</b></h1>
    <div className="outline"/>
    <div className="post-cards-container">
    {postPreviews}
    </div>
  </div>);
}
