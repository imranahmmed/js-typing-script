let typeEl = document.querySelectorAll(".type");
let typeElArr = Array.from(typeEl);
let enterText = document.querySelector(".enterText");
let enterSpeed = document.querySelector(".enterSpeed");
let typebutton = document.querySelector(".typebutton");


function typeScript() {
    typeElArr.map((typeEl) => {

        function isInViewPort() {
            let viewPort = typeEl.getBoundingClientRect();

            return (viewPort.top >= 0 && viewPort.left >= 0 && viewPort.bottom <= (window.innerHeight || document.documentElement.clientHeight) && viewPort.right <= (window.innerWidth || document.documentElement.clientWidth));
        };

        let typeText = typeEl.innerHTML;
        let typeArr;
        let count = 0;
        let oneTimeRun = true;
        window.addEventListener("scroll", function () {
            if (isInViewPort() && oneTimeRun) {
                oneTimeRun = false;
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
            }
        });
    })










}


typeScript()
