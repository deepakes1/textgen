
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Images from './components/Images'
import Error from './components/Error'
import { Link } from 'react-router-dom'
function App() {
  
  return (
    <>
      {/* navbar */}
      <div className="flex gap-2 justify-between px-3 py-2 w-[70vw] mx-auto  items-center">
        
        <img src= "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJvYm90fGVufDB8MHwwfHx8MA%3D%3D" alt="" className='h-10 w-10  lg:h-14 lg:w-14 object-cover rounded-full' />
        <div className="flex gap-9 font-medium font-sans">
          <Link to = "/" >Home</Link>
          <Link to = "/images">Images</Link>
        </div>

      </div>





    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/images' element = {<Images/>}/>
       <Route path='*' element = {<Error/>}/>
      
    </Routes>
    </>
  )
}

export default App
