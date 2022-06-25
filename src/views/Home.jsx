import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Video from "../components/Video";
import Brand from "../components/BrandAnimation";
import Testimonial from "../components/Testimonial";
import News from "../components/News";
import CallToAction from "../components/CallToAction";

const HomeTwo = () => {
	return (
		<div className="home-four">
			<Header />
			{/* End Header Section */}
			<Slider />
			{/* End Slider Section */}
			<About />
			{/* End About Section */}
			<Portfolio />
			{/* End Portfolio Section */}
			<Skills />
			{/* End Skills Section */}
			<Video />
			{/* End Video Section */}
			
			<div className="tm_section">
				<div className="tm_partners">
					<div className="container">
						<div className="partners_inner">
							<Brand />
						</div>
					</div>
				</div>
			</div>
			{/* End tm_partners */}
			
			<div className="tm_section">
				<div className="tm_testimonials">
					<div className="container">
						<div className="testimonials_inner">
							<div
								className="left"
								data-aos="fade-right"
								data-aos-duration="1200"
							>
								<div className="tm_title">
									<span>Testimonials</span>
									<h3>What clients say about my portfolio template</h3>
								</div>
							</div>
							<div
								className="right"
								data-aos="fade-right"
								data-aos-duration="1200"
							>
								<Testimonial />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End  tm_testimonials*/}
			
			<News />
			{/* End Blog Section */}
			
			<CallToAction />
			{/* End CallToAction */}
		</div>
	);
};

export default HomeTwo;