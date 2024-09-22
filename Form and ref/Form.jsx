import { useState } from "react"

export const Form = ()=>{
    const[formState,setFormState]=useState({
        username: "",
        age:"",
    });

    const handleChange = (e) => {
        const {  id,value}=e.target;
        setFormData({
            ...FormData,
            [id]:value,
        });
    };
    return (
        <form>
            <input 
            onChange={handleChange}
            type="text"
            placeholder="enter username"
            id="username"/>
            <input 
            onChange={handleChange}
            type="number"
            placeholder="enter age"
            id="age"/>
            <input type="submit" value="Submit" />
        </form>
    )
}
