"use client";
import { Application } from "@/types/application";
import CustomNode from "./CustomNode";

import styles from "./Flow.module.css";

import "reactflow/dist/style.css";
import { usePathname, useSearchParams } from "next/navigation";
// import { Workflow } from "@/data/data";
import { ApiResponse } from "@/types/stage";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetStageQuery } from "@/redux/services/stage/stageAction";

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

type Nodes = {
  id: string;
  position: { x: number; y: number };
  data: { label: string; category: string };
}[];

type Props = {
  applicantList: Application[];
};

const ApplicationFlow = ({ applicantList }: Props) => {
  const dispatch = useAppDispatch();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [workflow, setWorkflow] = React.useState<ApiResponse | null>(null);
  const [nodeData, setNodeData] = useState<{
    id: string;
    data: { label: string };
  } | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobId = pathParts[pathParts.length - 2] || "";

  const { data, isLoading, isError } = useGetStageQuery({ id: jobId });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      setWorkflow(data || null);
      console.log(data);
    }
  }, [data]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    console.log(workflow);
    let x = 0;
    let y = 0;

    workflow?.data.map((data, index) => {
      return data?.stages.map((stage, index) => {
        setNodes((nodes) => [
          ...nodes,
          {
            id: stage?.stageId.toString(),
            position: { x: (x = x), y: (y += 50) },
            data: { label: stage?.stageName, category: stage?.category },
          },
        ]);

        // If this is not the first stage, create an edge from the previous stage to this one
        if (index > 0) {
          setEdges((edges) => [
            ...edges,
            {
              id:
                "edge-" + data.stages[index - 1].stageId + "-" + stage.stageId,
              source: data.stages[index - 1].stageId.toString(),
              target: stage.stageId.toString(),
            },
          ]);
        }
      });
    });
  }, [workflow, setNodes, setEdges]);

  const nodeClick = (
    event: any,
    node: { id: string; data: { label: string } }
  ) => {
    console.log(node);
    setNodeData(node);
    console.log("nodedata", nodeData);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.flow}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={nodeClick}
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

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50" />
          <div
            id="default-modal"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            onClick={() => setIsModalOpen(false)}
            // style={{ top: "10rem", left: "25rem" }}
          >
            <div
              className="relative p-4 w-full max-w-2xl max-h-full"
              style={{ top: "10rem", left: "25rem" }}
            >
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {nodeData?.data.label}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Applicant Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Applicant Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Application Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Application
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicantList
                        .filter(
                          (applicant) =>
                            parseInt(nodeData?.id || "0") ===
                            applicant?.stage?.stageId
                        )
                        .map((applicant) => (
                          <tr
                            key={applicant?.applicant?.id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {applicant?.applicant?.id}
                            </th>
                            <td className="px-6 py-4">
                              {applicant?.applicant?.name}
                            </td>
                            <td className="px-6 py-4">
                              {applicant?.status}
                            </td>
                            <td className="px-6 py-4">
                              {" "}
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(
                                    applicant?.applicant?.applicantDetails
                                      ?.resume || "",
                                    "_blank"
                                  );
                                }}
                              >
                                View Application
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* Modal footer */}
                {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApplicationFlow;
