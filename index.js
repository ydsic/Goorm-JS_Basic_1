// 브라우저가 HTML을 전부 읽고 DOM트리를 완성하는 즉시 발생되는 이벤트
window.addEventListener('DOMContentLoaded', () => {
  // HTML을 전부 읽자마자 main 태그 안에 있는 section들을 전부 불러와서 변수에 저장하고
  const sections = document.querySelectorAll('main > section');

  // forEach 함수로 모든 section들을 한번씩 돌아가면서 
  sections.forEach(section => {
    section.style.opacity = '0'; //투명도 0을 주는데
    section.style.transition = 'opacity 1000ms'; // 1초동안 서서히 사라지게 효과를 주고
    section.style.display = 'none'; //section display를 none으로 해서 안보이게 설정
  });
});

// 깃허브 아이콘을 누르면 onclick으로 이 함수가 실행
function goGithub(){
  const goGit = document.getElementById('github');
  //EventListener로 click이 되면 window.open함수로 새 창을 열고 아래 링크로 연결
  goGit.addEventListener('click', window.open('https://github.com/ydsic/Goorm-JS_Basic_1'));
}


// nav 태그에서 버튼을 클릭 했을 때 클릭이 안된 나머지 section들을 숨기는 함수
function hideAllContents() {
  // main 태그 안에 있는 section들을 전부 불러와서 변수에 저장하고
  const sections = document.querySelectorAll('main > section');

  // forEach 함수로 모든 section들을 한번씩 돌아가면서 
  sections.forEach(section => {
    section.style.opacity = '0'; //투명도 0을 주는데
    section.style.transition = 'opacity 1000ms'; // 1초동안 서서히 사라지게 효과를 준다
  });
}

// nav 태그에서 버튼을 클릭 했을 때 section을 보여주는 함수
function showContent1() {
  // 클릭이 안된 나머지 section들은 hideAllContents() 함수를 먼저 실행
  hideAllContents();
  // 그리고 mission1이란 id를 가진 section을 변수에 저장시키고
  const mission = document.getElementById('mission1');

  // display가 none으로 되어있던걸 flex로 바꾸는데
  mission.style.display = 'flex';

  // setTimeout으로 아주 잠깐 지연시킨 뒤 투명도를 1초동안 서서히 1이 되게 효과를 준다
  setTimeout(() => {
    mission.style.opacity = '1';
    mission.style.transition = 'opacity 1000ms';
  }, 100);

  // 추가설명 : setTimeout을 주지 않으면 display를 none에서 flex로 변경되면서 display가 로딩이 되는 동안 opacity가 처리가 되면서
  // 화면에 아주 잠깐동안 보이게 되므로 서서히 투명도가 올라가는 부드러운 효과를 줄 수 없기 때문
}

// 아래부터는 showContent1() 이랑 같은 코드이지만 class name만 다릅니다.
// 코드길이를 줄이고 더 간편한 방식으로 코드를 짤 수 있었지만 아직 DOM 사용이 어색한데 알고리즘 부분까지 생각하려니 모르겠어서..
function showContent2() {
  hideAllContents();
  const mission = document.getElementById('mission2');

  mission.style.display = 'flex';
  setTimeout(() => {
    mission.style.opacity = '1';
    mission.style.transition = 'opacity 1000ms';
  }, 100);
}

function showContent3() {
  hideAllContents();
  const mission = document.getElementById('mission3');

  mission.style.display = 'flex';
  setTimeout(() => {
    mission.style.opacity = '1';
    mission.style.transition = 'opacity 1000ms';
  }, 100);
}

function showContent4() {
  hideAllContents();
  const mission = document.getElementById('mission4');

  mission.style.display = 'flex';
  setTimeout(() => {
    mission.style.opacity = '1';
    mission.style.transition = 'opacity 1000ms';
  }, 100);
}

function showContent5() {
  hideAllContents();
  const mission = document.getElementById('mission5');

  mission.style.display = 'flex';
  setTimeout(() => {
    mission.style.opacity = '1';
    mission.style.transition = 'opacity 1000ms';
  }, 100);
}

