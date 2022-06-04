import spamFraudWords from "./spamWordList.js";

const getSpamWords = () => {
  const words = spamFraudWords;
  const filteredWords = [];

  words.forEach((word) => {
    filteredWords.push(word.toLocaleLowerCase());
  });

  return filteredWords;
};

export default getSpamWords;
