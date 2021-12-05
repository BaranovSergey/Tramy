import React, {useEffect} from 'react';
import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MyRoutes from "./routes/Routes";


function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <MyRoutes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
