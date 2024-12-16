// 編輯名稱功能
const editBtn = document.getElementById('edit-btn');
const nameDisplay = document.getElementById('name-display');
let isEditing = false;

editBtn.addEventListener('click', () => {
  if (isEditing) {
    // Save Mode
    const inputField = document.getElementById('name-input');
    nameDisplay.innerHTML = `${inputField.value} <button id="edit-btn" class="edit-btn">edit</button>`;
    isEditing = false;
    editBtn.textContent = 'edit';
  } else {
    // Edit Mode
    const currentName = nameDisplay.textContent.trim();
    nameDisplay.innerHTML = `<input id="name-input" type="text" value="${currentName}"> <button id="edit-btn" class="edit-btn">save</button>`;
    isEditing = true;
  }
});

// 新增音樂功能
const addMusicBtn = document.getElementById('add-music-btn');
const musicForm = document.getElementById('music-form-container');
const submitMusicBtn = document.getElementById('submit-music-btn');
const musicList = document.getElementById('music-list');

addMusicBtn.addEventListener('click', () => {
  musicForm.classList.remove('hidden');
});

submitMusicBtn.addEventListener('click', () => {
  const musicLink = document.getElementById('music-link').value;
  const musicName = document.getElementById('music-name').value;

  if (musicLink && musicName) {
    const musicItem = document.createElement('div');
    musicItem.classList.add('music-item');
    musicItem.innerHTML = `
      <a href="${musicLink}" target="_blank">
        <img src="spotify.png" alt="Music Icon">
      </a>
      <p>${musicName}</p>
    `;
    musicList.appendChild(musicItem);
    musicForm.classList.add('hidden');
  } else {
    alert('Please fill in both fields!');
  }
});
