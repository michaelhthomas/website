<script lang="ts">
  import { slide } from 'svelte/transition';
  import GameRow from './game-row.svelte';
  import {
    createWordleGame,
    type Guess,
    getColorForState,
    LetterState
  } from './store';

  let { state, makeGuess } = createWordleGame();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const keyboard = [
    'qwertyuiop'.split(''),
    'asdfghjkl'.split(''),
    'zxcvbnm'.split('')
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
  class="game relative w-full max-w-[500px] mx-auto mt-12 space-y-12 md:space-y-18 lg:space-y-24"
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

  <div class="space-y-2 mx-8">
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
    {#each keyboard as row}
      <div class="flex flex-row gap-2 justify-center">
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
      </div>
    {/each}

    <div class="flex">
      <button
        on:click={handleBackspace}
        class="p-4 bg-neutral-800 text-neutral-200 border-neutral-700 rounded"
        aria-label="Backspace"
      >
        &#x232B
      </button>
      <div class="grow" />
      <button
        on:click={handleEnter}
        class="p-4 bg-neutral-800 text-neutral-200 border-neutral-700 rounded"
      >
        Enter
      </button>
    </div>
  </div>
</div>

<svelte:window on:keydown={onKeyDown} />
