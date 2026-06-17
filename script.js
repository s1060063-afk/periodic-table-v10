function openModal(el) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>${el.name} (${el.symbol})</h2>

    <p>⚛ 原子序：${el.number}</p>
    <p>⚖ 原子量：${el.mass}</p>
    <p>🏷 分類：${el.category}</p>

    <hr>

    <h3>⚡ 價數</h3>
    <p>${el.valenceRange ? el.valenceRange.join(", ") : "未知"}</p>

    <h3>🧠 元素特性</h3>
    <ul>
      ${
        el.properties
          ? el.properties.map(p => `<li>${p}</li>`).join("")
          : "<li>無資料</li>"
      }
    </ul>

    <h3>🧬 同位素</h3>
    <ul>
      ${
        el.isotopes
          ? el.isotopes.map(i => `<li>${i}</li>`).join("")
          : "<li>無資料</li>"
      }
    </ul>

    <h3>🌈 同素異形體</h3>
    <ul>
      ${
        el.allotropes && el.allotropes.length
          ? el.allotropes.map(a => `<li>${a}</li>`).join("")
          : "<li>無</li>"
      }
    </ul>
  `;

  modal.classList.remove("hidden");
}
