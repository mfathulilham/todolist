import React from 'react'
import Footer from "./Footer"
import ButtonBase from './Button';
import ListTodo from './ListTodo';
import { useState } from 'react';
import { Col, Row,  Container } from 'react-bootstrap';
import ModalBase from "./Modal";
import { useDispatch } from 'react-redux';
import { postTodo, updateTodo } from '../store/actions/Todo';

function Main() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleToggle = () => setShow(!show);


  const handleSubmit = ({body, type}) => {
    if(type === 'post'){
       dispatch(postTodo(body))
    }else{
       dispatch(updateTodo(body))
    }

    setShow(false)
  }
  
  return (
    <Container>
        <Row className='justify-content-md-center px-3 py-4'>
          <Col md="5" style={{ border: "1px solid gray", borderRadius: "5px" }} className='px-3 py-4'>
            <div className='d-flex justify-content-between'>
              <h3>Todo List APP</h3>
              <ButtonBase variant="primary" handleToggle={handleToggle} >
                Add list
              </ButtonBase>
            </div>          
            <ListTodo />
            <Footer />
          </Col>          
        </Row>
        <ModalBase handleSubmit={handleSubmit} show={show} handleToggle={handleToggle} />
    </Container>
  )
}

export default Main