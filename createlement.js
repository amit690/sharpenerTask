const heading=document.createElement('h3');
const hedingtext=document.createTextNode("Buy high quality organic fruits online");
heading.appendChild(hedingtext);
const divs=document.getElementsByTagName('div');
const fristdiv=divs[0];
fristdiv.appendChild(heading);
heading.style.fontStyle='italic';
const para = document.createElement('p');
const paratext=document.createTextNode('Total fruits: 4');
const seconddiv= divs[1];
para.appendChild(paratext);
const unorderedlist=document.getElementsByTagName('ul');
seconddiv.insertBefore(para,unorderedlist[0]);
para.id='fruits-total';
