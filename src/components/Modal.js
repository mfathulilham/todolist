import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ButtonBase from "./Button";

export default function ModalBase({show, handleToggle, handleSubmit, handleDelete, todo}) {
  const [form, setForm] = useState({
    title:'',
    description:'',
    periode:'',
    status:0
  })

  const handleChangeForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const deleteData = () => {
    handleDelete(form.id)
  }

  const submitData = () => {
    const body = {
      title: form.title,
      description: form.description,
      status: form.status,
      periode: `${form.tanggal} ${form.jam}`
    }
    let type = 'post'
    if(form.id) {
      type = 'update'
      body.id = form.id
    }else{
      body.id = Date.now()
    }

    handleSubmit({body, type})
  }


    useEffect(()=>{
      if(todo){
        const data = {...todo}
        data.tanggal = todo.periode?.split(' ')[0]
        data.jam = todo.periode?.split(' ')[1]
        console.log(data)
        setForm(data)
      }
    },[todo] )
  
    return (
      <>        
        <Modal show={show} onHide={handleToggle}>
          <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input value={form.title} onChange={handleChangeForm} name='title' type="text" class="form-control" id="title" placeholder="Add title"/>
              </div>
              <div class="mb-3">
                  <label for="desc" class="form-label">Description</label>
                  <input value={form.description} name='description' onChange={handleChangeForm} type="text" class="form-control" id="desc" placeholder="Add description"/>
              </div>
              <div class="mb-3">
                  <label for="date" class="form-label">Date</label>
                  <input  data-date-format="YYYY MMMM DD" name='tanggal'  onChange={handleChangeForm} value={form.tanggal} type="date" class="form-control" id="date"/>
              </div>
              <div class="mb-3">
                  <label for="time" class="form-label">Time</label>
                  <input  onChange={handleChangeForm} name='jam' value={form.jam} type="time" class="form-control" id="time"/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>            
            <ButtonBase variant="secondary" handleToggle={handleToggle} >
              Close
            </ButtonBase>
            <ButtonBase variant="primary" handleToggle={submitData} >
              Save
            </ButtonBase>
            <ButtonBase variant="danger" handleToggle={deleteData} >
              Delete
            </ButtonBase>
          </Modal.Footer>
        </Modal>
      </>
    );
  }