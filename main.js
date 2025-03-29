const stations = [
  {
    name: "なんば",
    line: "南海線",
    color: "#3261AB",
    previous: "",
    next: "新今宮",
    correct: false,
  },
  {
    name: "新今宮",
    line: "南海線",
    color: "#3261AB",
    previous: "なんば",
    next: "天下茶屋",
    correct: false,
  },
  {
    name: "天下茶屋",
    line: "南海線",
    color: "#3261AB",
    previous: "新今宮",
    next: "岸里玉出",
    correct: false,
  },
  {
    name: "岸里玉出",
    line: "南海線",
    color: "#3261AB",
    previous: "天下茶屋",
    next: "粉浜",
    correct: false,
  },
  {
    name: "粉浜",
    line: "南海線",
    color: "#3261AB",
    previous: "岸里玉出",
    next: "住吉大社",
    correct: false,
  },
  {
    name: "住吉大社",
    line: "南海線",
    color: "#3261AB",
    previous: "粉浜",
    next: "住ノ江",
    correct: false,
  },
  {
    name: "住ノ江",
    line: "南海線",
    color: "#3261AB",
    previous: "住吉大社",
    next: "七道",
    correct: false,
  },
  {
    name: "七道",
    line: "南海線",
    color: "#3261AB",
    previous: "住ノ江",
    next: "堺",
    correct: false,
  },
  {
    name: "堺",
    line: "南海線",
    color: "#3261AB",
    previous: "七道",
    next: "湊",
    correct: false,
  },
  {
    name: "湊",
    line: "南海線",
    color: "#3261AB",
    previous: "堺",
    next: "石津川",
    correct: false,
  },
  {
    name: "石津川",
    line: "南海線",
    color: "#3261AB",
    previous: "湊",
    next: "諏訪ノ森",
    correct: false,
  },
  {
    name: "諏訪ノ森",
    line: "南海線",
    color: "#3261AB",
    previous: "石津川",
    next: "浜寺公園",
    correct: false,
  },
  {
    name: "浜寺公園",
    line: "南海線",
    color: "#3261AB",
    previous: "諏訪ノ森",
    next: "羽衣",
    correct: false,
  },
  {
    name: "羽衣",
    line: "南海線",
    color: "#3261AB",
    previous: "浜寺公園",
    next: "高石",
    correct: false,
  },
  {
    name: "高石",
    line: "南海線",
    color: "#3261AB",
    previous: "羽衣",
    next: "北助松",
    correct: false,
  },
  {
    name: "北助松",
    line: "南海線",
    color: "#3261AB",
    previous: "高石",
    next: "松ノ浜",
    correct: false,
  },
  {
    name: "松ノ浜",
    line: "南海線",
    color: "#3261AB",
    previous: "北助松",
    next: "泉大津",
    correct: false,
  },
  {
    name: "泉大津",
    line: "南海線",
    color: "#3261AB",
    previous: "松ノ浜",
    next: "忠岡",
    correct: false,
  },
  {
    name: "忠岡",
    line: "南海線",
    color: "#3261AB",
    previous: "泉大津",
    next: "春木",
    correct: false,
  },
  {
    name: "春木",
    line: "南海線",
    color: "#3261AB",
    previous: "忠岡",
    next: "和泉大宮",
    correct: false,
  },
  {
    name: "和泉大宮",
    line: "南海線",
    color: "#3261AB",
    previous: "春木",
    next: "岸和田",
    correct: false,
  },
  {
    name: "岸和田",
    line: "南海線",
    color: "#3261AB",
    previous: "和泉大宮",
    next: "蛸地蔵",
    correct: false,
  },
  {
    name: "蛸地蔵",
    line: "南海線",
    color: "#3261AB",
    previous: "岸和田",
    next: "貝塚",
    correct: false,
  },
  {
    name: "貝塚",
    line: "南海線",
    color: "#3261AB",
    previous: "蛸地蔵",
    next: "二色浜",
    correct: false,
  },
  {
    name: "二色浜",
    line: "南海線",
    color: "#3261AB",
    previous: "貝塚",
    next: "鶴原",
    correct: false,
  },
  {
    name: "鶴原",
    line: "南海線",
    color: "#3261AB",
    previous: "二色浜",
    next: "井原里",
    correct: false,
  },
  {
    name: "井原里",
    line: "南海線",
    color: "#3261AB",
    previous: "鶴原",
    next: "泉佐野",
    correct: false,
  },
  {
    name: "泉佐野",
    line: "南海線",
    color: "#3261AB",
    previous: "井原里",
    next: "羽倉崎",
    correct: false,
  },
  {
    name: "羽倉崎",
    line: "南海線",
    color: "#3261AB",
    previous: "泉佐野",
    next: "吉見ノ里",
    correct: false,
  },
  {
    name: "吉見ノ里",
    line: "南海線",
    color: "#3261AB",
    previous: "羽倉崎",
    next: "岡田浦",
    correct: false,
  },
  {
    name: "岡田浦",
    line: "南海線",
    color: "#3261AB",
    previous: "吉見ノ里",
    next: "樽井",
    correct: false,
  },
  {
    name: "樽井",
    line: "南海線",
    color: "#3261AB",
    previous: "岡田浦",
    next: "尾崎",
    correct: false,
  },
  {
    name: "尾崎",
    line: "南海線",
    color: "#3261AB",
    previous: "樽井",
    next: "鳥取ノ荘",
    correct: false,
  },
  {
    name: "鳥取ノ荘",
    line: "南海線",
    color: "#3261AB",
    previous: "尾崎",
    next: "箱作",
    correct: false,
  },
  {
    name: "箱作",
    line: "南海線",
    color: "#3261AB",
    previous: "鳥取ノ荘",
    next: "淡輪",
    correct: false,
  },
  {
    name: "淡輪",
    line: "南海線",
    color: "#3261AB",
    previous: "箱作",
    next: "みさき公園",
    correct: false,
  },
  {
    name: "みさき公園",
    line: "南海線",
    color: "#3261AB",
    previous: "淡輪",
    next: "孝子",
    correct: false,
  },
  {
    name: "孝子",
    line: "南海線",
    color: "#3261AB",
    previous: "みさき公園",
    next: "和歌山大学前",
    correct: false,
  },
  {
    name: "和歌山大学前",
    line: "南海線",
    color: "#3261AB",
    previous: "孝子",
    next: "紀ノ川",
    correct: false,
  },
  {
    name: "紀ノ川",
    line: "南海線",
    color: "#3261AB",
    previous: "和歌山大学前",
    next: "和歌山市",
    correct: false,
  },
  {
    name: "和歌山市",
    line: "南海線",
    color: "#3261AB",
    previous: "紀ノ川",
    next: "和歌山港",
    correct: false,
  },
  {
    name: "和歌山港",
    line: "南海線",
    color: "#3261AB",
    previous: "和歌山市",
    next: "",
    correct: false,
  },
  {
    name: "なんば",
    line: "高野線",
    color: "#009250",
    previous: "",
    next: "今宮戎",
    correct: false,
  },
  {
    name: "今宮戎",
    line: "高野線",
    color: "#009250",
    previous: "なんば",
    next: "新今宮",
    correct: false,
  },
  {
    name: "新今宮",
    line: "高野線",
    color: "#009250",
    previous: "今宮戎",
    next: "萩ノ茶屋",
    correct: false,
  },
  {
    name: "萩ノ茶屋",
    line: "高野線",
    color: "#009250",
    previous: "新今宮",
    next: "天下茶屋",
    correct: false,
  },
  {
    name: "天下茶屋",
    line: "高野線",
    color: "#009250",
    previous: "萩ノ茶屋",
    next: "岸里玉出",
    correct: false,
  },
  {
    name: "岸里玉出",
    line: "高野線",
    color: "#009250",
    previous: "天下茶屋",
    next: "帝塚山",
    correct: false,
  },
  {
    name: "帝塚山",
    line: "高野線",
    color: "#009250",
    previous: "岸里玉出",
    next: "住吉東",
    correct: false,
  },
  {
    name: "住吉東",
    line: "高野線",
    color: "#009250",
    previous: "帝塚山",
    next: "沢ノ町",
    correct: false,
  },
  {
    name: "沢ノ町",
    line: "高野線",
    color: "#009250",
    previous: "住吉東",
    next: "我孫子前",
    correct: false,
  },
  {
    name: "我孫子前",
    line: "高野線",
    color: "#009250",
    previous: "沢ノ町",
    next: "浅香山",
    correct: false,
  },
  {
    name: "浅香山",
    line: "高野線",
    color: "#009250",
    previous: "我孫子前",
    next: "堺東",
    correct: false,
  },
  {
    name: "堺東",
    line: "高野線",
    color: "#009250",
    previous: "浅香山",
    next: "三国ヶ丘",
    correct: false,
  },
  {
    name: "三国ヶ丘",
    line: "高野線",
    color: "#009250",
    previous: "堺東",
    next: "百舌鳥八幡",
    correct: false,
  },
  {
    name: "百舌鳥八幡",
    line: "高野線",
    color: "#009250",
    previous: "三国ヶ丘",
    next: "中百舌鳥",
    correct: false,
  },
  {
    name: "中百舌鳥",
    line: "高野線",
    color: "#009250",
    previous: "百舌鳥八幡",
    next: "白鷺",
    correct: false,
  },
  {
    name: "白鷺",
    line: "高野線",
    color: "#009250",
    previous: "中百舌鳥",
    next: "初芝",
    correct: false,
  },
  {
    name: "初芝",
    line: "高野線",
    color: "#009250",
    previous: "白鷺",
    next: "萩原天神",
    correct: false,
  },
  {
    name: "萩原天神",
    line: "高野線",
    color: "#009250",
    previous: "初芝",
    next: "北野田",
    correct: false,
  },
  {
    name: "北野田",
    line: "高野線",
    color: "#009250",
    previous: "萩原天神",
    next: "狭山",
    correct: false,
  },
  {
    name: "狭山",
    line: "高野線",
    color: "#009250",
    previous: "北野田",
    next: "大阪狭山市",
    correct: false,
  },
  {
    name: "大阪狭山市",
    line: "高野線",
    color: "#009250",
    previous: "狭山",
    next: "金剛",
    correct: false,
  },
  {
    name: "金剛",
    line: "高野線",
    color: "#009250",
    previous: "大阪狭山市",
    next: "滝谷",
    correct: false,
  },
  {
    name: "滝谷",
    line: "高野線",
    color: "#009250",
    previous: "金剛",
    next: "千代田",
    correct: false,
  },
  {
    name: "千代田",
    line: "高野線",
    color: "#009250",
    previous: "滝谷",
    next: "河内長野",
    correct: false,
  },
  {
    name: "河内長野",
    line: "高野線",
    color: "#009250",
    previous: "千代田",
    next: "三日市町",
    correct: false,
  },
  {
    name: "三日市町",
    line: "高野線",
    color: "#009250",
    previous: "河内長野",
    next: "美加の台",
    correct: false,
  },
  {
    name: "美加の台",
    line: "高野線",
    color: "#009250",
    previous: "三日市町",
    next: "千早口",
    correct: false,
  },
  {
    name: "千早口",
    line: "高野線",
    color: "#009250",
    previous: "美加の台",
    next: "天見",
    correct: false,
  },
  {
    name: "天見",
    line: "高野線",
    color: "#009250",
    previous: "千早口",
    next: "紀見峠",
    correct: false,
  },
  {
    name: "紀見峠",
    line: "高野線",
    color: "#009250",
    previous: "天見",
    next: "林間田園都市",
    correct: false,
  },
  {
    name: "林間田園都市",
    line: "高野線",
    color: "#009250",
    previous: "紀見峠",
    next: "御幸辻",
    correct: false,
  },
  {
    name: "御幸辻",
    line: "高野線",
    color: "#009250",
    previous: "林間田園都市",
    next: "橋本",
    correct: false,
  },
  {
    name: "橋本",
    line: "高野線",
    color: "#009250",
    previous: "御幸辻",
    next: "紀伊清水",
    correct: false,
  },
  {
    name: "紀伊清水",
    line: "高野線",
    color: "#009250",
    previous: "橋本",
    next: "学文路",
    correct: false,
  },
  {
    name: "学文路",
    line: "高野線",
    color: "#009250",
    previous: "紀伊清水",
    next: "九度山",
    correct: false,
  },
  {
    name: "九度山",
    line: "高野線",
    color: "#009250",
    previous: "学文路",
    next: "高野下",
    correct: false,
  },
  {
    name: "高野下",
    line: "高野線",
    color: "#009250",
    previous: "九度山",
    next: "下古沢",
    correct: false,
  },
  {
    name: "下古沢",
    line: "高野線",
    color: "#009250",
    previous: "高野下",
    next: "上古沢",
    correct: false,
  },
  {
    name: "上古沢",
    line: "高野線",
    color: "#009250",
    previous: "下古沢",
    next: "紀伊細川",
    correct: false,
  },
  {
    name: "紀伊細川",
    line: "高野線",
    color: "#009250",
    previous: "上古沢",
    next: "紀伊神谷",
    correct: false,
  },
  {
    name: "紀伊神谷",
    line: "高野線",
    color: "#009250",
    previous: "紀伊細川",
    next: "極楽橋",
    correct: false,
  },
  {
    name: "極楽橋",
    line: "高野線",
    color: "#009250",
    previous: "紀伊神谷",
    next: "",
    correct: false,
  },
  {
    name: "羽衣",
    line: "高師浜線",
    color: "#3261AB",
    previous: "",
    next: "伽羅橋",
    correct: false,
  },
  {
    name: "伽羅橋",
    line: "高師浜線",
    color: "#3261AB",
    previous: "羽衣",
    next: "高師浜",
    correct: false,
  },
  {
    name: "高師浜",
    line: "高師浜線",
    color: "#3261AB",
    previous: "伽羅橋",
    next: "",
    correct: false,
  },
  {
    name: "泉佐野",
    line: "空港線",
    color: "#744199",
    previous: "",
    next: "りんくうタウン",
    correct: false,
  },
  {
    name: "りんくうタウン",
    line: "空港線",
    color: "#744199",
    previous: "泉佐野",
    next: "関西空港",
    correct: false,
  },
  {
    name: "関西空港",
    line: "空港線",
    color: "#744199",
    previous: "りんくうタウン",
    next: "",
    correct: false,
  },
  {
    name: "みさき公園",
    line: "多奈川線",
    color: "#3261AB",
    previous: "",
    next: "深日町",
    correct: false,
  },
  {
    name: "深日町",
    line: "多奈川線",
    color: "#3261AB",
    previous: "みさき公園",
    next: "深日港",
    correct: false,
  },
  {
    name: "深日港",
    line: "多奈川線",
    color: "#3261AB",
    previous: "深日町",
    next: "多奈川",
    correct: false,
  },
  {
    name: "多奈川",
    line: "多奈川線",
    color: "#3261AB",
    previous: "深日港",
    next: "",
    correct: false,
  },
  {
    name: "和歌山市",
    line: "加太線",
    color: "#3261AB",
    previous: "",
    next: "紀ノ川",
    correct: false,
  },
  {
    name: "紀ノ川",
    line: "加太線",
    color: "#3261AB",
    previous: "和歌山市",
    next: "東松江",
    correct: false,
  },
  {
    name: "東松江",
    line: "加太線",
    color: "#3261AB",
    previous: "紀ノ川",
    next: "中松江",
    correct: false,
  },
  {
    name: "中松江",
    line: "加太線",
    color: "#3261AB",
    previous: "東松江",
    next: "八幡前",
    correct: false,
  },
  {
    name: "八幡前",
    line: "加太線",
    color: "#3261AB",
    previous: "中松江",
    next: "西ノ庄",
    correct: false,
  },
  {
    name: "西ノ庄",
    line: "加太線",
    color: "#3261AB",
    previous: "八幡前",
    next: "二里ヶ浜",
    correct: false,
  },
  {
    name: "二里ヶ浜",
    line: "加太線",
    color: "#3261AB",
    previous: "西ノ庄",
    next: "磯ノ浦",
    correct: false,
  },
  {
    name: "磯ノ浦",
    line: "加太線",
    color: "#3261AB",
    previous: "二里ヶ浜",
    next: "加太",
    correct: false,
  },
  {
    name: "加太",
    line: "加太線",
    color: "#3261AB",
    previous: "磯ノ浦",
    next: "",
    correct: false,
  },
  {
    name: "岸里玉出",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "",
    next: "西天下茶屋",
    correct: false,
  },
  {
    name: "西天下茶屋",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "岸里玉出",
    next: "津守",
    correct: false,
  },
  {
    name: "津守",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "西天下茶屋",
    next: "木津川",
    correct: false,
  },
  {
    name: "木津川",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "津守",
    next: "芦原町",
    correct: false,
  },
  {
    name: "芦原町",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "木津川",
    next: "汐見橋",
    correct: false,
  },
  {
    name: "汐見橋",
    line: "高野線 汐見橋方面",
    color: "#009250",
    previous: "芦原町",
    next: "",
    correct: false,
  },
];

const mainWrapDOM = document.getElementById("main-wrap");
const signwrapDOM = document.getElementById("sign-wrap");
const signDOM = document.getElementById("sign");
const nameDOM = document.getElementById("station-name");
const previousDOM = document.getElementById("previous-station-name");
const nextDOM = document.getElementById("next-station-name");
const previousIconDOM = document.getElementById("previous-icon");
const nextIconDOM = document.getElementById("next-icon");
const lineColorDOM = document.getElementById("line-color");
const lineSelectorDOM = document.getElementById("line-selector");
let selected_lines = new Set();
let randomStation = null;
let correct = true;

function getCorrectFromCookie() {
  const cookie = document.cookie;
  const cookieArray = cookie.split(";");
  for (const c of cookieArray) {
    const [key, value] = c.split("=");
    if (key === "correct") {
      const correctArray = value.split(",");
      for (let i = 0; i < correctArray.length; i++) {
        stations[i].correct = correctArray[i] === "true";
      }
    }
  }
}
function setCorrectToCookie() {
  const correctArray = stations.map((station) => station.correct);
  document.cookie = `correct=${correctArray.join(",")}`;
}

function slideInNewStation(station) {
  const clone = signDOM.cloneNode(true);
  const cloneNameDOM = clone.querySelector("#station-name");
  const clonePreviousDOM = clone.querySelector("#previous-station-name");
  const cloneNextDOM = clone.querySelector("#next-station-name");
  clone.id = "sign-clone";
  clone.style.position = "absolute";
  clone.style.top = "0";
  clone.style.zIndex = "100";
  clone.style.transform = "translateX(100vw)";
  cloneNameDOM.value = "";
  clonePreviousDOM.innerText = station["previous"];
  cloneNextDOM.innerText = station["next"];

  signwrapDOM.appendChild(clone);

  signDOM.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-100vw)" }],
    {
      duration: 200,
      iterations: 1,
    }
  );
  clone.animate(
    [{ transform: "translateX(100vw)" }, { transform: "translateX(0)" }],
    {
      duration: 200,
      iterations: 1,
    }
  ).onfinish = () => {
    nameDOM.value = "";
    clone.remove();
  };
}

function putLineSelector() {
  const lines = new Set(stations.map((station) => station.line));
  let fitstLine = true;
  for (const line of lines) {
    const wrapDOM = document.createElement("div");

    const checkboxDOM = document.createElement("input");
    checkboxDOM.type = "checkbox";
    checkboxDOM.id = line;
    checkboxDOM.addEventListener("change", () => {
      if (checkboxDOM.checked) {
        selected_lines.add(line);
      } else {
        selected_lines.delete(line);
      }

      if (!selected_lines.has(randomStation["line"])) {
        refresh();
      }
    });
    wrapDOM.appendChild(checkboxDOM);

    const labelDOM = document.createElement("label");
    labelDOM.innerText = line;
    labelDOM.htmlFor = line;
    wrapDOM.appendChild(labelDOM);

    lineSelectorDOM.appendChild(wrapDOM);

    if (fitstLine) {
      selected_lines.add(line);
      checkboxDOM.checked = true;
      fitstLine = false;
    }
  }
}

function reset() {
  var ret = window.confirm("リセットしますか？");
  if (!ret) {
    return;
  }

  stations.forEach((station) => (station.correct = false));
  refresh();
}

function showHint() {
  correct = false;
  nameDOM.placeholder = " ■ ".repeat(randomStation["name"].length);
  nameDOM.focus();
}

function skip() {
  correct = false;
  nameDOM.value = randomStation["name"];
  nameDOM.focus();
}

function refresh() {
  const candidate_stations = stations.filter((station) => {
    return selected_lines.has(station.line) && !station.correct;
  });
  if (candidate_stations.length === 0) {
    if (selected_lines.size !== 0) {
      alert("全ての駅を答えました！");
    }
    return;
  }

  randomStation =
    candidate_stations[Math.floor(Math.random() * candidate_stations.length)];

  const previousStation = randomStation["previous"];
  previousDOM.innerText = previousStation;
  if (previousStation === "") {
    previousIconDOM.style.visibility = "hidden";
  } else {
    previousIconDOM.style.visibility = "visible";
  }

  const nextStation = randomStation["next"];
  nextDOM.innerText = nextStation;
  if (nextStation === "") {
    nextIconDOM.style.visibility = "hidden";
  } else {
    nextIconDOM.style.visibility = "visible";
  }

  lineColorDOM.style.backgroundColor = randomStation["color"];

  console.log(previousStation, randomStation["name"], nextStation);

  slideInNewStation(randomStation);

  correct = true;
}

function judge() {
  if (nameDOM.value === randomStation["name"]) {
    if (selected_lines.has(randomStation["line"])) {
      randomStation["correct"] = correct;
      setCorrectToCookie();
    }
    refresh();
  } else {
    correct = false;
    mainWrapDOM.animate(
      [
        { transform: "translateX(1vw)" },
        { transform: "translateX(.5vw)" },
        { transform: "translateX(-.5vw)" },
        { transform: "translateX(-1vw)" },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  }
}
nameDOM.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    judge();
  }
});

putLineSelector();
getCorrectFromCookie();
refresh();
