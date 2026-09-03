메일 명함 생성기 V7.1.0 · TEMPLATE COLLECTION

실행
- index.html을 Live Server 등 정적 HTTP 서버로 열기.
- 기존 GitHub Pages 설정을 그대로 사용한다.
- 프레임워크나 빌드 과정 없이 index.html, card-templates.js, assets를 함께 제공한다.

디자인: 기존 기본형 포함 총 6종
0. 기본형: 기존 V7.0.0 디자인. 최초 접속 및 기본값 복원의 기본 선택.
1. 캐릭터 소프트 민트: 직원·학생조직·SNS 홍보 등 캐릭터 중심 업무.
2. 골드 룰 클래식: 교수·보직자·대외협력·협약/의전 업무.
3. 실버 패널 모던: 행정부서·센터·연구조직·프로필 사진 사용.
4. 레트로 코랄 포인트: 학생·홍보·문화·콘텐츠 관련 업무.
5. 블루 시그널 라인: 산학협력·기술·사업단·연구 프로젝트.

디자인 기준 및 자산
- 신규 디자인의 유일한 기준 자료: MAIL_CARD_TEMPLATE_CONCEPTS_V1.zip.
- 신규 배경은 ZIP 원본의 2048×706 PNG를 파일명과 내용 변경 없이 복사했다.
- 기존 assets/template.png는 그대로 유지한다.
- assets/templates/mailcard_template_01_character_mint.png
- assets/templates/mailcard_template_02_gold_rule.png
- assets/templates/mailcard_template_03_silver_split.png
- assets/templates/mailcard_template_04_retro_coral.png
- assets/templates/mailcard_template_05_blue_signal.png
- assets/templates/thumbnails/{default,character_mint,gold_rule,silver_split,retro_coral,blue_signal}.webp
  선택용 배경 썸네일은 각 360×124px, 6개 합계 약 5.5KB.
  원본 크기의 참고 미리보기 PNG는 초기 로딩하지 않는다.
- 공식 로고 2개와 캐릭터 98종은 기존 assets/logos 및 assets/chars를 계속 사용한다.
  ZIP 미리보기의 예시 로고·캐릭터는 출력 이미지에 합성하지 않는다.
- 기존 Pretendard를 유지하며 공식 지정 폰트 파일은 추가하지 않는다.

CARD_TEMPLATES 레지스트리: card-templates.js
- APP_VERSION: 화면에 표시하는 버전.
- CARD_TEMPLATES[id]: id, name, description, background, thumbnail, layout.
- textRightEdges: 필요할 때 특정 텍스트가 넘지 않을 우측 경계를 지정한다.
  블루 시그널 라인의 이메일은 배경 골드 장식선 앞에서 자동 축소한다.
- layout: logos, name, title, teamWithWork, teamWithoutWork, work, et,
  email, phone, addressWithWork, addressWithoutWork, characterBox.
- logos에는 기존 공식 로고의 src와 템플릿별 x/y/w/h를 함께 둔다.
- 텍스트는 x/y, maxWidth, startSize, minSize, color를 사용한다.
- characterBox는 캐릭터와 사진이 함께 사용하는 기준 영역이다.
- 기존 CONFIG의 모든 값을 CARD_TEMPLATES.default.layout으로 그대로 이관했다.
- 신규 layout 좌표·크기·색상은 template_manifest.json을 따른다.
- 신규 디자인의 이름/직급 영역이 겹치면 직급 앞까지 이름 폭을 제한한다.
  골드처럼 주소가 이미지 영역까지 이어지는 경우 이미지 앞까지 주소 폭을 제한한다.
  기준 좌표는 유지하고 기존 자동 축소·말줄임으로 충돌을 방지한다.
  이 안전 폭 보정은 기존 기본형에는 적용하지 않는다.

새 디자인 추가 방법
1. 2048×706 배경 PNG를 assets/templates/에 추가한다.
2. 작은 배경 썸네일을 assets/templates/thumbnails/에 추가한다.
3. card-templates.js의 CARD_TEMPLATES에 고유 id 항목과 위 메타데이터 및 layout을 추가한다.
4. 선택 UI는 레지스트리에서 자동 생성된다. 미리보기와 PNG 모두 같은 렌더러를 사용한다.
5. 담당업무 유무, 로고 3종, 이미지 모드 3종, 긴 텍스트, 390px 화면과 PNG를 검증한다.

상태 보존
- 디자인 전환은 디자인 id와 배경만 변경한다.
- 이름·직급·소속·담당업무·이메일·전화·주소·로고·출력 폭·글자 굵기를 유지한다.
- 캐릭터 분류·선택, 사진 파일·모양, 이미지 없음 선택을 유지한다.
- 캐릭터·사진·이름의 위치/크기 조정값을 새 디자인 기준 좌표에 상대값으로 적용한다.
- 사진 슬라이더는 기존과 같이 해당 사진 영역 안의 이동과 확대를 조정한다.
- 선택한 배경만 필요할 때 로드하고 기존 이미지 캐시를 재사용한다.
- 빠른 전환 중 늦게 완료된 이전 요청은 무시한다.
- 배경 로딩 중 또는 실패 시 다운로드를 막고 다시 선택하여 재시도할 수 있다.
- 기본값 복원은 디자인을 기본형으로, 다른 입력을 V7.0.0 기본값으로 복원한다.
  변경이 없으면 확인창을 띄우지 않는다.

V7.0.0 성능·안전 기능 유지
- 이미지 trim 결과 캐시 및 requestAnimationFrame 기반 렌더링 병합.
- 모바일 sticky 실시간 Canvas 미리보기와 접기/펼치기.
- 긴 텍스트 영역 초과 감지·경고, 미리보기와 PNG의 동일한 말줄임 안전 처리.
- 이름 필수·이메일 형식 검증, 모바일 전화번호 키보드.
- canvas.toBlob() 및 Object URL 다운로드, URL revoke, 중복 클릭 방지 및 상태 표시.
- 기본값 복원 확인창, focus-visible, 주요 44px 이상 터치 영역.
- 기본형 포함 6개 디자인을 네이티브 radio로 선택. Tab·방향키·Space 지원.
- 캐릭터 98종, 사진 업로드, 사진 모양, 이미지 없음 모드.
- Google Analytics ID G-REQY4913H3 및 기존 png_download 이벤트/속성 유지.
  업로드한 사진 파일과 파일명은 서버나 Analytics로 전송하지 않는다.

배경에 사용된 한양대학교 공식 색상 (제공 ZIP의 팔레트 기준)
- Hanyang Blue #0E4A84
- Hanyang Silver #898C8E
- Hanyang Yellow Green #7DB928
- Hanyang Orange #F08100
- Hanyang Gold #88774F
- Hanyang Retro Mint #6CCA98
- Hanyang Retro Coral #FF8672
- Hanyang Platinum Silver #939396
- Hanyang Gray #3F3D42
- White #FFFFFF
