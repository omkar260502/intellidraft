// import React from "react";
// import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';


// ReactDom.render(
//     <>
//         <App/>
//     </>,
//     document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
