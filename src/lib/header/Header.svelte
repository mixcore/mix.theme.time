<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<div class="navbar bg-base-100 border-b sticky top-0 z-[100]">
	<div class="navbar-start">
		

		<div class="flex-none lg:hidden">
			<label for="my-drawer" class="btn btn-square btn-ghost">
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</label>
		  </div> 
	  <a class="btn btn-ghost normal-case text-xl text-red-600">TIME</a>
	</div>
	<!-- <div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal p-0">
		<li><a>Item 1</a></li>
		<li tabindex="0">
		  <a>
			Parent
			<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
		  </a>
		  <ul class="p-2">
			<li><a>Submenu 1</a></li>
			<li><a>Submenu 2</a></li>
		  </ul>
		</li>
		<li><a>Item 3</a></li>
	  </ul>
	</div> -->
	<div class="navbar-end">
		<a class="link-primary rounded-sm px-6 mx-2 font-semibold">SIGN IN</a>
	  <a class="btn btn-primary rounded-sm px-8">SUPSCRIBE</a>
	</div>
  </div>

<!-- 
<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

</header> -->
