<script lang="ts">
	import { onMount } from 'svelte';
	export let selected: string;
	export let home: boolean;

	let showMenu = false;
	let isScrolled = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function handleScroll() {
		if (window.scrollY > 50) {
			isScrolled = true;
		} else {
			isScrolled = false;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="navbar-container">
	<nav class="topnav" class:home class:scrolled={isScrolled} id="myTopnav">
		<h1 class="titlelogo"><a href="/">VWC Nails</a></h1>
		<div class="mobile-menu" class:show={showMenu} on:click={toggleMenu}>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
		<ul class="menu-items" class:show={showMenu}>
			<li><a href="/about" class="nav-links">About</a></li>
			<li><a href="/gallery" class="nav-links">Gallery</a></li>
			<li><a href="/services" class="nav-links">Services</a></li>
			<!-- <li><a href="/contact" class="nav-links">Contact</a></li> -->
		</ul>
	</nav>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

	.navbar-container {
		z-index: 10000;
	}

	.mobile-menu {
		display: none;
		cursor: pointer;
	}

	.titlelogo {
		padding-left: 20px;
	}

	.topnav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: transparent;
		height: auto;
		width: 100%;
		top: 0;
		position: fixed;
		z-index: 100;
		font-family: 'Playfair Display', serif;
		transition: background-color 0.3s ease;
	}

	.scrolled {
		background-color: #fedcdb;
	}

	.menu-items {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		padding-right: 40px;
	}

	a {
		text-decoration: none;
		color: black;
	}

	li {
		list-style: none;
		margin-left: 2rem;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		background-color: black;
		transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		.mobile-menu {
			display: block;
			padding-right: 3rem;
		}

		.menu-items {
			flex-direction: column;
			position: absolute;
			justify-content: center;
			background-color: white;
			top: 100%;
			width: 100%;
			align-items: center;
			right: -100%;
			transition: all 0.3s ease;
			padding: 0;
		}

		.menu-items.show {
			display: flex;
			right: 0;
			transition: all 0.3s ease;
		}

		.mobile-menu.show .bar:nth-child(1) {
			transform: rotate(45deg) translate(5px, 6px);
		}

		.mobile-menu.show .bar:nth-child(2) {
			opacity: 0;
		}

		.mobile-menu.show .bar:nth-child(3) {
			transform: rotate(-45deg) translate(5px, -6px);
		}

		.menu-items.show {
			right: 0;
		}
	}
</style>
