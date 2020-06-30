let months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
};

let months_array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getHour = (hh) => {
    
    let hour;
    
    if (hh == 12 || hh == 0) {
        hour = 12;
    } else if (hh < 12 && hh != 0) {
        hour = hh;
    } else {
        hour = hh-12;
    } 
    return hour;
}

export const getMeridian = (hh) => {
    
    let meridian;

    if (hh < 12) {
        meridian = 'AM';
    } else if (hh >= 12) {
        meridian = 'PM';
    } 
    return meridian;
}

export const currentDate = (timestamp, return_type) => {
    let d = new Date(timestamp*1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ss = d.getSeconds();
        
    let meridian = getMeridian(hh);
    let month = months[mm];
    let result;
    
    if (return_type == "dob") {
        result  = yyyy+ '-' + mm + '-' + dd;
    } else if (return_type == "date_only") {
        result  = month + ' ' + dd + ', ' + yyyy;
    } else if (return_type == "date_time") {
        result  = month + ' ' + dd + ', ' + yyyy + ' ' + h + ':' + min + ':' + ss +' ' + meridian;
    } else {
        result  = month + ' ' + dd + ', ' + yyyy + ' ' + h + ':' + min + ':' + ss +' ' + meridian;
    }

    return result;
}

export const toFullDate = date => {
    const convertedDate = date.split(" ");
    const time = convertedDate[1];
    const convertedTime = time.split(":");
    return convertedTime[0];
}

