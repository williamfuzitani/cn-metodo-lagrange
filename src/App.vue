<script setup>
import { ref, watch } from "vue";
import { interpola } from "./scripts/lagrange";

let x = ref(0);
let resultado = ref(0);
let tamanho = ref(3);
let funcao = ref([
  { x: -2, y: 2 },
  { x: 0, y: -2 },
  { x: 4, y: 1 },
]);

watch(tamanho, (tamanho, prevTamanho) => {
  const newFuncao = Array.from({ length: tamanho }).map((_, i) => ({
    x: 0,
    y: 0,
  }));
  funcao.value = newFuncao;
});

function calcular() {
  resultado.value = interpola(funcao.value, x.value);
}
</script>

<template>
  <h1>Projeto - Forma de Lagrange</h1>

  <div class="input-field">
    <label for="pontos">Número de Pontos:</label>
    <input v-model.number="tamanho" type="text" />
  </div>

  <div class="input-field">
    <label for="x">Valor de x onde se vai interpolar:</label>
    <input v-model.number="x" type="text" />
  </div>

  <div class="input-field">
    <button @click="calcular">Calcular</button>
  </div>

  <div class="section">
    <table>
      <tr>
        <th>Funcao</th>
        <td v-for="(col, icol) in tamanho" :key="icol">
          {{ icol }}
        </td>
      </tr>
      <tr>
        <td>X</td>
        <td v-for="(col, icol) in tamanho" :key="icol">
          <input v-model.number="funcao[icol].x" type="text" />
        </td>
      </tr>
      <tr>
        <td>Y</td>
        <td v-for="(col, icol) in tamanho" :key="icol">
          <input v-model.number="funcao[icol].y" type="text" />
        </td>
      </tr>
    </table>
  </div>

  <h2>Resultado</h2>
  <span>{{ resultado }}</span>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  padding: 1rem;
  border: 0.15em solid grey;
  border-radius: 0.5rem;
}

.input-field {
  margin-bottom: 1rem;
}

.section {
  display: flex;
  justify-content: center;
}
</style>
