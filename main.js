// Кнопки

const answer = document.querySelectorAll('.button-answer');
      
answer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         e.target.classList.add('button-green');
      } else {
         e.target.classList.add('button-red');
      }
   });
});

// Первый вопрос
const firstQuestion = document.querySelector('.first-question'),
      firstImage = document.querySelector('.first-film-picture');

answer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         firstQuestion.style.display = 'none';
         firstImage.style.display = 'block';
      } 
   });
});

// Второй вопрос
const secondQuestion = document.querySelector('.second-question'),
      secondImage = document.querySelector('.second-film-picture');

answer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         secondQuestion.style.display = 'none';
         secondImage.style.display = 'block';
      } 
   });
});