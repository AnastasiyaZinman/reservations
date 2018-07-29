var reservations = {
   Bob: { claimed: false },
   Ted: { claimed: true }
 };

 var name;
 
 function searchForReservation(reservationName){
   for (var key in reservations) {
       if (reservationName === key) {
            return reservations[reservationName];
       }
   }  
   
   alert("I'm sorry, you do not have a reservation");
   return null;
 }

 function claimReservation(currReservation){
   if (currReservation.claimed === true) {
       alert("Your reservation was already claimed")
       return;
     }
     else {
       alert("Welcome!")
       return;
     }
 }

 function createReservation(reservationName){
   if (confirm("do you want to make one?")) {
       reservations[reservationName] = {claimed: true};
   }
   else {
       alert("See you next time!")
   }
 }

function reservations_Keys_ToUpperCase(array) { 
    var array_Up_Keys={};
    for (key in array) {
    new_key=key.toUpperCase();
    array_Up_Keys[new_key]= {claimed: array[key]["claimed"]} ;
    }
    return array_Up_Keys;
}

 var checkReservation = function (reservationName) {
    reservationName = reservationName.toUpperCase();  // Change reservationName to UpperCase mode 
    console.log(reservationName);
    reservations =  reservations_Keys_ToUpperCase(reservations);      // Change all keys to UpperCase mode 
    delete array_Up_Keys;
    console.log (reservations);
   let currReservation = searchForReservation(reservationName);
   
   if (currReservation){
       claimReservation(currReservation);
     }
     else{
       createReservation(reservationName);
   }
 }

 
 name = prompt('Please enter the name for your reservation');
 checkReservation(name);