const num =[
    1,
    2,
    3,  
    4,
    5,
    6,
    7
]
num.pop()

for (let pos in num){
    console.log(`A posição ${pos} tem armazenado o valor de ${num[pos]}`)
}
let posi = num.indexOf(513)
if(posi >= 0){
    console.log(`O valor 5 está na posição ${posi}`)
} else {
    console.log(`O valor não foi encontrado!`)
}