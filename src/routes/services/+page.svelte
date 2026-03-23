<script lang="ts">
	// Services page logic if needed
</script>

<svelte:head>
	<title>Services - Soft Ground | Augusta Software Development & Consulting</title>
	<meta
		name="description"
		content="Custom software development, AI implementation, infrastructure solutions, and app development for Augusta, Georgia businesses. 3-month timelines, $100/month maintenance."
	/>
</svelte:head>

<div class="services-page">
	<!-- Hero Section -->
	<section class="services-hero">
		<div class="container">
			<h1>Our Services</h1>
			<p class="hero-subtitle">Enterprise-Level Solutions at Small Business Prices</p>
			<div class="hero-highlights">
				<div class="highlight">⚡ 3-Month Timeline</div>
				<div class="highlight">💰 Transparent Pricing</div>
				<div class="highlight">🔧 $100/Month Maintenance</div>
			</div>
		</div>
	</section>

	<!-- Services Overview -->
	<section class="services-overview">
		<div class="container">
			<h2>What We Offer</h2>
			<p class="overview-text">
				We specialize in solving time-consuming technical challenges for Augusta businesses. Our
				focus is on "low-hanging fruit" - problems that are technically straightforward but provide
				immediate business value.
			</p>
		</div>
	</section>

	<!-- Service Details -->
	<section class="service-details">
		<div class="container">
			<!-- AI Implementation Service -->
			<div class="service-section" id="ai">
				<div class="service-content">
					<div class="service-text">
						<h2>🤖 AI Implementation</h2>
						<p class="service-subtitle">
							Leverage AI agents and automation to streamline your business processes
						</p>

						<h3>What We Do:</h3>
						<ul>
							<li>
								<strong>AI Agents:</strong> Custom AI assistants for customer service, data processing,
								and workflow automation
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

						<h3>Perfect For:</h3>
						<ul>
							<li>Businesses spending hours on repetitive data entry</li>
							<li>Companies wanting to improve customer response times</li>
							<li>Organizations looking to scale without hiring more staff</li>
							<li>Businesses wanting to leverage AI without massive investment</li>
						</ul>
					</div>
					<div class="service-features">
						<h3>Key Benefits</h3>
						<div class="feature-list">
							<div class="feature-item">
								<h4>Immediate ROI</h4>
								<p>See results in weeks, not months</p>
							</div>
							<div class="feature-item">
								<h4>Custom Solutions</h4>
								<p>Tailored to your specific business needs</p>
							</div>
							<div class="feature-item">
								<h4>Training Included</h4>
								<p>Your team learns to use and maintain the system</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Infrastructure Solutions Service -->
			<div class="service-section" id="infrastructure">
				<div class="service-content reverse">
					<div class="service-text">
						<h2>☁️ Infrastructure Solutions</h2>
						<p class="service-subtitle">
							Reliable, scalable cloud infrastructure using modern tools like Terraform
						</p>

						<h3>What We Do:</h3>
						<ul>
							<li>
								<strong>Cloud Setup & Management:</strong> AWS, Azure, or Google Cloud infrastructure
								design
							</li>
							<li>
								<strong>Terraform Infrastructure:</strong> Code-based infrastructure that scales with
								your business
							</li>
							<li>
								<strong>Backup & Security:</strong> Automated backups and security best practices
							</li>
							<li>
								<strong>Performance Monitoring:</strong> Systems that alert you before problems occur
							</li>
						</ul>

						<h3>Perfect For:</h3>
						<ul>
							<li>Growing businesses outgrowing shared hosting</li>
							<li>Companies needing reliable backup and disaster recovery</li>
							<li>Organizations wanting professional-grade security</li>
							<li>Businesses planning for future growth</li>
						</ul>
					</div>
					<div class="service-features">
						<h3>Why Choose Us</h3>
						<div class="feature-list">
							<div class="feature-item">
								<h4>Enterprise Security</h4>
								<p>Bank-level security for your business data</p>
							</div>
							<div class="feature-item">
								<h4>Cost Optimization</h4>
								<p>Pay only for what you use, scale as needed</p>
							</div>
							<div class="feature-item">
								<h4>99.9% Uptime</h4>
								<p>Reliable systems that keep your business running</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- App Development Service -->
			<div class="service-section" id="development">
				<div class="service-content">
					<div class="service-text">
						<h2>📱 Custom App Development</h2>
						<p class="service-subtitle">
							Tailored applications that solve your specific business challenges
						</p>

						<h3>What We Build:</h3>
						<ul>
							<li>
								<strong>Restaurant Management Systems:</strong> Menu management, ordering, and inventory
								tracking
							</li>
							<li><strong>Business Process Apps:</strong> Custom workflows and data management</li>
							<li><strong>Customer Portals:</strong> Self-service platforms for your clients</li>
							<li>
								<strong>Integration Solutions:</strong> Connect your existing tools and systems
							</li>
						</ul>

						<h3>Perfect For:</h3>
						<ul>
							<li>Businesses using spreadsheets for complex processes</li>
							<li>Companies needing custom workflows</li>
							<li>Organizations wanting to improve customer experience</li>
							<li>Businesses outgrowing off-the-shelf solutions</li>
						</ul>
					</div>
					<div class="service-features">
						<h3>Our Approach</h3>
						<div class="feature-list">
							<div class="feature-item">
								<h4>User-Friendly Design</h4>
								<p>Intuitive interfaces that your team will love</p>
							</div>
							<div class="feature-item">
								<h4>Mobile-First</h4>
								<p>Works perfectly on phones, tablets, and desktops</p>
							</div>
							<div class="feature-item">
								<h4>Iterative Development</h4>
								<p>Regular updates and feedback throughout the process</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Software Consulting Service -->
			<div class="service-section" id="consulting">
				<div class="service-content reverse">
					<div class="service-text">
						<h2>💼 Software Consulting</h2>
						<p class="service-subtitle">
							Expert guidance on technical challenges and strategic planning
						</p>

						<h3>How We Help:</h3>
						<ul>
							<li>
								<strong>Technical Assessment:</strong> Evaluate your current systems and identify improvements
							</li>
							<li>
								<strong>Solution Architecture:</strong> Design scalable systems that grow with your business
							</li>
							<li>
								<strong>Technology Selection:</strong> Choose the right tools for your specific needs
							</li>
							<li>
								<strong>Implementation Planning:</strong> Roadmaps for successful project execution
							</li>
						</ul>

						<h3>Perfect For:</h3>
						<ul>
							<li>Businesses planning major technology investments</li>
							<li>Companies facing complex technical decisions</li>
							<li>Organizations needing expert validation of proposals</li>
							<li>Businesses wanting to avoid costly technical mistakes</li>
						</ul>
					</div>
					<div class="service-features">
						<h3>What You Get</h3>
						<div class="feature-list">
							<div class="feature-item">
								<h4>Detailed Reports</h4>
								<p>Clear documentation of recommendations</p>
							</div>
							<div class="feature-item">
								<h4>Actionable Plans</h4>
								<p>Step-by-step implementation roadmaps</p>
							</div>
							<div class="feature-item">
								<h4>Ongoing Support</h4>
								<p>Continued guidance as your project evolves</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing & Timeline Section -->
	<section class="pricing-timeline">
		<div class="container">
			<h2>Pricing Transparency</h2>
			<div class="pricing-content">
				<div class="pricing-philosophy">
					<h3>Our Pricing Philosophy</h3>
					<p>
						We believe in transparent, fair pricing that makes enterprise-level software development
						accessible to Augusta's small businesses. No hidden fees, no surprise costs.
					</p>

					<div class="pricing-highlights">
						<div class="pricing-item">
							<h4>3-Month Timeline</h4>
							<p>
								Most projects completed within 3 months, giving you quick results and predictable
								planning.
							</p>
						</div>
						<div class="pricing-item">
							<h4>Upfront Pricing</h4>
							<p>Fixed project costs discussed and agreed upon before work begins.</p>
						</div>
						<div class="pricing-item">
							<h4>$100/Month Maintenance</h4>
							<p>Ongoing support, updates, and peace of mind for just $100 per month.</p>
						</div>
					</div>
				</div>

				<div class="maintenance-details">
					<h3>What's Included in Maintenance</h3>
					<div class="maintenance-features">
						<ul>
							<li>✅ Regular security updates</li>
							<li>✅ Bug fixes and minor improvements</li>
							<li>✅ Performance monitoring</li>
							<li>✅ Technical support via email</li>
							<li>✅ Monthly system health reports</li>
							<li>✅ Priority support for urgent issues</li>
						</ul>
					</div>
					<div class="maintenance-value">
						<p>
							<strong>The Value:</strong> Most businesses save thousands per year compared to traditional
							development firms, while getting the same level of professional support.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section class="process-section">
		<div class="container">
			<h2>Our Process</h2>
			<div class="process-steps">
				<div class="process-step">
					<div class="step-number">1</div>
					<div class="step-content">
						<h3>Discovery & Planning</h3>
						<p>
							We meet with you to understand your challenges, goals, and requirements. Clear
							documentation of what we'll build together.
						</p>
					</div>
				</div>
				<div class="process-step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h3>Design & Architecture</h3>
						<p>
							Create wireframes, system designs, and technical specifications. You'll see exactly
							what we're building before we build it.
						</p>
					</div>
				</div>
				<div class="process-step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h3>Development & Testing</h3>
						<p>
							Build your solution using modern tools and best practices. Regular updates and
							opportunities for feedback throughout.
						</p>
					</div>
				</div>
				<div class="process-step">
					<div class="step-number">4</div>
					<div class="step-content">
						<h3>Launch & Training</h3>
						<p>
							Deploy your solution and train your team. Complete documentation and transition to
							ongoing maintenance.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="services-cta">
		<div class="container">
			<h2>Ready to Get Started?</h2>
			<p class="intro-text">
				Let's discuss how we can solve your technical challenges and help your Augusta business
				thrive.
			</p>
			<div class="cta-content">
				<div class="cta-text">
					<h3>Free Consultation</h3>
					<p>
						No obligation discussion about your needs and how we can help. We'll provide honest
						feedback about whether our services are the right fit for your business.
					</p>
				</div>
				<div class="cta-buttons">
					<a href="/contact" class="button primary">Start a Project</a>
					<a href="mailto:schuster@softground.dev" class="button secondary">Email for Questions</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.services-page {
		padding-top: 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Hero Section */
	.services-hero {
		background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
		color: white;
		padding: 80px 0 60px;
		text-align: center;
	}

	.services-hero h1 {
		font-size: 3.5rem;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 900;
		margin-bottom: 20px;
	}

	.hero-subtitle {
		font-size: 1.3rem;
		color: #ecf0f1;
		margin-bottom: 30px;
	}

	.hero-highlights {
		display: flex;
		justify-content: center;
		gap: 30px;
		flex-wrap: wrap;
	}

	.highlight {
		background: rgba(255, 255, 255, 0.1);
		padding: 10px 20px;
		border-radius: 25px;
		font-weight: 600;
		backdrop-filter: blur(10px);
	}

	/* Services Overview */
	.services-overview {
		padding: 60px 0;
		background: #f8f9fa;
		text-align: center;
	}

	.services-overview h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		margin-bottom: 20px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.overview-text {
		font-size: 1.2rem;
		color: #5a6c7d;
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
	}

	/* Service Details */
	.service-details {
		padding: 40px 0;
	}

	.service-section {
		padding: 60px 0;
		border-bottom: 1px solid #e9ecef;
	}

	.service-section:last-child {
		border-bottom: none;
	}

	.service-section:nth-child(even) {
		background: #152d46;
	}

	.service-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 50px;
		align-items: start;
	}

	.service-content.reverse {
		grid-template-columns: 1fr 2fr;
	}

	.service-content.reverse .service-text {
		order: 2;
	}

	.service-content.reverse .service-features {
		order: 1;
	}

	.service-text h2 {
		color: #4d99e6;
		font-size: 2.2rem;
		margin-bottom: 15px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.service-subtitle {
		color: #27ae60;
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 30px;
	}

	.service-text h3 {
		color: #25629e;
		font-size: 1.4rem;
		margin: 25px 0 15px 0;
		font-weight: 600;
	}

	.service-text ul {
		color: #9cb0c2;
		line-height: 1.6;
		margin-bottom: 25px;
	}

	.service-text li {
		margin-bottom: 10px;
	}

	.service-text li strong {
		color: #618cb8;
	}

	.service-features {
		background: white;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		height: fit-content;
	}

	.service-section:nth-child(even) .service-features {
		background: #f8f9fa;
		border: 1px solid #e9ecef;
	}

	.service-features h3 {
		color: #2c3e50;
		margin-bottom: 20px;
		font-size: 1.3rem;
	}

	.feature-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.feature-item h4 {
		color: #27ae60;
		margin-bottom: 8px;
		font-size: 1.1rem;
	}

	.feature-item p {
		color: #5a6c7d;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	/* Pricing & Timeline */
	.pricing-timeline {
		padding: 80px 0;
		background: #2c3e50;
		color: white;
	}

	.pricing-timeline h2 {
		color: white;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.pricing-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
	}

	.pricing-philosophy h3 {
		color: #27ae60;
		margin-bottom: 20px;
		font-size: 1.5rem;
	}

	.pricing-philosophy p {
		color: #ecf0f1;
		line-height: 1.6;
		margin-bottom: 30px;
	}

	.pricing-highlights {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.pricing-item {
		background: rgba(255, 255, 255, 0.05);
		padding: 20px;
		border-radius: 8px;
		border-left: 4px solid #27ae60;
	}

	.pricing-item h4 {
		color: #ffffff;
		margin-bottom: 10px;
	}

	.pricing-item p {
		color: #bdc3c7;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.maintenance-details h3 {
		color: #27ae60;
		margin-bottom: 20px;
		font-size: 1.5rem;
	}

	.maintenance-features ul {
		background: rgba(255, 255, 255, 0.05);
		padding: 25px;
		border-radius: 8px;
		margin-bottom: 20px;
	}

	.maintenance-features li {
		color: #ecf0f1;
		line-height: 1.8;
		margin-bottom: 8px;
	}

	.maintenance-value {
		background: rgba(39, 174, 96, 0.1);
		padding: 20px;
		border-radius: 8px;
		border-left: 4px solid #27ae60;
	}

	.maintenance-value p {
		color: #ecf0f1;
		line-height: 1.6;
		margin: 0;
	}

	/* Process Section */
	.process-section {
		padding: 80px 0;
		background: #f8f9fa;
	}

	.process-section h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.process-steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 40px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.process-step {
		text-align: center;
	}

	.step-number {
		width: 60px;
		height: 60px;
		background: #27ae60;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 auto 20px;
		font-family: 'Darker_Grotesque', sans-serif;
	}

	.step-content h3 {
		color: #2c3e50;
		margin-bottom: 15px;
		font-size: 1.3rem;
	}

	.step-content p {
		color: #5a6c7d;
		line-height: 1.6;
	}

	/* CTA Section */
	.services-cta {
		padding: 80px 0;
		background: white;
		text-align: center;
	}

	.services-cta h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		margin-bottom: 20px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.services-cta .intro-text {
		color: #5a6c7d;
		font-size: 1.2rem;
		margin-bottom: 40px;
	}

	.cta-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 50px;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
	}

	.cta-text {
		text-align: left;
	}

	.cta-text h3 {
		color: #27ae60;
		margin-bottom: 15px;
		font-size: 1.5rem;
	}

	.cta-text p {
		color: #5a6c7d;
		line-height: 1.6;
	}

	.cta-buttons {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

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
		color: #2c3e50;
		border: 2px solid #2c3e50;
	}

	.button.secondary:hover {
		background: #2c3e50;
		color: white;
	}

	/* Mobile Styles */
	@media (max-width: 768px) {
		.services-hero h1 {
			font-size: 2.5rem;
		}

		.hero-highlights {
			flex-direction: column;
			align-items: center;
		}

		.service-content,
		.service-content.reverse {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.service-content.reverse .service-text,
		.service-content.reverse .service-features {
			order: unset;
		}

		.pricing-content,
		.cta-content {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.cta-text {
			text-align: center;
		}

		.process-steps {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.pricing-timeline,
		.process-section,
		.services-cta {
			padding: 60px 0;
		}
	}
</style>
