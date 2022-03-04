let num = document.getElementById('fnum')
let lista = document.querySelector('select#lnum')
let res = document.querySelector('div#res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar (){
    if (isNum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = ''   
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma= 0

      for (let pos in valores){
          soma += valores[pos]
          media = soma/valores.length
          if (valores[pos] > maior)
            maior = valores[pos]
          if (valores[pos] < menor)
            menor = valores[pos]

      
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos são ${tot} valores.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}
