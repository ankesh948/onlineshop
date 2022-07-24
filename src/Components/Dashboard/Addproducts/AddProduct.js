import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import Sidebar from '../Inc/Sidebar';
import Topbar from '../Inc/Topbar';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';


function AddProducts() {
    const [getStatus, setStatus] = useState();
    const [previewImg, setPreviewImg] = useState();

    const [name, setName] = useState();
    const [description, setDes] = useState();
    const [price, setPrice] = useState();
    const [discountPercentage, setdiscountPercentage] = useState();
    const [category, setCategory] = useState();
    const [stock, setStock] = useState();
    const [brand, setBrand] = useState();
    const [rating, setRating] = useState();
    const [image, setImage] = useState([]);

    const imageHandle = (e) => {
        // if (e.target.files.length) {
        //     setImage({
        //         preview: URL.createObjectURL(e.target.files[0]),
        //         file: e.target.files[0],
        //     });
        // }
    }

    async function submitHandle(e) {
        e.preventDefault()
        
        // const fd = new FormData();
        // fd.append("file", image.file);
        
        var formData = {
            title: name,
            description: description,
            price: price,
            discountPercentage: discountPercentage,
            category: category,
            stock: stock,
            brand: brand,
            rating: rating,
            // thumbnail: fd.get('file')
        }

        await axios.post('http://localhost:8888/products',{formData})
        .then((result) => {
            console.log('result')
            console.log(result)
        })
        // setStatus(true)
    }

    if (getStatus) {
        return (
            <Navigate to='/products' />
        )
    }


    return (
        <>
            <div className='d-flex dashboard-inner'>
                <Sidebar />
                <div className='Dashboard-Content bg-light'>
                    <Topbar />

                    <Container>
                        <Row className='align-items-center py-4'>
                            <Col lg="6">
                                <h2 className="mb-1 fs-4">Add Product</h2>
                            </Col>
                            <Col lg="6">
                                <div className='d-flex gap-2 align-items-center justify-content-end'>
                                    <Link to={'/products'}><Button><i className='bx bx-left-arrow-alt lh-1' ></i> Back</Button></Link>

                                    <Button  onClick={submitHandle} className='' style={{ color: "white", height: "" }} variant="success" type="submit">
                                        Save
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12" className='customadd'>
                                <div className='card p-3  m-auto'>
                                    <Form className='w-100 p-3'>
                                       
                                    <FloatingLabel controlId="floatingInput" label="Product Title" className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Title" 
                                        name="title" 
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                    </FloatingLabel>


                                    <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                                    <Form.Control 
                                        as="textarea" 
                                        placeholder="Description" 
                                        name="description" 
                                        onChange={(e) => setDes(e.target.value)}
                                        style={{ height: '100px' }}
                                    />
                                    </FloatingLabel>


                                    <Row>
                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingInput" label="Price" className="mb-3 ">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Price" 
                                        name="price" 
                                        onChange={(e) => setPrice(e.target.value)} 
                                    />
                                    </FloatingLabel>
                                    </Col>
                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingInput" label="Discount Percentage" className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Discount Percentage" 
                                        name="discount-percentage"
                                        onChange={(e) => setdiscountPercentage(e.target.value)} 
                                    />
                                    </FloatingLabel>
                                    </Col>
                                    </Row>


                                    <Row>
                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingSelect" label="Categories">
                                        <Form.Select className="mb-3" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)} >
                                            <option value="Default">Select</option>
                                            <option value="Phone">Phone</option>
                                            <option value="Desktop">Desktop</option>
                                            <option value="Laptop">Laptop</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                    </Col>

                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingInput" label="Stock" className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Stock" 
                                        name="stock"
                                        onChange={(e) => setStock(e.target.value)} 
                                    />
                                    </FloatingLabel>
                                    </Col>
                                    </Row>


                                    <Row>
                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingSelect" label="Brands">
                                        <Form.Select className="mb-3" aria-label="Default select example" onChange={(e) => setBrand(e.target.value)} >
                                            <option value="Default">Select</option>
                                            <option value="Apple">Apple</option>
                                            <option value="Hp">Hp</option>
                                            <option value="Dell">Dell</option>
                                            <option value="OnePlus">OnePlus</option>
                                            <option value="Realme">Realme</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                    </Col>

                                    <Col lg="6">
                                    <FloatingLabel controlId="floatingInput" label="Ratings" className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Rating" 
                                        name="stock"
                                        onChange={(e) => setRating(e.target.value)} 
                                    />
                                    </FloatingLabel>
                                    </Col>
                                    </Row>



                                    <Form.Group controlId="formFile" className="mb-3 row align-items-center">
                                    <Col lg="2">
                                        <img src={previewImg} className="img-fluid rounded-3" />
                                        </Col>
                                    <Col lg="10">
                                        <Form.Label>Thumbnail Image</Form.Label>
                                        <Form.Control 
                                            type="file"
                                            name='file'
                                            onChange={(e) =>imageHandle(e)}
                                        />
                                        </Col>
                                    </Form.Group>

                                    <Button  onClick={submitHandle} className='btn px-4' style={{ color: "white"}} variant="success" type="submit">
                                        Save
                                    </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default AddProducts