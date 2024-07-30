<script lang="ts">
  import type { Hint } from './store';
  import GameLetter from './game-letter.svelte';

  export let guess: Hint | undefined = undefined;
  export let letters: string | undefined = undefined;
</script>

<div class="grid grid-cols-5 gap-2 w-full">
  {#if guess}
    {#each guess as [letter, state]}
      <GameLetter
        {state}
        {letter}
      />
    {/each}
  {:else if letters}
    {#each letters as letter}
      <GameLetter {letter} />
    {/each}
    {#each Array(5 - letters.length) as _}
      <GameLetter />
    {/each}
  {:else}
    {#each Array(5) as _}
      <GameLetter />
    {/each}
  {/if}
</div>
