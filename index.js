const wrapper = document.querySelector(".sideBar__wrapper");
const bar = document.querySelector(".side__bar");

const menuBtn = () => {
  wrapper.style.transform = " translateX(0%)";
  bar.style.transform = " translateX(0%)";
};

wrapper.addEventListener("click", function () {
  wrapper.style.transform = " translateX(-100%)";
  bar.style.transform = " translateX(-100%)";
});

const closeBtn = () => {
  wrapper.style.transform = " translateX(-100%)";
  bar.style.transform = " translateX(-100%)";
};
