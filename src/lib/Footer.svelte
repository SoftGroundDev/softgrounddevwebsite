<script lang="ts">
	// Footer component logic if needed
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<div class="footer-section">
				<h3>Soft Ground</h3>
				<p>Empowering Augusta businesses through innovative technology solutions.</p>
				<div class="location">
					<strong>🏛️ Augusta, Georgia</strong>
				</div>
			</div>

			<div class="footer-section">
				<h4>Services</h4>
				<ul>
					<li><a href="/services#ai">AI Implementation</a></li>
					<li><a href="/services#infrastructure">Infrastructure Solutions</a></li>
					<li><a href="/services#development">App Development</a></li>
					<li><a href="/services#consulting">Software Consulting</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4>Community</h4>
				<ul>
					<li><a href="/community">Tech Talk Augusta</a></li>
					<li><a href="/about">Our Mission</a></li>
					<li><a href="/community#events">Local Events</a></li>
				</ul>
			</div>

			<div class="footer-section">
				<h4>Contact</h4>
				<div class="contact-info">
					<p>
						<strong>Email:</strong>
						<a href="mailto:schuster@softground.dev">schuster@softground.dev</a>
					</p>
					<p><strong>Response Time:</strong> Within 24 hours</p>
					<p><strong>Project Timeline:</strong> 3 months average</p>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p>&copy; 2026 Soft Ground. All rights reserved.</p>
				<p class="tagline">Code can build community and communities can build impactful code</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #2c3e50;
		color: #ecf0f1;
		margin-top: auto;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 40px;
		padding: 50px 0 30px;
	}

	.footer-section h3 {
		color: #27ae60;
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 15px;
	}

	.footer-section h4 {
		color: #ffffff;
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 20px;
		border-bottom: 2px solid #27ae60;
		padding-bottom: 5px;
		display: inline-block;
	}

	.footer-section p {
		line-height: 1.6;
		margin-bottom: 15px;
		color: #bdc3c7;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-section ul li {
		margin-bottom: 10px;
	}

	.footer-section ul li a {
		color: #bdc3c7;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-section ul li a:hover {
		color: #27ae60;
	}

	.location {
		background: rgba(39, 174, 96, 0.1);
		padding: 10px 15px;
		border-radius: 8px;
		margin-top: 15px;
		border-left: 4px solid #27ae60;
	}

	.location strong {
		color: #27ae60;
	}

	.contact-info p {
		margin-bottom: 8px;
	}

	.contact-info a {
		color: #27ae60;
		text-decoration: none;
	}

	.contact-info a:hover {
		text-decoration: underline;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 20px 0;
	}

	.footer-bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;
	}

	.footer-bottom p {
		margin: 0;
		color: #95a5a6;
		font-size: 0.9rem;
	}

	.tagline {
		font-style: italic;
		color: #7f8c8d !important;
	}

	/* Mobile Styles */
	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 30px;
			padding: 40px 0 20px;
		}

		.footer-bottom-content {
			flex-direction: column;
			text-align: center;
		}

		.footer-section {
			text-align: center;
		}

		.footer-section h4 {
			text-align: center;
		}
	}
</style>
