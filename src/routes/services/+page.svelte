<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import ServiceItem from '$lib/components/ServiceItem.svelte';
	import { services } from '$lib/data/services';
</script>

<Navbar selected="services" home={false} />

<div class="services-intro">
	<h1>Our Services</h1>

	<p>
		We take care in the service we provide to ensure top quality results. Please take your time
		looking over the services we provide.
	</p>

	<div class="box">
		<div class="box-inner">
			<div class="services-menu">
				{#each services as service}
					<ServiceItem
						serviceName={service.serviceName}
						servicePrice={service.servicePrice}
						serviceSpecification={service.serviceSpecification}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.services-intro {
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Playfair Display', serif;
	}

	.services-menu {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 800px;
	}

	.box {
		/* position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0); */
		position: relative;
		background-color: rgba(#000, 0.5);
		width: 100%;
		max-width: 800px;
		padding: 5px;
		margin-top: 5rem;
		margin-bottom: 10rem;
		border: 2px solid #fa6e6a;
		&:before,
		&:after {
			content: '•';
			position: absolute;
			width: 14px;
			height: 14px;
			font-size: 14px;
			color: #fa6e6a;
			border: 2px solid #fa6e6a;
			line-height: 12px;
			top: 5px;
			text-align: center;
		}
		&:before {
			left: 5px;
		}
		&:after {
			right: 5px;
		}
	}
	.box-inner {
		position: relative;
		border: 2px solid #fa6e6a;
		padding: 40px;
		padding-top: 0;
		&:before,
		&:after {
			content: '•';
			position: absolute;
			width: 14px;
			height: 14px;
			font-size: 14px;
			color: #fa6e6a;
			border: 2px solid #fa6e6a;
			line-height: 12px;
			bottom: -2px;
			text-align: center;
		}
		&:before {
			left: -2px;
		}
		&:after {
			right: -2px;
		}
	}
</style>
