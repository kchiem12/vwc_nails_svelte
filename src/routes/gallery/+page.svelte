<script lang="ts">
	import Navbar from '../../lib/components/Navbar.svelte';
	import ImageGallery from '../../lib/components/ImageGallery.svelte';
	import { images } from '../../lib/data/images';
</script>

<Navbar selected={'gallery'} home={false} />

<div class="gallery-intro">
	<h1>Gallery</h1>
	<p>
		These are select photos of designs we have done for clients. Feel free to request any of them.
	</p>
</div>

<!-- <div class="photo-gallery"> -->
<ImageGallery galleryId="gallery" {images} />

<!-- </div> -->

<style>
	.gallery-intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 10rem;
		font-family: 'Playfair Display', serif;
	}

	.gallery-intro h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 2rem;
		border-bottom: 3px solid #febecc;
	}

	.photo-gallery {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 5rem;
	}
</style>
