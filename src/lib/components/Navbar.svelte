<script lang="ts">
	export let selected: string;
	export let home: boolean;
</script>

<div class="navbar-container">
	<nav class="topnav" class:home id="myTopnav">
		<h1 class="titlelogo">VWC Nails</h1>
		<div class="mobile-menu">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
		<ul class="menu-items">
			<li><a href="/about" class="nav-links">About</a></li>
			<li><a href="/gallery" class="nav-links">Gallery</a></li>
			<li><a href="/services" class="nav-links">Services</a></li>
			<li><a href="/contact" class="nav-links">Contact</a></li>
		</ul>
	</nav>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

	.topnav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		gap: 5rem;
		height: auto;
		width: 100%;
		top: 0;
		position: fixed;
		z-index: 100;
		font-family: 'Playfair Display', serif;
	}

	.home {
		background-color: transparent;
	}

	.menu-items {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: black;
	}

	li {
		list-style: none;
		margin-left: 2rem;
	}
</style>
