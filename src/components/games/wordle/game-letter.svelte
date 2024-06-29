<script lang="ts">
  import { match } from 'ts-pattern';
  import { LetterState } from './store';

  export let letter: string | undefined = undefined;
  export let state: LetterState = LetterState.NotGuessed;

  let color = match(state)
    .with(LetterState.NotGuessed, () => '')
    .with(LetterState.Incorrect, () => 'bg-neutral-700')
    .with(LetterState.WrongPos, () => 'bg-yellow-500')
    .with(LetterState.Correct, () => 'bg-green-500')
    .exhaustive();
</script>

<div
  class={`text-white text-4xl select-none font-bold aspect-square flex items-center justify-center text-center rounded border-2 border-neutral-700 ${color}`}
>
  {letter}
</div>
