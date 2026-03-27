# 🌍 World Clock Widget

一个漂亮的 **世界时钟桌面小工具**，支持始终置顶显示、多时区管理、三种主题切换。

![Theme Preview](screenshot.png)

## ✨ 功能特性

- 🌐 **始终置顶** - 桌面小工具，窗口始终显示在最前面
- ⏰ **多时区支持** - 支持 12 个城市时区，最多同时显示 3 个
- 🎨 **三种主题** - 极简玻璃 / 复古终端 / 奢华金
- 💾 **设置保存** - 自动保存主题和时区设置
- 📦 **独立运行** - 无需安装，双击即可运行

## 🚀 快速开始

### 下载运行

直接下载 `WorldClockWidget.exe` 双击运行：

```
dist/win-unpacked/WorldClockWidget.exe
```

### 从源码运行

```bash
# 克隆项目
git clone https://github.com/guoshanfeng958/world-clock-widget.git
cd world-clock-widget

# 安装依赖
npm install

# 运行开发版本
npm run dev

# 打包
npm run build
```

## 🎨 主题预览

### 极简玻璃（默认）
毛玻璃透明效果，清新现代
```
切换按钮: 圆形透明按钮
```

### 复古终端
绿色荧光风格，经典 Terminal 美学
```
切换按钮: 深色终端风格
```

### 奢华金
金色点缀，高端优雅
```
切换按钮: 金色渐变
```

## 📋 支持的时区

| 城市 | 时区 |
|------|------|
| 北京 | UTC+8 |
| 东京 | UTC+9 |
| 纽约 | UTC-5 |
| 伦敦 | UTC+0 |
| 巴黎 | UTC+1 |
| 悉尼 | UTC+10 |
| 迪拜 | UTC+4 |
| 新加坡 | UTC+8 |
| 洛杉矶 | UTC-8 |
| 莫斯科 | UTC+3 |
| 孟买 | UTC+5:30 |
| 首尔 | UTC+9 |

## 🛠️ 技术栈

- **Electron** - 桌面应用框架
- **HTML/CSS/JavaScript** - 前端界面
- **CSS Variables** - 主题系统
- **localStorage** - 数据持久化
- **electron-builder** - 打包工具

## 📁 项目结构

```
world-clock-widget/
├── index.html          # 前端界面
├── main.js             # Electron 主进程
├── preload.js          # 预加载脚本
├── package.json        # 项目配置
├── .gitignore          # Git 忽略规则
├── README.md           # 项目说明
└── dist/               # 打包输出
    └── win-unpacked/
        └── WorldClockWidget.exe
```

## ⚙️ 开发

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 打包 Windows exe
npm run build

# 仅生成 unpacked 目录
npm run build:dir
```

## 📄 License

MIT License
