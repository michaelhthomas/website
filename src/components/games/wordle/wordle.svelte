<script lang="ts">
  import { slide } from 'svelte/transition';
  import GameRow from './game-row.svelte';
  import {
    createWordleGame,
    type Guess,
    getColorForState,
    LetterState,
    type Letter
  } from './store';

  let { state, makeGuess } = createWordleGame();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const keyboard = [
    'qwertyuiop'.split('') as Letter[],
    'asdfghjkl'.split('') as Letter[],
    'zxcvbnm'.split('') as Letter[]
  ];

  let currentGuess = '';

  function handleLetter(l: string) {
    if (currentGuess.length < 5) currentGuess += l;
  }
  function handleBackspace() {
    currentGuess = currentGuess.slice(0, -1);
  }
  function handleEnter() {
    if (currentGuess.length != 5) return;
    makeGuess(currentGuess.split('') as Guess);
    currentGuess = '';
  }

  function onKeyDown({ key }: { key: string }) {
    if (alphabet.includes(key)) {
      handleLetter(key);
    } else if (key == 'Enter') {
      handleEnter();
    } else if (key == 'Backspace') {
      handleBackspace();
    }
  }
</script>

<div
  class="game relative w-full max-w-[650px] mx-auto mt-12 lg:mt-24 space-y-12 md:space-y-18 lg:space-y-32"
>
  {#if $state.message}
    <div class="fixed left-0 right-0 top-0">
      <div
        transition:slide={{ axis: 'y' }}
        class="w-fit mx-auto z-1 p-2 mt-4 bg-neutral-700 text-white rounded shadow-lg"
      >
        {$state.message}
      </div>
    </div>
  {/if}

  <div class="space-y-2 mx-auto px-8 max-w-[500px]">
    {#each $state.guesses as guess}
      <GameRow {guess} />
    {/each}

    {#if $state.guesses.length < 6}
      <GameRow letters={currentGuess} />
    {/if}

    {#each Array(5 - $state.guesses.length) as _}
      <GameRow />
    {/each}
  </div>

  <div class="space-y-2">
    {#each keyboard as row, i}
      <div
        class="flex flex-row gap-1 sm:gap-2 justify-center text-xl font-semibold"
      >
        {#if i == 2}
          <button
            on:click={handleBackspace}
            class="p-2 sm:p-3 md:p-4 bg-neutral-800 text-neutral-200 border-neutral-700 rounded"
            aria-label="Backspace"
          >
            &#x232B
          </button>
        {/if}
        {#each row as key}
          <button
            class={`w-8 sm:w-10 md:w-12 py-2 sm:py-3 md:py-4 text-center rounded border-neutral-700 text-neutral-200 ${getColorForState($state.letters.get(key) ?? LetterState.NotGuessed) || 'bg-neutral-800'}`}
            on:click={() => {
              if (currentGuess.length < 5) currentGuess += key;
            }}
          >
            {key}
          </button>
        {/each}
        {#if i == 2}
          <button
            on:click={handleEnter}
            class="p-2 sm:p-3 md:p-4 bg-neutral-800 text-neutral-200 border-neutral-700 rounded text-base"
          >
            Enter
          </button>
        {/if}
      </div>
    {/each}
  </div>
</div>

<svelte:window on:keydown={onKeyDown} />
