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
 
 document.getElementById('search').addEventListener('keyup', filterPallets);