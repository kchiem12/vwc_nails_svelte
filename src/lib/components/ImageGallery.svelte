<script lang="ts">
	import { onMount } from 'svelte';
	import type { Image } from '../Image';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/photoswipe.css';
	export let galleryId: string;
	export let images: Image[];

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryId,
			childSelector: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={galleryId}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt={image.alt} />
		</a>
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
</style>
