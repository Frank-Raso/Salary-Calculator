const employees = [];


let budget = 20000;
let inputType = true;
$(document).ready(readyNow);
function readyNow(){
$('#subIn').on('click',addEm)
$('#eTable').on('click','.dButton', deleteEmp,)


}
function addEm(){

    let newEmp = {
        First:       $('#firstIn').val(),
        Last:        $('#lastIn').val(),
        ID:          $('#idIn').val(),
        Title:       $('#titleIn').val(),
        aSal:        $('#aSalIn').val(),
        };

    if(
           newEmp.First === '' 
        || newEmp.Last  === '' 
        || newEmp.ID    === '' 
        || newEmp.Title === '' 
        || newEmp.aSal  === ''

        ) {

            inputType = false;
            console.log(inputType);
            alert('One or more fields are not completed');

            }
             else{
                    inputType = true;
                    console.log(`in addEm`);
                    employees.push(newEmp)
                    console.log(newEmp);
                    console.log(employees);


                    $('#firstIn').val(''),
                    $('#lastIn').val(''),
                    $('#idIn').val(''),
                    $('#titleIn').val(''),
                    $('#aSalIn').val('')

                    let el=$('#eTable');
             


                 el.append(`<tr><td>${newEmp.First}</td>
                                <td>${newEmp.Last}</td>
                                <td>${newEmp.ID}</td>
                                <td>${newEmp.Title}</td>
                                <td>${newEmp.aSal}</td>
                                <td><button class="dButton">Delete</button></td>  
                                </tr>`);
                    }
                                calcValue()
             }
function calcValue(){
    monex=0
    anex=0
    let el= $('#monthOut')
    for(let i=0; i<employees.length; i++){
        monex += Number(employees[i].aSal) / 12;
        anex +=  Number(employees[i].aSal)

    el.empty()
    el.append(`<ul>Monthly Total: $${monex.toFixed(2)} </ul>`);
}
console.log(`Annual expenditure is: $${anex.toFixed(2)}`)
    if (monex >budget){
            el.css('background-color', 'red');
    }else if
        (monex===budget){
            el.css('background-color','yellow');
    }else if
        (monex<budget){
            el.css('background-color','green');
    }
}
 function deleteEmp(){
    console.log('IN Delete')
    $(this).closest('tr').remove();
    calcValue()



}






// function onInputType(){
//     if (inputType = false){
//         console.log(`Create a false input function.`)
//     }else{console.log(`Create a true input function.`)
// }
// }
