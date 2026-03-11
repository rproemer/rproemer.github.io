<script lang="ts">
	import { projects, projectCategories, type Project, type ProjectCategory } from '$lib/data/resume';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let activeCategory = $state<ProjectCategory>('All');
	let selectedProject = $state<Project | null>(null);

	let filteredProjects = $derived(
		activeCategory === 'All'
			? projects
			: projects.filter((p) => p.category === activeCategory)
	);

	function openProject(project: Project) {
		selectedProject = project;
	}

	function closeProject() {
		selectedProject = null;
	}
</script>

<section class="section-fade-in" style="padding: 2.5rem 3rem; max-width: 900px;">
	<h2 class="section-title">Portfolio</h2>

	<!-- Filter bar -->
	<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem;">
		{#each projectCategories as cat}
			<button
				onclick={() => (activeCategory = cat)}
				style="
					font-family: var(--font-body);
					font-size: 13px;
					font-weight: 500;
					padding: 6px 16px;
					border-radius: 20px;
					border: 1px solid {activeCategory === cat ? 'var(--color-accent)' : 'var(--color-border)'};
					background: {activeCategory === cat ? 'rgba(4, 180, 224, 0.15)' : 'transparent'};
					color: {activeCategory === cat ? 'var(--color-accent)' : 'var(--color-text-muted)'};
					cursor: pointer;
					transition: all 0.2s ease;
				"
			>
				{cat}
			</button>
		{/each}
	</div>

	<!-- Project grid -->
	<div
		style="
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
			gap: 1.25rem;
		"
	>
		{#each filteredProjects as project (project.id)}
			<ProjectCard {project} onclick={() => openProject(project)} />
		{/each}
	</div>
</section>

<!-- Project detail modal -->
{#if selectedProject}
	<!-- Overlay -->
	<div
		role="button"
		tabindex="0"
		onclick={closeProject}
		onkeydown={(e) => e.key === 'Escape' && closeProject()}
		style="
			position: fixed;
			inset: 0;
			background: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(4px);
			z-index: 50;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1.5rem;
			animation: fadeIn 0.2s ease;
		"
	>
		<!-- Modal panel -->
		<div
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.key === 'Escape' && closeProject()}
			style="
				background: var(--color-surface-700);
				border: 1px solid var(--color-border);
				border-radius: 16px;
				max-width: 640px;
				width: 100%;
				max-height: 85vh;
				overflow-y: auto;
				animation: slideUp 0.25s ease;
			"
		>
			<!-- Modal header -->
			<div
				style="
					height: 120px;
					background: linear-gradient(135deg, {selectedProject.accentColor}22, {selectedProject.accentColor}44);
					border-radius: 16px 16px 0 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 1.75rem;
					border-bottom: 1px solid var(--color-border);
				"
			>
				<div style="display: flex; align-items: center; gap: 1rem;">
					<span style="font-size: 2.5rem;">{selectedProject.icon}</span>
					<div>
						<p
							style="
								font-size: 11px;
								font-weight: 600;
								text-transform: uppercase;
								letter-spacing: 0.08em;
								color: {selectedProject.accentColor};
								margin-bottom: 4px;
							"
						>
							{selectedProject.category}
						</p>
						<h3
							style="
								font-family: var(--font-heading);
								font-size: 1.4rem;
								font-weight: 700;
								color: #fff;
							"
						>
							{selectedProject.name}
						</h3>
					</div>
				</div>
				<button
					onclick={closeProject}
					style="
						width: 36px;
						height: 36px;
						background: rgba(255,255,255,0.08);
						border: 1px solid var(--color-border);
						border-radius: 8px;
						color: var(--color-text-muted);
						cursor: pointer;
						font-size: 18px;
						display: flex;
						align-items: center;
						justify-content: center;
						transition: all 0.2s ease;
					"
				>
					✕
				</button>
			</div>

			<!-- Modal body -->
			<div style="padding: 1.75rem;">
				<p style="font-size: 15px; color: var(--color-text-base); line-height: 1.85; margin-bottom: 1.5rem;">
					{selectedProject.description}
				</p>

				<div>
					<p
						style="
							font-size: 11px;
							font-weight: 600;
							text-transform: uppercase;
							letter-spacing: 0.1em;
							color: var(--color-text-muted);
							margin-bottom: 0.75rem;
						"
					>
						Technologies
					</p>
					<div style="display: flex; flex-wrap: wrap; gap: 7px;">
						{#each selectedProject.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
