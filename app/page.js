"use client"
import React, { useEffect, useState } from "react";
const page = ()  =>{
const [title , settitle] = useState("");
const [desc , setdesce] = useState("");
const [MainTask, setMainTask] = useState([]);


const sumbitHandler=(e) =>{
e.preventDefault()
setMainTask([...MainTask,{title,desc}])
settitle("")
setdesce("")
console.log(MainTask)
}
const deleteHandler = (i)=>{
  let copytask = [...MainTask]
  copytask.splice(i,1)
  setMainTask(copytask)

}
let renderTask =<h2>No Task Available</h2>
if(MainTask.length>0){
      renderTask = MainTask.map((t,i) =>{
  return(
    
    <li key={i} className="flex items-center justify-between mb-6   ">
        <div className=" flex items-center justify-between mb-5 w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-xl font-semibold">{t.desc}</h6>
    </div>
    <button
    onClick={()=>{
      deleteHandler(i)
    }}
     className=" bg-red-400 text-white px-5 py-2 border-5 rounded ">Delete</button>
    </li>
  
  );
});
    }

  return (
<div>
 <>
 <h1 className="bg-black text-white  p-5 text-5xl font-bold text-center"> Sanjeet's Todo List</h1>
 <form onSubmit={sumbitHandler}>
  <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder="Enter Task here"
  value={title}
  onChange={(e)=>{
settitle(e.target.value)
  }}
  >
    
  </input>
  <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" placeholder="Enter Description here"
  value={desc}
  onChange={(e)=>{
    setdesce(e.target.value)
  }}
  >
    
  </input>
  <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">Add Task</button>
 </form>
 <hr/>

<div className="p-8 bg-slate-200">
<ul>
  {renderTask}
</ul>
</div>
 </>
</div>
  )
}
export default page