<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let show: boolean;
	export let message: string;
	export let closeAnnouncement: () => void;

	onMount(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeAnnouncement();
			}
		};

		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if show}
	<div class="popup-overlay" on:click={closeAnnouncement}>
		<div class="popup-content" on:click|stopPropagation in:fly={{ y: -25, duration: 750 }}>
			<p>{message}</p>
			<button class="popup-button" on:click={closeAnnouncement}>Close</button>
		</div>
	</div>
{/if}

<style>
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.popup-content {
		min-width: 300px;
		background-color: white;
		padding: 2rem;
		border-radius: 5px;
		text-align: center;
		position: relative;
	}

	.popup-content p {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
	}

	.popup-button {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-family: 'Playfair Display', serif;
		font-size: 1rem;
		background-color: white;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
