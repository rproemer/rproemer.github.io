<script lang="ts">
	import type { Project } from '$lib/data/resume';

	let { project, onclick }: { project: Project; onclick: () => void } = $props();
</script>

<button
	class="project-card"
	onclick={onclick}
	style="
		display: block;
		width: 100%;
		text-align: left;
		background: var(--color-surface-600);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		overflow: hidden;
		cursor: pointer;
		transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	"
	onmouseenter={(e) => {
		const el = e.currentTarget as HTMLElement;
		el.style.transform = 'translateY(-4px)';
		el.style.borderColor = project.accentColor;
		el.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3)`;
	}}
	onmouseleave={(e) => {
		const el = e.currentTarget as HTMLElement;
		el.style.transform = 'translateY(0)';
		el.style.borderColor = 'var(--color-border)';
		el.style.boxShadow = 'none';
	}}
>
	<!-- Thumbnail strip -->
	<div
		style="
			height: 100px;
			background: linear-gradient(135deg, {project.accentColor}22, {project.accentColor}44);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2.5rem;
			border-bottom: 1px solid var(--color-border);
		"
	>
		{project.icon}
	</div>

	<!-- Content -->
	<div style="padding: 1.25rem;">
		<div style="margin-bottom: 0.5rem;">
			<span
				style="
					font-size: 11px;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.08em;
					color: {project.accentColor};
				"
			>
				{project.category}
			</span>
		</div>
		<h3
			style="
				font-family: var(--font-heading);
				font-size: 1rem;
				font-weight: 600;
				color: #fff;
				margin-bottom: 0.5rem;
			"
		>
			{project.name}
		</h3>
		<p style="font-size: 13px; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">
			{project.shortDesc}
		</p>
		<div style="display: flex; flex-wrap: wrap; gap: 6px;">
			{#each project.tags.slice(0, 3) as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</button>
