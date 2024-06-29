import answerWords from './assets/answer-wb.txt?raw';
import validWords from './assets/valid-wb.txt?raw';

const baseDate = new Date(2021, 5, 19, 0, 0, 0, 0);

export const answerWordList = answerWords.split('\n');
export const validWordsList = [...answerWordList, ...validWords.split('\n')];

function getDateDifference(e: Date, a: Date) {
  const s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.floor(t / 864e5);
}

export function getWordOfTheDay() {
  const today = new Date();
  const diff = getDateDifference(baseDate, today);
  const index = diff % answerWordList.length;

  return answerWordList[index];
}
