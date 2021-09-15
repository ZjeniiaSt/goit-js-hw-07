const categoriesItemEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemEl.length} категории`);

categoriesItemEl.forEach((i) =>
  console.log(
    `Категория: ${i.querySelector("h2").textContent} 
    Количество элементов: ${i.querySelectorAll("li").length} `
  )
);
