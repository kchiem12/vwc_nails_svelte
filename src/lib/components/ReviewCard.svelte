<script lang="ts">
	export let author: string;
	export let review: string;
	export let link: string;
</script>

<div class="review">
	<p class="review-text">
		"{review}"
	</p>
	<a class="review-author" href={link}>- {author}</a>
</div>

<style>
	.review {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		/* margin-top: 5rem; */
		padding: 1rem;
		border: 3px solid #333333;
		border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
		position: relative;
	}

	.review::before {
		content: '';
		border: 2px solid #febecc;
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
		border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
	}

	.review-text {
		/* text-align: center; */
		font-size: 1.75rem;
		font-family: 'Playfair Display', serif;
		z-index: 100;
	}

	.review-author {
		text-align: right;
		font-size: 1.5rem;
		font-family: 'Playfair Display', serif;
		/* italicize it */
		font-style: italic;
		z-index: 100;
		text-decoration: none;
		color: #fd8ba4;
	}
</style>
