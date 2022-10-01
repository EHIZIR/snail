const snail = {
    name: 'Турбо',
    life: 3,
    level: 1,
    position: 0,
    nextLevel: function () {
       
    },
    lev1: function () {
        this.position += 2,
        this.position--
    },
    lev2: function () {
        this.position += 3,
        this.position--
    },
    infogetUp: function () {
        console.log('Уровень пройден')
        console.log('Начать следующий уровень')
    },
    getUp: function () {
        if (this.level === 1) {
            this.lev1()
            console.log(`имя: ${this.name}, место: ${this.position}, жизнь: ${this.life}, уровень: ${this.level}`)
        }
        if (this.position === 5) {
            this.level++
            this.infogetUp()
        }
        if (this.level === 2) {
            this.lev2()
            console.log(`имя: ${this.name}, место: ${this.position}, жизнь: ${this.life}, уровень: ${this.level}`)
        }
        if (this.position === 11) {
            this.level += 2
            this.infogetUp()
        }
              
    },
}

snail.getUp()
snail.getUp()
snail.getUp()
snail.getUp()
snail.getUp()
snail.getUp()
snail.getUp()
