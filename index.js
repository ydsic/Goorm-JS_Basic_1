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

// 깃허브 아이콘 이미지에 마우스 커서를 가져다가 대면 이 함수 실행
function spin() {
  const goGit = document.getElementById('github');
  //addEventListener로 이벤트 추가 
  goGit.addEventListener('mouseover', () => {
    //toggle로 spin이란 클래스이름이 없으면 추가, 있다면 제거로 spin 애니메이션 추가 및 제거
    goGit.classList.toggle('spin');
  });
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
function showContent(missionId) {
    // 클릭이 안된 나머지 section들은 hideAllContents() 함수를 먼저 실행
  hideAllContents();
    // 그리고 mission1이란 id를 가진 section을 변수에 저장시키고
  const mission = document.getElementById(missionId);

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



// 아래 코드는 피드백 받기 전에 코드인데 DOM 사용이 익숙치 않은 상태에 알고리즘까지 생각해보려니 헷갈려서 비효율적으로 코드를 짜고 피드백을 보냈었는데
// id값을 매개변수로 받아오면 코드를 하나로 통일시킬 수 있다는 피드백을 받고 위에 코드로 수정했습니다

// function showContent1() {
//   hideAllContents();
//   const mission = document.getElementById('mission1');

//   mission.style.display = 'flex';
//   setTimeout(() => {
//     mission.style.opacity = '1';
//     mission.style.transition = 'opacity 1000ms';
//   }, 100);
// }

// function showContent2() {
//   hideAllContents();
//   const mission = document.getElementById('mission2');

//   mission.style.display = 'flex';
//   setTimeout(() => {
//     mission.style.opacity = '1';
//     mission.style.transition = 'opacity 1000ms';
//   }, 100);
// }

// function showContent3() {
//   hideAllContents();
//   const mission = document.getElementById('mission3');

//   mission.style.display = 'flex';
//   setTimeout(() => {
//     mission.style.opacity = '1';
//     mission.style.transition = 'opacity 1000ms';
//   }, 100);
// }

// function showContent4() {
//   hideAllContents();
//   const mission = document.getElementById('mission4');

//   mission.style.display = 'flex';
//   setTimeout(() => {
//     mission.style.opacity = '1';
//     mission.style.transition = 'opacity 1000ms';
//   }, 100);
// }

// function showContent5() {
//   hideAllContents();
//   const mission = document.getElementById('mission5');

//   mission.style.display = 'flex';
//   setTimeout(() => {
//     mission.style.opacity = '1';
//     mission.style.transition = 'opacity 1000ms';
//   }, 100);
// }