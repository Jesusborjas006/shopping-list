// Query Selectors
const itemInput = document.querySelector(".form-input");
const itemList = document.querySelector("#item-list");
const formBtn = document.querySelector("#item-form");
const clearBtn = document.querySelector(".btn-clear");
const filterInput = document.querySelector(".form-input-filter");

// Event Listeners
removeFilter();
formBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  if (itemInput.value === "") {
    alert("Please fill out text field");
  } else {
    displayNewItem();
    showFilter();
  }
});

itemList.addEventListener("click", (e) => {
  removeItem(e);
});

clearBtn.addEventListener("click", () => {
  itemList.innerHTML = "";
  removeFilter();
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function removeFilter() {
  clearBtn.classList.add("hidden");
  filterInput.classList.add("hidden");
}

function showFilter() {
  clearBtn.classList.remove("hidden");
  filterInput.classList.remove("hidden");
}
