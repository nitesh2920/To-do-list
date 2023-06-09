import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({taskobj,index,deleteTask,updateListArray}) => {
    const [modal,setModal]=useState(false)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle=()=>{
        setModal(!modal);
    }

    const updateTask=(obj)=>{
        updateListArray(obj,index)
    }



    const handleDelete =()=>{
        deleteTask(index)
    }
  return (
    <>
      <div className="card-wrapper mr-5">
        <div className="card-top" style={{ backgroundColor: colors[index%5].primaryColor }}>
          {" "}
        </div>
        <div className="task-holder">
          <span
            class="card-header"
            style={{
              "backgroundColor": colors[index % 5].secondaryColor,
              "border-radius": "10px",
            }}
          >
            {taskobj.Name}
          </span>
          <p className="mt-3">{taskobj.Description}</p>

          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <i
              class="far fa-edit me-3"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              class="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask}taskobj={taskobj}/>

      </div>
    </>
  );
};

export default Card;
