<!--- Creating NavBar -->

<script>
	export let selected;
</script>

<div class="navbar-container">
	<nav class="topnav" id="myTopnav">
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

<div class="image-container">
	<img src="/front-page-4.jpeg" alt="Nails" />
	<div class="front-page-text">VWC NAILS</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

	.topnav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #f5f5f5;
		gap: 5rem;
		height: auto;
		width: 100%;
		top: 0;
		position: fixed;
		z-index: 100;
		font-family: 'Playfair Display', serif;
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

	img {
		max-width: 100%;
		height: auto;
	}

	.image-container {
		margin-top: 2rem;
		position: relative;
		text-align: center;
	}

	.front-page-text {
		/* center text at top center */
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		font-family: 'Playfair Display', serif;
	}
</style>
