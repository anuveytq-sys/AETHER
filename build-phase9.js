const fs=require('fs');
const path='index.html';let html=fs.readFileSync(path,'utf8');
if(!html.includes('phase9.css'))html=html.replace('</head>','<link rel="stylesheet" href="phase9.css"></head>');
if(!html.includes('phase9.js'))html=html.replace('</body>','<script src="phase9.js" defer></script></body>');
fs.writeFileSync(path,html);
if(!fs.existsSync('phase9.js')||!fs.existsSync('phase9.css'))throw new Error('Phase 9 assets missing');
console.log('AETHER Phase 9 attached.');
