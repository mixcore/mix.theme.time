<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Tag from '$lib/tag/Tag.svelte';
import Counter from '$lib/Counter.svelte';
import Feature from '$lib/feature/Feature.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Feature/>
<Tag/>
<Tag/>
<Tag/>
<Tag/>
<Tag/>