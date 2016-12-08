class EditorController {

  constructor(Recipes, recipe, $state) {
    'ngInject';

    this._Recipes = Recipes;
    this._$state = $state;
    this.errors = [{
      title: "",
      description: "",
      ingredients: "",
      instructions: "",
      portions: ""
    }];
    this.image = "";

    if (!recipe) {
      this.recipe = {
        title: '',
        body: '',
        instructions: [],
        image: '',
        ingredients: [],
        portions: ''
      }
    } else {
      this.recipe = recipe;
      this.image = this.recipe.image;
    }

  }

  addInstruction() {
    if (!this.recipe.ingredients.includes(this.instructionField) && this.instructionField.length > 1) {
      this.recipe.instructions.push(this.instructionField);
      this.instructionField = '';
      this.errors['instructions'] = "";
    } else {
      this.errors['instructions'] = "Instructions should have more than 1 character";
    }
  }

  removeInstruction(instruction) {
    this.recipe.instructions = this.recipe.instructions.filter((temp) => temp != instruction);
  }

  addIngredient() {
    if (!this.recipe.ingredients.includes(this.ingredientField) && this.ingredientField.length > 1) {
      this.recipe.ingredients.push(this.ingredientField);
      this.ingredientField = '';
      this.errors['ingredients'] = "";
    } else {
      this.errors['ingredients'] = "Ingredient should have more than 1 character";
    }
  }

  removeIngredient(ingredient) {
    this.recipe.ingredients = this.recipe.ingredients.filter((slug) => slug != ingredient);
  }

  submit() {
    var validForm = true;

    if (!this.recipe.title.length > 0) {
      validForm = false;
      this.errors['title'] = "Title should be filled in";
    }

    if (!this.recipe.body.length > 0) {
      validForm = false;
      this.errors['description'] = "Description should be filled in";
    }

    if(!this.recipe.image.length > 0) {
      this.recipe.image = "";
    }
    if(!this.recipe.instructions.length > 0){
      validForm = false;
      this.errors['instructions'] = "You should add atleast one instruction";
    }
    if(!this.recipe.ingredients.length > 0) {
      validForm = false;
      this.errors['ingredients'] = "You should add atleast one ingredient";
    }
    if(!this.recipe.portions.length > 0) {
      validForm = false;
      this.errors['portions'] = "You should fill in how many portions this recipe yields";
    }


    if (!validForm) {
      return;
    }

    this.isSubmitting = true;
    this._Recipes.save(this.recipe).then(

      (newRecipe) => {
        this._$state.go('app.recipedetail', { slug: newRecipe.slug });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default EditorController;
