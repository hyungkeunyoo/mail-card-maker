메일 명함 생성기 V7.1.0 · TEMPLATE COLLECTION

실행
- index.html을 정적 HTTP 서버로 열기. 프레임워크나 빌드 과정은 필요하지 않다.
- index.html, card-templates.js, assets를 함께 제공한다. 기존 GitHub Pages 설정을 유지한다.

디자인: 총 7종
0. 기본형: 기존 V7.0.0 배경. 최초 접속 및 기본값 복원의 기본 선택.
1. 골드 룰 클래식: 교수·보직자·대외협력·협약/의전 업무.
2. 블루 시그널 라인: 산학협력·기술·사업단·연구 프로젝트.
3. 네이비 사선 시그니처: 사선 코너와 넓은 로고 영역.
4. 네이비 골드 프레임: 네이비 블록과 가는 골드 라인.
5. 실버 프로필 패널: 원형 이미지 공간과 분리된 정보 영역.
6. 미드나이트 플로우: 딥 네이비 배경과 푸른 곡선.
- 사용자 피드백에 따라 캐릭터 소프트 민트, 실버 패널 모던, 레트로 코랄 포인트를 제거했다.
- 블루 시그널 라인 오른쪽의 색상 막대와 곡선·점 장식을 제거했다.
- 직급은 이름 바로 오른쪽에 배치하고 글자 하단을 정렬한다.
- 미드나이트 플로우는 좁은 왼쪽 이름 영역에 맞춰 직급을 이름 바로 아래에 배치한다.
- 이름 위치/크기를 바꾸면 직급도 따라가며, 기준 Canvas에서 간격은 24px이다.

디자인 기준 및 자산
- MAIL_CARD_TEMPLATE_CONCEPTS_V1.zip, 사용자 수정 요청 및 추가로 제공한 PNG 4종을 기준으로 한다.
- 추가 4종의 예시 문구·이름·연락처·로고·아이콘·인물 실루엣을 ImageGen으로 제거했다.
  사용자가 입력한 글자와 선택/업로드한 로고·이미지만 배경에 합성한다.
- 기준 Canvas는 2048×706. 배경 원본 해상도를 유지하고 같은 비율로 그린다.
- 기존 assets/template.png와 골드 배경은 원본 파일을 유지한다.
- assets/templates/mailcard_template_02_gold_rule.png
- assets/templates/mailcard_template_05_blue_signal.png
- assets/templates/{diagonal_signature,navy_gold_frame,portrait_panel,midnight_flow}.png
  추가 4종은 약 2137×736px이며 navy_gold_frame은 2138×736px이다.
- assets/templates/thumbnails/{템플릿 id}.webp: 360×124px 선택용 썸네일.
  참고용 완성 미리보기 PNG를 앱에 불러오지 않는다.
- 공식 로고 2개, 캐릭터 98종, Pretendard는 기존 자산을 유지한다.

직접 로고 넣기
- 로고에서 '직접 올린 로고'를 선택해 PNG·JPG·WEBP(최대 20MB)를 넣는다.
- 투명 PNG를 권장한다. 로고 위치·크기·색상 조절에서 좌우·상하 및 크기를 바꾼다.
- 자동 색상은 어두운 템플릿의 공식 로고를 밝게 표시하며 직접 올린 로고는 원색을 유지한다.
- 흰색 옵션은 투명 영역을 보존하고 불투명 영역을 흰색으로 바꾼다.
- 로고 배치 초기화는 위치/크기만 초기화한다. 전체 기본값 복원은 업로드 로고도 지운다.
- 로고는 브라우저에서만 처리한다. 로고 내용/파일명은 서버나 Analytics로 전송하지 않는다.
- 업로드 중 다운로드를 막고, 형식/크기 오류 및 손상 파일을 안내한다.
- 교체/초기화 시 Object URL을 해제하고 늦게 완료된 이전 로드 결과를 무시한다.

출력 화질
- 모든 디자인은 미리보기와 PNG에 같은 렌더러를 사용한다.
- 100~5000px 출력 크기의 Canvas에 텍스트와 원본 자산을 직접 그린다.
  미리보기 비트맵을 확대하던 방식에서 변경해 큰 PNG의 글자가 선명해진다.
- 사진·로고·배경·캐릭터의 세부 품질은 각 원본 해상도에 영향을 받는다.
  5000px 저장이 저해상도 원본의 세부 묘사까지 복원하는 것은 아니다.

CARD_TEMPLATES 레지스트리: card-templates.js
- APP_VERSION: 화면 표시 버전.
- CARD_TEMPLATES[id]: id, name, description, background, thumbnail, layout.
- layout: logos, name, title, nameTitleGap, teamWithWork, teamWithoutWork, work,
  et, email, phone, addressWithWork, addressWithoutWork, characterBox.
- logos: 공식 로고 src 및 템플릿별 x/y/w/h. 업로드 로고는 erica 기준 영역에서 시작한다.
- 텍스트: x/y, maxWidth, startSize, minSize, color.
- characterBox: 캐릭터와 사진의 기준 영역. 원형 사진은 사진 모양에서 선택한다.
- nameTitleGap: 이름과 직급 사이 간격. nameTitlePlacement가 'below'이면 아래에 붙인다.
- logoTint: 자동 색상에서 공식 로고에 적용할 색상. 미드나이트 플로우에서 사용한다.
- 기존 CONFIG를 default.layout으로 이관하고 이름/직급 인접 배치를 추가했다.
- title.x + title.maxWidth는 이름/직급 행의 우측 경계이며 실제 직급 위치는 이름에 따라 정해진다.
- 긴 텍스트는 자동 축소·말줄임 처리한다. 주소와 이미지 영역이 겹치면 주소 폭을 제한한다.

새 디자인 추가
1. 배경 PNG와 360×124 썸네일을 assets/templates 및 thumbnails에 추가한다.
2. CARD_TEMPLATES에 고유 id, 메타데이터, 2048×706 기준 layout을 추가한다.
3. 선택 UI는 레지스트리에서 생성된다. 미리보기와 PNG는 같은 렌더러를 사용한다.
4. 담당업무 유무, 로고/이미지 모드, 긴 텍스트, 모바일, 750px/5000px PNG를 확인한다.

상태 보존
- 디자인 전환 시 모든 입력값, 출력 폭, 굵기, 로고 선택/업로드, 사진, 캐릭터, 조정값을 유지한다.
- 각 위치/크기 조정값은 새 디자인의 기준 좌표에 상대값으로 적용한다.
- 사진 슬라이더는 기존과 같이 사진 영역 안의 이동과 확대를 조정한다.
- 배경은 선택할 때 로드하며 캐시를 재사용한다. 빠른 전환 중 늦은 이전 요청은 무시한다.
- 배경 로딩 중/실패 시 다운로드를 막고 재선택으로 재시도할 수 있다.
- 기본값 복원은 기본형 및 기존 입력 기본값으로 돌아간다. 변경이 없으면 확인창을 생략한다.

기존 V7.0.0 기능 유지
- 이미지 trim 캐시, requestAnimationFrame 렌더링 병합.
- 모바일 sticky Canvas 미리보기 및 접기/펼치기.
- 긴 텍스트 경고, 이름 필수/이메일 형식 검증, 전화번호 키보드.
- canvas.toBlob, Object URL 다운로드 및 해제, 중복 클릭 방지, 상태 표시.
- 기본값 복원 확인창, focus-visible, 주요 44px 이상 터치 영역.
- 네이티브 radio 디자인 선택 및 키보드 사용.
- 캐릭터 98종, 사진 업로드/모양/위치/크기, 이미지 없음 모드.
- Google Analytics ID G-REQY4913H3 및 png_download 이벤트 유지.
  개인 연락처와 업로드한 사진/로고 파일명·내용은 통계에 포함하지 않는다.

ZIP 색상 기준
Hanyang Blue #0E4A84 / Silver #898C8E / Yellow Green #7DB928 /
Orange #F08100 / Gold #88774F / Gray #3F3D42 / White #FFFFFF
