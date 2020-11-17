import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';

ReactDOM.render(
    <StrictMode>
        <Routes />
    </StrictMode>,
    document.querySelector('#app'),
);
