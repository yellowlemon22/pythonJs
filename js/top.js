// ボタン
function toggleContent() {
  var javascriptContent = document.getElementById("javascriptContent");
  var pythonContent = document.getElementById("pythonContent");
  var languageJavascript = document.getElementById("languageJs");
  var languagePython = document.getElementById("languagePy");

  javascriptContent.classList.toggle("js");
  pythonContent.classList.toggle("py");
  languageJavascript.classList.toggle("languageJs");
  languagePython.classList.toggle("languagePy");
}


// ===========左カテゴリー============
// var category = ['動き', '見た目', '音', 'イベント','制御','調べる','演算','変数','ブロック定数']; 
// var circle = ['motion','looks','sound','event','control','research','Calculation','variable','constant'];


const data = [
  {
    category: "動き",
    circle: "motion"
  },
  {
    category: "見た目",
    circle: "looks"
  },
  {
    category: "音",
    circle: "sound"
  },
  {
    category: "イベント",
    circle: "event"
  },
  {
    category: "制御",
    circle: "control"
  },
  {
    category: "調べる",
    circle: "research"
  },
  {
    category: "演算",
    circle: "Calculation"
  },
  {
    category: "変数",
    circle: "variable"
  },
  {
    category: "ブロック定数",
    circle: "constant"
  },
]

data.forEach((item) => {
  console.log(item.category)
  let dom = `
  <div>
    <a href="#${item.circle}">
      <div class="category_circle ${item.circle}"></div>
      <p class="text">${item.category}</p>
    </a>
  </div>  
`;

const listParent = document.getElementById("list");


listParent.insertAdjacentHTML("beforeend", dom);
});

// for (var i = 0; i < category.length; i++) { 
  // var category_div = document.createElement('div');
  // category_div.classList.add('category_circle');

  // var category_circle = document.createElement('a');
  // category_circle.classList.add('category_a',circle[i]);
  // category_circle.setAttribute('href', '#' + circle[i]);

  // category_div.appendChild(category_circle);

  // var category_name = document.createElement('li');
  // category_name.textContent = category[i];

  // var list = document.getElementById('list');
  // list.appendChild(category_div);
  // list.appendChild(category_name);

  
  // let dom = `
  //   <div>
  //     <a href="#${circle[i]}">
  //       <div class="category_circle ${circle[i]}"></div>
  //       <p class="text">${category[i]}</p>
  //     </a>
  //   </div>  
  // `;

  // const listParent = document.getElementById("list");


  // listParent.insertAdjacentHTML("beforeend", dom);
// }

// ----------ページ内リンクアニメーション-----------






// ===========真ん中============

const py = [
  {
    id: "pythonContent",
    class: "content active",
    codeTitle:"pyのcode",
    code:`pre {
        padding: 1em;/* 内側の余白 */
        margin: 0 0 1.5em;/* 外側の余白 */
        border: solid 1px #eaedf2;/* 枠線 */
        background: #f3f6fc;/* 背景色 */
        color: #54687c;/* 文字色 */
    }`,
    explanation: "１個目の記事だよ"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "２個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "３個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "４個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "５個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "６個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "7個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "8個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "9個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "10個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "11個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "12個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "13個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "14個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "15個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "16個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "17個目の記事だよー"
  },
  {
    id: "pythonContent",
    class: "content active",
    explanation: "18個目の記事だよー"
  },
]

const js = [
  {
    id: "javascriptContent",
    class: "content active",
    codeTitle:"jsのcode",
    code:`pre {
        padding: 1em;/* 内側の余白 */
        margin: 0 0 1.5em;/* 外側の余白 */
        border: solid 1px #eaedf2;/* 枠線 */
        background: #f3f6fc;/* 背景色 */
        color: #54687c;/* 文字色 */
    }`,
    explanation: "１個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "２個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "３個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "４個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "５個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "６個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "7個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "8個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "9個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "10個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "11個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "12個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "13個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "14個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "15個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "16個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "17個目の記事だよ"
  },
  {
    id: "javascriptContent",
    class: "content active",
    explanation: "18個目の記事だよ"
  },
]

function displayContent(index) {
  const contentContainer = document.getElementById("contentContainer");
  const javascriptContent = document.getElementById("javascriptContent");

  // クリックされたオブジェクトの内容を表示
  javascriptContent.innerHTML = `
    <h2>${js[index].code}の記事</h2>
    <p>${js[index].explanation}</p>
  `;

  // クリックされたオブジェクトの画像を非表示
  contentContainer.style.display = "none";
}

function displayContent(index) {
  const contentContainer = document.getElementById("contentContainer");
  const javascriptContent = document.getElementById("javascriptContent");
  const pythonContent = document.getElementById("pythonContent");

// クリックされたオブジェクトの内容を表示
pythonContent.innerHTML = `
<dev class="code">
  <p class="codeTitle">${py[index].codeTitle}</p>
  <pre>
    <code>
    ${py[index].code}
    </code>
  </pre>
  <p>${py[index].explanation}</p>
</div>
`;

javascriptContent.innerHTML = `
<dev class="code">
  <p class="codeTitle">${js[index].codeTitle}</p>
  <pre>
    <code>
    ${js[index].code}
    </code>
  </pre>
  <p>${js[index].explanation}</p>
</dev>
`;

  // クリックされたオブジェクトの画像を非表示
  contentContainer.style.display = "none";
}

// py.forEach((item) => {
//   console.log(item.id)
//   let dom = `
//   <div id="${item.id}" class="${item.class}">
//     <h2>${item.code}の記事</h2>
//     <p>${item.explanation}</p>
//   </div>
// `;

// const listParent = document.getElementById("article");
// listParent.insertAdjacentHTML("beforeend", dom);
// // });

