import * as monaco from 'monaco-editor';
import './style.css';

// Monaco Editor initialization
const editorContainer = document.getElementById('editor');

if (!editorContainer) {
  throw new Error('Editor container not found');
}

// Create the Monaco Editor instance
const editor = monaco.editor.create(editorContainer, {
  value: `// Welcome to VS Code MVP!
// A simplified version of Visual Studio Code

function hello(name: string): string {
  return \`Hello, \${name}!\`;
}

const greeting = hello('World');
console.log(greeting);

// Features:
// ✅ Syntax highlighting for multiple languages
// ✅ IntelliSense and autocomplete
// ✅ File upload and download
// ✅ Multiple themes
// ✅ Code formatting
`,
  language: 'typescript',
  theme: 'vs-dark',
  automaticLayout: true,
  fontSize: 14,
  minimap: {
    enabled: true
  },
  scrollBeyondLastLine: false,
  wordWrap: 'on',
  formatOnPaste: true,
  formatOnType: true
});

// File upload functionality
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

if (fileInput) {
  fileInput.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const content = e.target?.result as string;
        editor.setValue(content);
        
        // Detect language from file extension
        const extension = file.name.split('.').pop()?.toLowerCase();
        const languageMap: Record<string, string> = {
          'js': 'javascript',
          'ts': 'typescript',
          'html': 'html',
          'css': 'css',
          'json': 'json',
          'md': 'markdown',
          'txt': 'plaintext'
        };
        
        const language = languageMap[extension || 'txt'] || 'plaintext';
        monaco.editor.setModelLanguage(editor.getModel()!, language);
      };
      
      reader.readAsText(file);
    }
  });
}

// Download file functionality
const downloadBtn = document.getElementById('downloadBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const content = editor.getValue();
    const model = editor.getModel();
    const language = model?.getLanguageId() || 'txt';
    
    const extensionMap: Record<string, string> = {
      'javascript': 'js',
      'typescript': 'ts',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'markdown': 'md',
      'plaintext': 'txt'
    };
    
    const extension = extensionMap[language] || 'txt';
    const fileName = `code.${extension}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  });
}

// Handle window resize
window.addEventListener('resize', () => {
  editor.layout();
});

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S to download
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    downloadBtn?.click();
  }
});
