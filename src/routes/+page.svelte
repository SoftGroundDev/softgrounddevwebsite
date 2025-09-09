<script>
	import KOStackedLogo from '../lib/SG_Logo+Tagline_Stacked_KO.svelte';
	import '../lib/global.css';
	// let videoEnded = false;

	// function handleVideoEnd() {
	// 	videoEnded = true;
	// }
</script>

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

<!-- AI Implementation Section -->
<section class="ai-implementation">
	<div class="container">
		<div class="ai-header">
			<div class="ai-icon">🤖</div>
			<h2>AI Implementation</h2>
		</div>
		<p class="ai-subtitle">
			Leverage AI agents and automation to streamline your business processes
		</p>

		<div class="ai-content">
			<div class="what-we-do">
				<h3>What We Do:</h3>
				<ul class="ai-services-list">
					<li>
						<strong>AI Agents:</strong> Custom AI assistants for customer service, data processing, and
						workflow automation
					</li>
					<li>
						<strong>Business Process Automation:</strong> Eliminate repetitive tasks and reduce manual
						errors
					</li>
					<li>
						<strong>Lead Generation Tools:</strong> AI-powered systems to identify and qualify potential
						customers
					</li>
					<li>
						<strong>Document Processing:</strong> Automated data extraction and analysis from business
						documents
					</li>
				</ul>
			</div>

			<div class="perfect-for">
				<h3>Perfect For:</h3>
				<ul class="ai-benefits-list">
					<li>Businesses spending hours on repetitive data entry</li>
					<li>Companies wanting to improve customer response times</li>
					<li>Organizations looking to scale without hiring more staff</li>
					<li>Businesses wanting to leverage AI without massive investment</li>
				</ul>
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

	/* AI Implementation Section */
	.ai-implementation {
		background: linear-gradient(135deg, #2c5f41 0%, #1e4d35 100%);
		color: white;
		padding: 80px 0;
		position: relative;
		font-family:
			'Lexend',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
	}

	.ai-implementation::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		pointer-events: none;
	}

	.ai-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-bottom: 30px;
	}

	.ai-icon {
		font-size: 3rem;
		background: rgba(255, 255, 255, 0.15);
		padding: 20px;
		border-radius: 50%;
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.2);
	}

	.ai-implementation h2 {
		color: #ffffff;
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 2.8rem;
		font-weight: 800;
		margin: 0;
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
		letter-spacing: -0.02em;
	}

	.ai-subtitle {
		font-size: 1.4rem;
		color: #ffffff;
		margin-bottom: 50px;
		text-align: center;
		font-weight: 400;
		text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		line-height: 1.4;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		opacity: 0.95;
	}

	.ai-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		margin-top: 40px;
	}

	.what-we-do,
	.perfect-for {
		background: rgba(255, 255, 255, 0.12);
		padding: 40px;
		border-radius: 20px;
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
	}

	.what-we-do h3,
	.perfect-for h3 {
		color: #ffffff;
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 25px;
		text-align: left;
		text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		border-bottom: 2px solid rgba(255, 255, 255, 0.3);
		padding-bottom: 15px;
		letter-spacing: -0.01em;
	}

	.ai-services-list,
	.ai-benefits-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.ai-services-list li,
	.ai-benefits-list li {
		color: #ffffff;
		line-height: 1.7;
		margin-bottom: 20px;
		padding-left: 30px;
		position: relative;
		font-size: 1.1rem;
		font-weight: 400;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
		opacity: 0.95;
	}

	.ai-services-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #4ade80;
		font-weight: bold;
		font-size: 1.3rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		top: -2px;
	}

	.ai-benefits-list li::before {
		content: '▶';
		position: absolute;
		left: 0;
		color: #60a5fa;
		font-weight: bold;
		font-size: 1.1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		top: 1px;
	}

	.ai-services-list li strong {
		color: #ffffff;
		font-weight: 600;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 1.15rem;
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

		.value-grid,
		.services-grid {
			grid-template-columns: 1fr;
		}

		.community-content {
			grid-template-columns: 1fr;
		}

		.ai-content {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.ai-header {
			flex-direction: column;
			gap: 15px;
		}

		.ai-implementation h2 {
			font-size: 2.2rem;
		}

		.ai-subtitle {
			font-size: 1.2rem;
			padding: 0 20px;
		}

		.what-we-do,
		.perfect-for {
			padding: 30px 25px;
		}

		.what-we-do h3,
		.perfect-for h3 {
			font-size: 1.7rem;
		}

		.ai-services-list li,
		.ai-benefits-list li {
			font-size: 1.05rem;
			line-height: 1.6;
			padding-left: 28px;
		}

		.ai-services-list li strong {
			font-size: 1.1rem;
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
