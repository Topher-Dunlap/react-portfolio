import React from 'react';
import {ChakraProvider} from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </BrowserRouter>
    ,

    document.getElementById('root'));



