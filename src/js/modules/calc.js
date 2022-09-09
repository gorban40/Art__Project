const calc = (size, material, options, promocode, resualt) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resualtBlock = document.querySelector(resualt);

    let sum = 0;

    const caclFunctionCheck = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        
        if (sizeBlock.value === '' || materialBlock.value === '') {
            resualtBlock.textContent = "Пожалуйста выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resualtBlock.textContent = Math.round(sum * 0.7);
        } else {
            resualtBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', caclFunctionCheck);
    materialBlock.addEventListener('change', caclFunctionCheck);
    optionsBlock.addEventListener('change', caclFunctionCheck);
    promocodeBlock.addEventListener('input', caclFunctionCheck);
};

export default calc;