let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("activity-image");

  // Reset slideIndex if it goes beyond the number of slides
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides by default
  }

  // Display the current slide and the next two slides
  for (let i = slideIndex; i < slideIndex + 3; i++) {
    const index = i % slides.length; // Calculate the actual index within the range
    slides[index].style.display = "block"; // Display the slide
  }
}

let quizIndex = 0;
showQuizSlides(quizIndex);

function plusQuizSlides(n) {
  showQuizSlides(quizIndex += n);
}

function showQuizSlides(n) {
  const quizSlides = document.getElementsByClassName("quiz-image");

  // Reset quizIndex if it goes beyond the number of slides
  if (n >= quizSlides.length) {
    quizIndex = 0;
  } else if (n < 0) {
    quizIndex = quizSlides.length - 1;
  }

  // Hide all quiz slides
  for (let i = 0; i < quizSlides.length; i++) {
    quizSlides[i].style.display = "none"; // Hide all slides by default
  }

  // Display the current quiz slide and the next two slides
  for (let i = quizIndex; i < quizIndex + 3; i++) {
    const index = i % quizSlides.length; // Calculate the actual index within the range
    quizSlides[index].style.display = "block"; // Display the slide
  }
}


// Define examIndex globally to keep track of the current slide index
let examIndex = 0;

// Function to display exam slides
function plusExamSlides(n) {
  const examSlides = document.getElementsByClassName("exams-image");

  // Hide all exam slides
  for (let i = 0; i < examSlides.length; i++) {
    examSlides[i].style.display = "none";
  }

  // Update examIndex based on the button clicked
  examIndex += n;

  // Check if examIndex exceeds the range of slides
  if (examIndex >= examSlides.length) {
    examIndex = 0; // Reset to the beginning
  } else if (examIndex < 0) {
    examIndex = examSlides.length - 1; // Loop to the last slide
  }

  // Display the current exam slide and the next two slides
  for (let i = examIndex; i < examIndex + 3; i++) {
    const index = i % examSlides.length; // Calculate the actual index within the range
    examSlides[index].style.display = "block";
  }
}

// Call plusExamSlides with an initial argument to display the first set of slides
plusExamSlides(0);

  