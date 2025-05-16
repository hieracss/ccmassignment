const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('drop', dropItem);
});

let draggedItemId;

function dragStart(e) {
  draggedItemId = e.target.id;
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.preventDefault();
  const correctId = e.target.getAttribute('data-match');
  
  if (draggedItemId === correctId) {
    e.target.classList.add('correct');
    e.target.textContent = `${e.target.textContent} ✅`;
  } else {
    e.target.classList.add('wrong');
    e.target.textContent = `${e.target.textContent} ❌`;
  }

  const dragged = document.getElementById(draggedItemId);
  dragged.remove(); // remove matched item
}
