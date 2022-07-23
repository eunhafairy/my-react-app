import UserP from './UserPanel.js';
import OrderP from './OrderPanel.js';
import './App.css';
import {Card, Container} from '@mui/material';
import {useState} from 'react';


function App2(){

    const [selectedUser, setSelectedUser] = useState({
        'name' : '',
        'email': '',
        'username': '',
        'phone': '',
        'id': '',
        'orders' : []
    });


    return (

        
        <div className="container">

            <UserP className="user-container" user={selectedUser} setUser={setSelectedUser}></UserP>
            <OrderP className="order-container" user={selectedUser}></OrderP>

        </div>

    )

}


export default App2;
