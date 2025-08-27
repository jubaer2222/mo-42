
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleBookMark = (blogg) =>{
    setBookmarked([...bookmarked, blogg]);
  }
  console.log(bookmarked);

  return (
    <>
     
     <Navbar></Navbar>
     
     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        <Blogs handleBookMark={handleBookMark}></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading time : 0</h1>
        <h1>bookmarked count : 0</h1>

        {
          bookmarked.map((marked)=> <p>{marked.title}</p>)
        }
      </div>
     </div>
      
    </>
  )
}

export default App
