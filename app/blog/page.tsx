import Link from "next/link";
import {getPostMetadata} from "@/lib/posts";
import PostCard from "@/components/postCard/PostCard";

export default function BlogPage() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => {
    return (<PostCard key={post.slug} post={post}/>)});

  return (<div>
    <h1>Connecting the dots</h1>
    {postPreviews}
  </div>);
}
