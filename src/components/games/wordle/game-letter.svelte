<script lang="ts">
  import { LetterState, getColorForState } from './store';

  export let letter: string | undefined = undefined;
  export let state: LetterState = LetterState.NotGuessed;

  let color = getColorForState(state);
</script>

<div
  class={`text-white text-4xl select-none font-bold aspect-square flex items-center justify-center text-center rounded border-2 border-neutral-700 ${color}`}
>
  {letter}
</div>
