import fraudEmailDetector from "./fraudEmailDetector.js";

const emailContent = "Enter you email & password here.";

const checkFraudPercentage = fraudEmailDetector(emailContent);

console.log(checkFraudPercentage);
