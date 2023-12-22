<script>
	import Navbar from '../../lib/components/Navbar.svelte';
</script>

<Navbar selected="services" home={false} />

<div class="services-intro">
	<h1>Our Services</h1>

	<p>
		We take care in the service we provide to ensure top quality results. Please take your time
		looking over the services we provide.
	</p>

	<div class="services-menu"></div>
</div>

<style>
	.services-intro {
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Playfair Display', serif;
	}
</style>
