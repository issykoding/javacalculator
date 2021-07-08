class Calculator {
    constructor(previousoperandtextelement, currentoperandtextelement) {
        this.previousoperandtextelement = previousoperandtextelement
        this.currentoperandtextelement = currentoperandtextelement
        this.clear()
}

clear() {
    this.currentoperand = ''
    this.previousoperand = ''
    this.operation = undefined

}

delete() {
    
}

appendnumber(number) {
    this.currentoperand = this.currentoperand.tostring() + number.tostring()

}

chooseoperation(operation) {

}

cumpute() {

}

updatedisplay() {
    this.currentoperandtextelement.innertext = this.currentoperand

}

}




const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const equalsbutton = document.querySelector('[data-equals]')
const deletebutton = document.querySelector('[data-delete]') 
const allclearbutton = document.querySelector('[data-all-clear]')
const previousoperandtextelement = document.querySelector('[data-previous-operand]')
const currentoperandtextelement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousoperandtextelement,currentoperandtextelement)

numberbuttons.forEach(button => {
   button.addEventListener('click', () => {
   calculator.appendnumber(button.innertext)
   calculator.updatedisplay()
   })
})