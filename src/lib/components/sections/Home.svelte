<script lang="ts">
	import { profile } from '$lib/data/resume';

	let titleIndex = $state(0);
	let visible = $state(true);

	$effect(() => {
		const interval = setInterval(() => {
			visible = false;
			setTimeout(() => {
				titleIndex = (titleIndex + 1) % profile.rotateTitles.length;
				visible = true;
			}, 450);
		}, 3200);

		return () => clearInterval(interval);
	});
</script>

<section
	class="section-fade-in"
	style="
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem 3rem;
		text-align: center;
	"
>
	<div style="max-width: 640px;">
		<!-- Greeting -->
		<p
			style="
				font-size: 13px;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.15em;
				color: var(--color-accent);
				margin-bottom: 1.5rem;
			"
		>
			Welcome
		</p>

		<!-- Name -->
		<h1
			style="
				font-family: var(--font-heading);
				font-size: clamp(2.5rem, 5vw, 4rem);
				font-weight: 700;
				color: #fff;
				line-height: 1.1;
				margin-bottom: 1.5rem;
			"
		>
			{profile.name}
		</h1>

		<!-- Rotating title -->
		<div
			style="
				height: 3rem;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 2.5rem;
				overflow: hidden;
			"
		>
			<div
				style="
					font-family: var(--font-heading);
					font-size: clamp(1.1rem, 2.5vw, 1.5rem);
					font-weight: 500;
					color: var(--color-text-base);
					opacity: {visible ? 1 : 0};
					transform: translateY({visible ? '0' : '10px'});
					transition: opacity 0.4s ease, transform 0.4s ease;
				"
			>
				<span style="color: var(--color-accent);">—</span>
				{profile.rotateTitles[titleIndex]}
				<span style="color: var(--color-accent);">—</span>
			</div>
		</div>

		<!-- Divider -->
		<div
			style="
				width: 60px;
				height: 3px;
				background: linear-gradient(90deg, var(--color-accent), transparent);
				border-radius: 2px;
				margin: 0 auto 2.5rem;
			"
		></div>

		<!-- Tagline -->
		<p
			style="
				font-size: 1.05rem;
				color: var(--color-text-base);
				line-height: 1.8;
				max-width: 520px;
				margin: 0 auto;
			"
		>
			15+ years delivering <span style="color: #fff; font-weight: 500;">enterprise software</span> and managing technical programs — now building
			<span style="color: #fff; font-weight: 500;">AI-powered products</span> from architecture to production.
		</p>
	</div>

	<!-- Scroll hint -->
	<div
		style="
			position: absolute;
			bottom: 2rem;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 6px;
			opacity: 0.4;
		"
	>
		<span style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Explore</span>
		<div
			style="
				width: 1px;
				height: 24px;
				background: var(--color-text-muted);
				animation: scrollPulse 2s ease-in-out infinite;
			"
		></div>
	</div>
</section>

<style>
	@keyframes scrollPulse {
		0%,
		100% {
			opacity: 0.3;
			transform: scaleY(0.8);
		}
		50% {
			opacity: 1;
			transform: scaleY(1.2);
		}
	}
</style>
