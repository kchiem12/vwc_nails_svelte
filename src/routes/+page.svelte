<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import ReviewCard from '../lib/components/ReviewCard.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 100);
	});

	// eventually use API's or place into its own data file
	let reviews_data = [
		{
			author: 'Jennifer',
			review:
				'I have been going here for nearly 19 years! Wan and her team are the best, always make me laugh. 10/10 recommend!',
			link: 'https://g.co/kgs/o9oYxN'
		},
		{
			author: 'Michele',
			review:
				'I was a walk in. They accommodated me quickly. Great pedicure and an awesome manicure.',
			link: 'https://g.co/kgs/BfbcxH'
		},
		{
			author: 'Robert',
			review:
				'They do every thing right, they care about you, talk to you, make you laugh. Over all great people to do business with.',
			link: 'https://g.co/kgs/VqD7y5'
		},
		{
			author: 'Mary',
			review: 'I would like to keep this a secret. Really really really good environment.',
			link: 'https://g.co/kgs/wTyP6Q'
		}
	];
</script>

<Navbar selected={'home'} home={true} />

<div class="image-container">
	<img src="/front-page-4.jpeg" alt="Nails" />
	{#if isLoaded}
		<div class="front-page-text" in:fly={{ y: -50, duration: 750 }}>
			<h1 class="home-page-title">Cherish your nails, cherish yourself</h1>
		</div>
		<button class="contact-button" in:fly={{ y: -50, duration: 750 }}>
			<p>Contact Us</p>
		</button>
	{/if}
</div>

<div class="reviews-container">
	<h1 class="review-title">Featured Testimonials</h1>

	<div class="reviews-card-container">
		{#each reviews_data as review}
			<ReviewCard {...review} />
		{/each}
	</div>
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
		/* margin-top: 2rem; */
		position: relative;
		text-align: center;
	}

	.front-page-text {
		/* center text at top center */
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		font-family: 'Playfair Display', serif;
		width: 100%;
	}

	.home-page-title {
		font-size: 4rem;
		font-family: 'Playfair Display', serif;
	}

	.contact-button {
		position: absolute;
		background-color: transparent;
		top: 70%;
		left: 50%;
		border: 2px solid black;
		cursor: pointer;
		transform: translate(-50%, -50%);
		z-index: 10;
		font-family: 'Playfair Display', serif;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
	}

	.contact-button:hover {
		background-color: black;
		color: white;
		-webkit-transition: 0.5s ease-out;
		transition: 0.5s ease-out;
	}

	.reviews-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* margin-top: 5rem; */
		padding: 2rem;
	}

	.reviews-card-container {
		padding: 2rem;
		/* padding-top: 0; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5rem;
		align-items: start;
		justify-self: center;
		margin-right: 2rem;
		grid-auto-rows: 17.5rem;
	}

	.review-title {
		font-size: 3rem;
		font-family: 'Playfair Display', serif;
		border-bottom: 3px solid #febecc;
		padding-bottom: 1rem;
		display: inline-block;
		line-height: 1.2;
		border-radius: 3px;
	}

	@media (max-width: 768px) {
		.image-container {
			height: 800px;
			overflow: hidden;
		}

		img {
			object-fit: cover;
			object-position: center;
			height: 100%;
		}

		.home-page-title {
			font-size: 3rem;
			margin-bottom: 7.5rem;
		}

		.contact-button {
			font-size: 0.75rem;
		}

		.reviews-card-container {
			/* change the height */
			grid-template-columns: 1fr;
			grid-auto-rows: 10rem;
			gap: 5rem;
		}

		.review-title {
			font-size: 2rem;
		}
	}
</style>
