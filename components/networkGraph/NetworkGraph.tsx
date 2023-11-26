'use client';
import { ObsidianLinks } from "@/interfaces/post";
import React, { useRef, useState } from "react";
import dynamic from 'next/dynamic';
import { ForceGraphMethods } from "react-force-graph-2d";
import styles from "./networkgraph.module.css";

const ForceGraph2D = dynamic(
  () => import('react-force-graph-2d'),
  { ssr: false }
);

interface NetworkGraphProps {
  data: ObsidianLinks;
}

const NetworkGraph = ({ data }: NetworkGraphProps) => {
    const fgRef = useRef<ForceGraphMethods>();
    const [hoveredNode, setHoveredNode] = useState<string | number | null>(null);
    return (
      <div className={styles.graphContainer}>
          <h3 className={styles.graphTitle}>Connections</h3>
          <div className={styles.graph}>

        <ForceGraph2D
            ref={fgRef}
            nodeLabel="name"
            nodeCanvasObject={(node, ctx, globalScale) => {
                if (typeof node.id === 'string' && node.x && node.y) {
                const radius = (node as any).parent ? globalScale : globalScale/1.5;
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = node.id === hoveredNode ? 'rgba(108, 99, 255, 1)' : 'rgba(74, 73, 91, 0.9)';
                ctx.fill();

                // Add text title below the node
                const fontSize = 4;
                ctx.font = `${fontSize}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(74, 73, 91, 0.9)';
                ctx.fillText(node.title ? node.title : node.id, node.x, node.y + radius + fontSize);
                }
            }}
            width={200}
            height={200}
            linkColor={() => 'rgba(74, 73, 91, 0.6)'}
            linkWidth={() => 1}
            graphData={data}
            d3AlphaDecay={0.00228}
            d3VelocityDecay={0.4}
            onNodeClick={(
                node: { id?: string | number; label?: string },
                event: MouseEvent
            ) => {
                if (typeof node.id === 'string') {
                window.location.href = `/blog/${node.id}`;
                }
            }}
            onNodeHover={(node) => setHoveredNode(node && node.id ? node.id : null)}
            onNodeDrag={(node) => {
                node.fx = node.x;
                node.fy = node.y;
              }}
            onNodeDragEnd={(node) => {
                node.fx = node.x;
                node.fy = node.y;
              }}
            />
          </div>
    </div>
  );
};


export default NetworkGraph;
