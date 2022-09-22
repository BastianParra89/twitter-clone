import React, { useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
  const [posts, setPosts] = useState([]);
  return (
    <div className='feed'>
        <div className='feed__header'>
        <h2>Home</h2>
        </div>

        <TweetBox/>

        <Post
        displayName="Bastian Parra"
        username="bastiparra"
        verified={true}
        text="Mensaje de prueba exitoso"
        avatar="https://twitter.com/Bastianparrab/photo"
        image=""
        

        />
    </div>
  )
}

export default Feed