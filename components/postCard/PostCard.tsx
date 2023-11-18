import { PostMetadata } from "@/interfaces/post";
import Link from "next/link";


const PostCard = ({post} : {post: PostMetadata}) => {
    return (<div>
        <Link href={`/blog/${post.slug}`}>
            {post.title}
        </Link>
    </div>);
}

export default PostCard;