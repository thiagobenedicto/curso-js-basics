let amigo = {
    nome: 'Thiago',
    sexo: 'M',
    peso: 95,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)