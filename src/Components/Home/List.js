import React from 'react';
import { Container, Table, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'
import axios from 'axios'


function List() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getAllProducts() {
            try {
                const products = await axios.get('http://localhost:3333/products')
                setProduct(products.data);
            }
            catch (error) {
                console.warn('something is wronge');
            }
        }
        getAllProducts();
    })


    const deteleHandle = async id =>{
        await axios.delete('http://localhost:3333/products/'+id)
        alert('Deleted...')
    }

    return (
        <>
            <Container>
                <Row>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Images</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                product.map((value) => {
                                    return (

                                        
                                        <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td>{value.image}</td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.price}</td>
                                            <td><div className='d-flex justify-content-center pt-1 gap-4'>
                                                <Link to={`/view/${value.id}`} className='text-info'><FontAwesomeIcon icon={faEye} /></Link>
                                                <Link to={`/edit/${value.id}`} className='text-dark'><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                            <FontAwesomeIcon onClick={()=>deteleHandle(value.id)} className='text-danger' icon={faTrash} />
                                            </div>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>

        </>
    )
}

export default List