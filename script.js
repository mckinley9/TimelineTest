const events = document.querySelectorAll('.event');
const container = document.getElementById('EventContainer');
const feedback = document.getElementById('feedback');

events.forEach(event => {
    event.addEventListener('dragstart', dragStart);
    event.addEventListener('dragover', dragOver);
    event.addEventListener('drop', drop);
});
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.order);
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function drop(e) {
    e.preventDefault();
    const draggedOrder = e.dataTransfer.getData('text/plain');
    const targetOrder = e.target.dataset.order;
    
    const draggedElement = container.querySelector(`[data-order="${draggedOrder}"]`);
    const targetElement = container.querySelector(`[data-order="${targetOrder}"]`);
    
    container.insertBefore(draggedElement, targetElement);
  }
  document.getElementById('SubmitOrder').addEventListener('click', () => {
    const currentOrder = [...container.children].map(el => el.dataset.order);
    const correctOrder = ['1', '2', '3','4']; // Example order, match with actual events
    
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        feedback.textContent = 'Correct! Here is your next clue...';
        // Reveal the next clue
      } else {
        feedback.textContent = 'Incorrect order. Try again!';
      }
    });