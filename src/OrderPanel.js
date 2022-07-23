import Container from "@mui/material/Container";
import './OrderPanel.css';
import {Divider, Card, CardContent, Typography} from "@mui/material";
export default ({user}) => {

    return ( 
    <Container className="order-panel" >
        <Typography  style={{

            fontWeight:"bolder",
            fontSize:"3em"
        }}>User Orders</Typography>
        <Divider className = "my-div"/>
        <Card className="card-info">
            <CardContent>
                <Typography style={{

                    fontWeight:"bolder",
                    fontSize:"2em"
                }}>User Information</Typography>
                <Typography stlye={{
                    fontSize:"1.5em"

                    

                }}>Name: <span style={{fontWeight:"lighter"}}>{user.name}</span></Typography>
            </CardContent>
        </Card>
         <Card>
                <CardContent>
                   
        {user.orders.map((order) => {
            return (
                
                <div class="my-div-order">
                <Typography className="typo-title">Item: </Typography>
                <Typography className="typo-item">{order}</Typography>
                </div>
             )
            })}
          </CardContent>
            
        </Card>
    </Container>
    )
}