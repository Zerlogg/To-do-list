const POP_UP = document.getElementById('popup');
let uzdevumi2 = []

document.getElementById('jaunsUzdevums').addEventListener('click', () => {
  POP_UP.style.display = 'block'

})

document.getElementById('pievienotUzdevumu').addEventListener('click', () => {
  POP_UP.style.display = 'none'

  let uzdevumi = {uzdevums: uzdevums.value, termiņš: termiņš.value};
  
  uzdevums.value = ""
  termiņš.value = ""

  uzdevumi2.push(uzdevumi)
})


function render() {
  let uzdevumi3 = document.getElementById('uzdevumi');
  
}