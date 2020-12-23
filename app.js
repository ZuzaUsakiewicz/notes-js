const createBtn = document.getElementById("create");
const container = document.querySelector(".container");

createBtn.addEventListener("click", () => {
  createNote();
});

function createNote() {
  const newNote = document.createElement("div");
  newNote.classList.add("note");

  newNote.innerHTML = `
    <div class="note">
    <div class="panel">
      <button class="btn edit" id="edit">edit</button>
      <button class="btn delete" id="delete">delete</button>
    </div>
    <textarea class="note-text" cols="30" rows="10"></textarea>
  </div>

    `;
  container.appendChild(newNote);
}
// const editBtn = document.getElementById("edit");
// const deleteBtn = document.getElementById("delete");

// deleteBtn.addEventListener("click", () => {
//   removeNote();
// });

// function removeNote(e) {
//   newNote.remove();
// }
