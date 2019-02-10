let sliderNameSpace = (function() {
    let oSliderSection = document.getElementById('slider-section');
    let arrSliderImages = oSliderSection.querySelectorAll('.slide-item');
    let oSliderDots = oSliderSection.querySelector('.dots');
    let arrSlideDots = oSliderDots.querySelectorAll('.dot');
    let currentIndex = 0;
    
    function selectSlide(index) {
        for(let i = 0; i < arrSliderImages.length; i++) {
            arrSliderImages[i].style.display = "none";
            arrSlideDots[i].classList.remove('active');
        }
        arrSliderImages[index].style.display = "block";
        arrSlideDots[index].classList.add('active'); 
        currentIndex = index;
    }

    function nextSlide(move) {  
        let index;
        if(move + currentIndex >= arrSliderImages.length ) {
            currentIndex = 0;
            move = 0;
        } else if (move + currentIndex < 0 ) {
            currentIndex = arrSliderImages.length - 1;
            move = 0;
        }
        index = move+currentIndex;
        selectSlide(index);
    }

    return {
        previousSlide: function() {
            nextSlide(-1);
        },
        nextSlide: function() {
            nextSlide(1);
        },
        currentSlide: function(index) {
            selectSlide(index);
        }
    }
})();