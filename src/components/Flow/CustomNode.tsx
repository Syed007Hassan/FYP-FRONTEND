import { memo, FC } from 'react';
import { Handle, Position, NodeProps, NodeResizer } from 'reactflow';

// const sourceHandleStyleA: CSSProperties = { left: 50 };
// const sourceHandleStyleB: CSSProperties = {
//   right: 50,
//   left: 'auto',
// };

const CustomNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <NodeResizer />
      <Handle type="target" position={Position.Top} />
      <div className="customNode">
        <div>
          Label: <strong>{data.label}</strong>
        </div>
        <div>
          Position:{' '}
          <strong>
            {xPos.toFixed(2)},{yPos.toFixed(2)}
          </strong>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        className="stages"
        style={{ left: 50 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        className="stages"
        style={{ right: 50, left: 'auto' }}
      />
    </>
  );
};

export default memo(CustomNode);