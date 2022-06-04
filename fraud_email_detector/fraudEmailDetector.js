import getSpamWords from "./getSpamWords.js";

const fraudEmailDetector = (inputEmailContent) => {
  let spamWordCount = 0;

  const spamWords = getSpamWords();
  const emailContent = inputEmailContent.replace(".", "");

  const emailContentToArray = emailContent.split(" ");
  const emailContenWordCount = countWords(emailContentToArray);

  emailContentToArray.forEach((emailWord) => {
    for (const spamWord of spamWords) {
      if (emailWord === spamWord) {
        spamWordCount++;
      }
    }
  });

  function countWords(words) {
    return words.length;
  }

  return `${((spamWordCount / emailContenWordCount) * 100).toFixed(
    2
  )}% Probability of Spam.`;
};

export default fraudEmailDetector;
