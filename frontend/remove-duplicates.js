import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'src', 'words.json');
const raw = readFileSync(filePath, 'utf-8');
const words = JSON.parse(raw);

const seen = new Set();
const uniqueWords = words.filter((item) => {
  if (seen.has(item.word)) return false;
  seen.add(item.word);
  return true;
});

writeFileSync(filePath, JSON.stringify(uniqueWords, null, 2), 'utf-8');
console.log(
  `Benzersiz kelimeler words.json dosyasına yazıldı. Toplam: ${uniqueWords.length}`
);
// node remove-duplicates.js ile çalıştır
