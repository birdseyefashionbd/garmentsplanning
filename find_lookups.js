const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.netlify') searchDir(full);
    } else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        // match obj[something]
        const matches = line.match(/\w+\[[^\]]+\]/g);
        if (matches) {
          matches.forEach(m => {
            if (m.includes('line') || m.includes('norm') || m.includes('key') || m.includes('day') || m.includes('date') || m.includes('idx') || m.includes('name')) {
              console.log(${full}:: );
            }
          });
        }
      });
    }
  }
}

searchDir('./src');
