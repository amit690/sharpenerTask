const fruits = document.getElementsByClassName('fruit');
        for (let i = 0; i < fruits.length; i++) {
            fruits[i].style.fontWeight = 'bold';
        }

        // Change the background color of the third fruit to yellow
            fruits[2].style.backgroundColor = 'yellow';