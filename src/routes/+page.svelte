<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import Home from '$lib/components/sections/Home.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Resume from '$lib/components/sections/Resume.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';

	let activeSection = $state('home');

	function navigate(id: string) {
		activeSection = id;
	}
</script>

<svelte:head>
	<title>Richard Roemer — PMP · Systems Architect · AI Product Engineer</title>
</svelte:head>

<div class="app-shell">
	<Sidebar {activeSection} onNavigate={navigate} />

	<div class="content-pane">
		<ProfileCard />

		<main class="main-area">
			{#key activeSection}
				<div class="section-wrapper section-fade-in">
					{#if activeSection === 'home'}
						<Home />
					{:else if activeSection === 'about'}
						<About />
					{:else if activeSection === 'resume'}
						<Resume />
					{:else if activeSection === 'portfolio'}
						<Portfolio />
					{:else if activeSection === 'contact'}
						<Contact />
					{/if}
				</div>
			{/key}
		</main>
	</div>
</div>

<style>
	.app-shell {
		display: flex;
		height: 100dvh;
		overflow: hidden;
		background: var(--color-surface-800);
	}

	.content-pane {
		display: flex;
		flex: 1;
		overflow: hidden;
		min-width: 0;
	}

	.main-area {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
		min-width: 0;
	}

	.section-wrapper {
		min-height: 100%;
	}

	/* Mobile layout */
	@media (max-width: 768px) {
		.app-shell {
			flex-direction: column;
		}

		.content-pane {
			flex-direction: column;
			overflow: hidden;
		}

		.main-area {
			padding-bottom: 72px; /* space for bottom nav */
		}

		.section-wrapper {
			min-height: unset;
		}
	}
</style>
