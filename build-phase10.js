const fs=require('fs');
const p='index.html';
let s=fs.readFileSync(p,'utf8');
const css='<link rel="stylesheet" href="phase10.css">';
const js='<script src="phase10.js" defer></script>';
if(!s.includes(css))s=s.replace('</head>',css+'</head>');
if(!s.includes(js))s=s.replace('<script src="phase9.js" defer></script>','<script src="phase9.js" defer></script>'+js);
fs.writeFileSync(p,s);
console.log('Phase 10 assets attached idempotently.');
