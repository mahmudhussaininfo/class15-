/**
 * Alert Function
 */

const setAlert = (msg, color = 'danger') =>{
    
    return `<p class ="alert alert-${color} d-flex justify-content-between">${msg} <button data-bs-dismiss ="alert" class = "btn-close"></button></p>`;
}

/**
 * Name Check
 */

const namecheck = (namee)=>{
    let namepattern = /^[A-Za-z ]{3,20}$/;
    return namepattern.test(namee);
} 

/**
 * Age Check
 */

const agecheck = (age) =>{
    let agepattern = /^[0-9]{1,3}$/;
    return agepattern.test(age);
}


const marriagecheck = (name,age,gender) =>{
    
    if(gender == 'male'){


        let marriage_age = 21;

        if( age >= marriage_age){
            return setAlert (`Hello ${name} Bro, Congretulation Your marriage is coming soon`, 'success');
        }else{
            return setAlert (`Hello ${name} Babu, Sorry! You are not ready to marriage, please wait for ${marriage_age - age} Years`);
        }
    }else{
        let marriage_age = 18;

        if( age>= marriage_age){
            return setAlert (`Hello ${name} Apu, Congretulation Your marriage is coming soon`, 'success');
        }else{
            return setAlert (`Hello ${name} shuna Babu, Sorry! You are not ready to marriage, please wait for ${marriage_age - age} Years`);
        }
    }
}