# FuturixDev Official Website

FuturixDev 官方網站，使用 Next.js 15、TypeScript 和 TailwindCSS 建構的現代化企業網站。

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式（使用 Turbopack）

```bash
npm run dev
```

### 建置專案

```bash
npm run build
```

### 啟動生產模式

```bash
npm run start
```

### 程式碼檢查

```bash
npm run lint
```

## 📁 專案結構

```text
futurix-website/
├── public/                 # 靜態資源
│   ├── favicon.ico        # 網站圖示
│   ├── logo.png          # 公司標誌
│   └── portfolio/        # 作品集圖片
├── src/
│   ├── app/              # Next.js App Router 頁面
│   │   ├── page.tsx      # 首頁
│   │   ├── layout.tsx    # 根佈局
│   │   ├── metadata.ts   # SEO 元資料
│   │   ├── error.tsx     # 錯誤處理頁面
│   │   ├── not-found.tsx # 404 錯誤頁面
│   │   ├── about/        # 關於我們頁面
│   │   ├── contact/      # 聯絡我們頁面
│   │   ├── portfolio/    # 作品集頁面
│   │   └── services/     # 服務頁面
│   ├── components/       # React 組件
│   │   ├── Header/       # 頁首組件
│   │   ├── Footer.tsx    # 頁尾組件
│   │   ├── Index/        # 首頁區塊組件
│   │   ├── about/        # 關於我們頁面組件
│   │   ├── contact/      # 聯絡我們頁面組件
│   │   ├── services/     # 服務頁面組件
│   │   ├── portfolio/    # 作品集頁面組件
│   │   ├── projects/     # 專案相關組件
│   │   └── custom/       # 自定義組件
│   ├── libs/            # 第三方庫配置
│   ├── styles/          # 樣式檔案
│   ├── types/           # TypeScript 型別定義
│   └── utils/           # 工具函數
├── eslint.config.mjs    # ESLint 配置
├── next.config.ts       # Next.js 配置
├── postcss.config.mjs   # PostCSS 配置
├── tsconfig.json        # TypeScript 配置
├── next-env.d.ts        # Next.js 型別聲明
└── package.json         # 專案依賴
```

### 開發環境

- **Node.js**: 18.x 以上
- **包管理器**: npm
- **IDE**: 建議使用 VS Code
- **必要擴充套件**:
  - ESLint
  - Prettier
  - TypeScript Importer
  - Tailwind CSS IntelliSense

## 🛠 技術棧

- **前端框架**: Next.js 15.3.4
- **程式語言**: TypeScript 5.x
- **樣式框架**: TailwindCSS 4.x
- **UI 組件**:
  - Ant Design 5.26.1
  - FanyuComponents 2.10.16
- **動畫**: Framer Motion 12.18.1
- **資料獲取**: SWR 2.3.3
- **圖示**:
  - Ant Design Icons 6.0.0
  - React Icons 5.5.0
- **其他工具**:
  - SweetAlert2 (彈窗提示)
  - Next Sitemap (網站地圖)
- **程式碼品質**: ESLint 9.x, TypeScript
- **構建工具**: Turbopack (開發模式)
  