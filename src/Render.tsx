import Add from "./Add";
import axios from 'axios';
import { useEffect, useState } from "react";
import Show from "./Show";

function Render() {
const [show,setShow]= useState()
var errmess = "Không có dữ liệu";


useEffect(() => {
    axios.get('https://6426e0f4556bad2a5b5a5611.mockapi.io/prj/Todolist_tc').then((res)=>setShow(res.data))
}, [])

console.log(show)
return(
    <div>
        <Show data={show}/>
    </div>
)


}


export default Render;