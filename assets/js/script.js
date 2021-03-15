let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let fato =  document.querySelector('#fato')
let mapa = document.querySelector('#mapa')
let nomeOk =  false
let emailOk =  false
let fatoOk =  false


nome.style.width = '100%'

email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'NOME INVALIDO' 
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'NOME VALIDO'
        txtNome.style.color = 'green'
        nomeOk =  true
    }

}

function validaEmail(){
    let txtEmail =document.querySelector('#txtEmail')
    if(email.value.indexOf('@' || '.com' ) == -1){
        txtEmail.innerHTML = 'EMAIL INVALIDO' 
        txtEmail.style.color = 'red'
     }
     else{
        txtEmail.innerHTML = 'EMAIL VALIDO'
        txtEmail.style.color = 'green'
        emailOk =  true
     }
}

function validaFato() {
    let txtFato = document.querySelector('#txtFato')
 
    if (fato.value.length >= 100) {
        txtFato.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtFato.style.color = 'red'
        txtFato.style.display ='block'
    }
    else{
        txtFato.style.display ='none'
        fatoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && fatoOk == true){
        alert('FORMULARIO ENVIADO')
    }else{
        alert('PREENCHA O FORMULARIO CORRETAMENTE')
    }
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height ='600px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height ='250px'
}



