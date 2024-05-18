class inputNote extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.customValidationTitleHandler =
      this.customValidationTitleHandler.bind(this);
    this.customValidationBodyHandler =
      this.customValidationBodyHandler.bind(this);
  }

  _updateStyle() {
    this._style.textContent = `
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--bg-primary);
        border-radius: 0 0 100px;
        height: 450px;
      }
      
      .wrapper .container {
        width: 1024px;
        height: 460px;
        border-radius: 8px;
        background: #fff;
      }
      
      .form {
        display: flex;
        padding: 16px;
        flex-direction: column;
        height: 300px;
        border-radius: 16px;
      }
      
      .form-group {
        display: flex;
        flex-direction: column;
      }
      
      .form-group label {
        margin-bottom: 4px;
        font-size: 20px;
        color: #000;
      }
      
      input[type="text"],
      textarea {
        font-family: Raleway, sans-serif;
        background: var(--bg-second);
        border: none;
        border-radius: 8px;
        padding: 16px;
        box-sizing: border-box;
        margin-bottom: 8px;
        font-size: 24px;
      }
      
      .btn-submit {
        width: fit-content;
        font-family: Raleway, sans-serif;
        border-radius: 15px;
        padding: 12px 24px;
        background: var(--bg-primary);
        border: none;
        color: var(--white-color);
        font-size: 24px;
        margin-top: auto;
        cursor: pointer;
      }

      .btn-submit:hover {
        background-color: var(--white-color);
        color: var(--bg-primary);
      }
      
      input[type="text"],
      textarea,
      .btn-submit:focus {
        outline: none;
      }
      
      .text-center {
        text-align: center;
      }
      
      .form-title {
        margin: auto 0;
      }
      
      .search-form .form-group label {
        font-size: 30px;
        padding: 30px;
      }
  
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <form class="form" action="#" id="addNotes">
        <h2 class="container-header text-center">Tambahkan Catatan</h2>
        <div class="form-group form-title">
          <label for="title">Judul:</label>
          <input type="text" id="title" name="title" required />
          <p id="titleValidation" class="validation-message" aria-live="polite"></p>
        </div>
        <div class="form-group form-title">
          <label for="body">Isi Catatan:</label>
          <textarea id="body" name="body" rows="4" cols="50" spellcheck="false" required></textarea>
          <p id="bodyValidation" class="validation-message" aria-live="polite"></p>
        </div>
        <div class="form-group">
        <button type="submit" name="Submit" class="btn-submit">SUBMIT</button>
        </div>
        </form>
        `;

    this._shadowRoot
      .querySelector("#addNotes")
      .addEventListener("submit", this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this._shadowRoot.querySelector("#title").value;
    const body = this._shadowRoot.querySelector("#body").value;

    const addNoteEvent = new CustomEvent("addNote", {
      detail: { title, body },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(addNoteEvent);

    this._shadowRoot.querySelector("#title").value = "";
    this._shadowRoot.querySelector("#body").value = "";
  }

  setupEventListeners() {
    const titleInput = this._shadowRoot.querySelector("#title");
    const bodyInput = this._shadowRoot.querySelector("#body");

    titleInput.addEventListener("input", this.customValidationTitleHandler);
    bodyInput.addEventListener("input", this.customValidationBodyHandler);
  }

  customValidationTitleHandler(event) {
    const titleInput = event.target;
    const titleValidationMessage =
      this._shadowRoot.querySelector("#titleValidation");

    if (!titleInput.value.trim()) {
      titleValidationMessage.innerText = "Title is required.";
    } else {
      titleValidationMessage.innerText = "";
    }
  }

  customValidationBodyHandler(event) {
    const bodyInput = event.target;
    const bodyValidationMessage =
      this._shadowRoot.querySelector("#bodyValidation");

    if (!bodyInput.value.trim()) {
      bodyValidationMessage.innerText = "Body is required.";
    } else {
      bodyValidationMessage.innerText = "";
    }
  }
}

customElements.define("input-note", inputNote);
