import React from 'react';
import pokemon from "../../assets/pokemon.png";

const ReactProjects = () => {
	return (
		<div className="content">
			<a
				className
				href="https://jlindner1.github.io/pokedex/"
				target="_blank"
			>
				<h3>Pokédex Front-end</h3>
			</a>
			<a href="https://jlindner1.github.io/pokedex/" target="_blank">
				<div className="card">
					<div className="img-container">
						<img src={pokemon} alt="pokemon API page image" />
					</div>
					<div>
						<p>
							A react application interacting with data from the PokéAPI to
							create a simple Pokédex. this project started from a
							demonstration of how to work with the API, but all the
							internal logic is mine, and the styling is the only leftover
							from the demo. These stylings will be replaced and additional
							functionality will be added as I have time to evolve the
							project.
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ReactProjects;