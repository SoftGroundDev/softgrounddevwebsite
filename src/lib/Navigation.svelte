<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Close mobile menu when clicking outside
	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				mobileMenuOpen &&
				event.target &&
				(event.target as Element).closest &&
				!(event.target as Element).closest('.nav-container')
			) {
				mobileMenuOpen = false;
			}
		}
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	$: currentPath = $page.url.pathname;
</script>

<nav class="navigation">
	<div class="nav-container">
		<div class="nav-brand">
			<a href="/" on:click={closeMobileMenu}>
				<span class="brand-text">Soft Ground</span>
			</a>
		</div>

		<div class="nav-links" class:mobile-open={mobileMenuOpen}>
			<a href="/" class:active={currentPath === '/'} on:click={closeMobileMenu}> Home </a>
			<a href="/about" class:active={currentPath === '/about'} on:click={closeMobileMenu}>
				About
			</a>
			<a href="/services" class:active={currentPath === '/services'} on:click={closeMobileMenu}>
				Services
			</a>
			<a href="/community" class:active={currentPath === '/community'} on:click={closeMobileMenu}>
				Community
			</a>
			<a
				href="/contact"
				class:active={currentPath === '/contact'}
				on:click={closeMobileMenu}
				class="contact-cta"
			>
				Contact
			</a>
		</div>

		<button class="mobile-menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle mobile menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</nav>

<style>
	.navigation {
		background: rgba(44, 62, 80, 0.95);
		backdrop-filter: blur(10px);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
	}

	.nav-brand a {
		text-decoration: none;
		color: white;
	}

	.brand-text {
		font-family: 'Darker_Grotesque', sans-serif;
		font-size: 1.8rem;
		font-weight: 700;
		color: #27ae60;
	}

	.nav-links {
		display: flex;
		gap: 30px;
		align-items: center;
	}

	.nav-links a {
		color: #ecf0f1;
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		padding: 8px 16px;
		border-radius: 6px;
		transition: all 0.3s ease;
		position: relative;
	}

	.nav-links a:hover {
		color: #27ae60;
		background: rgba(39, 174, 96, 0.1);
	}

	.nav-links a.active {
		color: #27ae60;
		background: rgba(39, 174, 96, 0.15);
	}

	.nav-links a.active::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 16px;
		right: 16px;
		height: 2px;
		background: #27ae60;
		border-radius: 1px;
	}

	.contact-cta {
		background: #27ae60 !important;
		color: white !important;
		font-weight: 600;
	}

	.contact-cta:hover {
		background: #2ecc71 !important;
		transform: translateY(-1px);
	}

	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 5px;
		gap: 4px;
	}

	.mobile-menu-toggle span {
		width: 25px;
		height: 3px;
		background: #ecf0f1;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	/* Mobile Styles */
	@media (max-width: 768px) {
		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: rgba(44, 62, 80, 0.98);
			backdrop-filter: blur(15px);
			flex-direction: column;
			padding: 20px;
			gap: 15px;
			transform: translateY(-20px);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}

		.nav-links.mobile-open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.nav-links a {
			width: 100%;
			text-align: center;
			padding: 15px;
			border-radius: 8px;
			font-size: 1.1rem;
		}

		.mobile-menu-toggle {
			display: flex;
		}

		.mobile-menu-toggle:hover span {
			background: #27ae60;
		}
	}

	/* Add padding to body to account for fixed nav */
	:global(body) {
		padding-top: 70px;
	}
</style>
