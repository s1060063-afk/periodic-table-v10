const container = document.getElementById("periodic-table");

/* =========================
   1️⃣ 建立週期表
========================= */
function createTable() {
  elements.forEach(el => {
    const div = document.createElement("div");
    div.classList.add("element");

    // 加分類 class
    if (el.category) {
      div.classList.add(el.category);
    }

    div.innerHTML = `
      <div>${el.number}</div>
      <div><b>${el.symbol}</b></div>
    `;

    // 點擊 → 開彈窗
    div.onclick = () => openModal(el);

    container.appendChild(div);
  });
}

/* =========================
   2️⃣ App UI 彈窗
========================= */
function openModal(el) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>${el.name} (${el.symbol})</h2>

    <p>🧪 原子序：${el.number}</p>
    <p>⚖️ 平均原子量：${el.atomicMass}</p>
    <p>🏷️ 分類：${el.category}</p>

    <hr>

    <h3>⚡ 價數</h3>
    <p>${el.valenceRange ? el.valenceRange.join(", ") : "未知"}</p>

    <h3>🧫 同位素</h3>
    <p>
      ${el.isotopes
        ? el.isotopes.map(i =>
            typeof i === "string" ? i : i.name
          ).join(", ")
        : "無資料"}
    </p>

    <h3>🧪 化合物</h3>
    <p>${el.compounds ? el.compounds.join(", ") : "無資料"}</p>

    <h3>🧠 性質</h3>
    <ul>
      ${
        el.properties
          ? el.properties.map(p => `<li>${p}</li>`).join("")
          : "<li>無資料</li>"
      }
    </ul>
  `;

  modal.classList.remove("hidden");
}

/* =========================
   3️⃣ 關閉彈窗
========================= */
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* =========================
   4️⃣ 搜尋功能（可選）
========================= */
function searchElement(query) {
  query = query.toLowerCase();

  const found = elements.find(el =>
    el.name.toLowerCase() === query ||
    el.symbol.toLowerCase() === query ||
    el.number == query
  );

  if (found) {
    openModal(found);
  } else {
    alert("找不到這個元素");
  }
}

/* =========================
   5️⃣ 啟動
========================= */
createTable();
