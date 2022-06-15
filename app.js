
// Self Made

// const age_form = document.getElementById('age_form');
// const msg = document.querySelector('.msg');
// const msgfooter = document.querySelector('.msgfooter');

// age_form.onsubmit = (event) =>{

//     event.preventDefault();

//     let name = age_form.querySelector('input[name = "name"]');
//     let age = age_form.querySelector('input[name = "age"]');
//     let gender = age_form.querySelectorAll('input[name ="gender"]');


//     let gender_name = '';
//     gender.forEach(item =>{
        
//         if(item.checked){
//             gender_name = item.value; 
//         }
//     });

//     // console.log(gender_name);


//     if(name.value == '' || age.value == '' || gender_name == ''){
        
//         msg.innerHTML = setAlert('Data is not valid');

//     }else if(namecheck(name.value) == false){

//         msg.innerHTML = setAlert('Your Name is not correct');

//     }else if (agecheck(age.value) == false){

//         msg.innerHTML = setAlert('Your Age is not correct');

//     } else{

//         msgfooter.innerHTML= marriagecheck(name.value,age.value,gender_name);

//         msg.innerHTML = setAlert('Data Successfully valid', 'success');
//     }




// }


// Corrency converter


// const currency_form = document.getElementById('currency_form');
// const msg = document.querySelector('.msg');
// const msgfooter = document.querySelector('.msgfooter');

// currency_form.onsubmit = (c)=>{
//     c.preventDefault();


//     let amount = currency_form.querySelector('input[name ="amount"]');
//     let currency = currency_form.querySelector('select[name = "currency"]');


//     if( amount.value == '' || currency.value == ''){
//         msg.innerHTML = setAlert('bowani hoise na tik tak');
//     }else{
//         msg.innerHTML = setAlert('ostir hoise sob tik tak!', 'success');

//         let rate = 0;

//         switch(currency.value){

//             case 'USD' :
//             rate = 89;
//             break;

//             case 'cad' :
//             rate = 70;
//             break;
//             case 'euro' :
//             rate = 89;
//             break;
//             case 'pound' :
//             rate = 111;
//             break;
//             case 'rupee' :
//             rate = 2;
//             break;

//         }

//         msgfooter.innerHTML = setAlert(` ${amount.value} ${currency.value} = ${amount.value*rate} BDT`, 'success');


//     }

// }

const area_type = document.getElementById('area_type');
const rac = document.querySelector('.rac');
const cir = document.querySelector('.cir');
const tri = document.querySelector('.tri');
const squ = document.querySelector('.squ');
const msgfooter = document.querySelector('.msgfooter');

area_type.onchange = (p) =>{
    p.preventDefault();


    if( area_type.value == 'Circle'){
        cir.style.display = 'block';
    }else{
        cir.style.display = '';
    }

    if( area_type.value == 'Square'){
        squ.style.display = 'block';
    }else{
        squ.style.display = '';
    }

    if( area_type.value == 'Reactangle'){
        rac.style.display = 'block';
    }else{
        rac.style.display = '';
    }

    if( area_type.value == 'Triangle'){
        tri.style.display = 'block';
    }else{
        tri.style.display = '';
    }


}

//********** Form Submit ********* //

const area_form = document.getElementById('area_form');

area_form.onsubmit = (tt) =>{

    tt.preventDefault();

    if(area_type.value == 'Reactangle'){

        let lenth = area_form.querySelector('input[name = "lenth"]').value;
        let width = area_form.querySelector('input[name = "width"]').value;

        msgfooter.innerHTML = areacal(area_type.value, lenth, width);

    }else if ( area_type.value == 'Triangle'){

        let base = area_form.querySelector('input[name = "base"]').value;
        let height = area_form.querySelector('input[name = "height"]').value;

        msgfooter.innerHTML = areacal(area_type.value, base, height);

    }else if ( area_type.value == 'Square'){

        let bahu = area_form.querySelector('input[name = "bahu"]').value;

        msgfooter.innerHTML = areacal(area_type.value, bahu);

    }else if ( area_type.value == 'Circle'){

        let red = area_form.querySelector('input[name = "red"]').value;

        msgfooter.innerHTML = areacal(area_type.value, red);

    }

}