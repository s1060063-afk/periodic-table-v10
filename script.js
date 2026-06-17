const container = document.getElementById("periodic-table");
const searchInput = document.getElementById("search");

/* 🧱 建立週期表 */
function createTable(data = elements) {
  container.innerHTML = "";

  data.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";

    div.innerHTML = `
      <div class="number">${el.number}</div>
      <div class="symbol">${el.symbol}</div>
      <div class="name">${el.name}</div>
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
    <p>🧪 原子序：${el.number}</p>
    <p>⚖️ 原子量：${el.atomicMass}</p>
    <p>🏷️ 類別：${el.category}</p>

    <hr>

    <p>⚡ 價數：${el.valenceRange.join(", ")}</p>
    <p>🧫 同位素：${el.isotopes.join(", ")}</p>
    <p>🧪 化合物：${el.compounds.join(", ")}</p>

    <h3>🧠 性質</h3>
    <ul>
      ${el.properties.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;

  modal.classList.remove("hidden");
}

/* ❌ 關閉 */
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* 🔍 搜尋 */
searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  const filtered = elements.filter(el =>
    el.name.toLowerCase().includes(q) ||
    el.symbol.toLowerCase().includes(q)
  );

  createTable(filtered);
});

/* 🔄 重置 */
function resetTable() {
  searchInput.value = "";
  createTable(elements);
}

/* 🚀 啟動 */
createTable(elements);
