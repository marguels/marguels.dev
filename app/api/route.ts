import { getAllPostsMetadata } from "@/lib/posts";

export async function GET(request: Request) {
    const posts = await getAllPostsMetadata();
    return await Response.json(await posts);
}