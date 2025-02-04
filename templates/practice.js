// Variables for managing attempts and correct answers
let attempts = 3;
let correctAnswer = "";
let currentShape = "";

// Handle the shape selection and update the title
function changeShape() {
  const shape = document.getElementById("shapeSelector").value;
  document.getElementById("chosenShape").textContent =
    shape.charAt(0).toUpperCase() + shape.slice(1); // Capitalize first letter
  currentShape = shape;

  // If practice is started, reset the practice area and attempts
  if (document.getElementById("practiceContent").style.display === "block") {
    attempts = 3;
    document.getElementById(
      "attemptsLeft"
    ).textContent = `Attempts left: ${attempts}`;
    generateQuestion(currentShape);
  }
}

// Handle starting the practice session
document.getElementById("startPractice").addEventListener("click", function () {
  const shape = document.getElementById("shapeSelector").value;
  if (shape === "") {
    alert("Please choose a shape to practice.");
    return;
  }

  // Show the question area and hide the form
  document.getElementById("practiceForm").style.display = "none";
  document.getElementById("practiceContent").style.display = "block";

  // Initialize attempts and display attempts left
  attempts = 3;
  document.getElementById(
    "attemptsLeft"
  ).textContent = `Attempts left: ${attempts}`;

  // Set the current shape and display its name in the header
  currentShape = shape;
  document.getElementById("chosenShape").textContent =
    shape.charAt(0).toUpperCase() + shape.slice(1);

  // Generate the first question for the selected shape
  generateQuestion(currentShape);
});

// Handle checking the answer
document.getElementById("checkAnswer").addEventListener("click", function () {
  const userAnswer = parseFloat(document.getElementById("answerInput").value);
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").innerHTML =
      '<span class="text-green-500">Correct! Well done!</span>';

    // Proceed to the next question after a short delay
    setTimeout(() => {
      attempts = 3;
      document.getElementById(
        "attemptsLeft"
      ).textContent = `Attempts left: ${attempts}`;
      generateQuestion(currentShape); // Generate a new random question
      document.getElementById("feedback").innerHTML = "";
    }, 2000);
  } else {
    attempts--;
    document.getElementById(
      "attemptsLeft"
    ).textContent = `Attempts left: ${attempts}`;
    if (attempts <= 0) {
      document.getElementById("feedback").innerHTML =
        '<span class="text-red-500">Incorrect. The correct answer is: ' +
        correctAnswer +
        "</span>";
      document.getElementById("correctAnswer").classList.remove("hidden");
      document.getElementById("learnLink").classList.remove("hidden");
    } else {
      document.getElementById("feedback").innerHTML =
        '<span class="text-red-500">Incorrect. Try again!</span>';
    }
  }
});

// Function to generate a random question based on the shape
function generateQuestion(shape) {
  let questions = [];
  if (shape === "cube") {
    questions = [
      {
        question:
          "What is the total surface area of a cube with side length 5?",
        answer: 6 * Math.pow(5, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 8?",
        answer: 6 * Math.pow(8, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 10?",
        answer: 6 * Math.pow(10, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 3?",
        answer: 6 * Math.pow(3, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 6?",
        answer: 6 * Math.pow(6, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 4?",
        answer: 6 * Math.pow(4, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 7?",
        answer: 6 * Math.pow(7, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 12?",
        answer: 6 * Math.pow(12, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 2?",
        answer: 6 * Math.pow(2, 2),
      },
      {
        question:
          "What is the total surface area of a cube with side length 9?",
        answer: 6 * Math.pow(9, 2),
      },
    ];
  } else if (shape === "cuboid") {
    questions = [
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=4, width=3, and height=5?",
        answer: 2 * (4 * 3 + 4 * 5 + 3 * 5),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=7, width=2, and height=9?",
        answer: 2 * (7 * 2 + 7 * 9 + 2 * 9),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=6, width=5, and height=3?",
        answer: 2 * (6 * 5 + 6 * 3 + 5 * 3),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=3, width=4, and height=8?",
        answer: 2 * (3 * 4 + 3 * 8 + 4 * 8),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=10, width=5, and height=2?",
        answer: 2 * (10 * 5 + 10 * 2 + 5 * 2),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=8, width=4, and height=7?",
        answer: 2 * (8 * 4 + 8 * 7 + 4 * 7),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=6, width=6, and height=6?",
        answer: 2 * (6 * 6 + 6 * 6 + 6 * 6),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=2, width=7, and height=5?",
        answer: 2 * (2 * 7 + 2 * 5 + 7 * 5),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=9, width=5, and height=6?",
        answer: 2 * (9 * 5 + 9 * 6 + 5 * 6),
      },
      {
        question:
          "What is the total surface area of a cuboid with dimensions length=4, width=3, and height=2?",
        answer: 2 * (4 * 3 + 4 * 2 + 3 * 2),
      },
    ];
  } else if (shape === "cylinder") {
    questions = [
      {
        question:
          "What is the total surface area of a cylinder with radius 3 and height 7?",
        answer: 2 * Math.PI * 3 * (3 + 7),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 5 and height 10?",
        answer: 2 * Math.PI * 5 * (5 + 10),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 4 and height 6?",
        answer: 2 * Math.PI * 4 * (4 + 6),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 2 and height 9?",
        answer: 2 * Math.PI * 2 * (2 + 9),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 7 and height 4?",
        answer: 2 * Math.PI * 7 * (7 + 4),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 8 and height 12?",
        answer: 2 * Math.PI * 8 * (8 + 12),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 6 and height 14?",
        answer: 2 * Math.PI * 6 * (6 + 14),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 10 and height 20?",
        answer: 2 * Math.PI * 10 * (10 + 20),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 12 and height 15?",
        answer: 2 * Math.PI * 12 * (12 + 15),
      },
      {
        question:
          "What is the total surface area of a cylinder with radius 9 and height 8?",
        answer: 2 * Math.PI * 9 * (9 + 8),
      },
    ];
  } else if (shape === "sphere") {
    questions = [
      {
        question: "What is the total surface area of a sphere with radius 5?",
        answer: 4 * Math.PI * Math.pow(5, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 8?",
        answer: 4 * Math.PI * Math.pow(8, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 10?",
        answer: 4 * Math.PI * Math.pow(10, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 3?",
        answer: 4 * Math.PI * Math.pow(3, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 6?",
        answer: 4 * Math.PI * Math.pow(6, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 4?",
        answer: 4 * Math.PI * Math.pow(4, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 7?",
        answer: 4 * Math.PI * Math.pow(7, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 12?",
        answer: 4 * Math.PI * Math.pow(12, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 2?",
        answer: 4 * Math.PI * Math.pow(2, 2),
      },
      {
        question: "What is the total surface area of a sphere with radius 9?",
        answer: 4 * Math.PI * Math.pow(9, 2),
      },
    ];
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomIndex];
  correctAnswer = selectedQuestion.answer;
  document.getElementById("question").textContent = selectedQuestion.question;
  document.getElementById("correctAnswerValue").textContent = correctAnswer;
  document.getElementById("correctAnswer").classList.add("hidden");
  document.getElementById("learnLink").classList.add("hidden");
}
