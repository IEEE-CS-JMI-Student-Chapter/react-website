import axios from "axios";

// function getTodayDate(){
//     const today = new Date()
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();

//     const date = yyyy + "-" + mm + "-" + dd

//     return date;
// }

async function getEvents(){
    const info = await axios.get('https://ieeecsbackend.herokuapp.com/events');  
    const today = new Date()
    const upcoming = []
    const previous = []
    info.data.forEach(data => {
        if(new Date(data.Date) >= today)
            upcoming.push(data)
        else
            previous.push(data)
    });

    return ({
        upcoming : upcoming,
        previous : previous
    })
}

export default getEvents;