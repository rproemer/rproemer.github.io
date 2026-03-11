<script lang="ts">
	let { name, level }: { name: string; level: number } = $props();

	let el = $state<HTMLDivElement | null>(null);
	let animated = $state(false);

	$effect(() => {
		const target = el;
		if (!target) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// Small delay so bars don't all fire at once
					setTimeout(() => {
						animated = true;
					}, 100);
					observer.disconnect();
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(target);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="mb-5">
	<div class="flex justify-between items-center mb-2">
		<span style="font-family: var(--font-body); font-size: 14px; color: #e2e8f0;">{name}</span>
		<span style="font-size: 13px; font-weight: 600; color: var(--color-accent);">{level}%</span>
	</div>
	<div
		style="height: 5px; background: var(--color-surface-500); border-radius: 3px; overflow: hidden;"
	>
		<div
			style="
				height: 100%;
				border-radius: 3px;
				background: linear-gradient(90deg, var(--color-accent), var(--color-accent-dark));
				width: {animated ? level : 0}%;
				transition: width 1.1s cubic-bezier(0.4, 0, 0.2, 1);
			"
		></div>
	</div>
</div>
