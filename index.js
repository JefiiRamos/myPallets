// scripts.js
function filterPallets() {
  let input = document.getElementById('search');
  let filter = input.value.toUpperCase();
  let pallets = document.getElementsByClassName('pallet');
 
  for (let i = 0; i < pallets.length; i++) {
     let name = pallets[i].getElementsByTagName('h2')[0].innerText;
     if (name.toUpperCase().indexOf(filter) > -1) {
       pallets[i].style.display = '';
     } else {
       pallets[i].style.display = 'none';
     }
  }
 }

 const palettes = [
  {
    name: 'Nome da paleta',
    colors: [
      "2D0651",
      "401D61",
      "51326F",
      "61457C",
      "6F5688"
    ]
  }
]
 
 document.getElementById('search').addEventListener('keyup', filterPallets);