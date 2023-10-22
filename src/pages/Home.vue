<template>
  <AppLayout imgUrl="/src/assets/img/dawa-cocktail.png">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            class="select"
            @change="getCocktails()"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="Cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import CocktailThumb from "../components/CocktailThumb.vue";

const rootStore = useRootStore();
rootStore.getIngredients();
const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/main";

.select-wrapper {
  padding-top: 50px;
}
.text {
  min-width: 516px;
  padding-top: 50px;
  line-height: 36px;
  letter-spacing: 0.1rem;
  color: $textMuted;
}

.img {
  margin-top: 60px;
}
.cocktails {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 60px;
}
</style>