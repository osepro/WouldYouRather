import { QUESTIONS } from "../constants";

export function allquestions(question) {
  return {
    type: QUESTIONS,
    question
  };
}
