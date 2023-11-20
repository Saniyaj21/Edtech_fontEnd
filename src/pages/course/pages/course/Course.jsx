import React from 'react'


// import Nav from "../../../layout/header/Header";
import './course.scss'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'




function Course() {

  
  return (
    <div>
      <div className='course_container'>
          <ul>
    <li>
    <div className='img_container'>
    <ReactPlayer width={200} height={180}  className="img" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

    </div>
    <div>
    <h2>python</h2>
    <p>o, quisquam ab nisi totam facere.</p>
    <Link to={'/course/vedio'}><button> Start </button></Link>
    </div>
  </li>
  <li>
    <div className='img_container'>
    <ReactPlayer width={200} height={180} className="img" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

    </div>
    <div>
    <h2>java</h2>
    <p>o, quisquam ab nisi totam facere.</p>
  
    <button> Start </button>
    </div>
  </li>
  <li>
    <div className='img_container'>
    <ReactPlayer width={200} height={180} className="img" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

    </div>
    <div>
    <h2>java</h2>
    <p>o, quisquam ab nisi totam facere.</p>
  
    <button> Start </button>
    </div>
  </li>
  <li>
    <div className='img_container'>
    <ReactPlayer width={200} height={180} className="img" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

    </div>
    <div>
    <h2>java</h2>
    <p>o, quisquam ab nisi totam facere.</p>
  
    <button> Start </button>
    </div>
  </li>
  </ul> 

        
      </div>
    </div>
  )
}

export default Course
 