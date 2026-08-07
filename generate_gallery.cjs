const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/trezdev/Desktop/Velvetsuite_web/public/velvet pictures';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

let html = `<html><body style="display:flex; flex-wrap:wrap; font-family:sans-serif;">\n`;
for (const f of files) {
    html += `<div style="margin: 10px; border: 1px solid #ccc; padding: 10px; text-align:center;">
        <img src="velvet pictures/${encodeURIComponent(f)}" style="max-width:300px; height:auto;" /><br/>
        <b>${f}</b>
    </div>\n`;
}
html += `</body></html>`;
fs.writeFileSync('c:/Users/trezdev/Desktop/Velvetsuite_web/public/image_gallery.html', html);
console.log('Gallery generated!');
