import React from 'react';
import ProfileImage from '../../assets/me.jpg';

const Bio = () => {
	return (
		<div className="content">
		<h3>About Me</h3>
		<div className="card card-col">
			<div className="img-container">
				<img src={ProfileImage} alt="author" />
			</div>
			<div>
				<p>
					From Edmonton Alberta, Canada - I am a Graduate from NAIT's DMIT
					Computer Software Development program, and a passionate
					developer always looking for the next oppurtunity to further
					develop my skills and knowledge.
				</p>
				<p>
					If I'm not working on my next project, I can often be found
					drawing, painting, learning a new piano piece or trying my hand
					at developing little videogames.
				</p>
				<p>
					I have a great enthusiasm for looking deeper and finding out how
					and why things work - which is part of the reason I fell into
					programming, as there is always a new level to which you can
					increase your understanding as to how much of our modern world
					functions - and in turn how we as people interact with the world
					around us.
				</p>
			</div>
		</div>
	</div>
	);
};

export default Bio;