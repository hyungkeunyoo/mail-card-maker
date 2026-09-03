메일 명함 생성기 V7.1.0 · TEMPLATE COLLECTION

실행
- index.html을 Live Server 등 정적 HTTP 서버로 열기.
- 기존 GitHub Pages 설정을 그대로 사용한다.
- 프레임워크나 빌드 과정 없이 index.html, card-templates.js, assets를 함께 제공한다.

디자인: 총 3종
0. 기본형: 기존 배경 유지. 최초 접속 및 기본값 복원의 기본 선택.
1. 골드 룰 클래식: 교수·보직자·대외협력·협약/의전 업무.
2. 블루 시그널 라인: 산학협력·기술·사업단·연구 프로젝트.
- 사용자 피드백에 따라 캐릭터 소프트 민트, 실버 패널 모던, 레트로 코랄 포인트를 제거했다.
- 세 디자인 모두 직급을 실제로 그려진 이름 바로 오른쪽에 배치한다.
- 이름과 직급의 글자 하단을 정렬하고 간격을 기준 Canvas에서 24px로 유지한다.
  이름이 길거나 위치/크기를 조절해도 직급이 함께 따라간다.
- 블루 오른쪽의 색상 막대와 곡선·점 장식을 제거하고 밝은 이미지 패널을 유지했다.

디자인 기준 및 자산
- 신규 디자인의 기준 자료: MAIL_CARD_TEMPLATE_CONCEPTS_V1.zip 및 사용자 수정 요청.
- 모든 배경은 2048×706 PNG.
- 기존 assets/template.png와 골드 배경은 원본 파일을 유지한다.
- assets/templates/mailcard_template_02_gold_rule.png
- assets/templates/mailcard_template_05_blue_signal.png
- assets/templates/thumbnails/{default,gold_rule,blue_signal}.webp
  각 360×124px, 3개 합계 약 2KB. 원본 크기의 참고 미리보기 PNG는 로드하지 않는다.
- 블루 배경은 원본 구성을 기준으로 우측 강조선을 제거한 수정본이다.
- 공식 로고 2개와 캐릭터 98종은 기존 assets/logos 및 assets/chars를 계속 사용한다.
  ZIP 미리보기의 예시 로고·캐릭터는 출력 이미지에 합성하지 않는다.
- 기존 Pretendard를 유지하며 공식 지정 폰트 파일은 추가하지 않는다.

CARD_TEMPLATES 레지스트리: card-templates.js
- APP_VERSION: 화면에 표시하는 버전.
- CARD_TEMPLATES[id]: id, name, description, background, thumbnail, layout.
- layout: logos, name, title, nameTitleGap, teamWithWork, teamWithoutWork, work,
  et, email, phone, addressWithWork, addressWithoutWork, characterBox.
- logos: 기존 공식 로고의 src 및 템플릿별 x/y/w/h.
- 텍스트: x/y, maxWidth, startSize, minSize, color.
- characterBox: 캐릭터와 사진이 공유하는 기준 영역.
- nameTitleGap: 이름과 직급 사이 간격. 현재 세 디자인 모두 24px.
- 기존 CONFIG를 default.layout으로 이관하고 이름/직급 인접 배치를 추가했다.
- title.x + title.maxWidth는 이름/직급 행의 우측 경계로 사용한다.
  title의 실제 위치는 이름의 렌더링 결과에 맞춰 정해진다.
- 긴 이름과 직급은 각 영역 안에서 자동 축소·말줄임 처리한다.
- 골드의 주소가 이미지와 겹치면 이미지 앞까지 주소 폭을 제한한다.
  기준 좌표를 유지하고 기존 자동 축소·말줄임으로 충돌을 방지한다.

새 디자인 추가 방법
1. 2048×706 배경 PNG를 assets/templates/에 추가한다.
2. 작은 배경 썸네일을 assets/templates/thumbnails/에 추가한다.
3. CARD_TEMPLATES에 고유 id, 메타데이터 및 layout을 추가한다. nameTitleGap도 지정한다.
4. 선택 UI는 레지스트리에서 자동 생성된다. 미리보기와 PNG는 같은 렌더러를 사용한다.
5. 담당업무 유무, 로고 3종, 이미지 모드 3종, 짧은/긴 이름과 직급,
   이름 위치/크기 조정, 390px 화면, 750px/5000px PNG를 검증한다.

상태 보존
- 디자인 전환 시 이름·직급·소속·업무·이메일·전화·주소·로고·출력 폭·굵기를 유지한다.
- 캐릭터 분류·선택, 사진 파일·모양, 이미지 없음 선택을 유지한다.
- 캐릭터·사진·이름의 위치/크기 조정값을 새 디자인 기준 좌표에 상대값으로 적용한다.
- 사진 슬라이더는 기존과 같이 해당 사진 영역 안의 이동과 확대를 조정한다.
- 선택한 배경만 필요할 때 로드하고 이미지 캐시를 재사용한다.
- 빠른 전환 중 늦게 완료된 이전 요청은 무시한다.
- 배경 로딩 중 또는 실패 시 다운로드를 막고 재선택으로 재시도할 수 있다.
- 기본값 복원은 기본형 및 V7.0.0 입력 기본값으로 돌아간다.
  변경이 없으면 확인창을 띄우지 않는다.

V7.0.0 성능·안전 기능 유지
- 이미지 trim 결과 캐시 및 requestAnimationFrame 기반 렌더링 병합.
- 모바일 sticky 실시간 Canvas 미리보기와 접기/펼치기.
- 긴 텍스트 경고, 미리보기와 PNG의 동일한 말줄임 처리.
- 이름 필수·이메일 형식 검증 및 모바일 전화번호 키보드.
- canvas.toBlob() 및 Object URL 다운로드, URL revoke, 중복 클릭 방지 및 상태 표시.
- 기본값 복원 확인창, focus-visible, 주요 44px 이상 터치 영역.
- 네이티브 radio 디자인 선택 및 Tab·방향키·Space 지원.
- 캐릭터 98종, 사진 업로드, 사진 모양, 이미지 없음 모드.
- Google Analytics ID G-REQY4913H3 및 기존 png_download 이벤트/속성 유지.
  업로드한 사진 파일과 파일명은 서버나 Analytics로 전송하지 않는다.

제공 ZIP의 한양대학교 색상 기준
- Hanyang Blue #0E4A84
- Hanyang Silver #898C8E
- Hanyang Yellow Green #7DB928
- Hanyang Orange #F08100
- Hanyang Gold #88774F
- Hanyang Gray #3F3D42
- White #FFFFFF
