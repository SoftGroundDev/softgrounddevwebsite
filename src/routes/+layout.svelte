<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - 70px); /* Account for fixed navigation */
	}
</style>
