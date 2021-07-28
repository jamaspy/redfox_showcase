import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { Column } from "./components";
import { get } from "lodash";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { controlDragState } from "../../store/actions";
const DragArea = styled.div`
  /* margin: 8px; */
  padding: 20px;
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
`;
const Dashboard = ({ dispatchControlDragState, allState }) => {
  const onDragStart = () => {
    document.body.style.color = "#C38737";
    document.body.style.transition = "background-color 0.2s ease";
  };

  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(allState.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(21, 68, 104, ${opacity + 0.5})`;
  };
  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = allState.columns[source.droppableId];
    const finish = allState.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      // Remove the task you just dragged
      newTaskIds.splice(source.index, 1);
      // Add in the dragged task to a new index
      newTaskIds.splice(destination.index, 0, draggableId);

      // Create a new column so you are not mutating the old data
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      // Put new column order into the picture of the allState
      // second spread not needed on oe column
      const newState = {
        ...allState,
        columns: {
          ...allState.columns,
          [newColumn.id]: newColumn,
        },
      };

      dispatchControlDragState(newState);
      // And then send the new State to Michaels server
      // .catch(err) do something
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...allState,
      columns: {
        ...allState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    dispatchControlDragState(newState);

    // @TODO This is an optimistic update you need to call the server here and then set the state with the server state
  };

  const addTask = () => {
    const { tasks } = allState.dashboard;
    const currentTasks = tasks;
  };

  return (
    <div>
      <DragArea>
        <DragDropContext
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          {get(allState, "columnOrder", []).map((columnId) => {
            const column = get(allState, ["columns", [columnId]], []);
            const tasks = column?.taskIds.map(
              (taskId) => allState.tasks[taskId]
            );

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </DragArea>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allState: state.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchControlDragState: (newState) => dispatch(controlDragState(newState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
