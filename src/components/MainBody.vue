<template>
    <div v-if="products" class="flex flex-wrap flex-row justify-around pb-5 space-x-2 space-y-2">
        <TheProduct  v-for="product  of products" :key="product.id" :product="product" />
    </div>
    

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useProducts from '../composables/products'
import TheProduct from './TheProduct.vue'
export default defineComponent({
    components:{TheProduct},
     async setup() {
       const { products }=await useProducts();
       return {
           products
       }
    },
})
</script>
