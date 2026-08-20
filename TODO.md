# SnapShotMini Landing Page 五版設計

## 狀態

已完成，可進入方向挑選。

## 已交付

- 五個完整且互不混搭的 Landing Page：`/v1/` 至 `/v5/`。
- 同頁固定版本切換器，可快速比較五種視覺方向。
- 共用產品定位、產品事實、核心內容與主要轉化目標「打造專屬拍貼」。
- 可用的合作詢問表單；未設定 `VITE_LEAD_FORM_ENDPOINT` 時不會偽造成功狀態。
- 桌機與手機版 Playwright 視覺驗收圖，位於 `output/playwright/`。
- Impeccable detector 已執行一次，問題已修正或確認為情境性誤判。
- Impeccable finish reviewer 最終結論：`ship`，無剩餘問題。
- `npm run build`、`npm run lint`、`npm run test:run` 全部通過。

## 五個方向

1. `v1/`：櫃檯精品展示台
2. `v2/`：相館接觸印樣
3. `v3/`：捷運導覽系統
4. `v4/`：收據／POS 敘事
5. `v5/`：相框與機身角色設定表

## 下一步

- 由使用者挑選一個方向，再針對該版本延伸品牌細節、文案與轉化流程。
- 選定前不要混用不同版本的視覺 token 或設計語彙。
- 若要讓表單實際送出，設定 `VITE_LEAD_FORM_ENDPOINT`。

## 備註

- `public/assets/reference/` 為公司資產，可公開用於網站。
- 本次未呼叫外部 Imagegen API；使用既有公司照片與本地產生的裝飾素材。
- Impeccable concept seed：`2b94032e`。
