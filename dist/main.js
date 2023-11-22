let colors = ['text-red-500','text-blue-200','text-green-900','text-gray-300','text-yellow-400','text-pink-200','text-indigo-500','text-yellow-500','text-current','text-purple-700']
let inputs = document.querySelectorAll('input')

//Evenet listener that will change text color dynamically onkeydown. (Works for tailwindcss)
window.addEventListener('keydown',()=>{
   inputs.forEach(input=>{
    input.classList.toggle(colors[Math.floor(Math.random() * colors.length)])
   })
})
