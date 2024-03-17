import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { FC } from "react";
import { NodeProps } from "reactflow";
import { TiDelete } from "react-icons/ti";

interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
    category: string;
  };
}

const CustomNode: FC<CustomNodeProps> = ({ data, xPos, yPos }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-gray-100 border-2 border-stone-400">
      <div className="flex">
        {/* <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div> */}
        <div className="ml-2">
          <div className="text-lg font-bold text-sky-900">{data.label}</div>
          <div className="text-gray-500">{data.category}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 rounded-full !bg-sky-900"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 rounded-full !bg-sky-900"
      />

      {/* <button
        onClick={handleDeleteClick}
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
      >
        <TiDelete className="w-5 h-5" />
      </button> */}
    </div>
  );
};

export default memo(CustomNode);
