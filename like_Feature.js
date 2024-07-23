let image = document.querySelector("#image");
// console.log(image);
let icon = document.querySelector("i");
// console.log(icon);
image.addEventListener("dblclick", () => {
  icon.style.opacity = 0.8;
  icon.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(() => {
    icon.style.opacity = 0;
    console.log("opacity 0 hua");
  }, 1000);
  setTimeout(() => {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
    console.log("baad wala pehle chala");
  }, 1000);
});
