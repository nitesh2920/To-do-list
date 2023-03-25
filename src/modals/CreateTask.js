import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import App from "../App.css";

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  // ******************* First way of handling *************************
  //   function handletaskName(event) {
  //     setTaskName(event.target.value);
  //   }

  //   function handledescription(event) {
  //     setDescription(event.target.value);
  //   }

  // ******************* Second way of handling *************************

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "taskName") {
      console.log(value)
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave=()=>{
    let taskobj={}
    taskobj["Name"]=taskName;
    taskobj["Description"]=description
    save(taskobj)
    setTaskName("");
  setDescription("");
  }


  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form >
          <div className="form-group">
            <label className="label mb-2">Task name</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              onChange={handleChange}
              className="form-control "
              placeholder="Enter a task Name here "
            />
          </div>
          <div className="form-group">
            <label className="mt-3">Description</label>
            <textarea
              cols="30"
              rows="5"
              name="description"
              onChange={handleChange}
              className="form-control "
              placeholder="Enter a test description here"
              value={description}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
