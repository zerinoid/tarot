// script.js

$(document).ready(function () {

    // let tarotData = [];

    axios.get(`https://cors-anywhere.herokuapp.com/https://rws-cards-api.herokuapp.com/api/v1/cards`)
        .then((response) => {
            
            let tarotData = response.data;
            console.log(tarotData);

            for (i = 0; i < tarotData.cards.length; i++) {

                if(i % 3 === 0 ) {
                    var row = document.createElement('div');
                    row.classList.add('row');
                    $('.container').append(row);
                }
                
                let col = document.createElement('div');
                col.classList.add('col-4');
                
                let card = document.createElement('div');
                card.classList.add('card');

                let cartela = document.createElement('div');
                cartela.classList.add('cartela');

                $(row).append(col);
                $(col).append(card);
                $(card).append(cartela);
                
                $(card).css("background-image", `url( https://www.sacred-texts.com/tarot/pkt/img/${tarotData.cards[i].name_short}.jpg )` );

                // $(cartela).append(`<h3 class="titulo">${tarotData.cards[i].name}</h3>`);
                // $(cartela).append(`<p class="job">${tarotData.cards[i].desc}</p>`);

            }

        });
});
