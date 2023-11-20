import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Vedio.scss";
// import Nav from "../../headers/nav/Nav";


function Video() {
  const code = "console.log('hii ')"
  return (
    <>
      

        {/* <Nav/> */}
      
        <div className="vedio_container">

        <div className="vedio">
          <ReactPlayer
            height={450}
            width={800}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />

          <div className="details" >
            <h3>Video Title</h3>
            <span>12d ago</span>
            <p>Description on the bottom of the video </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p>
          </div>
     
        </div>



        <div className="playlist">
          <br />
          <br />
          <div>
            <ReactPlayer
             width={300}
             height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className="details" >
            <h3>Video Title</h3>
            <span>12d ago</span>
            <p>Description on the bottom of the video </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p>
          </div>
          </div>
          <br />
          <div>
            <ReactPlayer
              width={300}
              height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className="details" >
            <h3>Video Title</h3>
            <span>12d ago</span>
            <p>Description on the bottom of the video </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p>
          </div>
          </div>
          <br />
          <div>
            <ReactPlayer
              width={300}
              height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className="details" >
            <h3>Video Title</h3>
            <span>12d ago</span>
            <p>Description on the bottom of the video </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p>
          </div>
          </div>
          <br />
          <div>
            <ReactPlayer
              width={300}
              height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>
          <br />
          <div>
            <ReactPlayer
              width={300}
              height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>
          <br />
          <div>
            <ReactPlayer
              width={300}
              height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>

        </div>
        </div>
        <div>
            <ReactPlayer
             width={300}
             height={180}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className="details" >
            <h3>Video Title</h3>
            <span>12d ago</span>
            <p>Description on the bottom of the video </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur. Commodi odit ipsa perferendis tenetur possimus non quidem quaerat sunt? Doloribus, nisi!</p>
          </div>
          </div>
  
      
    </>
  );
}

export default Video;
