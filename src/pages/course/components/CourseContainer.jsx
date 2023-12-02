import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function CourseContainer({ name }) {
	return (
		<div>
			<div data-aos={"fade-up"} className='course'>
				<div className='img_container'>
					<ReactPlayer
						width={300}
						height={170}
						className='img'
						url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
						volume={0}
						controls={false}
					/>
				</div>
				<div className='details'>
					<h3>{name}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
						facilis itaque error cum laboriosam provident nemo suscipit autem
						voluptates similique officiis, possimus iure vero quos totam
						assumenda tenetur accusantium consequatur.
					</p>
					<Link to={`/course/video/${name}`}>
						<button>View Course</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseContainer;
