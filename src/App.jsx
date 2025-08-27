
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount,setRedingCount] = useState(0);


  const handleBookMark = (blogg) =>{
    setBookmarked([...bookmarked, blogg]);
  }
  console.log(bookmarked);

  const handleMarkAsRead = (time,id)=>{
    setRedingCount(readingCount + time);
    handleRemoveFromBookmark(id)
  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookMark = bookmarked.filter((mark)=>mark.id !== id);
    setBookmarked(remainingBookMark)
  }
  

  return (
    <>
     
     <Navbar></Navbar>
     
     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        <Blogs 
        handleBookMark={handleBookMark}
        handleMarkAsRead={handleMarkAsRead}>
        </Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading time : {readingCount}</h1>
        <h1>bookmarked count : {bookmarked.length}</h1>

        {
          bookmarked.map((marked)=> <p className='bg-red-500 p-2 shadow text-white'>{marked.title}</p>)
        }
      </div>
     </div>
      
    </>
  )
}

export default App
