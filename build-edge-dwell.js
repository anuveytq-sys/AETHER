const fs=require('fs');
const path='index.html';
let html=fs.readFileSync(path,'utf8');
const tracking='<script src="phase8-tracking.js" defer></script>';
if(!html.includes(tracking))throw new Error('phase8-tracking.js script tag not found');
if(!html.includes('phase8-screen-dwell.js'))html=html.replace(tracking,tracking+'<script src="phase8-screen-dwell.js" defer></script>');
fs.writeFileSync(path,html);
