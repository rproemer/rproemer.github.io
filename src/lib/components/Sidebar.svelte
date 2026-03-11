<script lang="ts">
	import { Home, User, FileText, Briefcase, Mail } from 'lucide-svelte';

	let {
		activeSection,
		onNavigate
	}: {
		activeSection: string;
		onNavigate: (id: string) => void;
	} = $props();

	const navItems = [
		{ id: 'home', icon: Home, label: 'Home' },
		{ id: 'about', icon: User, label: 'About' },
		{ id: 'resume', icon: FileText, label: 'Resume' },
		{ id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
		{ id: 'contact', icon: Mail, label: 'Contact' }
	];
</script>

<!-- Desktop sidebar -->
<nav
	class="desktop-sidebar"
	style="
		width: 76px;
		background: var(--color-surface-900);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 2px;
		padding: 1.25rem 0;
		flex-shrink: 0;
		border-right: 1px solid var(--color-border);
		position: relative;
		z-index: 10;
	"
>
	{#each navItems as item}
		{@const isActive = activeSection === item.id}
		<button
			onclick={() => onNavigate(item.id)}
			title={item.label}
			style="
				position: relative;
				width: 64px;
				padding: 8px 0 4px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 3px;
				border-radius: 12px;
				border: none;
				background: {isActive ? 'rgba(4, 180, 224, 0.15)' : 'transparent'};
				color: {isActive ? 'var(--color-accent)' : 'var(--color-text-muted)'};
				cursor: pointer;
				transition: all 0.2s ease;
				flex-shrink: 0;
			"
			onmouseenter={(e) => {
				if (!isActive) {
					const el = e.currentTarget as HTMLElement;
					el.style.background = 'rgba(255,255,255,0.05)';
					el.style.color = '#fff';
				}
			}}
			onmouseleave={(e) => {
				if (!isActive) {
					const el = e.currentTarget as HTMLElement;
					el.style.background = 'transparent';
					el.style.color = 'var(--color-text-muted)';
				}
			}}
		>
			{#if isActive}
				<!-- Active indicator bar -->
				<div
					style="
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 3px;
						height: 24px;
						background: var(--color-accent);
						border-radius: 0 2px 2px 0;
					"
				></div>
			{/if}
			<item.icon size={18} />
			<span style="font-size: 9px; font-weight: 500; font-family: var(--font-body); letter-spacing: 0.02em;">{item.label}</span>
		</button>
	{/each}
</nav>

<!-- Mobile bottom nav -->
<nav
	class="mobile-nav"
	style="
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--color-surface-900);
		border-top: 1px solid var(--color-border);
		z-index: 100;
		padding: 0.5rem 0 calc(0.5rem + env(safe-area-inset-bottom));
	"
>
	<div style="display: flex; justify-content: space-around; align-items: center;">
		{#each navItems as item}
			{@const isActive = activeSection === item.id}
			<button
				onclick={() => onNavigate(item.id)}
				style="
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 3px;
					padding: 6px 12px;
					background: none;
					border: none;
					cursor: pointer;
					color: {isActive ? 'var(--color-accent)' : 'var(--color-text-muted)'};
					transition: color 0.2s ease;
				"
			>
				<item.icon size={20} />
				<span style="font-size: 10px; font-weight: 500; font-family: var(--font-body);">
					{item.label}
				</span>
			</button>
		{/each}
	</div>
</nav>

<style>
	@media (max-width: 768px) {
		.desktop-sidebar {
			display: none !important;
		}
		.mobile-nav {
			display: block !important;
		}
	}
</style>
