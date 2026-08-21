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

## 合作詢問表單

表單由 Cloudflare Worker 驗證資料，再透過 Resend 寄到 `chen@snapfoto.co`。Resend API Key 只能存放在 Worker Secret，不得加入 Vite 環境變數或提交到 Git。

1. 在 Resend 撤銷任何曾公開的 API Key，建立新的 **Sending access** Key。
2. 將 `.dev.vars.example` 複製為 `.dev.vars`，把 `re_xxxxxxxxx` 換成真實 API Key，只供本機 Worker 測試使用；不要把 Key 留在前端 `.env`。
3. 執行 `npm run worker:dev` 測試 Worker。
4. 登入 Cloudflare，執行 `npm run worker:secret` 設定真實 API Key，再執行 `npm run worker:deploy`。
5. 到 GitHub repository 的 **Settings → Secrets and variables → Actions → Variables** 新增：

   ```text
   VITE_LEAD_FORM_ENDPOINT=https://snapshotmini-lead-form.<你的 Cloudflare 帳號>.workers.dev
   ```

6. 若正式網站改用自訂網域，將該網域的 origin 加入 `wrangler.jsonc` 的 `ALLOWED_ORIGINS` 後重新部署 Worker。

目前寄件人設定為 `onboarding@resend.dev`。Resend 只允許它寄到該帳號擁有者的信箱；若 `chen@snapfoto.co` 不是帳號信箱，API 會回傳 403，正式上線前仍需驗證自有網域。
