<template>
   
        <header class="w-full h-20">
            <NavBar />
        </header>
        <main class="w-full h-auto mt-5 p-10">
            <Suspense>
                <template #default>
                    <MainBody />
                </template>
                <template #fallback>
                    <div>loading ......</div>
                </template>
            </Suspense>
        </main>
        <footer></footer>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MainBody from './MainBody.vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  components: { NavBar,MainBody },
    setup(){
        
    },
})
</script>
