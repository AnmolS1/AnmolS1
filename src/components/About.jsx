import React from "react";

const About = () => {
	return (
		<>
		<div className="tm_section" id="about">
			<div className="tm_about">
				<div className="container">
					<div className="about_inner">
						<div className="left">
							<div
								className="image"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<img src="/img/placeholders/1-1.jpg" alt="placeholder" />
								<div
									className="main"
									style={{
										backgroundImage: `url(${
											process.env.PUBLIC_URL + "/img/about/1.jpg"
										})`,
									}}
								></div>
							</div>
							{/* End image */}
						</div>
						{/* End left */}
						
						<div className="right">
							<div
								className="tm_title"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<span>About Me</span>
								<h3>Creative Multitalented Developer</h3>
							</div>
							<div
								className="text"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<p>
									Immersed in the intricate world of technology and design,
									my professional journey is a testament to unwavering
									dedication and a love for pushing the boundaries of innovation.
									<br></br>
									At iD Tech, I embraced the art of teaching, delivering
									multiple classes weekly and consistently seeking avenues
									for improvement. A recent graduate of UCSD, I expedited
									my academic path, earning a degree in Cognitive Science,
									specialized in Machine Learning and Neural Computation,
									in just two years. Simultaneously, I thrived as an
									Instructional Apprentice and SWE intern at UCSD's Security
									and Cryptography lab.
									<br></br>
									Beyond formal education, my passion finds expression
									in a spectrum of personal projects. Collaborating with
									Dr. Imani Munyaka at UCSD, I delved into a groundbreaking
									research project analyzing Gmail users' spam emails on
									a large scale. I also engineered a comprehensive search
									engine for all UCSD courses, developed tools to enhance
									Notion interactions, and spearheaded a data science
									capstone project utilizing FourSquare for location analytics.
									<br></br>
									My commitment to excellence extends to my current role
									at IBM, where, as a federal technical consultant, I
									channel my love for technology into crafting innovative
									solutions for public issues. Through a blend of technical
									skills and creative design, I navigate complex challenges
									with unwavering dedication, ensuring the delivery of
									consistently high-quality work.
								</p>
							</div>
							<div
								className="tm_button"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<a href="img/resume/resume.pdf" download>Download CV</a>
							</div>
						</div>
						{/* End right */}
					</div>
				</div>
				{/* End container */}
			</div>
		</div>
		</>
	);
};

export default About;