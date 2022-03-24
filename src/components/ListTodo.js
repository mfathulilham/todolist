import { useEffect, useState } from "react";
import { deleteTodo, getTodoList, postTodo, updateTodo } from "../store/actions/Todo";
import Icofont from 'react-icofont';
import {  useDispatch, useSelector } from "react-redux";
import ModalBase from "./Modal";

function ListTodo() {

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const todos = useSelector((state)=> state.todos)

    useEffect(() => {
      dispatch(getTodoList());
    }, []);
  
    const handleToggle = (todo) => {       
      if (show) setShow(false)
      else {
        if (todo.status === 0)
        setShow(todo)
      }
    }

    const handleDelete = async (id) => {
      await dispatch(deleteTodo(id))
      setShow(false)
    }

    const handleSubmit = async ({body, type}) => {
      if(type === 'post'){
        await dispatch(postTodo(body))
      }else{
        await dispatch(updateTodo(body))
      }

      setShow(false)
    }


    return(
      <div className='mt-3'>
          {todos.data?.map(todo=>(              
            <div onClick={() => { handleToggle(todo) }} key={todo.id} className=' mt-2 d-flex justify-content-between align-items-center bg-light py-3 ps-2 pe-3' style={{ borderLeft: "5px solid #7c69ef"}}>
              <div>
                  <h6 className='fw-bold text-wrap'>{todo.title}</h6>
                  <h6><small>{todo.periode}</small></h6>
              </div>
            { todo.status ===  1 ? 
                <Icofont icon="check" size='2' className='text-success'/>
            :
                <Icofont icon="clock-time" size='2' className='text-danger'/>
            }            
            </div>
          ))}
          <ModalBase handleSubmit={handleSubmit} handleDelete={handleDelete} show={show} todo={show} handleToggle={handleToggle} dataLength={todos.data?.length} />
      </div>
    )
  }

export default ListTodo;