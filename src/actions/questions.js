import { QUESTIONS } from "../constants";

export function questions(question) {
  return {
    type: QUESTIONS,
    question
  };
}
