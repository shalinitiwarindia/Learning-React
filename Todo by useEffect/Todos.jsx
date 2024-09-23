import { useEffect,useState } from "react";
export const Todos = () => {
    const [todos,setTodos]=useState([]);
    console.log("todos", todos)
    const [text,setText] = useState("");
    const [loading,setLoading]=useState(true);
    const [page,setPage]= useState(1);
    useEffect(()=>{
        getData();

      return () => {
        console.log("unmount todos done");
      };

    },[page]);
    const getData=async () => {
        const data = await  fetch(
            `http://localhost:3000/todos?_page=${page}&_limit=2`)
        .then((d) => d.json());
            console.log(data)
          setTodos(data);
          setLoading(false);
        };
        return loading ? ("Loading....." ):(
            <div>
                <input 
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Enter todo" />
                <button 
                onClick={()=>{
                    const payload ={
                      title:text,
                      status:false,  
                    };
                    fetch("http://localhost:3000/todos",{
                        method:"POST",
                        headers:{
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    }).then(()=>{
                       getData(); 
                    });
                }}>Add todo</button>
                {todos.map((t)=>(
                    <div key={t.id}>
                        {t.id}.{t.title}</div>
                ))}
                <button onClick={
                    () => {
                        setPage(page - 1);
                    }
                }>prev</button>
                <button onClick={()=>{
                    setPage(page + 1);
                }}>Next</button>
            </div>
        );
    
    };




