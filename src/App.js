import React from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
const items =[
    {
        title: "react js",
        component: "cours react js you will succeed "
    },
    {
        title: "Modern react js",
        component: "Modern react js you will succeed "
    },
    {
        title: "React js with redux",
        component: "React js with redux you will succeed "
    },
];
export default() =>{
    return <div>
        <Accordian items ={items} />
        <Search />
    
    </div>
}