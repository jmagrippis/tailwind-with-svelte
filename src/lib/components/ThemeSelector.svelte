<script lang="ts">
	let colorSchemes = ['Auto', 'Light', 'Dark'];
	let selectedColorScheme = colorSchemes[0];

	const onChange = () => {
		const htmlElement = document.firstElementChild as HTMLElement;
		htmlElement.dataset.colorScheme = selectedColorScheme.toLocaleLowerCase();
	};
</script>

<form class="mb-4">
	<p class="text-sm leading-5 text-copy-muted mb-4">
		Which theme would you like to use?
	</p>
	<fieldset>
		<legend class="sr-only">Color scheme selector</legend>
		<div class="flex items-center gap-8">
			{#each colorSchemes as scheme}
				<div class="flex items-center">
					<input
						id={scheme}
						name="color-scheme"
						type="radio"
						class="focus:ring-primary-500 h-4 w-4"
						bind:group={selectedColorScheme}
						value={scheme}
						on:change={onChange}
					/>
					<label for={scheme} class="ml-3 block text-sm cursor-pointer"
						>{scheme}</label
					>
				</div>
			{/each}
		</div>
	</fieldset>
</form>
