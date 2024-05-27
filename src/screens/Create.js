  import React,{useState} from 'react'
  import { useNavigate } from "react-router-dom"
  export default function Create() {
    // navigation use
    const navigate = useNavigate();
    // hooks for inputs
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")
    const [story,setStory] = useState("")
    // // onChange function for inputs
    // const onChange = (e)=>{

    // }
    // function to handle push
    const handlePush = ()=>{
      if(title.length === 0){
        alert("You have to fill all fields")
      }
      else{
        setTitle(title)
      navigate("/Home")
      }
    }
    return (
      <div className='create'>
        <img className='create-img' src='/pics/back-img.jpeg' alt='img'></img>
        <div className='sec-child'>
          <input className='title' type='text' placeholder='Title' name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} ></input>
          <button className='publish-btn bg-success text-light' onClick={handlePush}>Publish</button>
        </div>
        <input className='title' type='text' placeholder='Category' name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} ></input>
        <div>
          <textarea className='story' rows="10" couls="50" placeholder='Tell your story' name="story" value={story} onChange={(e)=>{setStory(e.target.value)}}></textarea>
        </div>
      </div>
    )
  }
