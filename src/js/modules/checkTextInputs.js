const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        })
        item.addEventListener('blur', (e) => {
            if (/[A-Za-z0-9]/gi.test(item.value)) {
                console.log('blia')
                item.value = '';
            }
        })
    })
};

export default checkTextInputs;