const vermais1 = document.querySelector('#vermais1')
const vermais2 = document.querySelector('#vermais2')
const vermais3 = document.querySelector('#vermais3')
const vermais4 = document.querySelector('#vermais4')


const tvm1 = document.querySelector('#tvm1')
const tvm2 = document.querySelector('#tvm2')
const tvm3 = document.querySelector('#tvm3')
const tvm4 = document.querySelector('#tvm4')


vermais1.addEventListener('click', ()=>{
    if(tvm1.style.display == 'none'){      
        tvm1.style.display = 'flex'
        vermais1.innerHTML = 'Ver menos'
    } else{
        tvm1.style.display = 'none'
        vermais1.innerHTML = 'Ver mais'
    }
    
})

vermais2.addEventListener('click', ()=>{
    if(tvm2.style.display == 'none'){     
        tvm2.style.display = 'flex'
        vermais2.innerHTML = 'Ver menos'
    } else{
        tvm2.style.display = 'none'
        vermais2.innerHTML = 'Ver mais'
    }
    
})

vermais3.addEventListener('click', ()=>{
    if(tvm3.style.display == 'none'){   
        tvm3.style.display = 'flex'
        vermais3.innerHTML = 'Ver menos'
    } else{
        tvm3.style.display = 'none'
        vermais3.innerHTML = 'Ver mais'
    }
    
})

vermais4.addEventListener('click', ()=>{
    if(tvm4.style.display == 'none'){   
        tvm4.style.display = 'flex'
        vermais4.innerHTML = 'Ver menos'
    } else{
        tvm4.style.display = 'none'
        vermais4.innerHTML = 'Ver mais'
    }
    
})