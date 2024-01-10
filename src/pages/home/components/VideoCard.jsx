import ReactPlayer from "react-player";
import "./videoCard.scss";

const VideoCard = ({ item }) => {
	return (
		<div className='videocard-main'>
			<p>
				{item.title.slice(0, 35)} {item.title.length > 36 ? "...." : ""}
			</p>
			<div className='video'>
				<ReactPlayer
					height={"100%"}
					width={"100%"}
					url={item.link}
					controls={true}
					// playing={true}
				/>
			</div>
		</div>
	);
};

export default VideoCard;
