// Первый вопрос

const firstAnswer = document.querySelectorAll('.first-button-answer'),
      firstQuestion = document.querySelector('.first-question'),
      firstImage = document.querySelector('.first-film-picture'),
      firstTitle = document.querySelector('.first-film-title');

firstAnswer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         e.target.classList.add('button-green');
         firstQuestion.style.display = 'none';
         firstImage.style.display = 'block';
         firstTitle.style.display = 'block';
      } else {
         e.target.classList.add('button-red');
         
      }
   });
});


// Второй вопрос
const secondAnswer = document.querySelectorAll('.second-button-answer'),
      secondQuestion = document.querySelector('.second-question'),
      secondImage = document.querySelector('.second-film-picture'),
      secondTitle = document.querySelector('.second-film-title');

secondAnswer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         e.target.classList.add('button-green');
         secondQuestion.style.display = 'none';
         secondImage.style.display = 'block';
         secondTitle.style.display = 'block';
      } else {
         e.target.classList.add('button-red');
         
      }
   });
});

// Третий вопрос
const thirdAnswer = document.querySelectorAll('.third-button-answer'),
      thirdQuestion = document.querySelector('.third-question'),
      thirdImage = document.querySelector('.third-film-picture'),
      thirdTitle = document.querySelector('.third-film-title');

thirdAnswer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         e.target.classList.add('button-green');
         thirdQuestion.style.display = 'none';
         thirdImage.style.display = 'block';
         thirdTitle.style.display = 'block';
      } else {
         e.target.classList.add('button-red');
         
      }
   });
});