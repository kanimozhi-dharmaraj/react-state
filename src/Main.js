import React, {useState} from 'react'

const Main = () => {
    const[name,setName] = useState("React");
    const[arr,setUpdate] = useState([1,2,3]);
   const handleUpdate=(index)=>{
       const temp = arr.map((item,i)=>
            index===i? item*2 : item
        )
        setUpdate(temp);
    };
    
  return (
    <div>Main {name}
    <button onClick={()=>setName("Hooks")}>Update Name</button>
    {arr.map((item,index)=>(
        <div key="index"><p>{item}</p>
            <button onClick={()=> handleUpdate(index)}>Update</button>
        </div>
    ))}
    </div>
  )
}

export default Main