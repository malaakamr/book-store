// Builds the filters and book cards from the BOOKS data (see books.js).
const state = { category: "All", sub: "All", query: "" };

const catBox = document.getElementById("category-filters");
const subBox = document.getElementById("sub-filters");
const list = document.getElementById("product-list");
const countEl = document.getElementById("result-count");
const search = document.getElementById("search");

function makeButton(label, active, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = label;
  b.className = "chip" + (active ? " active" : "");
  b.addEventListener("click", onClick);
  return b;
}

function renderCategories() {
  const cats = ["All", ...new Set(BOOKS.map(b => b.category))];
  catBox.innerHTML = "";
  cats.forEach(c =>
    catBox.appendChild(makeButton(c, state.category === c, () => {
      state.category = c;
      state.sub = "All"; // reset the sub-filter when the category changes
      render();
    }))
  );
}

function renderSubs() {
  subBox.innerHTML = "";
  if (state.category === "All") return; // sub-filters only appear after choosing a category
  const subs = ["All", ...new Set(
    BOOKS.filter(b => b.category === state.category).map(b => b.sub)
  )];
  subs.forEach(s =>
    subBox.appendChild(makeButton(s, state.sub === s, () => {
      state.sub = s;
      render();
    }))
  );
}

function renderBooks() {
  const q = state.query.trim().toLowerCase();
  const shown = BOOKS.filter(b =>
    (state.category === "All" || b.category === state.category) &&
    (state.sub === "All" || b.sub === state.sub) &&
    (q === "" || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
  );

  list.innerHTML = "";
  shown.forEach(b => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${b.image}" alt="Cover of ${b.title}">
      <div class="info">
        <span class="badge ${b.category.toLowerCase()}">${b.sub}</span>
        <h3>${b.title}</h3>
        <p class="author">by ${b.author}</p>
        <p class="price">Price: $${b.price.toFixed(2)}</p>
      </div>`;
    list.appendChild(card);
  });

  countEl.textContent = shown.length
    ? `Showing ${shown.length} book${shown.length === 1 ? "" : "s"}`
    : "No books found. Try another filter.";
}

function render() {
  renderCategories();
  renderSubs();
  renderBooks();
}

search.addEventListener("input", e => {
  state.query = e.target.value;
  renderBooks();
});

render();
