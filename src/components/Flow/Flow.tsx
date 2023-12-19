"use client";
import CustomNode from "./CustomNode";
import styles from "./Flow.module.css";
import "reactflow/dist/style.css";
import { usePathname, useSearchParams } from "next/navigation";
import { workflow } from "@/data/data";
import { useRouter } from "next/navigation";


import React, { useCallback } from "react";
import ReactFlow, {
  ConnectionLineType,
  BackgroundVariant,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "reactflow";
import axios from "axios";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Job Desc", category: "Job_Desc" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "HR meeting", category: "meeting" },
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "Online Test", category: "test" },
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    data: { label: "Technical meeting", category: "meeting" },
  },
  {
    id: "5",
    position: { x: 0, y: 400 },
    data: { label: "Offer", category: "offer" },
  },
  {
    id: "6",
    position: { x: 0, y: 500 },
    data: { label: "Onboarding", category: "meeting" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = {
  custom: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: "smoothstep",
};

const App = () => {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);


  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobId = pathParts[pathParts.length - 2] || "";

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (event: any, node: { id: string }) => {
    // Remove the clicked node from elements
    const newNodes = nodes.filter((n) => n.id !== node.id);
    setNodes(newNodes);
  };

  const addMeetingNode = (e: { preventDefault: () => void }, name: string) => {
    const category = name.split(" ").slice(-1)[0];
    const new_name = name.split(" ").slice(0, -1).join(" ");
    setNodes((nodes) =>
      nodes.concat({
        id: Math.random().toString(),
        data: { label: new_name, category: category },
        position: { x: 0, y: 0 },
      })
    );
  };

  const handleSaveFlow = () => {
    const sequence = [];

    sequence.push(nodes[0].data.label);

    edges.map((edge) => {
      const targetNode = nodes.find((node) => node.id === edge.target);
      if (targetNode) {
        sequence.push(targetNode.data.label);
      }
    });

    console.log(sequence);

    const category: string[] = [];

    category.push(nodes[0].data.category);

    edges.map((edge) => {
      const targetNode = nodes.find((node) => node.id === edge.target);
      if (targetNode) {
        category.push(targetNode.data.category);
      }
    });

    console.log(category);

    const data = {
      id: parseInt(jobId),
      companyId: 1,
      stages: sequence.map((name, index) => ({
        id: Math.floor(Math.random() * 1000),
        name: name,
        category: category[index],
      })),
    };

    console.log(jobId);
    console.log(data);

    workflow.push(data);

    console.log(workflow);

    localStorage.setItem('workflow', JSON.stringify(workflow));

    router.push(`/dashboard/joblist/${jobId}`);
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("form submitted");
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const category = (
      document.querySelector(
        'input[name="category"]:checked'
      ) as HTMLInputElement
    ).value;
    setNodes((nodes) =>
      nodes.concat({
        id: Math.random().toString(),
        data: { label: name, category: category },
        position: { x: 0, y: 0 },
      })
    );
  };

  return (
    <div className={styles.flow}>
      <div className="flex justify-between">
        <div className="w-[65%] h-[35rem]">
          <div className="flex justify-center pt-4">
            <h1 className="text-2xl font-bold">Workflow</h1>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
          >
            <Controls />
            {/* <MiniMap /> */}
            <Background
              id="2"
              gap={20}
              color="#888"
              variant={BackgroundVariant.Dots}
            />
          </ReactFlow>
        </div>

        <div className="flex flex-col h-screen gap-5 pt-3 pb-3 bg-gray-300">
          <span className="flex justify-center pt-2 ">
            <h1 className="text-2xl font-bold">Add Stages</h1>
          </span>
          <span
            className="flex justify-center pt-4 pb-4 px-2 mr-4 ml-4">

            <button
              onClick={handleSaveFlow}
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Save Flow to API
            </button>
            <div className="grid grid-cols-3 gap-3">
              {initialNodes.map((node) => {
                return (
                  <button
                    key={node.id}
                    name={node.data.label + " " + node.data.category}
                    onClick={(event) =>
                      addMeetingNode(
                        event,
                        (event.target as HTMLInputElement).name
                      )
                    }
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                  >
                    {node.data.label}
                  </button>
                );
              })}
            </div>
          </span>

          <div className=" pt-4 pb-4">
            <span className="flex justify-center">
              <h1 className="text-2xl font-bold">Add Custom Stages</h1>
            </span>
            <form className={`max-w-sm mx-auto`} onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter Stage Name"
                />
              </div>
              <div className="mb-4 flex gap-3">
                <label className="block text-gray-700 font-bold mb-2">
                  Category:
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="category"
                      value="meeting"
                    />
                    <span className="ml-2">meeting</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="category"
                      value="test"
                    />
                    <span className="ml-2">test</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="category"
                      value="offer"
                    />
                    <span className="ml-2">offer</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add stage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};
export default App;
