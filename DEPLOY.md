# Build & Deploy

## 📍 Repository & Live URL

| 항목 | 값 |
|---|---|
| GitHub 레포 | https://github.com/ming0829-wedding/wedding |
| 라이브 사이트 | https://ming0829-wedding.github.io/wedding/ |
| 소스 브랜치 | `main` |
| 배포 브랜치 | `gh-pages` (자동 생성/관리됨) |

## 🛠️ Stack

- **빌드 도구**: Create React App (`react-scripts 5.0.1`)
- **배포 도구**: [`gh-pages`](https://www.npmjs.com/package/gh-pages) (GitHub Actions 안 씀, CLI 기반)
- **호스팅**: GitHub Pages (gh-pages 브랜치)

## 🚀 명령어 요약

| 명령 | 용도 |
|---|---|
| `npm start` | 로컬 개발 서버 (http://localhost:3000) |
| `npm run build` | `build/` 폴더에 프로덕션 빌드 생성 |
| `npm run deploy` | 빌드 후 `gh-pages` 브랜치로 자동 푸시 → 사이트 갱신 |

## 🔁 코드 수정 후 재배포 워크플로우

```bash
# 1) 소스 백업 (main 브랜치)
git add .
git commit -m "변경 내용"
git push

# 2) 사이트 갱신 (gh-pages 브랜치)
npm run deploy
```

> ⚠️ `git push` 만 하면 소스만 올라가고 **사이트는 갱신 안 됨**. 반드시 `npm run deploy` 까지 돌려야 라이브 반영됨.

## ⚙️ GitHub Pages 설정 (1회만)

레포 → Settings → Pages
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / `(root)`
- **Enforce HTTPS**: 체크 (DNS 전파 후 활성화)

## 🔑 핵심 설정 위치

- **`package.json`의 `homepage` 필드** — 빌드 시 정적 자산 경로 prefix가 됨
  - 현재값: `"https://ming0829-wedding.github.io/wedding/"`
  - 도메인 바꾸거나 레포 이름 바꿀 때 **반드시** 같이 수정 후 재배포 필요
- **`.gitignore`** — `node_modules`, `build`, `.env*` 제외 중

## 🧑‍💻 Git 로컬 설정 (이 레포 한정)

```bash
git config user.name  "ming0829-wedding"
git config user.email "wedding@ming0829.local"
```

(전역 설정 아니라 `.git/config`에만 박혀있음. 다른 프로젝트에는 영향 X)

## 📝 환경변수 (.env)

현재 `.env` 파일 없음. 추후 카카오맵/카카오공유 등 API 키 추가 시:

1. 루트에 `.env` 생성
2. CRA 규칙상 **`REACT_APP_` 접두사 필수** (Vite의 `VITE_` 와 다름)
   ```
   REACT_APP_KAKAO_KEY=xxxxxxxxxxxx
   ```
3. 코드에선 `process.env.REACT_APP_KAKAO_KEY` 로 사용
4. `.env`는 이미 `.gitignore`에 있어서 커밋 안 됨 → 안전
5. 키 이름만 적은 `.env.example` 만들어두면 다른 환경에서도 세팅 편함

## 🌐 도메인 변경 시 (참고)

### 옵션 A — 커스텀 도메인 (예: `mj0829.com`)
1. 도메인 구매 (Cloudflare Registrar 추천, `.com` ~1.5만원/년)
2. DNS A 레코드 4개 추가 (GitHub Pages IP):
   - `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. 레포 Settings → Pages → "Custom domain" 입력
4. 루트에 `CNAME` 파일 자동 생성됨
5. `package.json`의 `homepage`를 `"https://새도메인.com"` 으로 수정
6. `npm run deploy` 재배포

### 옵션 B — `/wedding/` 서브패스 제거 (무료)
- 레포 이름을 `ming0829-wedding.github.io` 로 변경
- `homepage`를 `"https://ming0829-wedding.github.io/"` 로 수정
- 재배포

## 🐛 자주 만나는 이슈

| 증상 | 원인 / 해결 |
|---|---|
| 사이트 열었는데 빈 화면 / 404 | `homepage` 필드와 실제 URL 불일치. `package.json` 확인 후 `npm run deploy` 재실행 |
| 이미지 안 뜸 | 절대경로(`/images/...`) 대신 상대경로(`./images/...`) 또는 `import` 사용 |
| 새로고침하면 404 (라우터 사용 시) | GitHub Pages는 SPA 라우팅 미지원. `HashRouter` 쓰거나 `public/404.html` 트릭 필요 |
| 변경했는데 사이트 그대로 | 브라우저 캐시. 시크릿창에서 확인 / `Ctrl+Shift+R` 강력 새로고침 |
| 카톡 공유 미리보기 안 바뀜 | 카카오 캐시. https://developers.kakao.com/tool/debugger/sharing 에서 캐시 초기화 |
| `npm run deploy` 가 권한 에러 | git 인증 끊김. 한 번 `git push` 해서 인증 갱신 후 재시도 |

## 📦 빌드 산출물

- `build/static/js/main.*.js` — 메인 JS 번들 (~141KB gzipped)
- `build/static/css/main.*.css` — CSS (~5KB gzipped)
- `build/static/js/*.chunk.js` — 코드 스플리팅 청크
- 빌드마다 해시값이 바뀜 → 캐시 안전
