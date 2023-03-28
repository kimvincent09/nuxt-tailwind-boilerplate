<template>
     <div>
    <div>This is the main page</div>
    <Counter/>
    <div>
        x: {{ x }}
        y: {{ y }}
    </div>
   
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
    <div>
        <ul>
            <li v-for="user in users2" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
    <div>
       {{ user.name}}
       <div>
        {{ weather.weather[0].description }}
        {{ weather.main.temp }}
       </div>
       <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text-sm border-2 ">Hello, Tailwind 3!</h1>
  </div>
    </div></div>
  

</template>

<script setup>
const {x, y} = useMouse()
const users = ref([])
// Client-side Rendered
onMounted(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>users.value =data)
})

// Server-side Rendered
// const {data: users2} = await useAsyncData('users2', ()=>$fetch('https://jsonplaceholder.typicode.com/users'))
const {data: users2} = await useFetch('https://jsonplaceholder.typicode.com/users')
const {data: user} = await useFetch('https://jsonplaceholder.typicode.com/users/1', {pick:['id', 'name', 'email']})
const {data: weather} = await useFetch('/api/weather')
</script>