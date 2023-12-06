// Check if localStorage has a 'visitorCount' item
if(localStorage.getItem('visitorCount')) {
    // If 'visitorCount' exists, get its value and increment it
    let count = parseInt(localStorage.getItem('visitorCount'));
    count++;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitorCount').innerText = count;
} else {
    // If 'visitorCount' doesn't exist, create it with value 1
    localStorage.setItem('visitorCount', 1);
    document.getElementById('visitorCount').innerText = 1;
}
