<script lang="ts">
	export let serviceName: string;
	export let servicePrice: string;
</script>

<div class="service-item">
	<div class="service-name">{serviceName}</div>
	<div class="middle"></div>
	<div class="service-price">{servicePrice}</div>
</div>

<style>
	.service-item {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		font-size: 1.5rem;
	}

	.service-name {
		position: relative;
	}

	.middle {
		align-self: flex-end;
		border-bottom: 1px dotted black;
		flex-grow: 1;
		margin: 0 5px;
	}
</style>
