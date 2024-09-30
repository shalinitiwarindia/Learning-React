import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export const UsersList = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data);
        });
    },[]);
    return (
   
