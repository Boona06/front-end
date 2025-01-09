"use client"
import { useEffect, useState } from "react";


export default function Home() {
  const [getData , setGetData] = useState([])

  async function getJson() {
    const get = await fetch(process.env.NEXT_PUBLIC_PORT)
    const res = await get.json()
    console.log(res)
    setGetData(res)
  }
  useEffect(() => {
    getJson();
  },[])
  return (
   <div>
     {getData.map((data) => (
      <div className=" p-2" key={data.id}> {data.name} {data.age}
        <button className="p-1 ">Create</button> 
        <button className="p-1">Edit</button>
        <button className="p-1">Delete</button></div>) 
      )}
   </div>
  );
}
