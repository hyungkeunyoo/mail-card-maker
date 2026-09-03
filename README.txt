메일 명함 생성기 V7.0.0 · FAST EDITOR

실행:
1. VS Code에서 이 폴더 열기
2. index.html 우클릭
3. Open with Live Server

수정 사항:
- 이미지별 투명 영역 계산 결과 캐시 및 requestAnimationFrame 기반 미리보기 렌더링 적용
- 모바일 390px에서 접을 수 있는 sticky 실시간 미리보기 제공
- 긴 텍스트 영역 초과 감지, 경고 및 PNG 말줄임 안전 처리
- 이름·이메일 최소 검증과 모바일 전화번호 키보드 지원
- PNG 다운로드를 canvas.toBlob() + Object URL 방식으로 변경
- 다운로드 중 중복 클릭 방지 및 상태 표시
- 슬라이더 접근성 이름, focus-visible, 약 44px 터치 영역 적용
- 변경사항이 있을 때만 기본값 복원 확인
- 상단 로고 선택 유지: 한양대학교 ERICA / 한양대 / 없음
- 캐릭터 98종 유지

GitHub Pages 배포:
1. GitHub에서 새 Public repository 생성
2. 이 폴더 안의 index.html, assets 폴더, README.txt를 업로드
3. Settings > Pages > Source: Deploy from a branch
4. Branch: main / root 선택 후 Save
5. 1~3분 뒤 표시되는 URL 접속
