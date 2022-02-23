import {Form} from "react-bootstrap"
import{Row,Col,Container,Button} from "react-bootstrap"
import { useState } from "react"
import "./login.css"
import PropTypes from "prop-types"
async function loginUser (credentials) {
    return fetch("http://localhost:8181/Login",{
        method:'POST',
        header:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    }).then(data=>data.json())

}
export default function LoginPage ({setToken}) {
    const [username, setusername] = useState()
    const [password,setpassword]=useState()
    // const changeData=(e)=>{
    //     const {name,value}=e.target;
    //     setlogin({...login,[name]:value})
        
    //       }
          const addData=async e=>{
            e.preventDefault()
           const token=await loginUser({
              username,password
           });
           setToken(token);
          }
    return(
        <div id="container">
        <Container > 
  <Row>
      <div id="header">
   <img src="https://th.bing.com/th/id/OIP.T19yiW1DqxTw59kGQgT5AgAAAA?pid=ImgDet&rs=1" alt="" srcset="" />
   <span>DEC</span>
   </div>
  </Row>
  <Row id="r1">

  </Row>
  <Row>
    <Col xs={4}></Col>
    <Col xs={4}>
    <Form id="form">
        <Form.Label id="userlogin" size="lg">User Login</Form.Label>  
        <br></br>
        <Form.Label  id="smalltext" size="sm">Enter Username and Password to Login</Form.Label>         
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="text" placeholder="User Name"  onChange={e=>setusername(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
    
   
    <Form.Control type="password" placeholder="Password"  onChange={e=>setpassword(e.target.value)} />
    <br></br>
    <Button variant="warning" className="mb-3" id="button" onClick={addData}>LOGIN</Button>{' '}
  </Form.Group>
</Form>
    </Col>
    <Col xs={4}></Col>
  </Row>
</Container>
       
        </div>
    )
}
LoginPage.propTypes={
    setToken:PropTypes.func.isRequired
}