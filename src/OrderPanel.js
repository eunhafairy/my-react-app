import Container from "@mui/material/Container";
import './OrderPanel.css';
import { useEffect, useState } from "react";
import {TextField, Paper, List, ListItem, Avatar, Divider, Card, CardContent, h2, Button, ListItemText} from "@mui/material";
export default ({user}) => {
    
    let ctr = 0;
    let _path = "https://robohash.org/"+user.id;
    const [newOrder, setNewOrder] = useState('');
   
    
   
    const handleUserInput = (event) =>{
        setNewOrder(event.target.value);
    };

    
    const getValue = ()=>{

        user.orders.push(newOrder);
        setNewOrder('');

    }

    return ( 

    <Paper className="order-panel" >
        <h2  style={{
            fontWeight:"bolder",
            fontSize:"3em"
        }}>Order Panel</h2>

        
        
        <div className="card-info">

                <h2 style={{

                    fontWeight:"bolder",
                    fontSize:"2em",
                    textAlign:"center"
                }}>User Information</h2>
                <Divider className = "my-div"/>
                
                <Avatar className="avatar" src={_path}></Avatar>

                <div className="my-div-order">
                    <h2 className="typo-title">Full Name:</h2>
                    <h2 className="typo-item"><span style={{fontWeight:"bolder"}}>{user.name}</span></h2>
                </div>
                <div className="my-div-order">
                    <h2 className="typo-title">Username:</h2>
                     <h2 className="typo-item"><span style={{fontWeight:"bolder"}}>{user.username}</span></h2>
                </div>

                <div className="my-div-order">
                    <h2 className="typo-title">Email:</h2>
                    <h2 className="typo-item"><span style={{fontWeight:"bolder"}}>{user.email}</span></h2>
                </div>

                <div className="my-div-order">
                    <h2 className="typo-title">Phone:</h2>
                    <h2 className="typo-item"><span style={{fontWeight:"bolder"}}>{user.phone}</span></h2>
                </div>
                
                <Divider className="my-div" style={{marginTop:".3rem"}}></Divider>
            <div className="card-add-content">
                
                <TextField onChange={handleUserInput} value={newOrder} className="standard-basic" label="Enter order" variant="standard" />
                <Button onClick={getValue} className="btn-add" id="btn-add">Add Order</Button>

            </div>
            
        </div>


                    


         <List className="card-order">
                
            <h2 style={{
                fontWeight:"bolder",
                fontSize:"2em"
            }}>Items</h2>
            <Divider className = "my-div"/>   
                

        {user.orders.map((order) => {
            ctr+=1;
            return (
                
                <ListItem>     
                    
                    <ListItemText>Item {ctr}: {order}</ListItemText>
                </ListItem>
            
             )
            })}
            
        </List>
    </Paper>
    )
}