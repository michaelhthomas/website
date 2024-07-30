import { get, writable } from 'svelte/store';
import { Map } from 'svelte/reactivity';
import { getWordOfTheDay, validWordsList } from './word';
import { match } from 'ts-pattern';

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

export function getColorForState(state: LetterState): string {
  return match(state)
    .with(LetterState.NotGuessed, () => '')
    .with(LetterState.Incorrect, () => 'bg-neutral-700')
    .with(LetterState.WrongPos, () => 'bg-yellow-500')
    .with(LetterState.Correct, () => 'bg-green-500')
    .exhaustive();
}

function assertLetter(c: string): asserts c is Letter {
  if (c.length != 1 || c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) {
    throw new Error('Invalid letter in string.');
  }
}

export interface WordleState {
  letters: Map<Letter, LetterState>;
  correctWord: string;
  guesses: Hint[];
  message: string | null;
}

export function createWordleGame(correctWord?: string) {
  correctWord ??= getWordOfTheDay();

  const state = writable<WordleState>({
    letters: new Map(),
    correctWord,
    guesses: [],
    message: null
  });

  function generateHint(guess: Guess): Hint {
    const cs = get(state);
    const letters = cs.correctWord.split('');
    const hint: [Letter, LetterState][] = [];

    // Handle correct guesses first, filter from letters
    for (let i = 0; i < guess.length; i++) {
      const gl = guess[i];

      if (gl === cs.correctWord[i]) {
        cs.letters.set(gl, LetterState.Correct);
        delete letters[letters.indexOf(gl)];
        hint[i] = [gl, LetterState.Correct]; // Correct letter in the correct position
      }
    }

    // Handle incorrect and wrong position letters
    for (let i = 0; i < guess.length; i++) {
      const gl = guess[i];
      if (gl === cs.correctWord[i]) continue;

      if (letters.includes(gl)) {
        if (cs.letters.get(gl) != LetterState.Correct)
          cs.letters.set(gl, LetterState.WrongPos);
        hint[i] = [gl, LetterState.WrongPos];
      } else {
        if (!cs.letters.get(gl)) cs.letters.set(gl, LetterState.Incorrect);
        hint[i] = [gl, LetterState.Incorrect];
      }
    }

    state.set(cs);

    return hint;
  }

  function displayMessage(msg: string) {
    const cs = get(state);
    cs.message = msg;
    state.set(cs);

    setTimeout(() => {
      const cs = get(state);
      cs.message = null;
      state.set(cs);
    }, 3000);
  }

  function makeGuess(guess: Guess) {
    if (!validWordsList.includes(guess.join(''))) {
      displayMessage('Not in word list');
      return;
    }

    const hint = generateHint(guess);

    const cs = get(state);
    cs.guesses.push(hint);

    state.set(cs);
  }

  return { state, makeGuess };
}
