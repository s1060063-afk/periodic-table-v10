const container = document.getElementById("periodic-table");

/* 建立表 */
function createTable() {
 elements.forEach(el => {
  el = enrichElement(el);
    const div = document.createElement("div");
    div.className = "element";

    if (el.category) {
      div.classList.add(el.category);
    }

    div.innerHTML = `
      <div>${el.number}</div>
      <div><b>${el.symbol}</b></div>
    `;

    div.onclick = () => openModal(el);

    container.appendChild(div);
  });
}

/* 彈窗 */
function openModal(el) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>${el.name} (${el.symbol})</h2>
    <p>⚛ 原子序：${el.number}</p>
    <p>⚖ 原子量：${el.mass}</p>
    <p>🏷 分類：${el.category}</p>
    <p>📍 週期：${el.period} / 族：${el.group}</p>
  `;

  modal.classList.remove("hidden");
}

/* 關閉 */
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* 啟動 */
createTable();
