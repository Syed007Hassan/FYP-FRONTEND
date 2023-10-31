"use client";
import CustomNode from "./CustomNode";

import styles from "./Flow.module.css";

import "reactflow/dist/style.css";

import React, { useCallback } from "react";
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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
    // use axios to send data

    // try{
    //   const res = axios.post('/api/save-flow', { nodes, edges });
    // }
    // catch(err){
    //   console.log(err)
    // }

    // console.log(nodes , edges);
    const sequence = [];

    sequence.push(nodes[0].data.label);

    edges.map((edge) => {
      const targetNode = nodes.find((node) => node.id === edge.target);
      if (targetNode) {
        sequence.push(targetNode.data.label);
      }
    });

    console.log(sequence);

    const category = [];

    category.push(nodes[0].data.category);

    edges.map((edge) => {
        const targetNode = nodes.find((node) => node.id === edge.target);
        if (targetNode) {
            category.push(targetNode.data.category);
        }
        });

    console.log(category);
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
      <span className="flex justify-center pt-2 ">
        <h1 className="text-2xl font-bold">Add Stages</h1>
      </span>
      <span className={`flex justify-center pt-4 pb-4 ${styles.stages}`}>
        <button
          onClick={handleSaveFlow}
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Save Flow to API
        </button>
        {initialNodes.map((node) => {
          return (
            <button
              key={node.id}
              name={node.data.label + " " + node.data.category}
              onClick={(event) =>
                addMeetingNode(event, (event.target as HTMLInputElement).name)
              }
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              {node.data.label}
            </button>
          );
        })}
      </span>

      <span className="flex justify-center pt-4">
        <h1 className="text-2xl font-bold">Add Custom Stages</h1>
      </span>

      <div>
        <form
          className={`max-w-sm mx-auto`}
          onSubmit={handleFormSubmit}
        >
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
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Category
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

      <span className="flex justify-center pt-4">
        <h1 className="text-2xl font-bold">Workflow</h1>
      </span>

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
        {/* <Background variant="dots" gap={12} size={1} /> */}
      </ReactFlow>
    </div>
  );
};
export default App;
