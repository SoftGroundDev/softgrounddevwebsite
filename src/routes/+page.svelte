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

	<p>Contact me: <br /> schuster@softground.dev</p>
	<!-- <button>Explore Our Services</button>
	<button>Learn About Our Mission</button> -->
</div>

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
</style>
