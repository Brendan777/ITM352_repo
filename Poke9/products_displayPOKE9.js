// products_display.js

// Declare store name and push to the DOM
const store_name = "Brendan";
document.getElementById('top_title').innerHTML = store_name + "'s Used Smart Phone Store";
document.getElementById('bottom_title').innerHTML = store_name + "'s Used Smart Phone Store";

// Initialize counters
let hits = 0;
let spins = 0;
let over_half = false;

// Update counters in the DOM
document.getElementById('hits_span').innerHTML = hits; 
document.getElementById('spins_span').innerHTML = spins;

// Define the products directly within an array
let products = [
    { brand: "HTC", price: 40.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg" },
    { brand: "Apple", price: 75.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg" },
    { brand: "Nokia", price: 35.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg" },
    { brand: "Samsung", price: 45.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg" },
    { brand: "Blackberry", price: 10.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg" }
];

// Select the main section to populate
let mainSection = document.querySelector('.main');
mainSection.innerHTML = ''; // Clear the current content

// Create product display using the array of objects
for (let product of products) {
    mainSection.innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${product.brand}</h2>
        <p>${product.price}</p>
        <img src="${product.image}" />
    </section>
    `;
}

// Function to change class name and handle the spin logic
function changeClassName(element) {
    if (element.className == 'item') {
        spins++;
        element.className = 'item rotate';
    }

    updateGameProgress(); // Update game progress and UI
}

// Function to reset class name and handle the hits logic
function resetClassName(element) {
    if (element.className == 'item rotate') {
        hits += 2;
        element.className = 'item';
    } else {
        changeClassName(element);
    }

    updateGameProgress(); // Update game progress and UI
}

// Function to update game progress and display
function updateGameProgress() {
    let win_span = document.getElementById('win_span');
    let hits_span = document.getElementById('hits_span');
    let spins_span = document.getElementById('spins_span');
    let hit_spin_span = document.getElementById('hit_spin_span');

    // Check the game status
    if (spins < 2 * hits && hits < spins) {
        over_half = true;
    } else {
        over_half = false;
    }

    // Update the display
    win_span.innerHTML = over_half ? 'True' : 'False'; // or any other appropriate messages
    hits_span.innerHTML = hits;
    spins_span.innerHTML = spins;
    hit_spin_span.innerHTML = Number(hits / spins).toFixed(2);

    // Determine the winning progress based on hits/spins ratio
    let progress = 'Get going!';
    let hits_spins_ratio = hits / spins;

    if (hits_spins_ratio >= 0.5 && hits < spins) {
        progress = 'You win!';
    } else if (hits_spins_ratio >= 0.25) {
        progress = 'Almost there!';
    } else if (hits_spins_ratio > 0) {
        progress = 'On your way!';
    }

    win_span.innerHTML = progress;
}

// Initial call to ensure everything is set correctly on page load
updateGameProgress();
