"use client";
import CustomNode from "./CustomNode";

import styles from "./Flow.module.css";

import "reactflow/dist/style.css";
import { usePathname, useSearchParams } from "next/navigation";
import { Workflow } from "@/data/data";

import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  ConnectionLineType,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "reactflow";

const nodeTypes = {
  custom: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: "smoothstep",
};

const ApplicationFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [workflow, setWorkflow] = React.useState<Workflow | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobId = pathParts[pathParts.length - 2] || "";

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    // fetch data from local storage
    const data = localStorage.getItem("workflow");

    // if data is not null
    if (data) {
      // parse data to JSON format
      const jsonData = JSON.parse(data);

      // set job list
      jsonData.map((workflow: Workflow) => {
        if (workflow?.id === parseInt(jobId)) {
          setWorkflow(workflow);
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log(workflow);
    let x = 0;
    let y = 0;

    workflow?.stages.map((stage, index) => {
      setNodes((nodes) => [
        ...nodes,
        {
          id: stage.id.toString(),
          position: { x: x=x, y: y+=50 },
          data: { label: stage?.name, category: stage?.category },
        },
      ]);

      // If this is not the first stage, create an edge from the previous stage to this one
      if (index > 0) {
        setEdges((edges) => [
          ...edges,
          {
            id: "edge-" + workflow.stages[index - 1].id + "-" + stage.id,
            source: workflow.stages[index - 1].id.toString(),
            target: stage.id.toString(),
          },
        ]);
      }
    });
  }, [workflow, setNodes, setEdges]);

  return (
    <div className={styles.flow}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        //   onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        <Controls />
        {/* <MiniMap /> */}
        {/* <Background variant="dots" gap={12} size={1} /> */}
      </ReactFlow>
    </div>
  );
};

export default ApplicationFlow;
