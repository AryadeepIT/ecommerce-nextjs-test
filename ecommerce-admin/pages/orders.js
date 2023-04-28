import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage(){
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/api/orders').then(response => {
            setOrders(response.data);
        } )

    }, []);
    return (
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.length > 0 && orders.map(order => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <td>{(new Date(order.createdAt)).toLocaleString()} </td>
                            
                            <td><strong>Name :</strong> {order.name} <br />
                                <strong>Email :</strong> {order.email} <br />
                                <strong>Phone Number :</strong> {order.phoneNumber} <br />
                                <strong>City :</strong> {order.city} <br />
                                <strong>Postal Code :</strong> {order.postalCode} <br />
                                <strong>Street Address :</strong> {order.streetAddress} <br />
                                <strong>Landmark :</strong> {order.landmark} <br />
                                <strong>Country :</strong> {order.country} <br />

                            
                            </td>
                            <td>
                                {order.line_items.map(l => (
                                    <>
                                        {l.price_data?.product_data.name} x {l.quantity}<br />

                                    </>
                                ))}
                            </td>
                            <td 
                                className={order.paid ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                {order.paid ? 'YES' : 'NO'}
                            </td>
                            
                        </tr>
                    )) }

                </tbody>
            </table>
        </Layout>
    );
}