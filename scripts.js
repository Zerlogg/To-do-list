const POP_UP = document.getElementById('popup');
let uzdevumi2 = [];

window.addEventListener('load', () => {
  uzdevumi2 = JSON.parse(localStorage.getItem("uzdevumi2") || "[]");
  console.log(uzdevumi2)
  render();
});

document.getElementById('jaunsUzdevums').addEventListener('click', () => {
  POP_UP.style.display = 'block'

})

document.getElementById('pievienotUzdevumu').addEventListener('click', () => {
  POP_UP.style.display = 'none'

  let uzdevumi = {uzdevums: uzdevums.value, termiņš: termiņš.value};
  
  uzdevums.value = ""
  termiņš.value = ""

  uzdevumi2.push(uzdevumi);

  render();
})

function render() {
  let uzdevumi3 = document.getElementById('uzdevumi3');
  uzdevumi3.innerHTML = "";

  for(let i = 0; i < uzdevumi2.length; i++) {
    let uzdevumi = `
    <div class="uzdevumi"> 
      <h3>Uzdevums: ${uzdevumi2[i].uzdevums}</h3>
      <h4>Termiņš: ${uzdevumi2[i].termiņš}</h4> 
    </div>`;
  uzdevumi3.innerHTML += uzdevumi;
  }

  localStorage.setItem("uzdevumi2", JSON.stringify(uzdevumi2))
}