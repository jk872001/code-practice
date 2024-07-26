/* eslint-disable react/prop-types */
import { useState } from "react"

const SearchBar = ({handleSearchByTitle}) => {
    const [searchTitle,setSearchTitle] = useState("")
    const handleChange=(value)=>{
       setSearchTitle(value)
       if(value === ""){
        handleSearchByTitle("all")
       }
    }
  return (
    <div className="my-5 flex flex-col md:flex-row gap-3">
    <input placeholder="Search by Title"
    value={searchTitle}
    onChange={(e)=>handleChange(e.target.value)}
      className="md:w-1/3 w-full  px-2 py-1 border border-gray-400 text-left rounded-md"/>
    <button onClick={()=>handleSearchByTitle(searchTitle)} className="bg-[#444b79] text-white text-sm md:py-3 py-2 px-6 rounded-md">Search</button>
    </div>
  )
}

export default SearchBar