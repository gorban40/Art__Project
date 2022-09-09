const uploadState = (state) => {
    const sizeBlock = document.querySelector('#size'),
            materialBlock = document.querySelector('#material'),
            optionsBlock = document.querySelector('#options'),
            promocodeBlock = document.querySelector('.promocode');

    function bindActionToElems(event, elem, prop) {
        
        elem.addEventListener(event, () => {
            switch(elem.nodeName) {
                case 'SELECT' :
                    state[prop] = elem.value;
                    break;
                case 'INPUT' :
                    state[prop] = elem.value;
                    break;
            }
            console.log(state);
        })
    }
    bindActionToElems('change', sizeBlock, 'size');
    bindActionToElems('change', materialBlock, 'material');
    bindActionToElems('change', optionsBlock, 'option');
    bindActionToElems('input', promocodeBlock, 'promocode');
};

export default uploadState;