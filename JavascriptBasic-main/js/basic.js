function openBox() {
  // openBtn을 클릭 했을 때 .box-wrapper의 display 
  // 속성을 block으로 바꿔준다
  document.querySelector('.box-wrapper').style.display = 'block';
} 
// openBtn.addEventListener('click', openBox);

function closeBox() {
  // clostBtn을 클릭 했을 때
  // .box-wrapper의 display를 none 바꿔준다
  document.querySelector('.box-wrapper').style.display = 'none';
}
// clostBtn.addEventListener('click', closeBox);

// let openBtn = document.querySelector('.open-btn');
// let closeBtn = document.querySelector('.close-btn');
// console.log(openBtn, closeBtn)

// openBtn.addEventListener('click', function() {
//   document.querySelector('.box-wrapper').style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {
//   document.querySelector('.box-wrapper').style.display = 'none';
// });

function Box(display) {
  document.querySelector('.box-wrapper').style.display = display;
}