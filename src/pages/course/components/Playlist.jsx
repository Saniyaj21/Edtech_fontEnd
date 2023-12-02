import React from 'react'
import ReactPlayer from 'react-player'

function Playlist({thumbnail , description , topic , onButtonClick}) {
  return (
  
        <div onClick={()=>onButtonClick(thumbnail,description,topic)}>
            <ReactPlayer
             width={150}
             height={90}
              url={thumbnail}
              volume={0}
              controls={false}
            />
            <div className="details" >
            <h3>{topic}</h3>
            <span>12d ago</span>
            <p>{description} </p>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p> */}
          </div>
          </div>


  )
}

export default Playlist