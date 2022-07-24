<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '$lib/global.css';
	import '../app.css';
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		
<Header />
		<main class="container max-w-screen-xl mx-auto">
			<slot />
		</main>

		<Footer/>
	</div> 
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay"></label>
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
			
		</ul>
	</div>
</div>