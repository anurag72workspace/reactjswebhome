import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";


const App = () =>{
    return (
        <>
            <Navbar />   
            <Body /> 
            <Footer />                
        </>
    );
};
export default App;
