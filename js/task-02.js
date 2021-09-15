const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

ingredientsListEl.append(
  ...ingredients.map((ingredient) => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.textContent = ingredient;
    return ingredientItemEl;
  })
);
