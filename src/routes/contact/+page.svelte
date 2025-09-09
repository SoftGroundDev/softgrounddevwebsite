<script lang="ts">
	let selectedService = '';
	let formData = {
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		timeline: '',
		budget: '',
		description: '',
		referral: ''
	};

	function handleSubmit(event: Event) {
		event.preventDefault();

		// Construct mailto URL with form data
		const subject = `Project Inquiry: ${formData.service || 'General Inquiry'}`;
		const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Timeline: ${formData.timeline}
Budget Range: ${formData.budget}
How did you hear about us: ${formData.referral}

Project Description:
${formData.description}
		`.trim();

		const mailtoUrl = `mailto:schuster@softground.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoUrl;
	}
</script>

<svelte:head>
	<title>Contact - Soft Ground | Start Your Augusta Software Project</title>
	<meta
		name="description"
		content="Contact Soft Ground for custom software development in Augusta, Georgia. Free consultations, 3-month timelines, transparent pricing. Start your project today."
	/>
</svelte:head>

<div class="contact-page">
	<!-- Hero Section -->
	<section class="contact-hero">
		<div class="container">
			<h1>Let's Build Something Great Together</h1>
			<p class="hero-subtitle">
				Ready to transform your Augusta business with custom software solutions?
			</p>
			<div class="hero-highlights">
				<div class="highlight">📞 24-Hour Response Time</div>
				<div class="highlight">💬 Free Consultation</div>
				<div class="highlight">🏛️ Augusta Focused</div>
			</div>
		</div>
	</section>

	<!-- Contact Methods Section -->
	<section class="contact-methods">
		<div class="container">
			<h2>Get in Touch</h2>
			<div class="methods-grid">
				<div class="method-item primary">
					<h3>📧 Email</h3>
					<p class="method-value">
						<a href="mailto:schuster@softground.dev">schuster@softground.dev</a>
					</p>
					<p class="method-description">
						Best for detailed project discussions and formal inquiries
					</p>
					<p class="response-time">⚡ Response within 24 hours</p>
				</div>

				<div class="method-item">
					<h3>🎤 Tech Talk Augusta</h3>
					<p class="method-value">Monthly Meetups</p>
					<p class="method-description">Meet us in person at our community events</p>
					<p class="response-time">📅 Third Thursday every month</p>
				</div>

				<div class="method-item">
					<h3>📍 Local Meetings</h3>
					<p class="method-value">Augusta, Georgia</p>
					<p class="method-description">Face-to-face consultations at your location or ours</p>
					<p class="response-time">🤝 Schedule via email</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Project Inquiry Form -->
	<section class="project-inquiry">
		<div class="container">
			<div class="inquiry-content">
				<div class="inquiry-intro">
					<h2>Start Your Project</h2>
					<p>
						Tell us about your business challenge and we'll provide honest feedback about how we can
						help. No obligation, no pressure.
					</p>

					<div class="process-overview">
						<h3>What Happens Next:</h3>
						<ol>
							<li><strong>Initial Response:</strong> We'll respond within 24 hours</li>
							<li><strong>Discovery Call:</strong> 30-minute conversation about your needs</li>
							<li><strong>Proposal:</strong> Clear timeline, scope, and pricing</li>
							<li><strong>Decision:</strong> Take your time to decide if we're the right fit</li>
						</ol>
					</div>
				</div>

				<div class="inquiry-form">
					<form on:submit={handleSubmit}>
						<div class="form-group">
							<label for="name">Name *</label>
							<input type="text" id="name" bind:value={formData.name} required />
						</div>

						<div class="form-group">
							<label for="email">Email *</label>
							<input type="email" id="email" bind:value={formData.email} required />
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="company">Company/Organization</label>
								<input type="text" id="company" bind:value={formData.company} />
							</div>

							<div class="form-group">
								<label for="phone">Phone</label>
								<input type="tel" id="phone" bind:value={formData.phone} />
							</div>
						</div>

						<div class="form-group">
							<label for="service">Service Interest</label>
							<select id="service" bind:value={formData.service}>
								<option value="">Select a service...</option>
								<option value="AI Implementation">AI Implementation</option>
								<option value="Infrastructure Solutions">Infrastructure Solutions</option>
								<option value="App Development">App Development</option>
								<option value="Software Consulting">Software Consulting</option>
								<option value="Maintenance Contract">Maintenance Contract</option>
								<option value="Not Sure">Not Sure - Need Consultation</option>
							</select>
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="timeline">Desired Timeline</label>
								<select id="timeline" bind:value={formData.timeline}>
									<option value="">Select timeline...</option>
									<option value="ASAP">ASAP (Rush project)</option>
									<option value="1-3 months">1-3 months</option>
									<option value="3-6 months">3-6 months</option>
									<option value="6+ months">6+ months</option>
									<option value="Flexible">Flexible</option>
								</select>
							</div>

							<div class="form-group">
								<label for="budget">Budget Range</label>
								<select id="budget" bind:value={formData.budget}>
									<option value="">Select budget...</option>
									<option value="Under $5k">Under $5,000</option>
									<option value="$5k-$15k">$5,000 - $15,000</option>
									<option value="$15k-$30k">$15,000 - $30,000</option>
									<option value="$30k+">$30,000+</option>
									<option value="Need estimate">Need estimate</option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label for="description">Project Description *</label>
							<textarea
								id="description"
								bind:value={formData.description}
								placeholder="Tell us about your business challenge, current process, and what you'd like to achieve..."
								rows="5"
								required
							></textarea>
						</div>

						<div class="form-group">
							<label for="referral">How did you hear about us?</label>
							<select id="referral" bind:value={formData.referral}>
								<option value="">Select...</option>
								<option value="Google Search">Google Search</option>
								<option value="Tech Talk Augusta">Tech Talk Augusta</option>
								<option value="Referral">Referral from someone</option>
								<option value="Social Media">Social Media</option>
								<option value="Local Business Network">Local Business Network</option>
								<option value="Other">Other</option>
							</select>
						</div>

						<button type="submit" class="submit-button">Send Project Inquiry</button>

						<p class="form-note">
							This form will open your email client with the information pre-filled. You can review
							and edit before sending.
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Quick Questions Section -->
	<section class="quick-questions">
		<div class="container">
			<h2>Quick Questions</h2>
			<div class="questions-content">
				<div class="questions-text">
					<p>Have a quick question or want to discuss an idea? Don't hesitate to reach out!</p>
					<div class="quick-contact-options">
						<a
							href="mailto:schuster@softground.dev?subject=Quick Question"
							class="quick-contact-button"
						>
							📧 Email a Quick Question
						</a>
						<a
							href="mailto:schuster@softground.dev?subject=Tech Talk Augusta Interest"
							class="quick-contact-button"
						>
							🎤 Ask About Tech Talk Augusta
						</a>
						<a
							href="mailto:schuster@softground.dev?subject=Community Involvement"
							class="quick-contact-button"
						>
							🤝 Get Involved in the Community
						</a>
					</div>
				</div>

				<div class="faq-preview">
					<h3>Common Questions:</h3>
					<div class="faq-item">
						<h4>Do you work with businesses outside Augusta?</h4>
						<p>
							We focus exclusively on Augusta and the immediate surrounding area to provide the best
							possible service.
						</p>
					</div>
					<div class="faq-item">
						<h4>What if my project takes longer than 3 months?</h4>
						<p>
							We'll break larger projects into 3-month phases so you see progress and value
							consistently.
						</p>
					</div>
					<div class="faq-item">
						<h4>Do you offer payment plans?</h4>
						<p>Yes, we work with businesses to create payment schedules that fit your cash flow.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Local Business Focus -->
	<section class="local-focus">
		<div class="container">
			<h2>🏛️ Proudly Serving Augusta, Georgia</h2>
			<div class="local-content">
				<div class="local-text">
					<h3>Why Local Matters</h3>
					<p>
						We believe the best business relationships are built face-to-face. By focusing
						exclusively on Augusta and the surrounding area, we can provide personalized service
						that larger, distant firms simply can't match.
					</p>

					<div class="local-benefits">
						<h4>Augusta Business Advantages:</h4>
						<ul>
							<li>Face-to-face meetings at your location</li>
							<li>Understanding of local market dynamics</li>
							<li>Quick response for urgent issues</li>
							<li>Building lasting community relationships</li>
							<li>Supporting local economic growth</li>
							<li>Referrals within the Augusta business community</li>
						</ul>
					</div>
				</div>

				<div class="service-area">
					<h3>Our Service Area</h3>
					<div class="area-info">
						<p><strong>Primary Focus:</strong> Augusta, Georgia</p>
						<p>
							<strong>Extended Area:</strong> Richmond County and immediate surrounding communities
						</p>
						<p>
							<strong>Meeting Locations:</strong> Your office, coffee shops, co-working spaces, or our
							location
						</p>
					</div>

					<div class="meeting-preference">
						<h4>Meeting Preferences:</h4>
						<p>
							We prefer in-person meetings for initial consultations and project kickoffs. This
							helps us better understand your business context and build stronger working
							relationships.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Response Expectations -->
	<section class="response-expectations">
		<div class="container">
			<h2>What to Expect</h2>
			<div class="expectations-grid">
				<div class="expectation-item">
					<h3>⚡ Quick Response</h3>
					<p>
						We respond to all inquiries within 24 hours, usually much faster during business hours.
					</p>
				</div>

				<div class="expectation-item">
					<h3>🔍 Honest Assessment</h3>
					<p>
						We'll tell you if we're not the right fit for your project and recommend alternatives if
						needed.
					</p>
				</div>

				<div class="expectation-item">
					<h3>📋 Clear Process</h3>
					<p>No confusing technical jargon - we explain everything in plain business terms.</p>
				</div>

				<div class="expectation-item">
					<h3>💰 Transparent Pricing</h3>
					<p>Fixed project costs discussed upfront with no hidden fees or surprise charges.</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-page {
		padding-top: 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Hero Section */
	.contact-hero {
		background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
		color: white;
		padding: 80px 0 60px;
		text-align: center;
	}

	.contact-hero h1 {
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

	/* Contact Methods */
	.contact-methods {
		padding: 80px 0;
		background: #f8f9fa;
	}

	.contact-methods h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.methods-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.method-item {
		background: white;
		padding: 30px;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.method-item:hover {
		transform: translateY(-5px);
	}

	.method-item.primary {
		border: 3px solid #27ae60;
		position: relative;
	}

	.method-item.primary::before {
		content: 'PRIMARY';
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
		background: #27ae60;
		color: white;
		padding: 5px 15px;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.method-item h3 {
		color: #2c3e50;
		margin-bottom: 15px;
		font-size: 1.4rem;
	}

	.method-value {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 15px;
		color: #27ae60;
	}

	.method-value a {
		color: #27ae60;
		text-decoration: none;
	}

	.method-value a:hover {
		text-decoration: underline;
	}

	.method-description {
		color: #5a6c7d;
		line-height: 1.6;
		margin-bottom: 15px;
	}

	.response-time {
		color: #7f8c8d;
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Project Inquiry Form */
	.project-inquiry {
		padding: 80px 0;
		background: white;
	}

	.inquiry-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: start;
	}

	.inquiry-intro h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		margin-bottom: 20px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.inquiry-intro p {
		color: #5a6c7d;
		line-height: 1.6;
		margin-bottom: 30px;
		font-size: 1.1rem;
	}

	.process-overview {
		background: #f8f9fa;
		padding: 25px;
		border-radius: 10px;
		border-left: 4px solid #27ae60;
	}

	.process-overview h3 {
		color: #2c3e50;
		margin-bottom: 15px;
	}

	.process-overview ol {
		color: #5a6c7d;
		line-height: 1.6;
	}

	.process-overview li {
		margin-bottom: 10px;
	}

	.process-overview strong {
		color: #2c3e50;
	}

	.inquiry-form {
		background: #f8f9fa;
		padding: 30px;
		border-radius: 10px;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
	}

	label {
		display: block;
		color: #2c3e50;
		font-weight: 600;
		margin-bottom: 5px;
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid #ddd;
		border-radius: 6px;
		font-size: 1rem;
		transition: border-color 0.3s ease;
		box-sizing: border-box;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: #27ae60;
		box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.1);
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-button {
		background: #27ae60;
		color: white;
		padding: 15px 40px;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 100%;
	}

	.submit-button:hover {
		background: #2ecc71;
		transform: translateY(-2px);
	}

	.form-note {
		margin-top: 15px;
		color: #7f8c8d;
		font-size: 0.9rem;
		text-align: center;
		line-height: 1.5;
	}

	/* Quick Questions */
	.quick-questions {
		padding: 80px 0;
		background: #f8f9fa;
	}

	.quick-questions h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.questions-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: start;
	}

	.questions-text p {
		color: #5a6c7d;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 30px;
	}

	.quick-contact-options {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.quick-contact-button {
		display: block;
		background: white;
		color: #2c3e50;
		padding: 15px 20px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		border: 2px solid #27ae60;
		text-align: center;
		transition: all 0.3s ease;
	}

	.quick-contact-button:hover {
		background: #27ae60;
		color: white;
		transform: translateY(-2px);
	}

	.faq-preview h3 {
		color: #2c3e50;
		margin-bottom: 20px;
	}

	.faq-item {
		background: white;
		padding: 20px;
		border-radius: 8px;
		margin-bottom: 15px;
		border-left: 4px solid #27ae60;
	}

	.faq-item h4 {
		color: #2c3e50;
		margin-bottom: 10px;
		font-size: 1rem;
	}

	.faq-item p {
		color: #5a6c7d;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	/* Local Focus */
	.local-focus {
		padding: 80px 0;
		background: white;
	}

	.local-focus h2 {
		color: #2c3e50;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.local-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: start;
	}

	.local-text h3,
	.service-area h3 {
		color: #27ae60;
		margin-bottom: 20px;
		font-size: 1.4rem;
	}

	.local-text p,
	.service-area p {
		color: #5a6c7d;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.local-benefits {
		background: #f8f9fa;
		padding: 25px;
		border-radius: 10px;
		margin-top: 25px;
	}

	.local-benefits h4 {
		color: #2c3e50;
		margin-bottom: 15px;
	}

	.local-benefits ul {
		color: #5a6c7d;
		line-height: 1.6;
	}

	.local-benefits li {
		margin-bottom: 8px;
	}

	.area-info {
		background: #f8f9fa;
		padding: 20px;
		border-radius: 8px;
		margin-bottom: 20px;
	}

	.area-info p {
		margin-bottom: 10px;
	}

	.area-info strong {
		color: #2c3e50;
	}

	.meeting-preference {
		background: rgba(39, 174, 96, 0.1);
		padding: 20px;
		border-radius: 8px;
		border-left: 4px solid #27ae60;
	}

	.meeting-preference h4 {
		color: #2c3e50;
		margin-bottom: 10px;
	}

	.meeting-preference p {
		color: #5a6c7d;
		line-height: 1.6;
	}

	/* Response Expectations */
	.response-expectations {
		padding: 80px 0;
		background: #2c3e50;
		color: white;
	}

	.response-expectations h2 {
		color: white;
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 50px;
		font-family: 'Darker_Grotesque', sans-serif;
		font-weight: 700;
	}

	.expectations-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.expectation-item {
		background: rgba(255, 255, 255, 0.05);
		padding: 25px;
		border-radius: 10px;
		text-align: center;
		border-left: 4px solid #27ae60;
	}

	.expectation-item h3 {
		color: #ffffff;
		margin-bottom: 15px;
		font-size: 1.2rem;
	}

	.expectation-item p {
		color: #ecf0f1;
		line-height: 1.6;
	}

	/* Mobile Styles */
	@media (max-width: 768px) {
		.contact-hero h1 {
			font-size: 2.5rem;
		}

		.hero-highlights {
			flex-direction: column;
			align-items: center;
		}

		.methods-grid {
			grid-template-columns: 1fr;
		}

		.inquiry-content,
		.questions-content,
		.local-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.expectations-grid {
			grid-template-columns: 1fr;
		}

		.contact-methods,
		.project-inquiry,
		.quick-questions,
		.local-focus,
		.response-expectations {
			padding: 60px 0;
		}
	}
</style>
