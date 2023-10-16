import React, { useEffect, useState } from "react";
import CustomButton from "../../Components/Common/CustomButton";
import FormDialog from "../../Components/Common/FormDialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomCard from "../../Components/Common/CustomCard";

function Board() {
  const [openTaskForm, setopenTaskForm] = useState(false);

  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => setopenTaskForm(true);
  const handleCloseTaskForm = () => setopenTaskForm(false);

  const handleSave = (task) => {
    console.log({ task });
    taskList.push(task);
    setTaskList([...taskList]);
    localStorage.setItem("task", JSON.stringify(taskList));
    handleCloseTaskForm();
  };

  useEffect(() => {
    let task = JSON.parse(localStorage.getItem("task"));
    setTaskList(task || []);
  }, []);

  console.log("board = ", localStorage.getItem("task"));

  return (
    <div id="board" className="">
      <FormDialog
        open={openTaskForm}
        title="Add Task"
        handleClose={() => handleCloseTaskForm()}
        handleSave={handleSave}
      />
      <div id="tasks" className="flex flex-col"></div>
      <div id="add-button" className="p-4 flex justify-end bg-[aliceblue]">
        <CustomButton label="Add Task" onClick={() => handleAddTask()} />
      </div>
      <div id="custom-board" className="p-3">
        <div
          id="inprogress"
          className="p-2 w-96 bg-[lightgray] rounded-lg  h-180"
        >
          <div className="pt-[5px] pb-4">To do</div>

          {taskList?.map((item, index) => (
            <CustomCard
              key={item.name + item.description + item.deadline}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
