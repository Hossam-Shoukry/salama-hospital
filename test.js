const myTest = ()=>{
const state = reactive({
name:'test java page'
})
return {...toRefs(state)}
}
export { myTest as myTest }
