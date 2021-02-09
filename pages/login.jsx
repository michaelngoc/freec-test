import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//import styles from '../styles/Login.module.scss';

function Login() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const getUserApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/user', {
                method: 'POST',
                body: JSON.stringify(user),
            });
            const responseJson = await response.json();
            if (responseJson.length > 0) {
                sessionStorage.setItem("userFullname", responseJson[0].fullname);
                router.push('/');
            }
            console.log(sessionStorage.getItem("userFullname"));
        } catch (error) {
            console.log('Failed to fetch User detail: ', error);
        }
    };

    function myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        setUser({ ...user, [nam]: val });
    };

    function handleSubmit(e) {
        console.log(user);
        getUserApi();
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <title>FreeC Test - Login</title>
            </Head>

            <div className="section">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={6}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" name='username' onChange={myChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name='password' onChange={myChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;