const categoriesItemEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemEl.length} категории`);

console.log(
  `Категория: ${categoriesItemEl[0].querySelector("h2").textContent} `
);
console.log(
  `Количество элементов: ${categoriesItemEl[0].querySelectorAll("li").length} `
);

console.log(
  `Категория: ${categoriesItemEl[1].querySelector("h2").textContent} `
);
console.log(
  `Количество элементов: ${categoriesItemEl[1].querySelectorAll("li").length} `
);

console.log(
  `Категория: ${categoriesItemEl[2].querySelector("h2").textContent} `
);
console.log(
  `Количество элементов: ${categoriesItemEl[2].querySelectorAll("li").length} `
);
