import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from './Components/ContextProvider/Context';
import PrivateCmp from './Components/Privatecmp';


// function App() {

//   return (
// <ResumeState>
//   <div className="App">
//     <Navbar />
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/home" element={<Home />} />
//       <Route exact path="/about" element={<About />} />
//     </Routes>
//   </div>
// </ResumeState>
//   );
// }

// export default App;


function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/home");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true)
    }, 2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header />
        
              <ChakraProvider>
                <ResumeState>
                  <div className="App">
                    <Routes>
                      <Route element={<PrivateCmp/>}>
                      <Route exact path="/home" element={<Home />} />
                      <Route exact path="/about" element={<About />} />
                      <Route path="*" element={<Error />} />
                      </Route>
                      <Route path="/" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/dash" element={<Home />} />
                      <Route path="*" element={<Error />} />

                      
                    </Routes>
                  </div>
                </ResumeState>
              </ChakraProvider>
            

          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;
