let typeEl = document.querySelectorAll(".type");
let typeElArr = Array.from(typeEl);




typeElArr.map((typeEl) => {
    let typeText = typeEl.innerHTML;
    let typeArr;
    let count = 0;
    let time = typeEl.dataset.speed;
    typeEl.innerHTML = "";

    function typejs() {
        if (count < typeText.length) {
            typeEl.innerHTML += typeText.charAt(count);
            count++
            typeArr = typeText.split("");
        } else {
            if (typeArr.length == 0) {
                count = 0;
            }
            typeEl.innerHTML = typeArr.join("")
            typeArr.pop()
        }
    }

    setInterval(() => {
        typejs()
    }, time);






})




