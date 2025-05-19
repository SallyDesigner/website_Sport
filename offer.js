// const danner = document.querySelector('.danner');
// const InputColor = document.querySelector('.input-color');

// InputColor.addEventListener('input', () =>{
//     danner.style.background = InputColor.value;
// });



// const danner = document.getElementById('danner');
// const color = document.getElementById('color');
// InputColor.forEach(danner =>{
//     InputColor.addEventListener('input',()=>{
//         danner.style.background = InputColor.value;
//     });
// });

// const colorPicker = document.getElementById("color");
// const boxes = document.querySelectorAll(".danner");

// colorPicker.addEventListener("input", function() {
//     const selectedColor = colorPicker.value;
//     boxes.forEach(box => {
//         box.style.background = `linear-gradient(to right, ${selectedColor}, #000000)`;
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // الحصول على جميع عناصر إدخال الألوان
    const colorInputs = document.querySelectorAll(".input-color");

    colorInputs.forEach(input => {
        input.addEventListener("input", function () {
            // الحصول على اللون المختار
            const selectedColor = this.value;

            // الوصول إلى العنصر الأب (أقرب div.danner لهذا اللون المحدد)
            const dannerBox = this.closest(".card").querySelector(".danner");

            // تحديث التدرج اللوني للخلفية
            dannerBox.style.background = `linear-gradient(to right, ${selectedColor}, #000000)`;
        });
    });
});