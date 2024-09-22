import { useEffect,useState } from "react";
export const Todos = () => {
    const [todos,setTodos]=useState([]);
    const [text,setText] = useState("");
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        getData();

    },[]);
    const getData=async () => {
        const data = await  fetch("http://localhost:8080/todos")
        .then((d) => d.json());
      
          setTodos(data);
          setLoading(false);
        };
      
        );
    
    };


