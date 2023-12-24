<script lang="ts">
	import { onMount } from 'svelte';
	import type { Image } from '../Image';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/photoswipe.css';
	import { fly } from 'svelte/transition';
	export let galleryId: string;
	export let images: Image[];

	let isLoaded = false;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryId,
			childSelector: 'a',
			tapAction: 'close',
			doubleTapAction: 'zoom',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
		isLoaded = true;
	});
</script>

<div class="pswp-gallery" id={galleryId}>
	{#each images as image, i}
		{#if isLoaded}
			<a
				href={image.largeURL}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				target="_blank"
				rel="noreferrer"
				in:fly={{ y: -50, duration: 500, delay: i * 100 }}
			>
				<img
					src={image.thumbnailURL}
					alt={image.alt}
					in:fly={{ y: -50, duration: 500, delay: i * 100 }}
				/>
			</a>
		{/if}
	{/each}
</div>

<style>
	.pswp-gallery {
		padding: 5rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-gap: 1rem;
	}

	img {
		width: 150px;
		height: 200px;
	}

	@media (max-width: 768px) {
		.pswp-gallery {
			padding: 2rem;
		}

		img {
			width: 100%;
			height: auto;
		}

		.pswp-gallery a {
			display: flex;
			justify-content: center;
		}
	}
</style>
