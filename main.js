// Query Selectors
const itemInput = document.querySelector(".form-input");
const itemList = document.querySelector("#item-list");
const formBtn = document.querySelector("#item-form");

// Event Listeners
formBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  if (itemInput.value === "") {
    alert("Please fill out text field");
  } else {
    displayNewItem();
  }
});

// Functions
function displayNewItem() {
  itemList.innerHTML += `
      <li>
        ${itemInput.value}
        <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
    `;
  itemInput.value = "";
}
