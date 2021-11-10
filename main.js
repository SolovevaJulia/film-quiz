const answer = document.querySelectorAll('.button-answer');

answer.forEach(item => {
   item.addEventListener('click', (e) => {
      if (e.target.value == "true") {
         alert('Ответ верный');
      } else {
         alert('Ответ неверный');
      }
   });
});