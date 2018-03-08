/**
 * Created by xiewangzhi on 07/03/2018.
 */
const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('uuid/v4');

const exportedMethods = {
  async getAllRecipes() {
    const recipeCollection = await recipes();
    return await recipeCollection.find({}).project({ingredients: false, steps: false}).toArray();
  },

  async getRecipeById(id) {
    const recipeCollection = await recipes();
    const recipe = await recipeCollection.findOne({ _id: id });

    if (!recipe) throw "recipe not found";
    return recipe;
  },

  async addRecipe(title, ingredients, steps) {
    if (typeof title !== "string") throw "No title provided";

    if (!Array.isArray(ingredients)) {
      ingredients = [];
    }

    if (!Array.isArray(steps)) {
      steps = [];
    }
    const recipeCollection = await recipes();

    const newRecipe = {
      title: title,
      ingredients: ingredients,
      steps: steps,
      _id: uuid()
    };
    const newInsertInformation = await recipeCollection.insertOne(newRecipe);
    if (newInsertInformation.insertedCount === 0) throw "Could not add todo";

    const newId = newInsertInformation.insertedId;

    return await this.getRecipeById(newId);
  },

  async addRecipeById(id, updatedRecipe) {
    if (typeof updatedRecipe.title !== "string") throw "No title provided";

    if (!Array.isArray(updatedRecipe.ingredients)) {
      ingredients = [];
    }

    if (!Array.isArray(updatedRecipe.steps)) {
      steps = [];
    }
    const recipeCollection = await recipes();


    const newRecipe = {
      title: updatedRecipe.title,
      ingredients: updatedRecipe.ingredients,
      steps: updatedRecipe.steps,
      _id: id
    };

    await recipeCollection.insertOne(newRecipe);
  },

  async removeRecipe(id) {
    const recipeCollection = await recipes();
    const deletionInfo = await recipeCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete recipe with id of ${id}`;
    }
  },

  async updateRecipe(id, updatedRecipe) {
    const updatedRecipeData = await this.getRecipeById(id);

    if (updatedRecipe.title) {
      updatedRecipeData.title = updatedRecipe.title;
    }

    if (updatedRecipe.ingredients) {
      updatedRecipeData.ingredients = updatedRecipe.ingredients;
    }

    if (updatedRecipe.steps) {
      updatedRecipeData.steps = updatedRecipe.steps;
    }
    console.log(id);
    await this.removeRecipe(id);
    await this.addRecipeById(id, updatedRecipeData);
    return await this.getRecipeById(id);
  },

  async patchRecipe(id, updatedRecipe) {
    const recipeCollection = await recipes();

    const updatedRecipeData = {};

    if (updatedRecipe.title) {
      updatedRecipeData.title = updatedRecipe.title;
    }

    if (updatedRecipe.ingredients) {
      updatedRecipeData.ingredients = updatedRecipe.ingredients;
    }

    if (updatedRecipe.steps) {
      updatedRecipeData.steps = updatedRecipe.steps;
    }

    let updateCommand = {
      $set: updatedRecipeData
    };
    const query = {
      _id: id
    };
    await recipeCollection.updateOne(query, updateCommand);

    return await this.getRecipeById(id);
  }
};

module.exports = exportedMethods;