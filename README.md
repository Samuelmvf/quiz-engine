# Quiz Engine

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## About the project 📋

This project is a Quiz Engine developed using React and CSS/SCSS.
The primary goal of the project is to provide a dynamic and interactive platform for
rendering quiz questions sequentially, based on a predefined JSON structure. This engine is designed to enhance user engagement
by supporting various question types and conditional navigation, offering a tailored quiz experience.

#### This APP allows you to:
- Run Dynamic Quizzes: Design quizzes with various question types using a JSON structure. Easily update or modify quizzes without altering the core application logic.
- Engage Users with Diverse Question Types:
    - One-Choice Questions: Provide questions where users select one answer from multiple options.
    - Multiple-Choice Questions: Enable questions where users can choose multiple answers, offering more flexibility and depth in assessments.
    - Input Questions: Include open-ended questions that allow users to input text responses, capturing detailed feedback or answers.
- Navigate Conditionally: Implement conditional logic that allows the quiz to adapt based on user responses. This feature enables personalized quiz paths, enhancing the interactivity and relevance of the quiz experience.

## Built With 🔨

- React (v18.3.1)
- JavaScript
- HTML5
- SCSS
- SASS
- React Hook Form
- Vite
- npm

## Getting Started 🚀

### ⚙️ Prerequisites
- Node.js >= 18.0.0

You can download Node.js [here](https://nodejs.org/en).\

### ‍✅️ JSON Rules

The JSON file used on the app is on src/assets/api-response-1.json
You can update the file or copy it, and apply any updates following the rules descripted below.
Feel free to play with it!

#### Fields from Quiz 

```json
// QUIZ
{
  "id": 1, // Identifier (required)
  "title": "Food-Related Questions Form", // Title (required)
  "questions": [] // Questions
}
```

Question Details

```json
// QUESTION
{
  "id": 1, // Question identifier (required)
  "type": "oneChoice", // Question type ( oneChoice || multipleChoice || inputText )
  "requiredAnswers": [{ // (required at least a empty array = [])
    "questionId": 1, // one of the previous question identifier (required)
    "answer": 1 // answer from question, needs to be a number like answerId from oneChoice or multipleChoice (required)
  }], 
  "title": "Favorite Cuisine", // Question title (required)
  "description": "Choose your favorite type of cuisine from the options below.", // Question description (required)
  "image": { // If you don't want to use image, just change it for a empty object = {}
    "width": "250px", // Image width (required)
    "height": "250px", // Image height (required)
    "url": "https://images.stockcake.com/public/b/3/b/b3b241cb-3b2b-4007-8f08-1b616570a2ea_large/street-food-vendor-stockcake.jpg", // Image URL (required)
    "description": "Country food" // Image description to use on alt attribute (required)
  },
  "options": [ // Question options for oneChoice and multipleChoice question types (required for oneChoice and multipleChoice Questions)
    {
      "id": 1, // Option identifier (required)
      "label": "Italian" // Option label (required)
    },
    {
      "id": 2,
      "label": "Chinese"
    }
  ]
}
```

### 🏃‍♂️ Running the application

Once you have every prerequisite installed and configured properly, open your terminal and go to the project root folder and run the command bellow:

```bash
npm install
```

You can run the application by executing the command below in the folder mentioned:

```bash
npm run dev
```

The application will be started at localhost, please take a look on your console log, to check what port the application is running.


