<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Category from '$lib/category/Category.svelte';
import Counter from '$lib/Counter.svelte';
import Feature from '$lib/feature/Feature.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Feature/>
<Category/>
<Category/>
<Category/>
<Category/>