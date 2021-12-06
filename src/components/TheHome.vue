<template>
   
        <header class="w-full h-20">
            <NavBar />
        </header>
        <main></main>
        <footer></footer>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  components: { NavBar },
    setup() {
        
    },
})
</script>
