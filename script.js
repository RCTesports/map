// Initialize the map
var mymap = L.map('map', {
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
});

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Esports team data for Germany
var teamData = {
    'Germany': { members: 2, players: ['🇩🇪 RCT GG', '🇩🇪 RCT Skorpi'] },
    'Thailand': { members: 1, players: ['🇹🇭 RCT Kaiser'] },
    // Add more countries as needed
};

// Display team member counts directly on the map with white markers and red numbers
for (var country in teamData) {
    var latLng = getCountryLatLng(country);
    var number = teamData[country].members;
    var players = teamData[country].players;

    var marker = L.marker(latLng, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: '<div class="number">' + number + '</div>'
        })
    }).addTo(mymap);

    marker.bindPopup('<b>' + country + '</b><br>Team Members: ' + number + '<br><h3 style="font-size: 14px;">Players:</h3><ul style="list-style: none; padding: 0;">' + players.map(player => '<li>' + player + '</li>').join('') + '</ul>');
}

// Function to get LatLng coordinates for a specific country (you can expand this function with more countries)
function getCountryLatLng(country) {
    switch (country) {
        case 'Germany':
            return [51.16, 10.45];
        case 'Thailand':
            return [15.87, 100.99];
        // Add more cases for other countries
        default:
            return [0, 0]; // Default to center of the map
    }
}
