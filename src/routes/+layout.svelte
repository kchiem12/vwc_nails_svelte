<script>
	import '../lib/css/global.css';
	import Footer from '../lib/components/Footer.svelte';
	import Announcement from '$lib/components/Announcement.svelte';
	import { onMount } from 'svelte';

	let showAnnouncement = false;
	// localStorage.clear();

	onMount(() => {
		showAnnouncement = localStorage.getItem('dismissedAnnouncement') !== 'true';
	});

	function closeAnnouncement() {
		localStorage.setItem('dismissedAnnouncement', 'true');
		showAnnouncement = false;
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={'/favicon.svg'} />
</svelte:head>

<!-- <Announcement
	show={showAnnouncement}
	message="We will be closed today, January 16th, due to inclement weather. Stay safe!"
	{closeAnnouncement}
/> -->

<slot />

<Footer />
