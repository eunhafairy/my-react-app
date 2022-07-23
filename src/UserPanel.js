
import {useState, useEffect} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import axios from 'axios';
import orders from '../src/data/orders.json';
import './UserPanel.css'

export default ({user, setUser}) => {
    
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
    
            setUsers(res.data)
    
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
    
    <div className='user-panel'>

        {users.map((user) => {
            let _path = "https://robohash.org/"+user.id;
            return (
            <Card className="card" style={{backgroundColor:"aqua"}}>
                <CardContent className="card-content">
                    <img src={_path}></img>

                    <div className="info">
                        <Typography style={{

                            fontSize: "2em",
                            fontWeight: "bolder"

                        }}>
                            {user.name}
                        </Typography>
                        <Typography>
                            {user.email}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button onClick={(event)=> showOrder(user)}>Show Order</Button>
                </CardActions>
            </Card>
            )
        })}

    </div>);
}
