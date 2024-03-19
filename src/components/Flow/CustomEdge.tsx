import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
  EdgeProps,
} from "reactflow";
import { memo } from "react";
import { TiDelete } from "react-icons/ti";

interface CustomEdgeProps extends EdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: CustomEdgeProps) => {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ cursor: "pointer" }} />
      <EdgeLabelRenderer>
        <button
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
        >
          <TiDelete className="w-4 h-4 text-gray-700" />
        </button>
      </EdgeLabelRenderer>
    </>
  );
};

export default memo(CustomEdge);
