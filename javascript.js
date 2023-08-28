
const list = document.querySelector('ul');
//const events = getEventData();
//console.log(events);
render();

async function getEventData(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    // console.log(response);
    const jdata = await response.json();
    console.log(jdata.data);
    return jdata.data;
    //return data;
}

async function render(){
    events = await getEventData();
    const update = events.map(function(i){

        return `
        <h2>${i.name}</h2>
        <p>Date: ${i.date}</p>
        <p>Location: ${i.location}</p>
        <p>Description: ${i.description}</p>
        `;
    })

    list.innerHTML = update.join('');
}