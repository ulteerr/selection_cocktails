
import { defineStore } from 'pinia'
import { COCKTAILS_BY_INGR_URL, INGREDIENTS_URL } from '../constants'
import axios from 'axios'
export const useRootStore = defineStore('root',
  {
    state: () => ({
      ingredients: [],
      cocktails: [],
      ingredient: null,
    }),
    actions: {
      async getIngredients() {
        const data = await axios.get(INGREDIENTS_URL)
        this.ingredients = data?.data.drinks
      },
      async getCocktails(ingredient) {
        const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`)
        this.cocktails = data?.data.drinks
      },
      setIngredient(val) {
        this.ingredient = val
      }
    }
  })
