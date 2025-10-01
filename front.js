const greetbtn = document.getElementById("greetbtn");
const nameinput = document.getElementById('nameinput');
const greeting=document.getElementById('greeting');

greetbtn.addEventListener('click', () => {
    const name=nameinput.value.trim();
    if (name!==""){
        greeting.textContent = `Hello, ${name}`;
    }else{
        alert('Please enter your name');
    }
});

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
    box.addEventListener('click', () => {
    const color = box.getAttribute('data-color');
    box.style.backgroundColor = color;
  });
});