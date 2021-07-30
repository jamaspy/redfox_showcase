import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Draggable } from "react-beautiful-dnd";
import { renderIcon } from "../utils";
import { Popover } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { CgMoreO } from "react-icons/cg";
const Container = styled.div`
  ${tw`border border-gray-300 rounded-full p-4 mb-3 font-semibold shadow-md flex-grow flex justify-center items-center flex-col`}
  background: ${(props) => (props.isDragging ? "#154468" : "white")};
`;

const Task = ({ task, index }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          role="button"
          onClick={handleToggle}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p role="button" className="text-5xl mb-0 text-center">
            {renderIcon(task.icon)}
          </p>
          {show && (
            <div className="flex flex-col items-center justify-center text-center">
              <p className="font-semibold">{task.name}</p>
              <p className="font-light"> {task.company}</p>
              <p className="font-light mt-1 font-semibold"> {task.dealValue}</p>
              <CgMoreO
                className="text-2xl mt-2 text-fox-orange hover:text-fox-blue cursor-pointer"
                onClick={() => alert(`Go To Full Details For ${task.id}`)}
              />
            </div>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
