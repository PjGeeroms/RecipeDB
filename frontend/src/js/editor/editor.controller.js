class EditorController {

  constructor(Recipes, recipe, $state) {
    'ngInject';

    this._Recipes = Recipes;
    this._$state = $state;

    if (!recipe) {
      this.recipe = {
        title: '',
        body: '',
        image: '',
        ingredients: []
      }
    } else {
      this.recipe = recipe;
    }

  }

  addIngredient() {
    if (!this.recipe.ingredients.includes(this.ingredientField)) {
      this.recipe.ingredients.push(this.ingredientField);
      this.ingredientField = '';
    }
  }

  removeIngredient(ingredient) {
    this.recipe.ingredients = this.recipe.ingredients.filter((slug) => slug != ingredient);
  }

  submit() {
    this.isSubmitting = true;

    this._Recipes.save(this.recipe).then(
      (newRecipe) => {
        this._$state.go('app.recipe', { slug: newRecipe.slug });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default EditorController;
