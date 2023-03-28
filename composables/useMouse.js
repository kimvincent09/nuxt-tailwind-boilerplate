export function useMouse(){
    const x = ref(0) //initial value
    const y = ref(0) //initial value

function update(event){
    x.value = event.pageX
    y.value = event.pageY
}
onMounted(()=>window.addEventListener('mousemove', update))
onUnmounted(()=>window.removeEventListener('mousemove', update))
return {x, y}
}