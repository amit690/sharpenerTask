const mainheading=document.querySelector('#main-heading');
mainheading.style.textAlign='right';
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.pading='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.boderRadius='5px';
fruits.style.listStyleType='none';

const basketheading=document.querySelector('h2');
basketheading.style.marginLeft='30px';

const fruititems= document.querySelectorAll('.fruit');
for (let i=0; i<fruititems.length; i++){
  fruititems[i].style.backgroundColor='weight';
  fruititems[i].style.pading='10px';
  fruititems[i].style.margin='10px';
  fruititems[i].style.boderRadius='5px'
}
const oddfruititeam=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0; i<oddfruititeam.leangth;i++){
  oddfruititeam.style.backgroundColor='lightgray';
}
// Write answer to the questions asked below:
   const basket = document.querySelector('#basket-heading');
  basket.style.color = 'brown';
  
  const evenfruititeam = document.querySelectorAll('.fruit:nth-child(even)');
  for (let i = 0; i < evenfruititeam.length; i++) {
      evenfruititeam[i].style.backgroundColor = 'brown';
      evenfruititeam[i].style.color = 'white';
  }