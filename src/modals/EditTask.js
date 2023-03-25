import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask ,taskobj}) => {
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
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(()=>{
    setTaskName(taskobj.Name)
    setDescription(taskobj.Description)
  },[])




  const handleUpdate=(event)=>{
    event.preventDefault();
    let tempobj={}
    tempobj['Name']=taskName;
    tempobj['Description']=description
    updateTask(tempobj)
    setTaskName('')
    setDescription('')
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="mb-2">Task name</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              onChange={handleChange}
              className="form-control "
              placeholder="Enter a task Name here "
            />
          </div>
          <div className="form-group mt-3">
            <label className="mt-3" >Description</label>
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
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
