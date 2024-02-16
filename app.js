const allButton = document.getElementsByClassName('add-btn');
let count = 0;
// console.log(allButton);
for ( let btn of allButton){
    btn.addEventListener('click',function(){
        // console.log('Button clicked ok');
        count ++;
        SetInnerText('cart-count',count);
        const placeName = event.target.parentNode.childNodes[1].innerText ;
        const productPrice = event.target.parentNode.childNodes[3].childNodes[1].innerText ;
        // console.log(placeName,productPrice);
        const containerElement = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p2');
        p2.innerText = productPrice; 
        li.appendChild(p);
        li.appendChild(p2);
        containerElement.appendChild(li);

        // total price element cash and show total amount 
        const convertPrice = parseInt(productPrice);
        // console.log(convertPrice);
        const totalCost = document.getElementById('total-cost').innerText;
        // console.log(totalCost);
        const converTotalCost = parseInt(totalCost);
        // console.log(converTotalCost);
        document.getElementById('total-cost').innerText = converTotalCost + convertPrice;
    })
}
// SetInnerText('travel','')
