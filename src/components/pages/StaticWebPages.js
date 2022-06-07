import React from 'react';
import storefront from "../../assets/storefront.png";
import responsive_page from "../../assets/responsive_page.png";

const StaticWebPages = () => {
	return (
		<div className="content cards">
			<a
				className
				href="https://jlindner1.github.io/responsive-design/"
				target="_blank"
			>
				<h3>Responsive Static Web Page</h3>
			</a>
			<a
				href="https://jlindner1.github.io/responsive-design/"
				target="_blank"
			>
				<div className="card">
					<div className="img-container">
						<img src={responsive_page} alt="responsive website image" />
					</div>
					<div>
						<p>
							A sample showing techniques and implementation of responsive
							web design principles. This page is designed utilizing a
							mobile-first methodology to ensure that it is convenient and
							easy to use for a majority of the web-using population who is
							experienceing the internet through a smartphone, as well as
							desktop users.
						</p>
						<p>
							For this page, I was given a Photoshop file with the design,
							and implemented it in HTML and CSS from scratch.
						</p>
					</div>
				</div>
			</a>

			<a
				className
				href="https://jlindner1.github.io/storefront-sample/"
				target="_blank"
			>
				<h3>Storefront Static Web Page</h3>
			</a>
			<a
				href="https://jlindner1.github.io/storefront-sample/"
				target="_blank"
			>
				<div className="card">
					<div className="img-container">
						<img src={storefront} alt="storefront website image" />
					</div>
					<div>
						<p>
							A sample webpage showcasing a possible storefront design
							utilizing dropdowns, and shop item cards. This is not a
							responsive page, and showcases utilization of CSS design
							abilities rather than a funcitonal page.
						</p>
						<p>
							For this page, I was given a Photoshop file with the design,
							and implmented it in HTML and CSS from scratch.
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default StaticWebPages;