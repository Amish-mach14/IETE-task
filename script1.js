var work = document.querySelector(".head input");
let btn1 = document.querySelector(".search");
let btn2 = document.querySelector(".clear");
let ul = document.querySelector(".list");
let bar = document.querySelector(".Enter");
btn1.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = work.value;
    li.className = 'list-item';
    ul.appendChild(li);
    let bt1 = document.createElement("button");
    bt1.textContent = "X";
    bt1.className = "X-btn";
    bt1.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(bt1);

    let bt2 = document.createElement("button");
    bt2.textContent = "Done";
    bt2.className = "D-btn";
    bt2.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(bt2);

    work.value = '';
});
bar.addEventListener("keydown", (event) => {
    if(event.key=="Enter") {
        let li = document.createElement("li");
    li.textContent = work.value;
    ul.appendChild(li);
    let bt1 = document.createElement("button");
    bt1.textContent = "X";
    bt1.className = "X-btn";
    bt1.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(bt1);

    let bt2 = document.createElement("button");
    bt2.textContent = "Done Reading";
    bt2.className = "D-btn";
    bt2.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(bt2);

    work.value = '';
    }
});
btn2.addEventListener("click", () => {
    ul.innerText = '';
});




