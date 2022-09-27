const calc = (size, material, options, promocode, result) => {
    const sizeBlcock = document.querySelector(size);
    const materialBlcock = document.querySelector(material);
    const optionsBlcock = document.querySelector(options);
    const promocodeBlcock = document.querySelector(promocode);
    const resultBlcock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round(
            +sizeBlcock.value * +materialBlcock.value + +optionsBlcock.value,
        );

        if (sizeBlcock.value == "" || materialBlcock.value == "") {
            resultBlcock.textContent = "Пожалуйста, выберите размер и материал";
        } else if (promocodeBlcock.value === "IWANTPOPART") {
            resultBlcock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlcock.textContent = sum;
        }
    };

    sizeBlcock.addEventListener("change", calcFunc);
    materialBlcock.addEventListener("change", calcFunc);
    optionsBlcock.addEventListener("change", calcFunc);
    promocodeBlcock.addEventListener("input", calcFunc);
   

};

export default calc;
