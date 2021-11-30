function takeinput(){
// Total and Date

var totalAmount = document.querySelector('span').innerHTML;
console.log(totalAmount);

var date = document.querySelector('#date').value;
console.log(date);

// Cow Price

var cowQty = document.querySelector('#cow').value;
console.log(cowQty);

var cowPrice = document.querySelector('#cowPrice').value;
console.log(cowPrice);

// Buffalo price

var buffaloQty = document.querySelector('#buffalo').value;
console.log(buffaloQty);

var buffaloPrice = document.querySelector('#buffaloPrice').value;
console.log(buffaloPrice);

cowPrice =  cowPrice * cowQty;
console.log(cowPrice);

buffaloPrice = buffaloPrice * buffaloQty;
console.log(buffaloPrice);

var total = cowPrice+buffaloPrice;
console.log(total);

}