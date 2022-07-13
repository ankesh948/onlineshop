import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Edit() { 

  const { id } = useParams();
  const[product, setProduct] = useState({
    studentname:"",
    email:""
  })

  useEffect(()=>{
    async function getAllProduct(){
        try{
            const product = await axios.get(`http://localhost:3333/products/${id}`)
            setProduct(product.data);
        }
        catch(error){
            console.warn('something is wronge');
        }
    }
    getAllProduct();
}, [id])

function onTextFieldChange(e) {
    setProduct({
   ...product, [e.target.name]: e.target.value
  })
 }

async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.put(`http://localhost:3333/products/${id}`, product)
   alert('Student Data Updated...')
  } catch (error) {
   console.warn("Send -> Something is Wrong");
  }
 }

  return (
    <>
    <div className='main'>
     <Container className='pt-5'>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <h2 className="mb-4">Edit Student</h2>
                        <Form className='card p-3'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text"  placeholder="Id" id="id" value={product.id}  disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text"  placeholder="Title" autoComplete="title" id="title" value={product.title} name="title" onChange={e=>onTextFieldChange(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Description" id="description" autoComplete="description" value={product.description} name="description" onChange={e=>onTextFieldChange(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Price" id="price" autoComplete="price" value={product.price} name="price" onChange={e=>onTextFieldChange(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Image" id="image" autoComplete="image" value={product.image } name="image" onChange={e=>onTextFieldChange(e)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={e=>onFormSubmit(e)}>
                                Update
                            </Button>
                        </Form>
                    </Col>

                    <Col lg="8" className='m-auto'>
                    <Link to="/"><Button className="btn btn-success w-auto m-auto mt-4">Back To Home</Button></Link>
                    </Col>
                </Row>
      </Container>
      </div>
        </>
  )
}

export default Edit