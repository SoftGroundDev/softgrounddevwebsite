<script>
	import KOStackedLogo from '../lib/SG_Logo+Tagline_Stacked_KO.svelte';
	let videoEnded = false;

	function handleVideoEnd() {
		videoEnded = true;
	}
</script>

<div class="hero">
	<KOStackedLogo />
	<div class="hero-filter"></div>
	<video autoplay muted onended={handleVideoEnd} class="background-video">
		<source src="SoftgroundHero.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<!-- <img src="SG_Logo+Tagline_Stacked_KO.svg" alt="logo" class="logo" /> -->
</div>

<!-- <img src="Softground-Hero.gif" alt="Description of the GIF" /> -->

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
</style>
