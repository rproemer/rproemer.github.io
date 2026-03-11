<script lang="ts">
	import {
		experience,
		education,
		technicalSkills,
		architectureSkills,
		knowledgeTags,
		certifications
	} from '$lib/data/resume';
	import SkillBar from '$lib/components/SkillBar.svelte';
</script>

<section class="section-fade-in" style="padding: 2.5rem 3rem; max-width: 900px;">
	<h2 class="section-title">Resume</h2>

	<!-- Experience -->
	<div style="margin-bottom: 3rem;">
		<h3
			style="
				font-family: var(--font-heading);
				font-size: 0.8rem;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.12em;
				color: var(--color-accent);
				margin-bottom: 1.75rem;
			"
		>
			Experience
		</h3>
		<div style="display: flex; flex-direction: column; gap: 2.5rem;">
			{#each experience as job}
				<div class="timeline-item" style="padding-bottom: 0.5rem;">
					<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
						<h4
							style="
								font-family: var(--font-heading);
								font-size: 1rem;
								font-weight: 600;
								color: #fff;
							"
						>
							{job.title}
						</h4>
						<span
							style="
								font-size: 12px;
								font-weight: 500;
								color: var(--color-accent);
								background: rgba(4, 180, 224, 0.1);
								border: 1px solid rgba(4, 180, 224, 0.25);
								border-radius: 20px;
								padding: 2px 10px;
								white-space: nowrap;
							"
						>
							{job.period}
						</span>
					</div>
					<div
						style="
							font-size: 13px;
							color: var(--color-text-muted);
							margin-bottom: 1rem;
						"
					>
						{job.company} · {job.location}
					</div>
					<ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0;">
						{#each job.bullets as bullet}
							<li
								style="
									font-size: 14px;
									color: var(--color-text-base);
									line-height: 1.75;
									padding-left: 1.25rem;
									position: relative;
								"
							>
								<span
									style="
										position: absolute;
										left: 0;
										top: 9px;
										width: 5px;
										height: 5px;
										background: var(--color-accent);
										border-radius: 50%;
									"
								></span>
								{bullet}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<!-- Education (only if data exists) -->
	{#if education.length > 0}
		<div style="margin-bottom: 3rem;">
			<h3
				style="
					font-family: var(--font-heading);
					font-size: 0.8rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.12em;
					color: var(--color-accent);
					margin-bottom: 1.75rem;
				"
			>
				Education
			</h3>
			<div style="display: flex; flex-direction: column; gap: 1.5rem;">
				{#each education as edu}
					<div class="timeline-item">
						<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
							<h4 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 600; color: #fff;">
								{edu.degree}
							</h4>
							<span style="font-size: 12px; color: var(--color-accent);">{edu.period}</span>
						</div>
						<div style="font-size: 13px; color: var(--color-text-muted); margin-top: 0.25rem;">
							{edu.institution}
						</div>
						{#if edu.notes}
							<p style="font-size: 13px; color: var(--color-text-base); margin-top: 0.5rem;">{edu.notes}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Skills -->
	<div style="margin-bottom: 3rem;">
		<h3
			style="
				font-family: var(--font-heading);
				font-size: 0.8rem;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.12em;
				color: var(--color-accent);
				margin-bottom: 1.75rem;
			"
		>
			Skills
		</h3>
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
			<div>
				<h4
					style="
						font-family: var(--font-heading);
						font-size: 0.85rem;
						font-weight: 500;
						color: var(--color-text-muted);
						text-transform: uppercase;
						letter-spacing: 0.08em;
						margin-bottom: 1.25rem;
					"
				>
					Technical
				</h4>
				{#each technicalSkills as skill}
					<SkillBar name={skill.name} level={skill.level} />
				{/each}
			</div>
			<div>
				<h4
					style="
						font-family: var(--font-heading);
						font-size: 0.85rem;
						font-weight: 500;
						color: var(--color-text-muted);
						text-transform: uppercase;
						letter-spacing: 0.08em;
						margin-bottom: 1.25rem;
					"
				>
					Leadership & Management
				</h4>
				{#each architectureSkills as skill}
					<SkillBar name={skill.name} level={skill.level} />
				{/each}
			</div>
		</div>
	</div>

	<!-- Knowledge tags -->
	<div style="margin-bottom: 3rem;">
		<h3
			style="
				font-family: var(--font-heading);
				font-size: 0.8rem;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.12em;
				color: var(--color-accent);
				margin-bottom: 1.25rem;
			"
		>
			Knowledge
		</h3>
		<div style="display: flex; flex-wrap: wrap; gap: 8px;">
			{#each knowledgeTags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>

	<!-- Certifications -->
	{#if certifications.length > 0}
		<div>
			<h3
				style="
					font-family: var(--font-heading);
					font-size: 0.8rem;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.12em;
					color: var(--color-accent);
					margin-bottom: 1.25rem;
				"
			>
				Certifications
			</h3>
			<div style="display: flex; flex-direction: column; gap: 0.75rem;">
				{#each certifications as cert}
					<div
						style="
							display: flex;
							align-items: center;
							gap: 1rem;
							background: var(--color-surface-600);
							border: 1px solid var(--color-border);
							border-radius: 8px;
							padding: 0.875rem 1.25rem;
						"
					>
						<span style="font-size: 1.25rem;">🏅</span>
						<div>
							<div style="font-size: 14px; font-weight: 600; color: #fff;">{cert.name}</div>
							<div style="font-size: 12px; color: var(--color-text-muted);">
								{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>
