<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div
              v-for="(item, key) in ingredients"
              :key="key"
              class="list-item"
            >
						{{ item.name }}
						<template v-if="item.measure">
							|
							{{ item.measure }}
						</template>
						</div>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import axios from "axios";
import { COCKTAIL_BY_ID } from "@/constants";

const route = useRoute();
const cocktailId = computed(() => route.path.split("/").pop());
const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktail.value[`strIngredient${i}`] === null) {
      break;
    }
    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`].trim();
    ingredient.measure = cocktail.value[`strMeasure${i}`].trim();
    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
  cocktail.value = data?.data?.drinks[0];
}
getCocktail();
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";
</style>