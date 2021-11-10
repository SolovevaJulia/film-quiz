// Настройка кнопок

const answer = document.querySelectorAll('.button-answer'),
      question = document.querySelector('.question'),
      image = document.querySelector('.film-picture');

answer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         e.target.classList.add('button-green');
         question.target.style.display = 'none';
         image.target.style.display = 'block';
         
      } else {
         e.target.classList.add('button-red');
      }
   });
});

// Настройка изображения фильма
