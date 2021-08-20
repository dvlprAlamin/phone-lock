

const phone = document.getElementById('phone');
const keyCount = document.getElementById('key-count');
const tryLeft = document.getElementById('try-left');

const message = document.getElementById('message');
const waitingTime = document.getElementById('waiting-time');


document.getElementById('keys').addEventListener('click', function (e) {
    if (e.target.classList.value == 'key') {
        if (isNaN(e.target.innerText)) {
            if (e.target.innerText == 'Del') {
                keyCount.value = keyCount.value.slice(0, -1)
            }
            // if (e.target.innerText == 'Ok') {
            //     if (keyCount.value == '5555') {
            //         // console.log('pin matched');
            //         window.location.href = "index2.html"
            //     } else {
            //         // console.log('pin doesn\'t match');
            //         tryLeft.parentNode.classList.remove('d-none');
            //         tryLeft.innerText--
            //         keyCount.value = '';
            //         callAction();
            //     }
            // }

        } else {
            keyCount.value = keyCount.value + e.target.innerText;

        }
        console.log(keyCount.value, 'clicked');
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
            }, 1000);
            tryLeft.parentNode.classList.remove('d-none');
            tryLeft.innerText--
            keyCount.value = '';
            callAction();
        }
    }

})


const callAction = () => {
    if (tryLeft.innerText === '0') {
        message.classList.add('d-none')
        waitingTime.parentNode.classList.remove('d-none')
        // submitBtnToggler()
        setTimeout(() => {
            // submitBtnToggler()
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