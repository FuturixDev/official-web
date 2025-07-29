# FuturixDev Official Website

FuturixDev 官方網站，使用 Next.js 15、TypeScript 和 TailwindCSS 建構的現代化企業網站。

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

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
│   │   ├── about/        # 關於我們頁面
│   │   ├── contact/      # 聯絡我們頁面
│   │   └── portfolio/    # 作品集頁面
│   ├── components/       # React 組件
│   │   ├── Header/       # 頁首組件
│   │   ├── Index/        # 首頁區塊組件
│   │   ├── custom/       # 自定義組件
│   │   └── projects/     # 專案相關組件
│   ├── libs/            # 第三方庫配置
│   ├── styles/          # 樣式檔案
│   ├── types/           # TypeScript 型別定義
│   └── utils/           # 工具函數
├── eslint.config.mjs    # ESLint 配置
├── next.config.ts       # Next.js 配置
├── tsconfig.json        # TypeScript 配置
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

- **前端框架**: Next.js 15
- **程式語言**: TypeScript
- **樣式框架**: TailwindCSS
- **UI 組件**: Ant Design, FanyuComponents
- **動畫**: Framer Motion
- **資料獲取**: SWR
- **圖示**: Ant Design Icons, React Icons
- **程式碼品質**: ESLint, TypeScript
  