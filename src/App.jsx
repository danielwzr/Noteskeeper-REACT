import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note"

function app(){
    return <div><Header /> <Note classname="note"/> <Footer /></div>;
}

export default app;
