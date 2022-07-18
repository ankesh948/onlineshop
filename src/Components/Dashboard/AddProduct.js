import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function AddProducts() {

    const [name, setName] = useState();
    const [description, setDes] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();

    // const [getProducts, setProducts] = useState([]);


    async function submitHandle(e) {
        e.preventDefault()
        var formData = {
            title: name,
            description: description,
            price: price,
            category: category
        }
        const result = await fetch('http://localhost:8888/products',).then(data => data.json())
        console.log(result)

        console.log(formData)
    }

    useEffect(() => {
        async function fetchNews() {
            fetch('http://localhost:8888/products')
                .then((responsive) => {
                    // console.warn(responsive)
                    // setProducts(responsive)
                })
        }
        fetchNews()
    })


    // console.log(setProducts )

    return (
        <>
            <div className='d-flex dashboard-inner'>
                <Sidebar />
                <div className='Dashboard-Content'>
                    <Topbar />
                    <Container className="mt-5">
                        <Row>
                            <Col lg="12" className='customadd'>
                                <div className='card p-3 bg-light  m-auto'>
                                    <h2 className="mb-1 fs-4">Add Product</h2>
                                    <Form className='row w-100 p-3'>
                                        <Form.Group className="mb-3 col-lg-2">
                                            <Form.Control type="text" placeholder="Title" name="title" onChange={(e) => setName(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3 col-lg-3">
                                            <Form.Control type="text" placeholder="Description" name="description" onChange={(e) => setDes(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3 col-lg-1">
                                            <Form.Control type="text" placeholder="Price" name="price" onChange={(e) => setPrice(e.target.value)} />
                                        </Form.Group>

                                        <Form.Select className="mb-3  mx-2 col-lg-3" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)} >
                                            <option>Categies</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>

                                        <Button onClick={submitHandle} className='col-lg-1' style={{ color: "white", height: "36px" }} variant="dark" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>

                            </Col>
                        </Row>

                        <Row>
                            {/* {getProducts.map((value) => {

                            })
                            } */}
                        </Row>

                    </Container>
                </div>
            </div>
        </>
    )
}

export default AddProducts