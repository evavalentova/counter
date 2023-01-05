let counter = 0;

$(".increase").on("click", () => {
  counter++;
  $(".number").text(counter);
});

$(".decrease").on("click", () => {
  counter--;
  $(".number").text(counter);
});
