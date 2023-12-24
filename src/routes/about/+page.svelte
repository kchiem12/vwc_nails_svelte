<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		});
	});
</script>

<Navbar selected={'about'} home={false} />

<div class="mobile-about-title">
	<!-- <img src="/about-philly-nails.png" alt="philly-nails" /> -->
	<h1 class="home-page-title">Our Story</h1>
</div>

<div class="our-story">
	<div class="story-text">
		{#if isLoaded}
			<h1 in:fly={{ y: -50, duration: 1000 }}>Our Story</h1>
			<p class="our-story-short" in:fly={{ y: -50, duration: 1000 }}>
				Based in Philadelphia, the City of Brotherly Love, VWC Nails was founded in 2008.
			</p>

			<p class="our-story-long" in:fly={{ y: -50, duration: 1000 }}>
				As a family owned business, we treasure the relationships we have built with our customers
				over the years. We are committed to providing quality service and a relaxing experience for
				all of our clients.
			</p>
		{/if}
	</div>
	{#if isLoaded}
		<img
			src="/about-philly-nails.png"
			alt="philly-nails"
			class="original-img"
			in:fly={{ y: -50, duration: 1000 }}
		/>
	{/if}
</div>

<div class="logistics">
	<div class="logistics-texts">
		<h3 class="schedule-title">Schedule</h3>
		<p class="schedule">Monday - Saturday: 9:30am - 7pm</p>
		<p class="schedule">Sunday: Closed</p>
		<p class="appointments">
			Walk-ins are welcome, but appointments are preferable.<br />Please call us at 215-465-0596 to
			schedule.
		</p>
	</div>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3146027666667!2d-75.18580532365625!3d39.91197528620536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c5dcaef01ee7%3A0x86b6365148467bef!2sVWC%20Nails!5e0!3m2!1sen!2sus!4v1703041437101!5m2!1sen!2sus"
		width="600"
		height="450"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
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
		padding-bottom: 10rem;
		margin-bottom: 3rem;
		/* margin-top: 15rem; */
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

	.logistics {
		margin-top: 5rem;
		margin-bottom: 5rem;
		margin-right: 3rem;
		margin-left: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 5rem;
	}

	.schedule-title {
		font-size: 3rem;
		font-family: 'Playfair Display', serif;
		border-bottom: 3px solid #febecc;
	}

	.schedule {
		font-size: 1.5rem;
		font-family: 'Playfair Display', serif;
	}

	.appointments {
		margin-top: 5rem;
		font-size: 1.5rem;
		font-family: 'Playfair Display', serif;
		color: #595959;
	}

	.mobile-about-title {
		display: none;
		position: relative;
	}

	@media (max-width: 768px) {
		.story-text h1 {
			font-size: 4rem;
		}

		.story-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			margin-top: 7.5rem;
		}

		.mobile-about-title {
			display: block;
			width: 100%;
			height: 600px;
			overflow: hidden;
			position: relative;
			background-image: url('/about-philly-nails.png');
			background-size: cover;
		}

		.mobile-about-title::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.5);
		}

		.home-page-title {
			font-size: 4rem;
			font-family: 'Playfair Display', serif;
			color: black;
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 2;
			width: 100%;
			text-align: center;
		}

		.story-text h1 {
			display: none;
		}

		.our-story {
			margin-top: 0;
			padding-top: 0;
		}

		.story-text {
			margin-top: 0;
			margin-bottom: 7.5rem;
		}

		.our-story-long {
			line-height: 2.5rem;
		}

		.original-img {
			display: none;
		}

		.logistics {
			flex-direction: column;
		}

		.schedule {
			font-size: 1.25rem;
		}

		.appointments {
			font-size: 1.25rem;
			line-height: 2rem;
		}

		.logistics iframe {
			width: 100%;
			height: 400px;
		}
	}
</style>
