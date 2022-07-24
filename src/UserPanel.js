
import {useState, useEffect} from 'react';
import {Button,Icon,Paper, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, IconButton} from '@mui/material';
import axios from 'axios';
import  {ShoppingCart} from '@mui/icons-material';

import orders from '../src/data/orders.json';
import './UserPanel.css'

export default ({user, setUser, setReady}) => {
    
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [selected, setSelected] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
    
            setUsers(res.data);
            
    
        })

    }, []);

    // AJAX

    const showOrder = (user) => {

        let temp = {};
        //arr = orders.get(user.id);
       {orders.map((item)=>{

        if(item.id == user.id){

            temp = {

                "name": user.name,
                "orders": item.orders,
                'email': user.email,
                'username': user.username,
                'phone': user.phone,
                'id': user.id

            }
        }

       })}

       
      
       setReady(true);
        setUser(temp);
    };

    const addUser = (event)=>{

        event.preventDefault();
        const clones = [ ...users];
        clones.push({
            'name': name,
            'orders': []
        });
        setUsers(clones);
        setName('');

    };

    const handleUserInput = (event) =>{
        setName(event.target.value);
    };


    return (
    
    <Paper className='user-panel' >

        <List className="card">
        {users.map((user) => {
            let _path = "https://robohash.org/"+user.id;
            return (
                <ListItem className="card-content" onClick={(event)=> showOrder(user)}>
               

             
                        
                    <ListItemAvatar>
                        <Avatar src={_path}></Avatar>
                    </ListItemAvatar>  
                    <ListItemText
                        primary={user.name}
                        secondary={user.email}
                    />
                    <Divider/>
               
                    
                    
                </ListItem>
            )
        })}
        </List>

    </Paper>);
}
