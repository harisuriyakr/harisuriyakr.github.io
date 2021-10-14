window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const bglchn = "5000";
    const bglhyd = "700";
	document.getElementById('chennaibangalore').innerHTML = bglchn;
    document.getElementById('bengaluruhyderbad').innerHTML = bglhyd;
    

})