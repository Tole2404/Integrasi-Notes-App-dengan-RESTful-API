function main() {
  const BASE_URL = "https://notes-api.dicoding.dev/v2";

  const renderAllNotes = (notes) => {
    const noteListElement = document.querySelector("#noteItem");
    noteListElement.innerHTML = "";

    notes.forEach((note) => {
      const noteItem = document.createElement("div");
      noteItem.classList.add("card");

      const titleNoteDiv = document.createElement("div");
      titleNoteDiv.classList.add("title-note");

      const noteTitle = document.createElement("h2");
      noteTitle.classList.add("note-title");
      noteTitle.innerText = note.title;

      titleNoteDiv.appendChild(noteTitle);

      const bodyNoteDiv = document.createElement("div");
      bodyNoteDiv.classList.add("body-note");

      const noteBody = document.createElement("p");
      noteBody.innerText = note.body;

      bodyNoteDiv.appendChild(noteBody);

      const buttonArchived = document.createElement("button");
      buttonArchived.setAttribute("type", "button");

      const buttonTrash = document.createElement("button");
      buttonTrash.classList.add("button-delete");
      buttonTrash.setAttribute("type", "button");
      buttonTrash.addEventListener("click", function () {
        const confirmation = confirm("Apakah Kamu ingin menghapusnya?");
        if (confirmation) {
          removeNote(note.id);
        }
      });

      if (note.archived) {
        buttonArchived.classList.add("button-recovery-note");
        buttonArchived.addEventListener("click", function () {
          unArchiveNote(note.id);
        });
      } else {
        buttonArchived.classList.add("button-archived");
        buttonArchived.addEventListener("click", function () {
          archiveNote(note.id);
        });
      }

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("action");
      buttonContainer.append(buttonArchived, buttonTrash);

      noteItem.append(noteTitle, noteBody, buttonContainer);
      noteListElement.appendChild(noteItem);
    });
  };

  const addNote = async (note) => {
    try {
      showLoadingSpinner();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      };
      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getUnArchived();
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoadingSpinner();
    }
  };

  const getUnArchived = async () => {
    try {
      showLoadingSpinner();
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();

      if (responseJson.data.length > 0) {
        renderAllNotes(responseJson.data);
      } else {
        showResponseMessage("Note Empty");
        renderAllNotes(responseJson.data);
      }
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoadingSpinner();
    }
  };

  const getArchived = async () => {
    try {
      showLoadingSpinner();
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const responseJson = await response.json();

      if (responseJson.data.length > 0) {
        renderAllNotes(responseJson.data);
      } else {
        showResponseMessage("Note Empty");
        renderAllNotes(responseJson.data);
      }
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoadingSpinner();
    }
  };

  const removeNote = (noteId) => {
    showLoadingSpinner();
    fetch(`${BASE_URL}/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        if (filterNotes.selectedIndex == 0) {
          getUnArchived();
        } else {
          getArchived();
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        hideLoadingSpinner();
      });
  };

  const archiveNote = async (id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getUnArchived();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const unArchiveNote = async (id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${BASE_URL}/notes/${id}/unarchive`,
        options,
      );
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getArchived();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getUnArchived();
    filterNotes.selectedIndex = 0;
  });

  document.addEventListener("addNote", function (event) {
    const { title, body } = event.detail;

    const newNote = {
      title: title,
      body: body,
    };

    addNote(newNote);
    filterNotes.selectedIndex = 0;
  });

  const showLoadingSpinner = () => {
    document.getElementById("loadingSpinner").style.display = "block";
  };

  const hideLoadingSpinner = () => {
    document.getElementById("loadingSpinner").style.display = "none";
  };

  const filterNotes = document.getElementById("filterNotes");

  filterNotes.addEventListener("change", function () {
    if (filterNotes.selectedIndex == 0) {
      getUnArchived();
    } else {
      getArchived();
    }
  });
}

export default main;
