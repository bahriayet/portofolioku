import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\ee211153-0306-430c-8645-00962506dc60';
const destDir = 'd:\\portofolioku\\public\\projects';

const files = [
  { src: 'zenspace_preview_1781947653295.png', dest: 'zenspace.png' },
  { src: 'nusabay_preview_1781947631563.png', dest: 'nusabay.png' },
  { src: 'praktek_gigi_preview_1781947605890.png', dest: 'praktek-gigi.png' }
];

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created destination directory');
  }

  for (const file of files) {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file.src} to ${file.dest}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  }
} catch (err) {
  console.error('Error copying files:', err);
}
