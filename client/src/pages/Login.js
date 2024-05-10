

import React, { useState, useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Layout/Spinner';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Form submit handler
    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const { data } = await axios.post("/users/login", values);
            message.success('Login Successful');
            setLoading(false);
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }));
            navigate('/');
        } catch (error) {
            setLoading(false);
            message.error('Something went wrong');
        }
    };

    // Prevent user from accessing if already logged in
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="login-page">
                {loading && <Spinner />}
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Expense Manager</h1> {/* Title */}
                    <Form.Item label="Email" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" />
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                        <Link to="/register">Not a user? Click Here to Register</Link>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;





