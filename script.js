const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});
