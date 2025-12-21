import { useState,useEffect } from 'react';
import Datatable from 'react-data-table-component';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './index.css'
function Admin(){
    const [data,setData] = useState([]);
    const columns=[
        {
            name:"ID",
            selector:row=>row._id,
            sortable:true
        },
        {
            name:"category",
            selector:row=>row.category,
            sortable:true
        },
        {
            name:"type",
            selector:row=>row.type,
            sortable:true
        },
        {
            name:"brand",
            selector:row=>row.brand,
            sortable:true
        },
        {
            name:"price",
            selector:row=>row.price,
            sortable:true
        },
        {
            name:"color",
            selector:row=>row.color,
            sortable:true
        },
        {
            name:"stock",
            selector:row=>Object.entries(row.stock)
            .map(([size, qty]) => `${size.toUpperCase()}: ${qty}`)
            .join(' | '),
            sortable:true
        },
        {
            name:"offer",
            selector:row=>row.offer+'%',
            sortable:true
        },
        {
            name:"image_url",
            // selector:row=>row.image_url,
            sortable:true,
            cell: row => (
            <a href={row.image_url} target="_blank" rel="noopener noreferrer">
                <img
                src={row.image_url}
                alt="preview"
                width="60"
                height="60"
                />
            </a>
            )
        },
        {
            name:"Action",
            selector: row => (
            <>
                <FaEdit className='edit-icon'/>
                <FaTrash className='delete-icon'/>
            </>
            )
        },
    ]
    const customStyles = {
        header: {
            style: {
            minHeight: '56px',
            },
        },
        headRow: {
            style: {
            backgroundColor: '#f8f9fa',
            borderBottomWidth: '2px',
            },
        },
        headCells: {
            style: {
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: '#495057',
            },
        },
        rows: {
            style: {
            minHeight: '56px',
            fontSize: '14px',
            '&:hover': {
                backgroundColor: '#f1f3f5',
            },
            },
        },
        cells: {
            style: {
            paddingTop: '12px',
            paddingBottom: '12px',
            },
        },
    };
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((err)=>
            console.log(err)
        )
    },[])
    return (
        <div>
            <button className='btn btn-primary'>Add Product</button>
            <Datatable
                title="Admin"
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
            />
        </div>
    )
}

export default Admin