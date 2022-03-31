const numbers = document.querySelectorAll(".btn-secondary")
const calc = document.querySelector('.form-control')
const ops = document.querySelectorAll('.btn-primary')
const eq = document.querySelector('.sum')
const ac = document.querySelector('.ac')
const dcm = document.querySelector('.ttk')
const prs = document.querySelector('.prs')

let prev = ''
let result = ''
let current = ''
let calcop = ''

prs.addEventListener('click', () => {
    current = current /100
    updateScreen(current)
})

inputDecimal = (dot) => {
    if(current.includes('.')){
        console.log("sudah")
        return
    }else {
        current += dot
    }
}

dcm.addEventListener('click', () => {
    inputDecimal(event.target.value)
    updateScreen(current)
})

ac.addEventListener('click', () => {
    prev = ''
    calcop = ''
    current = ''
    updateScreen(current)
})
const calculate = () => {
    console.log("p " +prev)
    console.log("c " +current)
    console.log(calcop)
    
    
    let res = ''
    switch(calcop) {
        case '+':
            res = parseFloat(prev)+parseFloat(current)
            break
        case '-':
            res = parseFloat(prev)-parseFloat(current)
            break
        case '*':
            res = parseFloat(prev)*parseFloat(current)
            break
        case '/':
            res = parseFloat(prev)/parseFloat(current)
            break
        default:
            return
    }
    current = res
    calcop = ''
}

const inputNumber = ((number) => {
    if (current === '0'){
        current = number
    } else {
        current += number
    }
})
const inputOp = (op) => {
    if(calcop === ''){
        prev = current
    }
    calcop = op
    current = ''
}

const updateScreen = (num) => {
    calc.value = num
}


numbers.forEach((number) => {
    
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(current)
        
    })

})

ops.forEach((op) => {
    op.addEventListener("click",(event) => {
        inputOp(event.target.value)
    })
})

eq.addEventListener('click',() => {
    calculate()
    updateScreen(current)
})