import { useEffect,useState } from "react";
export const Todos = () => {
    const [todos,setTodos]=useState([]);
    const [text,setText] = useState("");
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        getData();

    },[]);
  
