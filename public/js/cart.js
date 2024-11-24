
const payBtn=document.querySelectorAll('.b-tex');
payBt.addEventListener('click',()=>{
    fetch('/stripe-checkout',{
        method:'post',
        headers:new headers({'Content-Type':'application/JSON'}),
        body:JSON.stringify({
            items:JSON.parse(localStorage.getItem('cardItem')),
        }),
       
    })
    .then((res)=>res.json())
    .then((url)=>{
        location.href=url;

    })
    .catch((err)=>console.log(err) );
});