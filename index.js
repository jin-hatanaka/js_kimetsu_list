// HTML要素を取得
const all = document.getElementById('all');
const kisatsutai = document.getElementById('kisatsutai');
const hashira = document.getElementById('hashira');
const oni = document.getElementById('oni');
const div = document.getElementById('div');
const loading = document.getElementById('loading');

const fetchCharacter = async (API_URL) => {
  // ロード中表示
  loading.style.display = 'block';

  try {
    const res = await fetch(API_URL);
    const characters = await res.json();

    // 既存の内容をクリア
    div.innerHTML = '';

    characters.map((character) => {
      // キャラクター要素を包むdivを作成
      const charDiv = document.createElement('div');
      charDiv.classList.add('char-div');

      // 画像
      const img = document.createElement('img');
      img.src = `https://ihatov08.github.io${character.image}`;
      img.width = 150;
      img.height = 150;

      // 名前
      const name = document.createElement('span');
      name.textContent = character.name;
      name.classList.add('name');

      // カテゴリ
      const category = document.createElement('span');
      category.textContent = `カテゴリー：${character.category}`;
      category.classList.add('category');

      charDiv.appendChild(img);
      charDiv.appendChild(name);
      charDiv.appendChild(category);
      div.appendChild(charDiv);
    });
  } catch (error) {
    console.error('エラーが発生しました:', error);
  } finally {
    // ロード完了で非表示にする
    loading.style.display = 'none';
  }
};

// イベントリスナー
all.addEventListener('change', () => {
  fetchCharacter('https://ihatov08.github.io/kimetsu_api/api/all.json');
});

kisatsutai.addEventListener('change', () => {
  fetchCharacter('https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json');
});

hashira.addEventListener('change', () => {
  fetchCharacter('https://ihatov08.github.io/kimetsu_api/api/hashira.json');
});

oni.addEventListener('change', () => {
  fetchCharacter('https://ihatov08.github.io/kimetsu_api/api/oni.json');
});

// 初期表示（全キャラクター）
fetchCharacter('https://ihatov08.github.io/kimetsu_api/api/all.json');
