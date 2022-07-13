import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import List from './List';
import axios from 'axios';
import { useState } from 'react';

function AddProducts() {

    const [getname, setName] = useState();
    const [getdes, setDes] = useState();
    const [getprice, setPrice] = useState();
    const [geticon, setIcon] = useState();

    const handleImage = (event) => {
        setIcon({
            value: event.target.files[0],
            URL: URL.createObjectURL(event.target.files[0]),
        });
    }
       
    async function onFormSubmit(event) {
        event.preventDefault()
        var product = {
            title: getname,
            description: getdes,
            price: getprice,
            image: geticon.value.name
        }
        console.log(product);
        try {
            await axios.post(`http://localhost:3333/products`, product)
        } catch (error) {
            console.log("Something is Wrong");
        }
    }

    return (
        <>
         <div className="main">
            <Container className='pt-5'>
                <Row>
                    <Col lg="5" className='card p-3 bg-light'>
                        <h2 className="mb-1">Add Product</h2>
                        <Form className='row w-100 p-3'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Name" name="title" onChange={(event) => setName(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Description" name="description" onChange={(event) => setDes(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Price" name="price" onChange={(event) => setPrice(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="file" placeholder="Product Imgae" name="image" onChange={(event) => handleImage(event)} />
                            </Form.Group>

                            <Button style={{ marginTop: "31px", height: "38px" }} variant="info" type="submit" onClick={event => onFormSubmit(event)}>
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col lg="7">
                        <List />
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default AddProducts