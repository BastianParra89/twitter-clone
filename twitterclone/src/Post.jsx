import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  
    return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
        </div>
        <div className='post__body'>
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Basti Parra {" "}
                        <span>
                            <VerifiedUserIcon className='post__badge'/>
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Mensaje de prueba de post!!</p>
                </div>
            </div>
            <img 
            src="https://static2.abc.es/media/summum/2020/10/19/astronaut-1849401_1920-kgZC--620x349@abc.jpg" 
            alt="" 
            />
            <div className='post__footer'>
            <ChatBubbleIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post