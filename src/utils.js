

function FormatDatesForFrontEnd(input) {



 // change for where minutes or hours or days are less than 10


 const dateStamp = new Date(input);
 const minutes = dateStamp.getMinutes();
 const hours = dateStamp.getHours();
 const date = dateStamp.getDate();
 const year = dateStamp.getFullYear();
 const month = dateStamp.getMonth();
 let formattedHours = '';
 let formattedMinutes = '';
 let formattedDate = '';
 let formattedMonth = '';

 if (hours < 10) { formattedHours = "0" + hours } else {

  formattedHours = hours;

 }


 if (minutes < 10) { formattedMinutes = '0' + minutes } else {

  formattedMinutes = minutes;
 }


 if (date < 10) {
  formattedDate = '0' + date
 } else { formattedDate = date }


 if (month < 10) { formattedMonth = '0' + month } else { formattedMonth = month };


 const formattedCopyObj =
  formattedHours + "." + formattedMinutes + " on " + formattedDate + "/" + formattedMonth + "/" + year;

 console.log(formattedCopyObj);
 return formattedCopyObj;

}

export default FormatDatesForFrontEnd;