<script>
	import Navbar from '../../lib/components/Navbar.svelte';
</script>

<Navbar selected={'about'} home={false} />

<div class="our-story">
	<div class="story-text">
		<h1>Our Story</h1>
		<p class="our-story-short">
			Based in Philadelphia, the City of Brotherly Love, VWC Nails was founded in 2008.
		</p>

		<p class="our-story-long">
			As a family owned business, we treasure the relationships we have built with our customers
			over the years. We are committed to providing quality service and a relaxing experience for
			all of our clients.
		</p>
	</div>
	<img src="/about-philly-nails.png" alt="philly-nails" />
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
		padding-bottom: 5rem;
		margin-bottom: 3rem;
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
</style>
