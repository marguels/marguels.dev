import Link from "next/link";
import {getPostMetadata} from "@/lib/posts";

export default function BlogPage() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => {
    return (<div>
        <Link href={`/blog/${post.slug}`}>
            {post.title}
        </Link>
    </div>)
  })

  return postPreviews;
}
