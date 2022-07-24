import Container from "@mui/material/Container";
import './OrderPanel.css';
import {styled} from '@mui/material/styles'
import { useEffect, useState } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {TextField, Paper, List, ListItem, Avatar, Divider, Card, CardContent, h2, Button, ListItemText} from "@mui/material";

    // custom css
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#612F44',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#612F44',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#612F44',
      },
      '&:hover fieldset': {
        borderColor: '#612F44',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#612F44',
      },
    },
  });
  
export default ({user, ready}) => {


   
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

  
    if(ready){

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
                            textAlign:"center",
                            color: "#612F44"
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
                        
                        <CssTextField type="text" onChange={handleUserInput} value={newOrder} className="standard-basic" label="Enter order" variant="standard"/>
                        <Button style={{marginLeft:"2px", color:"#E6B5C9", backgroundColor: "#612F44"}} variant="contained" startIcon={<AddCircleOutlinedIcon/>} onClick={getValue} className="btn-add" id="btn-add">
                            Add
                        </Button>
        
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
    else{

        return(
            <Paper className="order-panel" >

                <h1>Select a user.</h1>

            </Paper>
        )

    }
       
    
}