<script>
	import KOStackedLogo from '../lib/SG_Logo+Tagline_Stacked_KO.svelte';
	import '../lib/global.css';
	// let videoEnded = false;

	// function handleVideoEnd() {
	// 	videoEnded = true;
	// }
</script>

<svelte:head>
	<title>Soft Ground | Augusta, Georgia Software Development & Community Tech</title>
	<meta
		name="description"
		content="Soft Ground builds affordable custom software for Augusta, Georgia businesses. AI implementation, app development, infrastructure solutions, and the home of Tech Talk Augusta."
	/>
</svelte:head>

<div class="hero">
	<KOStackedLogo />
	<div class="hero-filter"></div>
	<video autoplay loop muted class="background-video">
		<source src="SoftgroundHero.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</div>

<div class="container">
	<h1>Empowering Communities Through Innovative Technology</h1>
	<h2>
		At Soft Ground, we build custom software solutions and foster tech-driven community growth
	</h2>
	<div class="local-focus">
		<h3>🏛️ Proudly Serving Augusta, Georgia</h3>
	</div>
</div>

<!-- Brand Illustration Section -->
<section class="brand-illustration">
	<div class="illustration-wrapper">
		<img
			src="SoftGround Growing Computer.png"
			alt="Retro computer with SoftGround on screen, intertwined with growing vines — representing the fusion of technology and organic community growth"
			class="hero-illustration"
		/>
	</div>
	<div class="illustration-tagline">
		<p>Technology rooted in community. Growth powered by code.</p>
	</div>
</section>

<!-- Value Proposition Section -->
<section class="value-proposition">
	<div class="container">
		<h2>Enterprise-Level Expertise at Small Business Prices</h2>
		<div class="value-grid">
			<div class="value-item">
				<h3>💰 Affordable Solutions</h3>
				<p>Custom software development accessible to small businesses with transparent pricing</p>
			</div>
			<div class="value-item">
				<h3>⚡ Rapid Delivery</h3>
				<p>3-month project timelines to get your business solutions up and running fast</p>
			</div>
			<div class="value-item">
				<h3>🔧 Ongoing Support</h3>
				<p>$100/month maintenance contracts to keep your systems running smoothly</p>
			</div>
		</div>
	</div>
</section>

<!-- Services Preview Section -->
<section class="services-preview">
	<div class="container">
		<h2>What We Do</h2>
		<div class="services-grid">
			<div class="service-item">
				<h3>🤖 AI Implementation</h3>
				<p>AI agents and automation to streamline your business processes</p>
			</div>
			<div class="service-item">
				<h3>☁️ Infrastructure Solutions</h3>
				<p>Cloud management and Terraform infrastructure for reliable operations</p>
			</div>
			<div class="service-item">
				<h3>📱 App Development</h3>
				<p>Custom applications tailored to your specific business needs</p>
			</div>
			<div class="service-item">
				<h3>💼 Software Consulting</h3>
				<p>Expert guidance on technical challenges and custom solutions</p>
			</div>
		</div>
		<div class="cta-center">
			<a href="/services" class="button">View All Services</a>
		</div>
	</div>
</section>

<!-- Community Connection Section -->
<section class="community-connection">
	<div class="container">
		<h2>Building Augusta's Tech Community</h2>
		<div class="community-content">
			<div class="community-text">
				<h3>Tech Talk Augusta</h3>
				<p>
					We organize monthly meetups to connect local tech professionals, share knowledge, and
					build our community's technical talent pipeline.
				</p>
				<p>
					<strong>Our Mission:</strong> Democratize technology access and break down experience barriers
					for aspiring tech professionals.
				</p>
			</div>
			<div class="community-cta">
				<a href="/community" class="button">Learn More</a>
			</div>
		</div>
	</div>
</section>

<!-- Enhanced CTA Section -->
<section class="cta-section">
	<div class="container">
		<h2>Ready to Transform Your Business?</h2>
		<p>
			Let's discuss how affordable, custom software solutions can solve your business challenges.
		</p>
		<div class="cta-buttons">
			<a href="/contact" class="button primary">Start a Project</a>
			<a href="mailto:schuster@softground.dev" class="button secondary">Email Us</a>
		</div>
		<p class="response-time">We respond to all inquiries within 24 hours</p>
	</div>
</section>

<style>
	.background-video {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		top: 0;
	}

	.hero {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.hero-filter {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(20, 62, 5, 0.5);
		top: 0;
		opacity: 0;
		animation: fadeIn 5s ease-in forwards;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	.container {
		max-width: 70vw;
		margin: 0 auto;
		padding: 0 20px;
	}

	h1,
	h2,
	p {
		text-align: center;
	}

	h1 {
		font-size: 4rem;
		font-family: 'Darker_Grotesque';
		font-weight: 900;
		margin: 20px;
	}

	h2 {
		margin: 20px;
		font-size: 2rem;
		font-weight: normal;
	}

	.local-focus {
		margin: 30px 0;
		padding: 15px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		backdrop-filter: blur(10px);
	}

	.local-focus h3 {
		color: #ffffff;
		font-size: 1.5rem;
		margin: 0;
		text-align: center;
	}

	/* Brand Illustration Section */
	.brand-illustration {
		background: radial-gradient(ellipse at center, #1a4a0a 0%, #0d2804 60%, #091c02 100%);
		padding: 80px 0 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	.brand-illustration::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		background: linear-gradient(to bottom, var(--primary-background), transparent);
		pointer-events: none;
		z-index: 1;
	}

	.brand-illustration::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 80px;
		background: linear-gradient(to top, #f5f7fa, transparent);
		pointer-events: none;
		z-index: 1;
	}

	.illustration-wrapper {
		max-width: 650px;
		width: 90%;
		animation: floatIn 1.2s ease-out;
	}

	.hero-illustration {
		width: 100%;
		height: auto;
		filter: drop-shadow(0 20px 40px rgba(0, 150, 56, 0.3));
		transition: transform 0.6s ease;
	}

	.hero-illustration:hover {
		transform: scale(1.03);
	}

	.illustration-tagline {
		margin-top: 20px;
		text-align: center;
		z-index: 2;
	}

	.illustration-tagline p {
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 1.8rem;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: 0.02em;
		text-shadow: 0 2px 12px rgba(0, 150, 56, 0.5);
		margin: 0;
		opacity: 0.9;
	}

	@keyframes floatIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Value Proposition Section */
	.value-proposition {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding: 60px 0;
		color: #333;
	}

	.value-proposition h2 {
		color: #2c3e50;
		margin-bottom: 40px;
	}

	.value-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		margin-top: 40px;
	}

	.value-item {
		background: white;
		padding: 30px;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s ease;
	}

	.value-item:hover {
		transform: translateY(-5px);
	}

	.value-item h3 {
		color: #2c3e50;
		font-size: 1.3rem;
		margin-bottom: 15px;
	}

	.value-item p {
		color: #666;
		line-height: 1.6;
	}

	/* Services Preview Section */
	.services-preview {
		background: #2c3e50;
		color: white;
		padding: 60px 0;
	}

	.services-preview a {
		color: white;
	}

	.services-preview h2 {
		color: white;
		margin-bottom: 40px;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
		margin-top: 40px;
	}

	.service-item {
		background: rgba(255, 255, 255, 0.1);
		padding: 25px;
		border-radius: 10px;
		text-align: center;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		transition: transform 0.3s ease;
	}

	.service-item:hover {
		transform: translateY(-3px);
		background: rgba(255, 255, 255, 0.15);
	}

	.service-item h3 {
		color: #ffffff;
		font-size: 1.2rem;
		margin-bottom: 15px;
	}

	.service-item p {
		color: #ecf0f1;
		line-height: 1.5;
	}

	/* Community Connection Section */
	.community-connection {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 60px 0;
	}

	.community-connection a {
		color: white;
	}

	.community-connection h2 {
		color: white;
		margin-bottom: 40px;
	}

	.community-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 40px;
		align-items: center;
	}

	.community-text h3 {
		color: #ffffff;
		font-size: 1.5rem;
		margin-bottom: 20px;
		text-align: left;
	}

	.community-text p {
		color: #ecf0f1;
		line-height: 1.6;
		text-align: left;
		margin-bottom: 15px;
	}

	.community-cta {
		text-align: center;
	}

	/* CTA Section */
	.cta-section {
		background: #34495e;
		color: white;
		padding: 60px 0;
	}

	.cta-section h2 {
		color: white;
		margin-bottom: 20px;
	}

	.cta-section p {
		color: #ecf0f1;
		font-size: 1.1rem;
		margin-bottom: 30px;
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.response-time {
		color: #bdc3c7;
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Button Styles */
	.button {
		display: inline-block;
		padding: 15px 30px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		text-align: center;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}

	.button.primary {
		background: #27ae60;
		color: white;
	}

	.button.primary:hover {
		background: #2ecc71;
		transform: translateY(-2px);
	}

	.button.secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.button.secondary:hover {
		background: white;
		color: #34495e;
	}

	.cta-center {
		text-align: center;
		margin-top: 30px;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			max-width: 90vw;
		}

		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.brand-illustration {
			padding: 50px 0 30px;
		}

		.illustration-wrapper {
			max-width: 90%;
		}

		.illustration-tagline p {
			font-size: 1.3rem;
			padding: 0 20px;
		}

		.value-grid,
		.services-grid {
			grid-template-columns: 1fr;
		}

		.community-content {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.button {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
