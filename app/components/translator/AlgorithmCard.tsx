import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { ItemTypes } from '@customTypes/item';
import { RiDeleteBinLine } from 'react-icons/ri';
import { EncrytpionNameMap, EncrytpionNamesType } from '@customTypes/crypto';

interface AlgorithmCardProps {
  id: any;
  algorithm: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  removeCard: (index: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const AlgorithmCard: FC<AlgorithmCardProps> = ({ id, algorithm, index, moveCard, removeCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className="flex flex-col bg-cccLightBlue rounded-md cursor-grab"
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <div className="flex justify-end px-4 pt-2">
        <RiDeleteBinLine
          className="text-cccNeonGreen cursor-pointer"
          size={20}
          onClick={() => removeCard(index)}
        />
      </div>
      <div className="flex justify-center py-4">
        <span className="text-cccGrey text-lg font-medium">
          {Object.keys(EncrytpionNameMap).find(
            (key) => EncrytpionNameMap[key as EncrytpionNamesType] === algorithm
          )}
        </span>
      </div>
    </div>
  );
};

export default AlgorithmCard;
