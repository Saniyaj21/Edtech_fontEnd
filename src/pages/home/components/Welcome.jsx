import VideoCard from "./VideoCard";
import "./welcome.scss";
import { motion } from "framer-motion";

const Welcome = () => {
	const videos = [
		{
			_id: 1,
			title: "Web development 1 hshd dksd sjskjdis dihsdi ",
			link: "https://youtu.be/vu7l9VaSpNQ?si=xtW-fcQWll2NQ2Ky",
		},
		{
			_id: 2,
			title: "Intro to HTML",
			link: "https://youtu.be/Ru37TClk0-s?si=kcgTv4g1F74zNC2B",
		},
	];

	return (
		<motion.div
			initial={{ scale: 1.1 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.3, delay: 2 }}
			className='welcome-main'
		>
			<div className='welcome-left'>
				<motion.h1
					// initial={{ translateX: "-100%" }}
					// animate={{ translateX: 0 }}
					// transition={{
					// 	duration: 0.3,
					// 	delay: 2.4,
					// 	// stiffness: 100,
					// 	// type: "spring",
					// 	// damping: 20,
					// }}
				>
					Logic Lords.Dev
				</motion.h1>
			</div>
			<div className='welcome-right'>
				<h3>Recent Videos On Logic Lords.dev</h3>
				{videos.map((item) => (
					<VideoCard item={item} key={item._id} />
				))}
			</div>
		</motion.div>
	);
};

export default Welcome;
