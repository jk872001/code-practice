import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import TableComponent from "../components/TableComponent"
import { batches } from "../utils/data"
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";

const DataTable = () => {
    const [batchList] = useState(batches);
    const [filterBatchList, setFilterBatchList] = useState(batches);
    const [rowsPerPage,setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

   
    

   useEffect(()=>{
       let initial = batchList.slice(0,rowsPerPage)
       setFilterBatchList(initial)
   },[batchList,rowsPerPage])

    const handleSearchByTitle=(title)=>{
        if(title === "all"){
            setFilterBatchList(batches)
            return;
        }
        if(!title) return
        let titleLowerCase = title.toLowerCase()
        let searchFilter = batchList.filter((batch)=> (batch.title.titleName).toLowerCase().includes(titleLowerCase))
        setFilterBatchList(searchFilter)
     }

     const handleRowsPerPage=(page)=>{
        setRowsPerPage(page)
        const filterBatch = batchList.slice(0,page)
        setFilterBatchList(filterBatch)
     }
     const handleRightArrow=()=>{
        setCurrentPage(2)

        const filterBatch = [...batchList.slice(rowsPerPage,rowsPerPage+5)]
        console.log(filterBatch);
        setFilterBatchList(filterBatch)
     }
     const handleDownArrow=()=>{

        const filterBatch = batchList.slice(rowsPerPage,rowsPerPage)
        console.log(filterBatch);
        setFilterBatchList(filterBatch)
     }
  return (
   
    <div className="bg-[#e2bbe9] w-full min-h-screen p-3 md:p-5">
      <h1 className="text-center text-[#444b79] text-4xl md:text-5xl font-bold p-5 text-shadow">
        Chai aur Code
      </h1>
      <div className="md:w-[75%] w-full m-auto bg-white p-7 shadow rounded-md">
        <h1 className="text-3xl font-bold">Batches</h1>
        <p className="text-md text-gray-400 mt-3">
        Create learner’s batch and share information at the same time.
        </p>
       <SearchBar handleSearchByTitle={handleSearchByTitle}/>
        <TableComponent filterBatchList={filterBatchList} />
       
          <div className="flex md:justify-end justify-center md:m-7 my-3 md:gap-3 gap-1 ">
          <p>Rows per page</p>
          <select className="border border-black md:p-1 rounded-md cursor-pointer" onChange={(e)=>handleRowsPerPage(e.target.value)} >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          
          </select>
          <button onClick={handleDownArrow}><LeftArrow/></button>
          <button onClick={handleRightArrow}><RightArrow/></button>
          </div>
            
         
      </div>
    </div>
 
  )
}

export default DataTable