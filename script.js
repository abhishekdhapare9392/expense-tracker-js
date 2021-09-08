let close = document.querySelector('.close')
let historyItem = document.querySelectorAll('.history-item')

let tranName = document.querySelector('#transaction-name')
let tranAmount = document.querySelector('#amount')
let income = document.querySelector('#income')
let expense = document.querySelector('#expense')
let balance = document.querySelector('.your-balance')
let addTrans = document.querySelector('#add-transaction')

historyItem.forEach((item) => {
  item.addEventListener('mouseover', function () {
    item.children[1].children[0].style.display = 'inline-block'
  })

  item.addEventListener('mouseout', function () {
    item.children[1].children[0].style.display = 'none'
  })
})

addTrans.addEventListener('click', function () {
  console.log(tranName.value, tranAmount.value)
  let hist = ''
  let sign = ''
  if (Math.sign(tranAmount.value) === 1) {
    // console.log(income.innerHTML, tranAmount.value)
    let inc = parseFloat(income.innerHTML) + parseFloat(tranAmount.value)
    income.innerHTML = inc
    balance.innerHTML = inc
    hist = 'history-item-income'
    sign = '+'
  } else if (Math.sign(tranAmount.value) === -1) {
    let exp = parseFloat(expense.innerHTML) + parseFloat(tranAmount.value)
    expense.innerHTML = exp
    balance.innerHTML = parseFloat(balance.innerHTML) + parseFloat(exp)
    console.log(parseFloat(balance.innerHTML))
    hist = 'history-item-expense'
  }

  let div = document.createElement('div')
  div.className = `card card-body shadow-sm border d-flex flex-row justify-content-between history-item ${hist} my-2`
  div.innerHTML = `
  <span>${tranName.value}</span>
  <span>${sign}${tranAmount.value}&nbsp; <span class="close">&times;</span></span>
  `
  document.querySelector('.history').appendChild(div)
  tranName.value = ''
  tranAmount.value = ''
})

document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    e.target.parentElement.parentElement.remove()

    income.innerHTML = '00.00'
    expense.innerHTML = '00.00'
    balance.innerHTML = '00.00'
  }
})
