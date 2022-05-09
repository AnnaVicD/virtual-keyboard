/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import keys from './keys';

let keyboardLanguage = localStorage.getItem('lang') ?? 'en';
let capsLock = localStorage.getItem('caps') === 'true';
let textareaValue = '';
let shiftPressed = false;

const drawSkeleton = () => {
  document.body.innerHTML = `
    <div class="container">
        <p>Переключение языка происходит по клавишам Ctrl+Alt</p>
        <textarea data-text>${textareaValue}</textarea>
        <div class="keybord">
            
        </div>
    </div>
  `;
};

const drawKeyboard = () => {
  document.querySelector('.keybord').innerHTML = `
      <div class="row first" data-row="1"></div>
      <div class="row second" data-row="2"></div>
      <div class="row third" data-row="3"></div>
      <div class="row fourth" data-row="4"></div>
      <div class="row fifth" data-row="5"></div>
    `;

  keys.forEach((key) => {
    const systemClass = key.system ? 'system' : '';
    const highlighted = key.en === 'Caps Lock' && capsLock ? 'highlighted' : '';
    const active = shiftPressed && key.code === 'ShiftLeft' ? 'active' : '';
    let content = key.system ? key.en : (capsLock ? key[keyboardLanguage].toUpperCase() : key[keyboardLanguage]);
    content = shiftPressed && key.shift !== undefined ? key.shift : content;
    const keyTemplate = `
            <div class="key ${systemClass} ${highlighted} ${active}" data-key="${key.code}">
                ${content}
            </div>
        `;
    document.querySelector(`[data-row='${key.row}']`).innerHTML += keyTemplate;

    setTimeout(() => {
      document.querySelector(`[data-key="${key.code}"]`).onmousedown = () => {
        document.dispatchEvent(new KeyboardEvent('keydown', {
          code: key.code,
          key: shiftPressed ? (key.shift !== undefined ? key.shift : key[keyboardLanguage]) : key[keyboardLanguage],
        }));
        return false;
      };
    }, 100);
  });

  const textarea = document.querySelector('textarea');
  textarea.focus();
  textarea.onkeyup = () => {
    textareaValue = textarea.value;
  };
  // eslint-disable-next-line spaced-comment
  textarea.addEventListener('blur', () => textarea.focus());
};

document.addEventListener('DOMContentLoaded', () => {
  drawSkeleton();
  drawKeyboard();
}, false);

document.onkeyup = (event) => {
  const key = document.querySelector(`[data-key="${event.code}"]`);
  // если зажата shift
  if (event.code === 'ShiftLeft') {
    shiftPressed = false;
    drawKeyboard();
    return;
  }

  key.classList.remove('active');
};

document.onmouseup = (event) => {
  // eslint-disable-next-line no-console
  if (event.target.attributes['data-text'] !== undefined) { return; }
  document.querySelectorAll('[data-key]').forEach((el) => el.classList.remove('active'));
  shiftPressed = false;
  drawKeyboard();
};

document.onkeydown = (event) => {
  const keyElement = keys.find((el) => el.code === event.code);

  if (event.isTrusted) {
    document.dispatchEvent(new KeyboardEvent('keydown', {
      code: keyElement.code,
      key: shiftPressed ? (keyElement.shift !== undefined ? keyElement.shift : keyElement[keyboardLanguage]) : keyElement[keyboardLanguage],
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
    }));
    return false;
  }

  const key = document.querySelector(`[data-key="${event.code}"]`);
  key.classList.toggle('active');

  // если зажата shift
  if (event.code === 'ShiftLeft') {
    shiftPressed = true;
    drawKeyboard();
    return false;
  }

  if (!keyElement.system) {
    const val = shiftPressed ? (keyElement.shift !== undefined ? keyElement.shift : keyElement[keyboardLanguage]) : keyElement[keyboardLanguage];
    textareaValue += capsLock ? val.toUpperCase() : val;
  }

  // Backspace
  if (event.code === 'Backspace') { textareaValue = textareaValue.substring(0, textareaValue.length - 1); }
  // Space
  if (event.code === 'Space') { textareaValue += ' '; }
  // Enter
  if (event.code === 'Enter') { textareaValue += '\n'; }
  // ArrowLeft
  if (event.code === 'ArrowLeft') { textareaValue += '←'; }
  // ArrowRight
  if (event.code === 'ArrowRight') { textareaValue += '→'; }
  // ArrowUp
  if (event.code === 'ArrowUp') { textareaValue += '↑'; }
  // ArrowDown
  if (event.code === 'ArrowDown') { textareaValue += '↓'; }
  // Tab
  if (event.code === 'Tab') { textareaValue += '\t'; }

  // Caps Lock
  if (event.code === 'CapsLock') {
    capsLock = !capsLock;
    localStorage.setItem('caps', capsLock);
    key.classList.toggle('highlighted');
    drawKeyboard();
  }

  // Alt+Ctrl
  if (event.altKey && event.ctrlKey) {
    keyboardLanguage = keyboardLanguage === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', keyboardLanguage);
    drawKeyboard();
  }

  document.querySelector('textarea').value = textareaValue;
  return false;
};
