const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "index.html");
let html = fs.readFileSync(htmlPath, "utf8");

for (let i = 1; i <= 11; i++) {
    const imagePath = path.join(__dirname, "images", `${i}.png`);

    if (!fs.existsSync(imagePath)) {
        console.log(`❌ الصورة ${i}.png مش موجودة`);
        continue;
    }

    const image = fs.readFileSync(imagePath);
    const base64 = image.toString("base64");

    const dataUrl = `data:image/png;base64,${base64}`;

    html = html.replaceAll(
        `images/${i}.png`,
        dataUrl
    );
}

fs.writeFileSync(
    path.join(__dirname, "birthday-final.html"),
    html,
    "utf8"
);

console.log("");
console.log("❤️ تم إنشاء birthday-final.html");
console.log("🚀 الصور كلها أصبحت داخل ملف HTML نفسه");
console.log("");