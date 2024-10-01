import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const useQuery =(q) => {
    const param = new URLSearchParams(window.location.search);
    return param.get(q);
}
export const UsersList = () => {
    const [users,setUsers]=useState([]);
    console.log(useQuery("page"));
    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data);
        });
    },[]);
    return (
    <div>
        {users.map((user)=>(
            <p key={user.id}>
                <Link to={`/users/${user.id}`}>
                {user.id}.{user.first_name}
                </Link>

            </p>
        ))}
    </div>
    );
};
