

// const age_form = document.getElementById('age_form');
// const msg = document.querySelector('.msg');
// const msgfooter = document.querySelector('.msgfooter');


// age_form.onsubmit = (event) =>{

//     // form re bondo kore raka
//     event.preventDefault();

//     // sob input re dora
//     let name = age_form.querySelector('input[name ="name"]');
//     let age = age_form.querySelector('input[name ="age"]');
//     let gender = age_form.querySelectorAll('input[name ="gender"]');
    
//     let gender_name = '';

//     // gender dora dori
//     gender.forEach(type =>{

//         if(type.checked){
//             gender_name = type.value;
            
//         }
//     });

    

//     if (name.value == '' || age.value == '' || gender_name == ''){

//         msg.innerHTML = setAlert('tiktak moto bowaite oibo');
        
//     } else if( agecheck (age.value) == false ){

//         msg.innerHTML = setAlert('dur beta boyosh bowani hoise na', 'warning');

//     } else if(namecheck(name.value) == false){

//         msg.innerHTML = setAlert('duro name o hikse na abo', 'warning');


//     } else {
//         msg.innerHTML = setAlert('tik ase ostir hoise', 'success');

//         msgfooter.innerHTML = marriagecheck(name.value, age.value, gender_name);
        
//     }

    
// }


// Self Made

const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const msgfooter = document.querySelector('.msgfooter');

age_form.onsubmit = (event) =>{

    event.preventDefault();

    let name = age_form.querySelector('input[name = "name"]');
    let age = age_form.querySelector('input[name = "age"]');
    let gender = age_form.querySelectorAll('input[name ="gender"]');


    let gender_name = '';
    gender.forEach(item =>{
        
        if(item.checked){
            gender_name = item.value; 
        }
    });

    // console.log(gender_name);


    if(name.value == '' || age.value == '' || gender_name == ''){
        
        msg.innerHTML = setAlert('Data is not valid');

    }else if(namecheck(name.value) == false){

        msg.innerHTML = setAlert('Your Name is not correct');

    }else if (agecheck(age.value) == false){

        msg.innerHTML = setAlert('Your Age is not correct');

    } else{

        msgfooter.innerHTML= marriagecheck(name.value,age.value,gender_name);

        msg.innerHTML = setAlert('Data Successfully valid', 'success');
    }




}