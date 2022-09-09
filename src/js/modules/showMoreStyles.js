const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', (e) => {
        cards.forEach(card => {
            card.classList.remove("hidden-lg", "hidden-md","hidden-sm","hidden-xs");
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        e.target.remove();
    });
};
export default showMoreStyles;