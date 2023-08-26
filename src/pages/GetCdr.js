import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import jwt from 'jwt-decode'

import 'bootstrap/dist/css/bootstrap.min.css';

const GetCdr = ( {token} ) => {

    let fd = new Date();
    fd.setDate(fd.getDate());
    let date = fd.toISOString().substring(0,10);
     
    const user = jwt(token);

    const [fromDate, setFromDate] = useState(date);
    const [toDate, setToDate] = useState(date);
    const [page, setPage] = useState(1)
    const [dataResult, setDataResult] = useState([]);

    let urlFromDate = `${fromDate} 00:00:00`
    let urlToDate = `${toDate} 23:59:59`



    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/v1/cdrs?page=${page}&from_date=${urlFromDate}&to_date=${urlToDate}&user_id=${user.account_id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setDataResult(data);
                console.log(data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    
    const handleFilterDate = async (e) => {
        e.preventDefault();
    
        // Construye la URL de la solicitud utilizando fromDate y toDate
        const urlFromDate = `${fromDate} 00:00:00`;
        const urlToDate = `${toDate} 23:59:59`;
        const url = `http://127.0.0.1:8000/api/v1/cdrs?page=${page}&from_date=${urlFromDate}&to_date=${urlToDate}&user_id=${user.account_id}`;
    
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            setDataResult(data);
            console.log(data);
        } catch (error) {
            console.log("error", error);
        }
    }
    
  
    return (
        <div>
            <Card style={{ width: '18rem', height: '17rem' }}>
            <Card.Body>
                <Card.Title>Filter Date</Card.Title>
                <Form onSubmit={handleFilterDate}>
                    <Form.Group className="mb-3" controlId="fromDate">
                        <Form.Label>From Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            defaultValue={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="toDate">
                        <Form.Label>To Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            defaultValue={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Card.Body>  
            </Card>
            <div className="row">
                        <div className="col-2">
                        </div>
                        <div className="col-6">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ani</th>
                                        <th>Destino</th>
                                        <th>Inicio</th>
                                        <th>Answer</th>
                                        <th>Fin</th>
                                        <th>Billsec</th>
                                        <th>Disposición</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataResult.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.ani}</td>
                                            <td>{item.destino}</td>
                                            <td>{item.inicio}</td>
                                            <td>{item.answer}</td>
                                            <td>{item.fin}</td>
                                            <td>{item.billsec}</td>
                                            <td>{item.disposicion}</td>
                                            <td>{item.descripcion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                    key={index}
                                    className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                                    >
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                    </li>
                                ))}
                                </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="col-2">
                        </div>
            </div>
        </div>
    );
};

export default GetCdr;