<script lang="ts">
	import { profile } from '$lib/data/resume';
	import { Download } from 'lucide-svelte';
</script>

<!-- Desktop profile card -->
<aside
	class="profile-card"
	style="
		width: 300px;
		background: var(--color-surface-700);
		border-right: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2.5rem 1.75rem 1.5rem;
		flex-shrink: 0;
		overflow-y: auto;
	"
>
	<!-- Profile photo -->
	<div
		style="
			position: relative;
			margin-bottom: 1.5rem;
		"
	>
		<!-- Decorative dotted ring -->
		<div
			style="
				position: absolute;
				inset: -8px;
				border-radius: 50%;
				border: 2px dashed rgba(4, 180, 224, 0.3);
				animation: spinSlow 20s linear infinite;
			"
		></div>
		<!-- Solid accent ring -->
		<div
			style="
				position: absolute;
				inset: -4px;
				border-radius: 50%;
				border: 2px solid rgba(4, 180, 224, 0.6);
			"
		></div>
		<img
			src="/images/headshot.webp"
			alt="Richard Roemer"
			style="
				width: 120px;
				height: 120px;
				border-radius: 50%;
				object-fit: cover;
				object-position: center top;
				display: block;
			"
		/>
	</div>

	<!-- Name & title -->
	<h1
		style="
			font-family: var(--font-heading);
			font-size: 1.3rem;
			font-weight: 700;
			color: #fff;
			text-align: center;
			margin-bottom: 0.4rem;
		"
	>
		{profile.name}
	</h1>
	<p
		style="
			font-size: 11.5px;
			color: var(--color-accent);
			text-align: center;
			font-weight: 500;
			margin-bottom: 1.75rem;
			padding: 4px 14px;
			background: rgba(4, 180, 224, 0.1);
			border: 1px solid rgba(4, 180, 224, 0.25);
			border-radius: 20px;
			white-space: nowrap;
		"
	>
		{profile.title}
	</p>

	<!-- Divider -->
	<div style="width: 100%; height: 1px; background: var(--color-border); margin-bottom: 1.75rem;"></div>

	<!-- Download CV button -->
	<a
		href={profile.resumePdf}
		download
		style="
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			width: 100%;
			padding: 11px 20px;
			background: var(--color-accent);
			color: #fff;
			border-radius: 10px;
			text-decoration: none;
			font-family: var(--font-heading);
			font-size: 13.5px;
			font-weight: 600;
			letter-spacing: 0.04em;
			margin-bottom: 1.75rem;
			transition: background 0.2s ease, transform 0.15s ease;
		"
		onmouseenter={(e) => {
			const el = e.currentTarget as HTMLElement;
			el.style.background = 'var(--color-accent-dark)';
			el.style.transform = 'translateY(-1px)';
		}}
		onmouseleave={(e) => {
			const el = e.currentTarget as HTMLElement;
			el.style.background = 'var(--color-accent)';
			el.style.transform = 'translateY(0)';
		}}
	>
		<Download size={15} />
		Download CV
	</a>

	<!-- Spacer -->
	<div style="flex: 1;"></div>

	<!-- Copyright footer -->
	<p style="font-size: 11px; color: var(--color-text-muted); text-align: center;">
		© {new Date().getFullYear()} Richard Roemer
	</p>
</aside>

<!-- Mobile profile header -->
<header
	class="mobile-header"
	style="
		display: none;
		background: var(--color-surface-700);
		border-bottom: 1px solid var(--color-border);
		padding: 1rem 1.25rem;
		align-items: center;
		gap: 1rem;
	"
>
	<img
		src="/images/headshot.webp"
		alt="Richard Roemer"
		style="
			width: 44px;
			height: 44px;
			border-radius: 50%;
			object-fit: cover;
			object-position: center top;
			border: 2px solid var(--color-accent);
			flex-shrink: 0;
		"
	/>
	<div>
		<h1 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 2px;">
			{profile.name}
		</h1>
		<p style="font-size: 11.5px; color: var(--color-accent); font-weight: 500;">{profile.title}</p>
	</div>
	<div style="margin-left: auto;">
		<a
			href={profile.resumePdf}
			download
			style="
				display: flex;
				align-items: center;
				gap: 5px;
				padding: 7px 12px;
				background: var(--color-accent);
				color: #fff;
				border-radius: 8px;
				text-decoration: none;
				font-size: 12px;
				font-weight: 600;
				white-space: nowrap;
			"
		>
			<Download size={13} />
			CV
		</a>
	</div>
</header>

<style>
	@keyframes spinSlow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 768px) {
		.profile-card {
			display: none !important;
		}
		.mobile-header {
			display: flex !important;
		}
	}
</style>
