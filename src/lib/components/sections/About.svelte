<script lang="ts">
	import { profile, about } from '$lib/data/resume';
	import { Cpu, Layers, Users, Wrench } from 'lucide-svelte';

	const iconMap: Record<string, typeof Cpu> = {
		Cpu,
		Layers,
		Users,
		Wrench
	};
</script>

<section class="section-fade-in" style="padding: 2.5rem 3rem; max-width: 900px;">
	<h2 class="section-title">About Me</h2>

	<div class="about-grid" style="display: grid; grid-template-columns: 1fr 280px; gap: 3rem; margin-bottom: 3rem;">
		<!-- Summary -->
		<div>
			<p style="font-size: 15px; line-height: 1.9; color: var(--color-text-base); margin-bottom: 1.5rem;">
				{about.summary}
			</p>
		</div>

		<!-- Contact info sidebar -->
		<div>
			<h3
				style="
					font-family: var(--font-heading);
					font-size: 0.8rem;
					text-transform: uppercase;
					letter-spacing: 0.12em;
					color: var(--color-text-muted);
					margin-bottom: 1.25rem;
				"
			>
				Contact Details
			</h3>
			<div style="display: flex; flex-direction: column; gap: 0.875rem;">
				<div style="display: flex; align-items: flex-start; gap: 0.75rem;">
					<span style="color: var(--color-accent); font-size: 14px; flex-shrink: 0; margin-top: 2px;">📍</span>
					<div>
						<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 2px;">Location</div>
						<div style="font-size: 14px; color: #e2e8f0;">{profile.location}</div>
					</div>
				</div>
				<div style="display: flex; align-items: flex-start; gap: 0.75rem;">
					<span style="color: var(--color-accent); font-size: 14px; flex-shrink: 0; margin-top: 2px;">✉️</span>
					<div>
						<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 2px;">Email</div>
						<a
							href="mailto:{profile.email}"
							style="font-size: 14px; color: var(--color-accent); text-decoration: none;"
						>
							{profile.email}
						</a>
					</div>
				</div>
				<div style="display: flex; align-items: flex-start; gap: 0.75rem;">
					<span style="color: var(--color-accent); font-size: 14px; flex-shrink: 0; margin-top: 2px;">💼</span>
					<div>
						<div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 2px;">Status</div>
						<div style="display: flex; align-items: center; gap: 6px;">
							<div style="width: 7px; height: 7px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 6px #22c55e88;"></div>
							<span style="font-size: 14px; color: #22c55e; font-weight: 500;">Available for Consulting</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- What I Do grid -->
	<div>
		<h3
			style="
				font-family: var(--font-heading);
				font-size: 1.1rem;
				font-weight: 600;
				color: #fff;
				margin-bottom: 1.5rem;
			"
		>
			What I Do
		</h3>
		<div
			class="whatido-grid"
			style="
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 1.25rem;
			"
		>
			{#each about.whatIDo as item}
				{@const IconComponent = iconMap[item.icon]}
				<div class="card" style="display: flex; flex-direction: column; gap: 0.75rem;">
					<div
						style="
							width: 42px;
							height: 42px;
							background: rgba(4, 180, 224, 0.12);
							border-radius: 10px;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-shrink: 0;
						"
					>
						<IconComponent size={20} color="var(--color-accent)" />
					</div>
					<div>
						<h4
							style="
								font-family: var(--font-heading);
								font-size: 0.95rem;
								font-weight: 600;
								color: #fff;
								margin-bottom: 0.5rem;
							"
						>
							{item.title}
						</h4>
						<p style="font-size: 13.5px; color: var(--color-text-base); line-height: 1.7;">
							{item.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr !important;
			gap: 1.5rem !important;
		}
		.whatido-grid {
			grid-template-columns: 1fr !important;
		}
	}
</style>
