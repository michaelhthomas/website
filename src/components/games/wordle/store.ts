import { get, writable } from 'svelte/store';
import { Map } from 'svelte/reactivity';
import { getWordOfTheDay } from './word';

export enum LetterState {
  NotGuessed = 'ng',
  Incorrect = 'i',
  WrongPos = 'w',
  Correct = 'c'
}

// prettier-ignore
export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j'
| 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' 
| 'x' | 'y' | 'z';

export type Guess = [Letter, Letter, Letter, Letter, Letter];
export type Hint = [Letter, LetterState][];

function assertLetter(c: string): asserts c is Letter {
  if (c.length != 1 || c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) {
    throw new Error('Invalid letter in string.');
  }
}

export interface WordleState {
  letters: Map<Letter, LetterState>;
  correctWord: string;
  guesses: Hint[];
}

export function createWordleGame(correctWord?: string) {
  correctWord ??= getWordOfTheDay();

  const state = writable<WordleState>({
    letters: new Map(),
    correctWord,
    guesses: []
  });

  function generateHint(guess: Guess): Hint {
    const cs = get(state);
    const hint: [Letter, LetterState][] = [];

    for (let i = 0; i < guess.length; i++) {
      const gl = guess[i];

      if (gl === cs.correctWord[i]) {
        cs.letters.set(gl, LetterState.Correct);
        hint.push([gl, LetterState.Correct]); // Correct letter in the correct position
      } else if (cs.correctWord.includes(gl)) {
        if (cs.letters.get(gl) != LetterState.Correct)
          cs.letters.set(gl, LetterState.WrongPos);
        hint.push([gl, LetterState.WrongPos]);
      } else {
        if (!cs.letters.has(gl)) cs.letters.set(gl, LetterState.Incorrect);
        hint.push([gl, LetterState.Incorrect]);
      }
    }

    state.set(cs);

    return hint;
  }

  function makeGuess(guess: Guess) {
    const hint = generateHint(guess);

    const cs = get(state);
    cs.guesses.push(hint);

    state.set(cs);
  }

  return { state, makeGuess };
}
