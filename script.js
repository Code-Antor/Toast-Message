let btn = document.querySelectorAll('.btn');
let main = document.querySelector('.main');


function toastMsgGenerate(){
    let div = document.createElement('div');
    div.classList.add('toastMsg');
    let p = document.createElement('p');
    p.innerHTML = 'Success';
    div.appendChild(p);
    main.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000)}

btn.forEach(addEventListener('click',function(){
    toastMsgGenerate();
}))
