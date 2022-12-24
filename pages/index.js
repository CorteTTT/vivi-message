const carta=document.querySelector('#carta')
const aviso=document.querySelector('#aviso')
const cartaContainer=document.querySelector('#carta-container')
const pageThree=document.querySelector('#page3-btn')

carta.addEventListener('click',(e)=>{
    console.log('clicou')
carta.style.display='none'
aviso.style.display='none'
cartaContainer.style.display='flex'
pageThree.style.display='flex'
})