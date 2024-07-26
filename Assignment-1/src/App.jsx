import { Link, Outlet } from "react-router-dom"
import { chaiImg } from "./utils/data"


function App() {

  return (
    <>
    <div className="flex justify-between mx-14 text-center py-5 flex-col gap-3 md:flex-row">
    <Link  to='/otp-form' className="bg-[#3F72AF] p-2 text-white rounded-md">OTP Form</Link>
    <Link to="/course-list" className="bg-[#3F72AF] p-2 text-white rounded-md">Drag and Drop Cards</Link>
    <Link to="/batches" className="bg-[#3F72AF] p-2 text-white rounded-md">Data Table</Link>
    </div>
    
    <Outlet/>
    <Link className="hidden md:block md:fixed right-5 bottom-5" to="https://courses.chaicode.com/" target="blank">
    <img   src={chaiImg}/>
    </Link>
    </>
  )
}

export default App
