const progress = document.querySelector('#progress'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
    console.log(currentActive);
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1
    }

    update();
    console.log(currentActive);
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });//forEach

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    console.log(actives.length + ' - Длинна или колличество элементов с классом active');
    console.log(circles.length + ' - Колличество элементов с классом circles');
    console.log((actives.length - 1) / (circles.length - 1) * 100 + '%')
    
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

};