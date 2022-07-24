import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Sidebar from '../Inc/Sidebar';
import Topbar from '../Inc/Topbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import _ from 'lodash';



function ProductsList() {

    const [getProducts, setProducts] = useState([]);

    /*Api Call*/
    useEffect(() => {
        async function productDataget() {
            const responsive = await fetch('http://localhost:8888/products')
            setProducts(await responsive.json())
        }
        productDataget();
    })

    /*Delete Function*/
    async function deteleHandle(id){

        if (window.confirm('Are you sure you want to delete this item?') == true) {
            await axios.delete(`http://localhost:8888/products/${id}`)
             console.warn('Deleted...')
          }
    }

    /*DataTable Columns*/
    const columns = [
        {
            name: "Id",
            selector:row =>  row.id,
            width: "4rem"
        },
        {
            name: "Title",
            selector: row => row.title,
            width: "12rem"
        },

        {
            name: "Description",
            selector: row => row.description,
            width: "25rem"
        },

        {
            name: "Price",
            cell: row =>(
                <>
                <div className='d-flex gap-2'> 
                <span className='text-decoration-line-through text-danger'>${row.price}</span>
                <span className='text-decoration-line-through1 text-success'>${row.price-row.price/100*12}</span>
                </div>
                </>
            )
        },

        {
            name: "Category",
            selector: row => row.category
        },
        {
            name: "Actions",
            selector: row => row.id,
            cell: row => (
                <div className='d-flex justify-content-center pt-1 gap-2'>
                <Link to={`/edit/${row.id}`} className='text-dark card p-1 cursor-pointer'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <FontAwesomeIcon onClick={()=>deteleHandle(row.id)} className='card cursor-pointer p-1 text-danger text-hover' icon={faTrash} />
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]



    const [selectedRows, setSelectedRows] = React.useState([]);
	const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);


        const handleDelete = async () => {
                let delFetch = selectedRows.map(eleid => {
                return fetch(`http://localhost:8888/products/${eleid.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                });
                });
                console.log(delFetch)
            // console.warn(await Promise.all([delFetch]))
        }


    return (
        <>
            <div className='d-flex dashboard-inner'>
                <Sidebar />
                <div className='Dashboard-Content bg-light'>
                    <Topbar />

                    <Container >
                        <Row className='align-items-center py-4'>
                            <Col lg="6">
                            <div className='d-flex justify-content-start gap-2'>
                                <h2>Products List</h2>
                            </div>
                            </Col>
                            <Col lg="6">
                                <div className='d-flex justify-content-end gap-2'>
                                    <Button onClick={handleDelete} variant="danger"><i className='bx bx-plus'></i> Delete</Button>
                                    <Link to={'/addproducts'}><Button variant="info" className='text-white'><i className='bx bx-plus'></i> Add Product</Button></Link>
                                </div>
                            </Col>
                        </Row>


                       <Row>
                       <DataTable 
                            columns={columns} 
                            data={getProducts} 
                            selectableRows
                            onSelectedRowsChange={handleRowSelected}
                            pagination 
                            responsive
                            highlightOnHover
                            
                        />
                       </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}


export default ProductsList;
