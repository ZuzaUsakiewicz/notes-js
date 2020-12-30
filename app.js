const createBtn = document.getElementById("create");
const container = document.querySelector(".container");
const textArea = document.querySelector(".note-text");
const editButtons = document.querySelectorAll(".edit");

createBtn.addEventListener("click", (e) => {
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
    <textarea class="note-text " cols="30" rows="10"></textarea>
  </div>

    `;
  container.appendChild(newNote);

  const deleteButton = newNote.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    newNote.remove();
  });

  const editButton = newNote.querySelector(".edit");
  const textArea = newNote.querySelector(".note-text");
  editButton.addEventListener("click", () => {
    textArea.classList.toggle("edit");
    textArea.focus();
    if (textArea.classList.contains("edit")) {
      editButton.innerHTML = "save";
      editButton.style.backgroundColor = "green";
    } else {
      editButton.innerHTML = "edit";
      textArea.blur();
      editButton.style.backgroundColor = "";
    }
  });
}

// var loadFile = function (event) {
//   var image = document.getElementById("output");
//   image.src = URL.createObjectURL(event.target.files[0]);
// };
