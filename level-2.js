let count = 0;

document.getElementById('btn-add').addEventListener('click', function () {
    count = count + 1;
    const number = document.getElementById('number').innerText;
    document.getElementById('number').innerText = count;
    localStorage.setItem('number', count);
    // console.log(count);
})

const display = () => {
    const data = localStorage.getItem('number');
    const number = document.getElementById('number').innerText;
    document.getElementById('number').innerText = data;

}

display()