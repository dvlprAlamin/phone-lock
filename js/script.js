const phone = document.getElementById('phone');
const keyCount = document.getElementById('key-count');
const tryLeft = document.getElementById('try-left');
const message = document.getElementById('message');
const waitingTime = document.getElementById('waiting-time');
const deleteBtn = document.getElementById('delete-btn');
const countItems = document.getElementsByClassName('count-item');



const pinCheck = (e) => {
    if (e.target.classList.value == 'key') {
        keyCount.value = keyCount.value + e.target.innerText;
    }
    for (let i = 0; i < keyCount.value.length; i++) {
        countItems[i].style.background = '#9eabbc';
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
                clearInterval(interval);
            }, 1000);
            const interval = setInterval(() => {
                for (let i = 0; i < 4; i++) {
                    countItems[i].style.background = 'transparent';
                }
            }, 900);
            tryLeft.parentNode.classList.remove('d-none');
            tryLeft.innerText--;
            keyCount.value = '';
            callAction();
        }
    }
    if (keyCount.value.length > 0) {
        deleteBtn.style.visibility = 'visible';
    } else {
        deleteBtn.style.visibility = 'hidden';
    }
}
document.getElementById('keys').addEventListener('click', pinCheck)

const deleteBtnHandler = () => {
    keyCount.value = keyCount.value.slice(0, -1);
    for (let i = keyCount.value.length; i < 4; i++) {
        countItems[i].style.background = 'transparent';
    }
}

deleteBtn.addEventListener('click', deleteBtnHandler)

const callAction = () => {
    if (tryLeft.innerText === '0') {
        const keys = document.getElementsByClassName('key');
        for (const key of keys) {
            key.setAttribute('disabled', true);
        }
        message.classList.add('d-none');
        waitingTime.parentNode.classList.remove('d-none');
        setTimeout(() => {
            for (const key of keys) {
                key.removeAttribute('disabled');
            }
            tryLeft.innerText = 5;
            clearInterval(interval);
            waitingTime.innerText = 10;
            waitingTime.parentNode.classList.add('d-none');
            message.classList.remove('d-none');
            tryLeft.parentNode.classList.add('d-none');
        }, 10000);
        const interval = setInterval(() => waitingTime.innerText--, 1000);
    }
}