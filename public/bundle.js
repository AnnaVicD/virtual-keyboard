(()=>{"use strict";const e=[{en:"`",ru:"ё",shift:"~",system:!1,code:"Backquote",row:1},{en:"1",ru:"1",shift:"!",system:!1,code:"Digit1",row:1},{en:"2",ru:"2",shift:"@",system:!1,code:"Digit2",row:1},{en:"3",ru:"3",shift:"№",system:!1,code:"Digit3",row:1},{en:"4",ru:"4",shift:"$",system:!1,code:"Digit4",row:1},{en:"5",ru:"5",shift:"%",system:!1,code:"Digit5",row:1},{en:"6",ru:"6",shift:"^",system:!1,code:"Digit6",row:1},{en:"7",ru:"7",shift:"&",system:!1,code:"Digit7",row:1},{en:"8",ru:"8",shift:"*",system:!1,code:"Digit8",row:1},{en:"9",ru:"9",shift:"(",system:!1,code:"Digit9",row:1},{en:"0",ru:"0",shift:")",system:!1,code:"Digit0",row:1},{en:"-",ru:"-",shift:"_",system:!1,code:"Minus",row:1},{en:"=",ru:"=",shift:"+",system:!1,code:"Equal",row:1},{en:"Backspace",ru:"Backspace",system:!0,code:"Backspace",row:1},{en:"Tab",ru:"Tab",system:!0,code:"Tab",row:2},{en:"q",ru:"й",system:!1,code:"KeyQ",row:2},{en:"w",ru:"ц",system:!1,code:"KeyW",row:2},{en:"e",ru:"у",system:!1,code:"KeyE",row:2},{en:"r",ru:"к",system:!1,code:"KeyR",row:2},{en:"t",ru:"е",system:!1,code:"KeyT",row:2},{en:"y",ru:"н",system:!1,code:"KeyY",row:2},{en:"u",ru:"г",system:!1,code:"KeyU",row:2},{en:"i",ru:"ш",system:!1,code:"KeyI",row:2},{en:"o",ru:"щ",system:!1,code:"KeyO",row:2},{en:"p",ru:"з",system:!1,code:"KeyP",row:2},{en:"[",ru:"х",shift:"{",system:!1,code:"BracketLeft",row:2},{en:"]",ru:"ъ",shift:"}",system:!1,code:"BracketRight",row:2},{en:"|",ru:"\\",shift:"/",system:!1,code:"Backslash",row:2},{en:"Caps Lock",ru:"Caps Lock",system:!0,code:"CapsLock",row:3},{en:"a",ru:"ф",system:!1,code:"KeyA",row:3},{en:"s",ru:"ы",system:!1,code:"KeyS",row:3},{en:"d",ru:"в",system:!1,code:"KeyD",row:3},{en:"f",ru:"а",system:!1,code:"KeyF",row:3},{en:"g",ru:"п",system:!1,code:"KeyG",row:3},{en:"h",ru:"р",system:!1,code:"KeyH",row:3},{en:"j",ru:"о",system:!1,code:"KeyJ",row:3},{en:"k",ru:"л",system:!1,code:"KeyK",row:3},{en:"l",ru:"д",system:!1,code:"KeyL",row:3},{en:";",ru:"ж",shift:":",system:!1,code:"Semicolon",row:3},{en:"'",ru:"э",shift:'"',system:!1,code:"Quote",row:3},{en:"Enter",ru:"Enter",system:!0,code:"Enter",row:3},{en:"Shift",ru:"Shift",system:!0,code:"ShiftLeft",row:4},{en:"z",ru:"я",system:!1,code:"KeyZ",row:4},{en:"x",ru:"ч",system:!1,code:"KeyX",row:4},{en:"c",ru:"с",system:!1,code:"KeyC",row:4},{en:"v",ru:"м",system:!1,code:"KeyV",row:4},{en:"b",ru:"и",system:!1,code:"KeyB",row:4},{en:"n",ru:"т",system:!1,code:"KeyN",row:4},{en:"m",ru:"ь",system:!1,code:"KeyM",row:4},{en:",",ru:"б",shift:"<",system:!1,code:"Comma",row:4},{en:".",ru:"ю",shift:">",system:!1,code:"Period",row:4},{en:"/",ru:"/",shift:"?",system:!1,code:"Slash",row:4},{en:"&uarr;",ru:"&uarr;",system:!0,code:"ArrowUp",row:4},{en:"Shift",ru:"Shift",system:!0,code:"ShiftRight",row:4},{en:"Ctrl",ru:"Ctrl",system:!0,code:"ControlLeft",row:5},{en:"Win",ru:"Win",system:!0,code:"MetaLeft",row:5},{en:"Alt",ru:"Alt",system:!0,code:"AltLeft",row:5},{en:"Space",ru:"Space",system:!0,code:"Space",row:5},{en:"Alt",ru:"Alt",system:!0,code:"AltRight",row:5},{en:"Ctrl",ru:"Ctrl",system:!0,code:"ControlRight",row:5},{en:"&larr;",ru:"&larr;",system:!0,code:"ArrowLeft",row:5},{en:"&darr;",ru:"&darr;",system:!0,code:"ArrowDown",row:5},{en:"&rarr;",ru:"&rarr;",system:!0,code:"ArrowRight",row:5}];let t=localStorage.getItem("lang")??"en",o="true"===localStorage.getItem("caps"),r="",s=!1;const c=()=>{document.querySelector(".keybord").innerHTML='\n      <div class="row first" data-row="1"></div>\n      <div class="row second" data-row="2"></div>\n      <div class="row third" data-row="3"></div>\n      <div class="row fourth" data-row="4"></div>\n      <div class="row fifth" data-row="5"></div>\n    ',e.forEach((e=>{const r=e.system?"system":"",c="Caps Lock"===e.en&&o?"highlighted":"",n=s&&"ShiftLeft"===e.code?"active":"";let d=e.system?e.en:o?e[t].toUpperCase():e[t];d=s&&void 0!==e.shift?e.shift:d;const y=`\n            <div class="key ${r} ${c} ${n}" data-key="${e.code}">\n                ${d}\n            </div>\n        `;document.querySelector(`[data-row='${e.row}']`).innerHTML+=y,setTimeout((()=>{document.querySelector(`[data-key="${e.code}"]`).onmousedown=()=>(document.dispatchEvent(new KeyboardEvent("keydown",{code:e.code,key:s&&void 0!==e.shift?e.shift:e[t]})),!1)}),100)}));const c=document.querySelector("textarea");c.focus(),c.onkeyup=()=>{r=c.value},c.addEventListener("blur",(()=>c.focus()))};document.addEventListener("DOMContentLoaded",(()=>{document.body.innerHTML=`\n    <div class="container">\n        <p>Переключение языка происходит по клавишам Ctrl+Alt</p>\n        <textarea data-text>${r}</textarea>\n        <div class="keybord">\n            \n        </div>\n    </div>\n  `,c()}),!1),document.onkeyup=e=>{const t=document.querySelector(`[data-key="${e.code}"]`);if("ShiftLeft"===e.code)return s=!1,void c();if(t!==undefined&&t!==null&&t.classList!==null)t.classList.remove("active")},document.onmouseup=e=>{void 0===e.target.attributes["data-text"]&&(document.querySelectorAll("[data-key]").forEach((e=>e.classList.remove("active"))),s=!1,c())},document.onkeydown=n=>{const d=e.find((e=>e.code===n.code));if(d===undefined)return true;if(n.isTrusted)return document.dispatchEvent(new KeyboardEvent("keydown",{code:d.code,key:s&&void 0!==d.shift?d.shift:d[t],altKey:n.altKey,ctrlKey:n.ctrlKey})),!1;const y=document.querySelector(`[data-key="${n.code}"]`);if(y.classList.toggle("active"),"ShiftLeft"===n.code)return s=!0,c(),!1;if(!d.system){const e=s&&void 0!==d.shift?d.shift:d[t];r+=o?e.toUpperCase():e}return"Backspace"===n.code&&(r=r.substring(0,r.length-1)),"Space"===n.code&&(r+=" "),"Enter"===n.code&&(r+="\n"),"ArrowLeft"===n.code&&(r+="←"),"ArrowRight"===n.code&&(r+="→"),"ArrowUp"===n.code&&(r+="↑"),"ArrowDown"===n.code&&(r+="↓"),"Tab"===n.code&&(r+="\t"),"CapsLock"===n.code&&(o=!o,localStorage.setItem("caps",o),y.classList.toggle("highlighted"),c()),n.altKey&&n.ctrlKey&&(t="en"===t?"ru":"en",localStorage.setItem("lang",t),c()),document.querySelector("textarea").value=r,!1}})();
