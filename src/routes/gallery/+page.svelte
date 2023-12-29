<script lang="ts">
	import Navbar from '../../lib/components/Navbar.svelte';
	import ImageGallery from '../../lib/components/ImageGallery.svelte';
	import { images } from '../../lib/data/images';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		});
	});
</script>

<Navbar selected={'gallery'} home={false} />

{#if isLoaded}
	<div class="gallery-intro" in:fly={{ y: -50, duration: 1000 }}>
		<h1>Gallery</h1>
		<p>
			These are select photos of designs we have done for clients. Feel free to request any of them.
		</p>
		<p><em>Click on any image to enlarge</em></p>
	</div>

	<!-- <div class="photo-gallery"> -->
	<ImageGallery galleryId="gallery" {images} />
{/if}

<!-- </div> -->

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<style>
	.gallery-intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 5rem;
		margin-bottom: 4rem;
		font-family: 'Playfair Display', serif;
	}

	.gallery-intro h1 {
		font-size: 6rem;
		font-weight: 700;
		margin-bottom: 2rem;
		border-bottom: 3px solid #febecc;
	}

	@media (max-width: 768px) {
		.gallery-intro h1 {
			font-size: 5rem;
		}

		.gallery-intro {
			margin-top: 5rem;
		}

		.gallery-intro p {
			font-size: 1.5rem;
			padding: 2rem;
		}
	}
</style>
