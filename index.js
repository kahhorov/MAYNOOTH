const wrapper = document.querySelector(".sideBar__wrapper");
const bar = document.querySelector(".side__bar");
const filters = document.querySelector(".filter");
const filterBox = document.querySelector(".filter_box");

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

const filter = () => {
  filters.style.transform = " translateX(0%)";
  wrapper.style.transform = " translateX(-100%)";
  bar.style.transform = " translateX(-100%)";
  filterBox.style.display = "flex";
};
const filterClose = () => {
  filters.style.transform = " translateX(-100%)";
  filterBox.style.display = "none";
};
filterBox.addEventListener("click", function () {
  filters.style.transform = " translateX(-100%)";
  filterBox.style.display = "none";
});
