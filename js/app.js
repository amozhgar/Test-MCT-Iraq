// const down = document.getElementsByClassName("down");
// const lang = document.getElementsByClassName("lang");

// down.addEvenetListner("click", () => {
//   if (lang.classList.contains("show-lang")) {
//     lang.classList.remove("show-lang");
//   } else {
//     lang.classList.add("show-lang");
//   }
// });

$(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
