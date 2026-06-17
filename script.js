const container = document.getElementById("table");

/* 🧪 建立週期表（118核心） */
function createTable() {
  container.innerHTML = "";

  elements.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";

    div.style.gridColumn = el.group;
    div.style.gridRow = el.period;

    div.innerHTML = `
      <div class="number">${el.number}</div>
      <div class="symbol">${el.symbol}</div>
    `;

    div.onclick = () => openModal(el);

    container.appendChild(div);
  });
}

/* 📦 彈窗 */
function openModal(el) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>${el.name} (${el.symbol})</h2>
    <p>原子序：${el.number}</p>
    <p>原子量：${el.mass}</p>
    <p>分類：${el.category}</p>
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* 🔍 搜尋 */
document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  const filtered = elements.filter(el =>
    el.name.toLowerCase().includes(q) ||
    el.symbol.toLowerCase().includes(q)
  );

  render(filtered);
});

function render(data) {
  container.innerHTML = "";

  data.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";

    div.style.gridColumn = el.group;
    div.style.gridRow = el.period;

    div.innerHTML = `
      <div class="number">${el.number}</div>
      <div class="symbol">${el.symbol}</div>
    `;

    div.onclick = () => openModal(el);

    container.appendChild(div);
  });
}

function resetTable() {
  document.getElementById("search").value = "";
  createTable();
}

createTable();
