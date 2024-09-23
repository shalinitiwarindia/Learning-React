import { useState } from "react"

export const Form = ()=>{
    const[formData,setFormData]=useState({
        username: "",
        age:"",
        email:"",
        address:"",
    });

    const handleChange = (e) => {
        const {  id,value}=e.target;
        setFormData({
            ...FormData,
            [id]:value,
        });
    };

    const handleSubmit = (e) => {
       e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            value={FormData.username}
            type="text"
            placeholder="enter username"
            id="username"/>
           
            
            <input 
            onChange={handleChange}
            value={FormData.age}
            type="number"
            placeholder="enter age"
            id="age"/>

             <input 
            onChange={handleChange}
            value={FormData.email}
            type="text"
            placeholder="enter email"
            id="email"/>

        <input 
            onChange={handleChange}
            value={FormData.address}
            type="text"
            placeholder="enter address"
            id="address"/>
            <input type="submit" value="Submit" />
        </form>
    )
}
