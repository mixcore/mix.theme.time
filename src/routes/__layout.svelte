<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '$lib/global.css';
	import '../app.css';
</script>

<Header />

<main class="container max-w-screen-xl mx-auto">
	<slot />
</main>

<Footer/>