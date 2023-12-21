const root = document.querySelector('#root')
const buttonAdd = document.querySelector('button')
const show = document.querySelector('.show-sum')
let totalsum = 0;
function Counter(set) {
  let step = set;
  let countNum = 0;
  const makeElement = (tag, attr_n, attr_v, content) => {
    let output = document.createElement(tag)
    output.setAttribute(attr_n, attr_v)
    output.textContent = content
    return output
  }

  function updateCounter(n) {
    if (countNum + n < 0) {
      return
    }
    countNum += n
    counting.textContent = 'Counter = ' + countNum
    totalsum += n;
    show.textContent = 'sum = ' + totalsum
    console.log(totalsum)
    console.log('step' + step)
  }

  const delCounter = e => {
    console.log(e.target.closest('.counter'))
    e.target.closest('.counter').remove()
    totalsum -= countNum;
    show.textContent = 'sum = ' + totalsum
  }

  const counter = makeElement('div', 'class', 'counter', '')
  const header = makeElement('div', 'class', 'header', '')
  const counting = makeElement('div', 'class', 'counting', 'Counter = 0')
  const stepcCunter = makeElement('div', 'class', 'stepcounter', 'Step = ' + set)
  const conTroller = makeElement('div', 'class', "controller", '')
  const btnInc = makeElement('button', 'class', 'btn-inc', '+')
  const btnClr = makeElement('button', 'class', 'btn-clr', '0')
  const btnDec = makeElement('button', 'class', 'btn-dec', '-')
  const btnDel = makeElement('button', 'class', 'btn-clr', 'X')

  counter.appendChild(header);
  counter.appendChild(conTroller);
  header.appendChild(counting);
  header.appendChild(stepcCunter);

  conTroller.appendChild(btnInc);
  conTroller.appendChild(btnClr);
  conTroller.appendChild(btnDec);
  conTroller.appendChild(btnDel);

  btnInc.addEventListener('click', () => updateCounter(Number(step)))
  btnDec.addEventListener('click', () => updateCounter(Number(-step)))
  btnClr.addEventListener('click', () => updateCounter(-countNum))
  btnDel.addEventListener('click', delCounter)

  return counter
}

function Addcounter(s) {
  let se = s;
  if (se.length > 0) {
    document.getElementById('in').innerText = ''
    root.appendChild(Counter(se));
  } else {
    document.getElementById('in').innerText = 'กรุณากรอกค่า'
  }
}

buttonAdd.addEventListener('click', () => Addcounter(document.querySelector("#counterInput").value));

