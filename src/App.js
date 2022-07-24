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

    const [isReady, setReady] = useState(false);


    return (

       
        
        <div className="container">

        <div className='header'>
            <h1>My header</h1>    
        </div>    
        <div style={{display: "flex", flexDirection:"row", height: '90%', width:"100%", padding:"1rem"}}>

        <UserP className="user-container" user={selectedUser} setUser={setSelectedUser} setReady={setReady}></UserP>
        <OrderP className="order-container" user={selectedUser} ready={isReady}></OrderP>
        </div>

        </div>

    )

}


export default App2;
