import { publicAsset } from "../utils/publicAsset";

export const navLinks = [
  { label: "產品", href: "#product" },
  { label: "拍貼流程", href: "#experience" },
  { label: "使用情境", href: "#use-cases" },
  { label: "常見問題", href: "#faq" },
] as const;

export const productSpecs = [
  { value: "30 × 30 × 30", unit: "公分", label: "桌面空間" },
  { value: "10", unit: "吋", label: "觸控螢幕" },
  { value: "10", unit: "公斤", label: "機身重量" },
] as const;

export const flowScreens = [
  {
    title: "開始",
    description: "設備首頁可依合作店家的品牌與活動內容客製。",
    image: publicAsset("images/flow/s1-device-home.png"),
    width: 1920,
    height: 1080,
    alt: "SnapShotMini 客製設備首頁",
  },
  {
    title: "選相框",
    description: "每一款相框版型都能安排不同照片排列與視覺內容。",
    image: publicAsset("images/flow/s2-frame-layout.png"),
    width: 1920,
    height: 1080,
    alt: "SnapShotMini 相框版型選擇畫面",
  },
  {
    title: "付款",
    description: "付費販售情境才會出現，品牌招待情境會直接進入拍照。",
    image: publicAsset("images/flow/s3-payment.png"),
    width: 1920,
    height: 1080,
    alt: "SnapShotMini 多元支付畫面",
    note: "付費情境限定",
  },
  {
    title: "拍照",
    description: "倒數、即時預覽與連拍都在同一個清楚的操作畫面完成。",
    image: publicAsset("images/flow/s4-capture.png"),
    width: 390,
    height: 218,
    alt: "SnapShotMini 拍照示意畫面，人物為虛構生成",
  },
  {
    title: "選照片",
    description: "拍完直接挑選喜歡的影像，組成剛才選定的相框版型。",
    image: publicAsset("images/flow/s5-select.png"),
    width: 340,
    height: 190,
    alt: "SnapShotMini 選照片示意畫面，人物為虛構生成",
  },
  {
    title: "列印與下載",
    description: "現場帶走實體照片，也能掃碼取得電子檔。",
    image: publicAsset("images/flow/s6-print-download.png"),
    width: 1920,
    height: 1080,
    alt: "SnapShotMini 列印與下載電子檔畫面",
  },
] as const;

export const useCases = [
  {
    title: "把拍貼變成店內招待",
    description:
      "把專屬相框版型變成到店招待，讓店內訪客自然參與、拍照並帶走品牌記憶。",
    image: publicAsset("images/scenes/brand-hospitality-v2.webp"),
    width: 2048,
    height: 1280,
    alt: "顧客在咖啡店窗邊打開品牌紀念相冊並欣賞客製相框照片，人物為虛構生成",
    caption: "品牌招待",
  },
  {
    title: "把限定相框變成店內商品",
    description:
      "用門市限定或創作者聯名相框版型，讓拍貼從一次互動，成為店內訪客願意收藏的店內內容。",
    image: publicAsset("images/scenes/creator-paid-service.webp"),
    width: 2048,
    height: 1280,
    alt: "文創門市展示創作者聯名相框並提供付費列印的情境，人物為虛構生成",
    caption: "付費販售",
  },
] as const;

export const faqItems = [
  {
    question: "哪些內容可以客製？",
    answer:
      "設備首頁、相框版型與機身外觀都可依品牌或活動需求討論。實際製作範圍由業務確認。",
  },
  {
    question: "免費與付費體驗可以切換嗎？",
    answer:
      "可以規劃不同拍貼流程。免費情境不顯示付款畫面，付費情境則在拍照前完成支付。",
  },
  {
    question: "目前支援哪些付款方式？",
    answer:
      "系統具備第三方支付整合能力，實際啟用方式與服務商會依合作場域確認。",
  },
  {
    question: "設備需要多少空間？",
    answer:
      "機身尺寸為 30 × 30 × 30 公分，重量約 10 公斤。場域配置仍需保留操作與取照片的空間。",
  },
  {
    question: "耗材、網路與維護如何安排？",
    answer:
      "這些項目會依門市環境與合作內容由專人評估，網站不先提供固定方案。",
  },
] as const;

export const marqueeItems = [
  "客製設備首頁",
  "多種相框版型",
  "多元支付",
  "即拍即印",
  "掃碼取得電子檔",
  "30 公分桌上型機身",
] as const;
