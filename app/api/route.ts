import { getAllPostsMetadata, getGraphData } from "@/lib/posts";

export async function GET(request: Request) {
    const metadata = await getAllPostsMetadata();
    const graphData = await getGraphData();
    const response = {metadata, graphData}
    return await Response.json(response);
}