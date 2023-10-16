import React from "react";
import CustomButton from "../../Components/Common/CustomButton";

function Board() {
  const handleAddTask = () => {
    console.log("Add Task");
  };

  return (
    <div id="board" className="">
      <div id="add-button" className="p-4 flex justify-end bg-[aliceblue]">
        <CustomButton label="Add Task" onClick={() => handleAddTask()} />
      </div>
      <div id="custom-board" className="p-3">
        <div
          id="inprogress"
          className="p-2 w-96 bg-[lightgray] rounded-lg  h-180"
        >
          hello
        </div>
      </div>
    </div>
  );
}

export default Board;
