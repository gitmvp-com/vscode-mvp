# VS Code MVP

A simplified MVP (Minimum Viable Product) of Visual Studio Code - a web-based code editor with syntax highlighting powered by Monaco Editor.

## 🎯 What is this?

This is a minimal implementation of VS Code's core feature: **a powerful code editor with syntax highlighting**. While the original VS Code has thousands of features, this MVP focuses on the essential editing experience.

## ✨ Features

- ✅ **Syntax highlighting** for multiple languages (JavaScript, TypeScript, HTML, CSS, JSON, Markdown)
- ✅ **IntelliSense** and autocomplete
- ✅ **File upload** - Open files from your computer
- ✅ **File download** - Save your code (Ctrl/Cmd + S)
- ✅ **Dark theme** matching VS Code's default theme
- ✅ **Auto-formatting** on paste and type
- ✅ **Minimap** for code navigation
- ✅ **Word wrap** for better readability

## 🚀 Getting Started

### Prerequisites

- Node.js 22.19.0 or higher (matching VS Code's requirement)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/vscode-mvp.git
cd vscode-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

This MVP uses the same core technologies as VS Code:

- **TypeScript** - Type-safe JavaScript (using latest dev version like VS Code)
- **Monaco Editor** - The same editor engine that powers VS Code
- **Vite** - Fast build tool and dev server
- **Node.js 22.x** - Matching VS Code's Node version

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

You can customize the editor by modifying `src/main.ts`:

- Change the theme: `theme: 'vs-dark'` → `'vs-light'` or `'hc-black'`
- Adjust font size: `fontSize: 14`
- Toggle minimap: `minimap: { enabled: true }`
- Add more languages to the file input

## 📝 Usage

1. **Type code directly** - Start typing in the editor
2. **Upload a file** - Click "Choose File" to open a file from your computer
3. **Download your work** - Click "Download File" or press Ctrl/Cmd + S
4. **Enjoy syntax highlighting** - The editor automatically detects the language

## 🔍 Differences from Full VS Code

This is an MVP, so it doesn't include:

- ❌ Extensions marketplace
- ❌ Integrated terminal
- ❌ Git integration
- ❌ Debugging
- ❌ Multi-file workspace
- ❌ Authentication
- ❌ Settings sync
- ❌ Thousands of other features

**What it DOES have:** The core editing experience with Monaco Editor - the same engine that powers VS Code!

## 📄 License

MIT License - Same as VS Code

## 🙏 Credits

This MVP is inspired by [Microsoft's VS Code](https://github.com/microsoft/vscode) and uses [Monaco Editor](https://microsoft.github.io/monaco-editor/), which is the code editor that powers VS Code.

---

Built with ❤️ using the same technologies as VS Code
