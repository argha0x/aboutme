class ChatModel {
  constructor() {
    this.questions = [];
    this.answers = [];
  }

  initialize(questions, answers) {
    if (!Array.isArray(questions) || !Array.isArray(answers) || questions.length !== answers.length) {
      console.error('Invalid chat data format');
      return;
    }
    this.questions = questions;
    this.answers = answers;
  }

  findBestMatch(userQuestion) {
    if (!userQuestion || typeof userQuestion !== 'string') {
      return "Please ask a valid question.";
    }

    // Convert to lowercase for case-insensitive comparison
    const userQuestionLower = userQuestion.toLowerCase().trim();
    
    // Find the best matching question
    let bestMatchIndex = -1;
    let bestMatchScore = 0;

    // Keywords mapping for common queries
    const keywordMap = {
      'skill': 3, // index of skills answer
      'experience': 0,
      'education': 1,
      'company': 2,
      'project': 4,
      'location': 5,
      'relocate': 6,
      'interest': 7,
      'language': 8,
      'year': 9,
      'surgical': 10,
      'trait': 11,
      'drive': 12,
      'research': 13,
      'yourself': 14,
      'introduce': 14,
      'about you': 14
    };

    // First check for direct keyword matches
    for (const [keyword, index] of Object.entries(keywordMap)) {
      if (userQuestionLower.includes(keyword)) {
        return this.answers[index];
      }
    }

    this.questions.forEach((question, index) => {
      const questionLower = question.toLowerCase();
      let score = 0;

      // Check for exact match
      if (questionLower === userQuestionLower) {
        score = 100;
      } else {
        // Check for partial matches
        const userWords = userQuestionLower.split(/\s+/).filter(word => word.length > 2);
        const questionWords = questionLower.split(/\s+/).filter(word => word.length > 2);
        
        // Count matching words
        userWords.forEach(word => {
          if (questionWords.includes(word)) {
            score += 10;
          }
          // Check for partial word matches
          questionWords.forEach(qWord => {
            if (qWord.includes(word) || word.includes(qWord)) {
              score += 5;
            }
          });
        });

        // Check for similar beginnings
        if (userQuestionLower.startsWith(questionLower.substring(0, 5))) {
          score += 5;
        }

        // Check if question contains user's words
        if (userWords.some(word => questionLower.includes(word))) {
          score += 3;
        }
      }

      if (score > bestMatchScore) {
        bestMatchScore = score;
        bestMatchIndex = index;
      }
    });

    // Return the corresponding answer if we found a good match
    if (bestMatchScore >= 5 && bestMatchIndex !== -1) {
      return this.answers[bestMatchIndex];
    }

    // Default response for no match
    return "I'm sorry, I couldn't find a relevant answer. Here are some topics you can ask about:\n" +
           "- My experience and background\n" +
           "- My education and qualifications\n" +
           "- Companies I've worked for\n" +
           "- My skills and expertise\n" +
           "- My projects and research\n" +
           "- My location and relocation preferences";
  }
}

export default ChatModel; 