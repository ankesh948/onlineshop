import React from 'react';
import { Table, Row, Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';


function View() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        async function getAllStudent(){
            try{
                const product = await axios.get(`http://localhost:3333/products/${id}`)
                console.warn(product.data);
                setProduct(product.data);
            }
            catch(error){
                console.warn('something is wronge');
            }
        }
        getAllStudent();
    },[id])

    
    return (
        <>
        <div className='main'>
            <Container className='pt-5'>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>ID.</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.image}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price  }</td>
                            </tr>

                        </tbody>
                    </Table>

                   <Link to="/products"><Button className="btn btn-success w-auto m-auto mt-4">Back To Home</Button></Link>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default View