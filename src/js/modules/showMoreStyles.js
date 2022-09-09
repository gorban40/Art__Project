import { getData } from "../services/requests";

const showMoreStyles = (trigger, styles, wrapper) => {
    const cards = document.querySelectorAll(styles),
        btn = document.querySelector(trigger);

    btn.addEventListener('click',function() {
        getData('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(() => {
                throw new Error('ERROR new');
            });
        this.remove();
    })

    function createCards(response) {
        response.forEach(({src,title,link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="photo">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    };

//     <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
//     <div class=styles-block>
//         <img src=assets/img/styles-4.jpg alt>
//         <h4>Ручкой</h4>
//         <a href="#">Подробнее</a>
//     </div>
// </div>

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', (e) => {
    //     cards.forEach(card => {
    //         card.classList.remove("hidden-lg", "hidden-md","hidden-sm","hidden-xs");
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     e.target.remove();
    // });
};
export default showMoreStyles;