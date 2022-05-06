import { useEffect, useState } from "react";
import { Input } from "./Input";

export const ShowBooks = ()=>{

    const [textShow , setTextShow] = useState([])

    async function showSearch() {
        const url = `https://ideakartitems.herokuapp.com/?t=${textShow}`;
        try {
          const book = await fetch(url);
          const allData = await book.json();
          
        } catch (er) {
          console.log(er);
        }
      }
      const showText = (value)=>{
        setTextShow(value)
      }
      useEffect(()=>{
        showSearch()
      },[])
      
return <div>
    {/* <Input getText={showText}/> */}
    <h1>hello</h1>
</div>
}