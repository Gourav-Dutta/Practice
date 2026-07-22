import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Signup(){
    const [val, setVal] = useState();
    useEffect( ()=>{
        async function postData(){
        const response= await axios.post("http://localhost:8000/api/addUser");
        // const jsonResponse = await response.json;
        setVal(response.data);
        }
        postData();
    },[])


    return (
        <div>
            <h1>Hello</h1>
            {val?.msg}
        </div>
    )
}