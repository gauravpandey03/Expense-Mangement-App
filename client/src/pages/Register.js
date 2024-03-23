import React,{useState , useEffect} from 'react'
//import Layout from './../components/Layout/Layout';
import {Form ,Input,message} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Layout/Spinner';

const Register=()=>{
    const  navigate = useNavigate();
    const [loading , setLoading]=useState(false);

    //form submit 
    const submitHandler=async(values)=>{
       // console.log(values)
           try{

            setLoading(true)
            await axios.post("/users/register",values);
           message.success('Registeration Successful');
           setLoading(false);
           navigate('/login');
           }catch(error){
            setLoading(false);
            message.error('Something Went Wrong ');
           }
       
    };
// prevent from user if already register..
useEffect(()=>{
    if(localStorage.getItem('user')){
        navigate('/')
    }
},[navigate]);

    return (
        <>
     <div className= "register-page ">
        {loading && <Spinner/>}
       <Form layout='vertical'  onFinish={submitHandler}>
        <h1>Register Form </h1>
        <Form.Item label="Name" name="name">
            <Input/>
            </Form.Item>
        
            <Form.Item label="Email" name="email">
            <Input type="email"/>
            </Form.Item>

            <Form.Item label="Password" name="password">
            <Input type="password"/>
            </Form.Item>

            <div  className='d-flex justify-content-between'>
    <Link to ="/login">Already Register ? Click Here to Login </Link>
    <button className='btn btn-primary'>Register</button>
            </div>

       </Form>
        </div>

        </> 
    );
};


export default Register;