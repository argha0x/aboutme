import * as tf from '@tensorflow/tfjs';
import { UniversalSentenceEncoder } from '@tensorflow-models/universal-sentence-encoder';

class ChatModel {
  constructor() {
    this.qaPairs = [];
  }

  async loadModel() {
    // No model loading needed for keyword-based system
    return true;
  }

  async train(data) {
    this.qaPairs = data;
    console.log('Training completed successfully');
  }

  async predictAnswer(question) {
    try {
      if (!question || typeof question !== 'string') {
        return "Please ask a valid question.";
      }

      // Convert to lowercase for case-insensitive comparison
      const userQuestion = question.toLowerCase().trim();
      
      // First check for exact matches
      const exactMatch = this.qaPairs.find(pair => 
        pair.question.toLowerCase() === userQuestion
      );
      if (exactMatch) {
        return exactMatch.answer;
      }

      // If no exact match, find the best matching question
      let bestMatchIndex = -1;
      let bestMatchScore = 0;

      this.qaPairs.forEach((pair, index) => {
        const questionLower = pair.question.toLowerCase();
        let score = 0;

        // Split into words and remove short words
        const userWords = userQuestion.split(/\s+/).filter(word => word.length > 2);
        const questionWords = questionLower.split(/\s+/).filter(word => word.length > 2);

        // Count exact word matches
        userWords.forEach(word => {
          if (questionWords.includes(word)) {
            score += 10;
          }
        });

        // Check for partial word matches
        userWords.forEach(word => {
          questionWords.forEach(qWord => {
            if (qWord.includes(word) || word.includes(qWord)) {
              score += 5;
            }
          });
        });

        // Check for similar beginnings
        if (userQuestion.startsWith(questionLower.substring(0, 5))) {
          score += 5;
        }

        // Check if question contains user's words
        if (userWords.some(word => questionLower.includes(word))) {
          score += 3;
        }

        if (score > bestMatchScore) {
          bestMatchScore = score;
          bestMatchIndex = index;
        }
      });

      // Return the corresponding answer if we found a good match
      if (bestMatchScore >= 5 && bestMatchIndex !== -1) {
        return this.qaPairs[bestMatchIndex].answer;
      }

      // Default response for no match
      return "I'm sorry, I couldn't find a relevant answer. Here are some topics you can ask about:\n" +
             "- My experience and background\n" +
             "- My education and qualifications\n" +
             "- Companies I've worked for\n" +
             "- My skills and expertise\n" +
             "- My projects and research\n" +
             "- My location and relocation preferences\n\n" +
             "For more specific inquiries, you can email me at rghchaks73@gmail.com";
    } catch (error) {
      console.error('Error predicting answer:', error);
      return "I'm sorry, I encountered an error while processing your question. Please try again.";
    }
  }
}

export default ChatModel; 