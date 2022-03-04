var agora = new Date()
var hora = agora.getHours() 
console.log(`São ${hora} horas!`)
if (hora > 0 && hora < 12){
    console.log(`Bom Dia!`)
} else if (hora < 18){
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}