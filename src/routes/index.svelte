<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
</script>

<h1 class="text-4xl underline decoration-primary-400 decoration-wavy mb-4">
	Tailwind 3 with SvelteKit
</h1>

<ThemeSelector />

<Card>
	<p>
		Visit <a
			class="underline decoration-primary-400"
			href="https://kit.svelte.dev">kit.svelte.dev</a
		> to read more about SvelteKit
	</p>
</Card>

<Card>
	<p>
		Visit <a
			class="underline decoration-primary-400"
			href="https://tailwindcss.com/">tailwindcss.com</a
		> to read more about Tailwind
	</p>
</Card>
