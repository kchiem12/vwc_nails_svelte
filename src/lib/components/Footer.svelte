<script>
	const currentYear = new Date().getFullYear();
</script>

<div class="footer">
	<h3 class="company-title">VWC Nails</h3>
	<p class="address">2020 Penrose Avenue, Philadelphia, PA 19145</p>
	<p class="phone">Tel: 215-465-0596</p>
	<div class="lower-footer">
		<p class="copyright">&copy; {currentYear} VWC Nails</p>
		<!--- add buttons here as well -->

		<div class="footer-buttons">
			<a href="/about">About</a>
			<a href="/gallery">Gallery</a>
			<a href="/services">Services</a>
		</div>
	</div>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
		padding: 2rem;
		font-family: 'Playfair Display', serif;
	}

	.lower-footer {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.footer-buttons {
		display: flex;
		justify-content: space-between;
		width: 20%;
		align-items: center;
	}

	.company-title {
		font-size: 2rem;
		margin: 0;
	}

	.address {
		font-size: 1.25rem;
	}

	.footer-buttons a {
		text-decoration: none;
		color: #fc456d;
	}

	@media (max-width: 768px) {
		.footer-buttons {
			width: 50%;
		}

		.company-title {
			font-size: 1.5rem;
		}

		.address {
			font-size: 1rem;
		}

		.phone {
			font-size: 1rem;
		}

		.footer-buttons {
			width: 50%;
		}

		.footer-buttons a {
			font-size: 1rem;
		}

		.lower-footer {
			/* reverse the direction of the content in column mode */
			flex-direction: column-reverse;
			align-items: center;
		}

		.footer-buttons {
			width: 100%;
			margin-top: 1rem;
		}
	}
</style>
