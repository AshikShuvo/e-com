<template>
  <div class='flex flex-row items-stretch justify-between w-2/5 bg-white rounded shadow-2xl'>
    <div class='w-1/3 p-3'>
          <img class='w-full h-40' :src="product.image" alt='' />
    </div>
    <div class='p-2 flex w-full flex-col space-y-2 bg-gray-100'>
          <p> {{product.title}}</p>
          <p> {{product.category}}</p>
          <p>
            Price : <span class='text-black-600'> {{product.price}} </span> $
          </p>

          
    </div>
  </div>
</template>
<script lang="ts">
import ProductType from '@/types/productType'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props:{
        product:{
            type: Object as PropType<ProductType>,
            required:true
        }
    },
    setup() {
        
    },
})
</script>
