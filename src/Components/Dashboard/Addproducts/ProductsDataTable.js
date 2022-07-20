import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

function ProductsDataTable() {

    const [getProducts, setProducts] = useState([]);

    useEffect(()=>{
        async function productDataget() {
            const responsive = await fetch('http://localhost:8888/products')
                    setProducts(await responsive.json())
        }
        productDataget();
    })

    const columns = [
        {
            name: "Id",
            selector: row => row.id
        },
        {
            name: "Title",
            selector: row => row.title
        },

        {
            name: "Description",
            selector: row => row.description
        },

        {
            name: "Price",
            selector: row => row.price
        },

        {
            name: "Category",
            selector: row => row.category
        },
        {
            name: "Actions",
            cell: () => (
                <div className='d-flex justify-content-center pt-1 gap-4'>
                    <Link to={`/view/${value.id}`} className='text-info'><FontAwesomeIcon icon={faEye} /></Link>
                    <Link to={`/edit/${value.id}`} className='text-dark'><FontAwesomeIcon icon={faPenToSquare} /></Link>
                    <FontAwesomeIcon onClick={() => deteleHandle(value.id)} className='text-danger' icon={faTrash} />
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]


  return (
    <>
        <DataTable columns={columns} data={getProducts} pagination highlightOnHover/>
    </>
  )
}

export default ProductsDataTable