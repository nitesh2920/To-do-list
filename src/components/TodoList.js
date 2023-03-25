import React, { useState,useEffect } from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card'


const TodoList = () => {
    const [modal,setModal]=useState(false);
    const [taskList, setTaskList] =useState([])
    

    useEffect(()=>{
        let arr=localStorage.getItem("taskList")
        // let obj=JSON.parse(arr)
        if(arr){
            let obj=JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

//For delteing the task

    const deleteTask=(index)=>{
        let tempList=taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()

    }

    const updateListArray=(obj,index)=>{
        let tempList=taskList
        taskList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const toggle =()=>{
        setModal(!modal)
    }

    const saveTask=(taskobj)=>{
        let tempList=taskList
        tempList.push(taskobj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }
  return (
    <>
    <div className='header text-center d-flex flex-column justify-content-center align-items-center'>
      <h1>Todo List</h1>
      <button className="btn btn-primary" onClick={()=>setModal(true)}>Create Task</button>
    </div>

    <div className="d-flex flex-wrap justify-content-between align-items flex-wrap task-container">
        {taskList.map((obj ,index)=><Card taskobj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
    </div>
    <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
 </>
  )
}

export default TodoList