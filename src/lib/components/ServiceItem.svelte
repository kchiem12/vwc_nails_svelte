<script lang="ts">
	import ServiceItemSpecification from './ServiceItemSpecification.svelte';
	export let serviceName: string;
	export let servicePrice: string[];
	export let serviceSpecification: string[];
</script>

<div class="service-listing">
	<h3>{serviceName}</h3>
	{#each servicePrice as price, i}
		<ServiceItemSpecification serviceName={serviceSpecification[i]} servicePrice={price} />
	{/each}
</div>

<style>
	.service-listing h3 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
</style>
