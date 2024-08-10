// Image selection
document.addEventListener('DOMContentLoaded', function () {

    const mainImage = document.getElementById('mainImage');
    
    const subImages = document.querySelectorAll('.sub-img');

    subImages.forEach((img) => {
        img.addEventListener('click', (e) => {
            mainImage.src = e.target.src;
        });
    });
});


//zoomer
    const zoomIcon = document.querySelector('.zoom-icon');
    const mainImage = document.getElementById('mainImage');
    zoomIcon.addEventListener('click', () => {
        const zoomWindow = window.open('', '_blank');
        zoomWindow.document.write(`
            <html>
                <head>
                    <title>Zoomed Image</title>
                    <style>
                        body {
                            margin: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background-color: #000;
                        }
                        img {
                            max-width: 100%;
                            max-height: 100%;
                        }
                    </style>
                </head>
                <body>
                    <img src="${mainImage.src}" alt="Zoomed Image">
                </body>
            </html>
        `);
        zoomWindow.document.close();
    });


//stepper
    const quantityInput = document.getElementById('quantityInput');
    const increaseQuantity = document.getElementById('increaseQuantity');
    const decreaseQuantity = document.getElementById('decreaseQuantity');

    increaseQuantity.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseQuantity.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });


//read more
        function toggleReadMore() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("readMoreBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read More";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read Less";
                moreText.style.display = "inline";
            }
        }


        document.getElementById("currentYear").textContent = new Date().getFullYear();