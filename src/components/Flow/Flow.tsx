"use client";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import styles from "./Flow.module.css";
import "reactflow/dist/style.css";
import { usePathname, useSearchParams } from "next/navigation";
import { workflow } from "@/data/data";
import { useRouter } from "next/navigation";
import { createStage } from "@/types/stage";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addStage } from "@/redux/services/stage/stageAction";
import "../../../tailwind.config.js";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "../../styles/react-quill.css"

import React, { useCallback, useState } from "react";
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
  getOutgoers,
  useReactFlow,
  ReactFlowProvider,
  Node,
} from "reactflow";
import { HiMiniInformationCircle } from "react-icons/hi2";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "custom",
    data: { label: "Job Description", category: "Description" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    type: "custom",
    data: { label: "HR meeting", category: "Meeting" },
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    type: "custom",
    data: { label: "Online Test", category: "Test" },
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    type: "custom",
    data: { label: "Technical meeting", category: "Meeting" },
  },
  {
    id: "5",
    position: { x: 0, y: 400 },
    type: "custom",
    data: { label: "Offer", category: "Offer" },
  },
  {
    id: "6",
    position: { x: 0, y: 500 },
    type: "custom",
    data: { label: "Onboarding", category: "meeting" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2", type: "custom" }];

const nodeTypes = {
  custom: CustomNode,
};

const EdgeTypes = {
  custom: CustomEdge,
};

const defaultEdgeOptions = {
  animated: true,
  type: "smoothstep",
};

const App = () => {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [detail, setDetail] = useState("");

  const { getNodes, getEdges } = useReactFlow();

  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.stageReducer);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobId = pathParts[pathParts.length - 2] || "";

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = { ...connection, type: "custom" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onNodeClick = (event: any, node: { id: string }) => {
    // Remove the clicked node from elements
    const newNodes = nodes.filter((n) => n.id !== node.id);
    setNodes(newNodes);
  };

  const addNode = (e: { preventDefault: () => void }, name: string) => {
    const category = name.split(" ").slice(-1)[0];
    const new_name = name.split(" ").slice(0, -1).join(" ");
    setNodes((nodes) =>
      nodes.concat({
        id: Math.random().toString(),
        type: "custom",
        data: { label: new_name, category: category, description: "" },
        position: { x: 0, y: 0 },
      })
    );
  };

  const handleSaveFlow = (e: any) => {
    // Find the starting node (the node with no incoming edges)
    const startingNode = edges.find(
      (edge) => !edges.some((e) => e.target === edge.source)
    );

    if (!startingNode) {
      console.log("No starting node found");
      return;
    }

    // Follow the edges to sort the nodes
    const sortedNodes = [];
    let currentNode = nodes.find((node) => node.id === startingNode.source);

    while (currentNode) {
      sortedNodes.push(currentNode);

      const nextEdge = edges.find((edge) => edge.source === currentNode!.id);
      currentNode = nextEdge
        ? nodes.find((node) => node.id === nextEdge.target)
        : undefined;
    }

    const sequence = sortedNodes.map((node) => node.data.label);
    const category = sortedNodes.map((node) => node.data.category);
    const description = sortedNodes.map((node) => node.data.description);
    // const stageDetail = sortedNodes.map((node) => node.data.detail);

    // console.log(sequence);
    // console.log(category);

    const data = {
      stages: sequence.map((name, index) => ({
        stageName: name,
        category: category[index],
        description: description[index],
        // detail: stageDetail[index],
      })),
    };

    console.log("data: ", data);

    dispatch(addStage({ jobId, stage: data }));

    router.push(`/recruiter/joblist/${jobId}`);
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("e:", e);
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const category = (document.getElementById("category") as HTMLInputElement)
      .value;
    // const stageDetail = (document.getElementById(
    //   "stageDetail"
    // ) as HTMLInputElement).value;
    setNodes((nodes) =>
      nodes.concat({
        id: Math.random().toString(),
        type: "custom",
        data: { label: name, category: category, description: detail },
        position: { x: 0, y: 0 },
      })
    );
    setDetail("");
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isValidConnection = useCallback(
    (connection: Connection) => {
      // we are using getNodes and getEdges helpers here
      // to make sure we create isValidConnection function only once
      const nodes = getNodes();
      const edges = getEdges();
      const target = nodes.find((node) => node.id === connection.target);
      const hasCycle = (node: Node, visited = new Set()) => {
        if (visited.has(node.id)) return false;

        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };

      if (!target) {
        console.log("No target node found");
        return false;
      }

      if (target.id === connection.source) return false;
      return !hasCycle(target);
    },
    [getNodes, getEdges]
  );

  return (
    <div className={styles.flow}>
      <div className="flex justify-between h-[39.4rem]">
        <div className="w-full relative">
          <div className="flex justify-center pt-4">
            {/* Your ReactFlow content */}
          </div>

          <div
            className={`absolute inset-0 overflow-hidden transition-all duration-500 ${
              sidebarOpen ? "ml-0" : "-ml-60"
            }`}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              // onNodeClick={onNodeClick}
              onNodeDoubleClick={onNodeClick}
              // onNodesDelete={handleDelete}
              nodeTypes={nodeTypes}
              edgeTypes={EdgeTypes}
              defaultEdgeOptions={defaultEdgeOptions}
              connectionLineType={ConnectionLineType.SmoothStep}
              isValidConnection={isValidConnection}
              fitView
            >
              <Controls />
              {/* <Background
                id="2"
                gap={20}
                color="#888"
                variant={BackgroundVariant.Dots}
              /> */}
              <MiniMap nodeColor={nodeColor} />
            </ReactFlow>
          </div>
        </div>

        {sidebarOpen && (
          <div
            className={`flex flex-col gap-5 pt-3 pb-3 bg-gray-200 w-1/2 transition-all duration-500 ease-in-out transform h-[39.4rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {" "}
            <span className="flex justify-center pt-2 ">
              <h1 className="text-2xl font-bold text-gray-600">
                select from predefined stages
              </h1>
            </span>
            <span className="flex justify-center pt-4 px-2 mr-4 ml-4">
              {/* <button
                  onClick={handleSaveFlow}
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Save Flow to API
                </button> */}
              <div className="grid grid-cols-3 gap-3">
                {initialNodes.map((node) => {
                  return (
                    <button
                      key={node.id}
                      name={node.data.label + " " + node.data.category}
                      onClick={(event) =>
                        addNode(event, (event.target as HTMLInputElement).name)
                      }
                      className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                    >
                      {node.data.label}
                    </button>
                  );
                })}
              </div>
            </span>
            <span className="mr-4 ml-10">
              <h1 className="text-xs font-bold text-gray-600 flex">
                <HiMiniInformationCircle />
                <span className="pl-1">
                  By selecting a predefined stage, you will not be also to enter
                  details in your stages.
                </span>
              </h1>
            </span>
            <div className="flex flex-col gap-5 pt-4 pb-4 bg-gray-300 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <span className="flex justify-center">
                <h1 className="text-2xl font-bold text-gray-600">
                  add a custom stage
                </h1>
              </span>
              <form
                className={`max-w-sm mx-auto flex flex-col gap-5`}
                onSubmit={handleFormSubmit}
              >
                <div className="flex gap-4">
                  <div>
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
                      id="name"
                      type="text"
                      placeholder="Enter Stage Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="block text-gray-700 font-bold"
                      htmlFor="category"
                    >
                      Category:
                    </label>
                    <select
                      className="form-select block w-full h-[38px] rounded-md bg-gray-300 shadow-sm"
                      name="category"
                      id="category"
                    >
                      <option value="meeting">meeting</option>
                      <option value="test">test</option>
                      <option value="offer">offer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold"
                    htmlFor="category"
                  >
                    Details:
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={detail}
                    onChange={(value) => setDetail(value)}
                  />
                </div>

                {/* <div className="flex items-center justify-center">
                  <label htmlFor="" className="block text-gray-700 font-bold">
                    Details
                  </label>
                  <input type="text" name="stageDetail" id="stageDetail" />
                </div> */}
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
            <button
              onClick={handleSaveFlow}
              className={`fixed bottom-4 left-4 w-80 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-10`}
              type="button"
            >
              Save
            </button>
          </div>
        )}

        {/* Button to toggle the sidebar */}
        <button
          className={`fixed bottom-4 right-4 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-10`}
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        </button>
      </div>
    </div>
  );
};

function nodeColor(node: Node) {
  switch (node.type) {
    case "input":
      return "#071952";
    case "output":
      return "#071952";
    default:
      return "#071952";
  }
}

const DefaultFlow = () => (
  <ReactFlowProvider>
    <App />
  </ReactFlowProvider>
);

export default DefaultFlow;
