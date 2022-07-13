let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const hex1 = document.querySelector("#hex-1");
const hex2 = document.querySelector("#hex-2");
let randomElement = "";

document.querySelector("#pick").addEventListener("click", () => {
   let hexCode1 = "";
   let hexCode2 = "";
   for (let i = 0; i < 6; i++) {
      randomElement = Math.floor(Math.random() * chars.length);
      hexCode1 += chars[randomElement];
      randomElement = Math.floor(Math.random() * chars.length);
      hexCode2 += chars[randomElement];
   }
   document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;

   hex1.textContent = hexCode1;
   hex2.textContent = hexCode2;
});
