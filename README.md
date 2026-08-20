# SnapShotMini Landing Page

SnapShotMini 桌上型拍貼機的 V5 正式形象網站，以品牌客製、完整拍貼流程與兩種門市營運情境為主軸。

## 本機開發

```bash
npm install
npm run dev
```

## 品質檢查

```bash
npm run build
npm run lint
npm run test:run
```

## GitHub Pages

推送至 `main` 後，GitHub Actions 會建置並發布 `dist`。第一次使用時，請在 repository 的 **Settings → Pages → Build and deployment** 將來源設為 **GitHub Actions**。

預定網址：<https://chen0404.github.io/SnapShotMini_landingPage/>

聯絡表單需要另外提供 `VITE_LEAD_FORM_ENDPOINT`；未設定時不會假裝送出成功。
