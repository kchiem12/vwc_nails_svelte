<script>
	import Navbar from '../../lib/components/Navbar.svelte';
</script>

<Navbar selected={'about'} home={false} />

<div class="our-story">
	<div class="story-text">
		<h1>Our Story</h1>
		<p class="our-story-short">
			Based in Philadelphia, the City of Brotherly Love, VWC Nails was founded in 2008.
		</p>

		<p class="our-story-long">
			As a family owned business, we treasure the relationships we have built with our customers
			over the years. We are committed to providing quality service and a relaxing experience for
			all of our clients.
		</p>
	</div>
	<img src="/about-philly-nails.png" alt="philly-nails" />
</div>

<style>
	.our-story {
		padding-top: 12rem;
		background-color: #fedcdb;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding-right: 3rem;
		padding-left: 3rem;
		gap: 5rem;
		align-items: center;
	}

	.our-story img {
		width: 40%;
		height: 100%;
		padding-bottom: 5rem;
		margin-bottom: 3rem;
	}

	.story-text {
		width: 60%;
		font-family: 'Playfair Display', serif;
	}

	.story-text h1 {
		font-size: 5rem;
		margin-top: -15rem;
	}

	.our-story-short {
		font-size: 2rem;
	}

	.our-story-long {
		margin-top: 3rem;
		font-size: 1.5rem;
		line-height: 2rem;
		color: #595959;
	}
</style>
