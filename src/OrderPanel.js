import Container from "@mui/material/Container";
import './OrderPanel.css';
import {Avatar, Divider, Card, CardContent, h2} from "@mui/material";
export default ({user}) => {
    
    let ctr = 0;
    let _path = "https://robohash.org/"+user.id;
    return ( 

    <Container className="order-panel" >
        <h2  style={{
            fontWeight:"bolder",
            fontSize:"3em"
        }}>Order Panel</h2>
        
        <Card className="card-info">
            <CardContent>
                <h2 style={{

                    fontWeight:"bolder",
                    fontSize:"2em"
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
                
            </CardContent>
        </Card>
         <Card className="card-order">
                <CardContent>
                     
                <h2 style={{
                    
                    fontWeight:"bolder",
                    fontSize:"2em",
                    textAlign:"left"
                }}>Items</h2>
                <Divider className = "my-div"/>   

        {user.orders.map((order) => {
            ctr+=1;
            return (
                
                <div class="my-div-order">
                    <h2 className="typo-title">{ctr}: </h2>
                    <h2 className="typo-item">{order}</h2>
                </div>
             )
            })}
          </CardContent>
            
        </Card>

    </Container>
    )
}