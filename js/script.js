const phone = document.getElementById('phone');
const keyCount = document.getElementById('key-count');
const tryLeft = document.getElementById('try-left');
const message = document.getElementById('message');
const waitingTime = document.getElementById('waiting-time');
const deleteBtn = document.getElementById('delete-btn');
const countItems = document.getElementsByClassName('count-item');

document.getElementById('keys').addEventListener('click', function (e) {

    if (e.target.classList.value == 'key') {
        keyCount.value = keyCount.value + e.target.innerText;
        console.log(keyCount.value, 'clicked');
    }
    for (let i = 0; i < keyCount.value.length; i++) {
        console.log(countItems[i])
        countItems[i].classList.add('active')
    }

    if (keyCount.value.length == 4) {
        if (keyCount.value == '5555') {
            // console.log('pin matched');
            window.location.href = "index2.html"
        } else {

            // console.log('pin doesn\'t match');
            phone.classList.add('shake-phone');
            setTimeout(() => {
                phone.classList.remove('shake-phone');
                clearInterval(interval)
            }, 1000);
            const interval = setInterval(() => {
                for (let i = 0; i <= 3; i++) {
                    console.log(countItems[i])
                    countItems[i].classList.remove('active')
                }
            }, 900);
            tryLeft.parentNode.classList.remove('d-none');
            tryLeft.innerText--
            keyCount.value = '';
            callAction();
        }
    }
    if (keyCount.value.length > 0) {
        deleteBtn.style.visibility = 'visible'
    } else {
        deleteBtn.style.visibility = 'hidden'
    }

})




deleteBtn.addEventListener('click', function () {
    keyCount.value = keyCount.value.slice(0, -1)
})

const callAction = () => {
    if (tryLeft.innerText === '0') {
        message.classList.add('d-none')
        waitingTime.parentNode.classList.remove('d-none')
        setTimeout(() => {
            tryLeft.innerText = 5;
            clearInterval(interval);
            waitingTime.innerText = 10;
            waitingTime.parentNode.classList.add('d-none');
            message.classList.remove('d-none');
            tryLeft.parentNode.classList.add('d-none')
        }, 10000);
        const interval = setInterval(() => waitingTime.innerText--, 1000);
    }
}