import Menus from '../Menus';
import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import styles from './Header.module.scss';
import Head from 'next/head';

function Header(props) {
    const [menusList, setMenusList] = useState([]);

    const getMenusApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/menus', { method: 'GET' });
            const responseJson = await response.json();
            setMenusList(responseJson);
        } catch (error) {
            console.log('Failed to fetch Menus list: ', error);
        }
    };

    useEffect(() => {
        getMenusApi();
    }, []);

    return (
        <div>
            <Head>
                <title>FreeC Test</title>
                <link rel="icon" href="/favicon.ico" />

                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossorigin></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin></script>
            </Head>
            <Container>
                <div className={styles.headerLogo + " d-flex justify-content-center"}>
                    <a href="/"><Image src="/images/freec-logo-blue.png" roundedCircle /></a>
                </div>
            </Container>
            <Menus menusList={menusList} />
        </div>
    );
}

export default Header;