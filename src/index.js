import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import Context from './Components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Context>
      <Router>
          <App />
      </Router>
   </Context>
  </React.StrictMode>
  
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Context>   
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>

//   </Context>

// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <Context>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Context>
//     </ChakraProvider>
//   </React.StrictMode>
// );

