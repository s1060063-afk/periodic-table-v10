function enrichElement(el) {

  const map = {
    "alkali-metal": {
      properties: [
        "極活潑金屬",
        "遇水劇烈反應",
        "形成 +1 離子"
      ],
      valence: [1]
    },

    "alkaline-earth-metal": {
      properties: [
        "活潑金屬",
        "形成 +2 離子",
        "硬度較高"
      ],
      valence: [2]
    },

    "transition-metal": {
      properties: [
        "多變價態",
        "良好導電性",
        "可作催化劑"
      ],
      valence: [2,3]
    },

    "post-transition-metal": {
      properties: [
        "較軟金屬",
        "導電性較弱"
      ],
      valence: [2,3]
    },

    "metalloid": {
      properties: [
        "半導體性質",
        "介於金屬與非金屬之間"
      ],
      valence: [2,3,4]
    },

    "nonmetal": {
      properties: [
        "不導電",
        "形成共價鍵",
        "脆性或氣體"
      ],
      valence: [-3,-2,-1,1]
    },

    "halogen": {
      properties: [
        "強氧化性",
        "高反應性",
        "形成 -1 離子"
      ],
      valence: [-1]
    },

    "noble-gas": {
      properties: [
        "化學惰性",
        "滿外層電子",
        "幾乎不反應"
      ],
      valence: [0]
    },

    "lanthanide": {
      properties: [
        "稀土元素",
        "磁性材料常見",
        "多為 +3 價"
      ],
      valence: [3]
    },

    "actinide": {
      properties: [
        "具放射性",
        "核能材料",
        "多變價態"
      ],
      valence: [3,4,5,6]
    }
  };

  const data = map[el.category] || {
    properties: ["未知特性"],
    valence: []
  };

  el.properties = data.properties;
  el.valenceRange = data.valence;

  // 🧬 同位素（模板）
  el.isotopes = [
    `${el.symbol}-A (常見)`,
    `${el.symbol}-A+1`,
    `${el.symbol}-A+2`
  ];

  // 🌈 同素異形體
  const allotropeMap = {
    "C": ["鑽石", "石墨", "石墨烯"],
    "O": ["O₂", "O₃"],
    "S": ["斜方硫", "單斜硫"],
    "P": ["白磷", "紅磷"]
  };

  el.allotropes = allotropeMap[el.symbol] || [];

  return el;
}
