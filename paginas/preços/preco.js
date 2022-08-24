const curso1 = document.getElementById('curso1')
const curso2 = document.getElementById('curso2')
const curso3 = document.getElementById('curso3')
const curso4 = document.getElementById('curso4')

const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const valor3 = document.getElementById('valor3')
const valor4 = document.getElementById('valor4')

const valorTotal = document.getElementById('valorTotal')

const botaoComprar = document.getElementById('botaoComprar')

const divComprar0 = document.getElementById('divComprar0')

const x = document.getElementById('xImg')

const qrcode = document.getElementById('qrcode')

const botoesGeral = document.querySelector('.btn-warning')
const arquivo = document.querySelector('.arquivo')





const precos = {
 curso1Preco: [100, 'no'],
 curso2Preco: [200, 'no'],
 curso3Preco: [300, 'no'],
 curso4Preco: [400, 'no'],
}

function setarValores(){
    valor1.innerHTML = precos.curso1Preco[0]
    valor2.innerHTML = precos.curso2Preco[0]
    valor3.innerHTML = precos.curso3Preco[0]
    valor4.innerHTML = precos.curso4Preco[0]
}
setarValores()


let precosList =[]

let precofinal = 0



function qrCode(){
    if(precofinal == 0){
        qrcode.setAttribute('src', 'https://cdn.pixabay.com/photo/2013/07/12/14/42/qr-code-148603_640.png')
    }

    else{
        qrcode.setAttribute('src', './qrcodes/1.jpeg')
    }
}

function calcular(){

    precosList = []
    precofinal = 0
    
    // mudar cor e adicionar ao array

    if(precos.curso1Preco[1] === 'yes'){
        precosList.push(precos.curso1Preco[0])
        curso1.classList.remove('btn-warning');
        curso1.classList.add('btn-success');
    } else{
        curso1.classList.remove('btn-success')        
        curso1.classList.add('btn-warning');

    }

    if(precos.curso2Preco[1] === 'yes'){
        precosList.push(precos.curso2Preco[0])
        curso2.classList.remove('btn-warning');
        curso2.classList.add('btn-success');
    } else{
        curso2.classList.remove('btn-success')        
        curso2.classList.add('btn-warning');

    }
    if(precos.curso3Preco[1] === 'yes'){
        precosList.push(precos.curso3Preco[0])
        curso3.classList.remove('btn-warning');
        curso3.classList.add('btn-success');
    } else{
        curso3.classList.remove('btn-success')        
        curso3.classList.add('btn-warning');

    }

    if(precos.curso4Preco[1] === 'yes'){
        precosList.push(precos.curso4Preco[0])
        curso4.classList.remove('btn-warning');
        curso4.classList.add('btn-success');
    } else{
        curso4.classList.remove('btn-success')        
        curso4.classList.add('btn-warning');

    }
    
    // calcular preço

    for (let i = 0; i<precosList.length; i++){
        precofinal+= precosList[i]
    }


    valorTotal.innerHTML = 'R$' + precofinal

    qrCode()
    
}


function divDeCompra(){
    if (divComprar0.style.display == 'flex'){
        divComprar0.style.display = 'none'
    } else{
        divComprar0.style.display = 'flex'
    }
   
}

botoesGeral.addEventListener('click', ()=>{
    if(botoesGeral.innerHTML === 'Adicionar Pacote'){
        botoesGeral.innerHTML = 'Pacote adicionado'
    } else{
        botoesGeral.innerHTML = 'Adicionar Pacote'
    }
})



botaoComprar.addEventListener('click', divDeCompra)
x.addEventListener('click',  divDeCompra)

curso1.addEventListener('click', ()=>{

    if(precos.curso1Preco[1]=== 'no'){
        precos.curso1Preco[1] = 'yes'
    } else{
        precos.curso1Preco[1] = 'no'
    }

    if(curso1.innerHTML === 'Adicionar Pacote'){
        curso1.innerHTML = 'Pacote adicionado'
    } else{
        curso1.innerHTML = 'Adicionar Pacote'
    }
    
    calcular()
})
curso2.addEventListener('click', ()=>{
    if(precos.curso2Preco[1]=== 'no'){
        precos.curso2Preco[1] = 'yes'
    } else{
        precos.curso2Preco[1] = 'no'
    }

    if(curso2.innerHTML === 'Adicionar Pacote'){
        curso2.innerHTML = 'Pacote adicionado'
    } else{
        curso2.innerHTML = 'Adicionar Pacote'
    }
    
    calcular()
})
curso3.addEventListener('click', ()=>{
    if(precos.curso3Preco[1]=== 'no'){
        precos.curso3Preco[1] = 'yes'
    } else{
        precos.curso3Preco[1] = 'no'
    }

    if(curso3.innerHTML === 'Adicionar Pacote'){
        curso3.innerHTML = 'Pacote adicionado'
    } else{
        curso3.innerHTML = 'Adicionar Pacote'
    }
    calcular()
})
curso4.addEventListener('click', ()=>{
    if(precos.curso4Preco[1]=== 'no'){
        precos.curso4Preco[1] = 'yes'
    } else{
        precos.curso4Preco[1] = 'no'
    }
    if(curso4.innerHTML === 'Adicionar Pacote'){
        curso4.innerHTML = 'Pacote adicionado'
    } else{
        curso4.innerHTML = 'Adicionar Pacote'
    }
    calcular()
})