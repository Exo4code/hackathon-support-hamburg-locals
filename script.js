// Shop data from Hamburg with real coordinates
const shops = [
    {
        id: 1,
        name: "Erika's Eck",
        location: "Schanze",
        emoji: "🍴",
        teaser: "Kult-Imbiss mit Riesen-Schnitzel",
        description: "Kult-Imbiss, offen bis in die frühen Morgenstunden. Bekannt für Riesen-Schnitzel, Bauernfrühstück & Nachtschwärmer.",
        coordinates: [53.5611, 9.9627], // Sternschanze area
        address: "Susannenstraße, Hamburg"
    },
    {
        id: 2,
        name: "Imbiss bei Schorsch",
        location: "St. Pauli",
        emoji: "🌭",
        teaser: "Legendäre Currywurst seit Jahrzehnten",
        description: "Legendäre Currywurst mit Kartoffelsalat statt Pommes. Seit Jahrzehnten fester Bestandteil von St. Pauli.",
        coordinates: [53.5503, 9.9601], // St. Pauli area
        address: "Davidstraße, Hamburg"
    },
    {
        id: 3,
        name: "Bäckerei & Konditorei Rohlfs",
        location: "Eppendorf",
        emoji: "🥐",
        teaser: "Traditionsbäckerei mit Franzbrötchen",
        description: "Traditionsbäckerei, familiengeführt seit Generationen. Bekannt für Franzbrötchen & Kuchenklassiker.",
        coordinates: [53.5903, 9.9919], // Eppendorf area
        address: "Eppendorfer Landstraße, Hamburg"
    },
    {
        id: 4,
        name: "Kleines Phi",
        location: "Neustadt",
        emoji: "🍺",
        teaser: "Kult-Kneipe mit Wohnzimmer-Flair",
        description: "Kult-Kneipe/Bar mit Wohnzimmer-Flair. Treffpunkt für Nachbarn, Musiker & Szenegänger.",
        coordinates: [53.5511, 9.9937], // Neustadt area
        address: "Großneumarkt, Hamburg"
    },
    {
        id: 5,
        name: "Café Gnosa",
        location: "St. Georg",
        emoji: "☕",
        teaser: "Traditionscafé seit über 100 Jahren",
        description: "Traditionscafé seit über 100 Jahren. Heute Treffpunkt der LGBTQ-Community und für alle, die Kuchen & Kultur lieben.",
        coordinates: [53.5530, 10.0062], // St. Georg area
        address: "Lange Reihe, Hamburg"
    },
    {
        id: 6,
        name: "Plattenkiste",
        location: "Eimsbüttel",
        emoji: "🎵",
        teaser: "Kult-Adresse für Musikliebhaber",
        description: "Eine Kult-Adresse für Musikliebhaber mit ausgewählten LPs, CDs und musikalischer Beratung direkt in Eimsbüttel.",
        coordinates: [53.5758, 9.9568], // Eimsbüttel area
        address: "Eimsbüttel, Hamburg"
    },
    {
        id: 7,
        name: "Buchhandlung im Schanzenviertel",
        location: "Schanze",
        emoji: "📚",
        teaser: "Frauen-geführte LGBTQ+ friendly Buchhandlung",
        description: "Stöbern in unabhängigen Büchern, Frauen-geführte Buchhandlung und LGBTQ+ friendly – ideal für besondere Literatur abseits des Mainstreams.",
        coordinates: [53.5633, 9.9597], // Schanzenviertel area
        address: "Schanzenviertel, Hamburg"
    },
    {
        id: 8,
        name: "Hafen-Spezerei",
        location: "HafenCity",
        emoji: "🧂",
        teaser: "Feinkost und Spezialitäten aus Hamburg",
        description: "Feinkost, Gewürze und Spezialitäten aus Hamburg in der HafenCity – der Shop ist Treffpunkt für Genießer und eine echte Entdeckung.",
        coordinates: [53.5406, 9.9952], // HafenCity area
        address: "HafenCity, Hamburg"
    },
    {
        id: 9,
        name: "Michelle Records",
        location: "Zentrum",
        emoji: "💿",
        teaser: "Vinyl und CDs seit 1977",
        description: "Seit 1977 eine feste Größe für Vinyl und CDs im Hamburger Zentrum, oft mit Live-Konzerten und legendärem Sortiment.",
        coordinates: [53.5511, 9.9937], // Hamburg Zentrum
        address: "Hamburg Zentrum"
    },
    {
        id: 10,
        name: "Bäckerei Wiedenroth",
        location: "Ottensen",
        emoji: "🥐",
        teaser: "Traditionsbäckerei mit Franzbrötchen",
        description: "Traditionsbäckerei in Ottensen mit sehr guter Bewertung – beliebt für Franzbrötchen und klassisches Hamburger Backhandwerk.",
        coordinates: [53.5492, 9.9357], // Ottensen area
        address: "Ottensen, Hamburg"
    },
    {
        id: 11,
        name: "Nostalgie-Shop",
        location: "Zentrum",
        emoji: "🎩",
        teaser: "Mode, Lederwaren und Hutkultur",
        description: "Authentisch und einzigartig: Der Shop vereint Mode, Lederwaren und Hutkultur – ein echtes Hamburger Unikat.",
        coordinates: [53.5511, 9.9937], // Hamburg Zentrum
        address: "Hamburg Zentrum"
    },
    {
        id: 12,
        name: "Stockholm Coffee Roasters",
        location: "Zentrum",
        emoji: "☕",
        teaser: "Ausgezeichneter Kaffee und gemütliches Ambiente",
        description: "Spezialitäten-Café, das für ausgezeichneten Kaffee und gemütliches Ambiente bekannt ist – ein Treffpunkt für Kaffeefans.",
        coordinates: [53.5511, 9.9937], // Hamburg Zentrum
        address: "Hamburg Zentrum"
    },
    {
        id: 13,
        name: "HANSEPLATTE",
        location: "Zentrum",
        emoji: "🎵",
        teaser: "Hamburger Institution für Musik und mehr",
        description: "Nicht nur Plattenladen – HANSEPLATTE ist die Hamburger Institution für Musik, Bücher und Souvenirs mit Stadt-Soul.",
        coordinates: [53.5511, 9.9937], // Hamburg Zentrum
        address: "Hamburg Zentrum"
    },
    {
        id: 14,
        name: "Blumenhaus Tulpenstengel",
        location: "Altona",
        emoji: "🌸",
        teaser: "Nachhaltige und kreative Sträuße",
        description: "Dieser Kult-Blumenladen punktet mit nachhaltigen und kreativen Sträußen – beliebt in Altona und Umgebung.",
        coordinates: [53.5488, 9.9355], // Altona area
        address: "Altona, Hamburg"
    },
    {
        id: 15,
        name: "Selekta Reggae Record Shop",
        location: "Sternschanze",
        emoji: "🎵",
        teaser: "Einzigartiger Reggae-Plattenladen",
        description: "Einzigartiger Reggae-Plattenladen im Sternschanzenviertel, Anlaufstelle für Fans der urbanen Musikszene.",
        coordinates: [53.5611, 9.9627], // Sternschanze area
        address: "Sternschanzenviertel, Hamburg"
    }
];

let map = null;
let markers = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    initializeMap();
    renderShops();
});

// Initialize the map
function initializeMap() {
    // Center map on Hamburg
    map = L.map('map').setView([53.5511, 9.9937], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for all shops
    shops.forEach(shop => {
        addShopMarker(shop);
    });
}

// Add circular marker for shop
function addShopMarker(shop) {
    // Create custom circular marker
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = shop.emoji;
    markerElement.style.width = '50px';
    markerElement.style.height = '50px';
    markerElement.style.backgroundColor = getShopColor(shop.id);

    // Create Leaflet marker with custom icon
    const customIcon = L.divIcon({
        html: markerElement.outerHTML,
        className: 'custom-div-icon',
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    });

    const marker = L.marker(shop.coordinates, { icon: customIcon })
        .addTo(map);

    // Add popup with shop info
    marker.bindPopup(`
        <div style="text-align: center; font-family: Arial, sans-serif;">
            <div style="font-size: 2rem; margin-bottom: 10px;">${shop.emoji}</div>
            <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">${shop.name}</div>
            <div style="color: #666; margin-bottom: 10px;">${shop.location}</div>
            <div style="color: #777; font-size: 0.9rem;">${shop.teaser}</div>
        </div>
    `);

    markers.push({ marker, shop });
}

// Get unique color for each shop
function getShopColor(shopId) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    return colors[(shopId - 1) % colors.length];
}

// Render all shop cards
function renderShops() {
    const wrapper = document.getElementById('slideshowWrapper');
    wrapper.innerHTML = '';

    shops.forEach((shop, index) => {
        const shopElement = createShopCard(shop, index);
        wrapper.appendChild(shopElement);
    });

    // Initialize icons after rendering
    lucide.createIcons();
}

// Create individual shop card
function createShopCard(shop, index) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';
    slideDiv.setAttribute('data-shop-id', shop.id);

    slideDiv.innerHTML = `
        <div class="shop-card" onclick="highlightMapMarker(${shop.id})">
            <div class="shop-card-content">
                <div class="shop-icon">${getShopIcon(shop.emoji)}</div>
                <div class="shop-info">
                    <div class="shop-name">${shop.name}</div>
                    <div class="shop-location">${shop.location}</div>
                    <div class="shop-teaser">${shop.teaser}</div>
                </div>
            </div>
        </div>
    `;

    return slideDiv;
}

// Get appropriate icon for shop type
function getShopIcon(emoji) {
    const iconMap = {
        '🍴': '<i data-lucide="utensils"></i>',
        '🌭': '<i data-lucide="sandwich"></i>',
        '🥐': '<i data-lucide="croissant"></i>',
        '🍺': '<i data-lucide="beer"></i>',
        '☕': '<i data-lucide="coffee"></i>',
        '🎵': '<i data-lucide="disc"></i>',
        '📚': '<i data-lucide="book-open"></i>',
        '🧂': '<i data-lucide="shopping-basket"></i>',
        '💿': '<i data-lucide="disc-3"></i>',
        '🎩': '<i data-lucide="shirt"></i>',
        '🌸': '<i data-lucide="flower"></i>'
    };
    return iconMap[emoji] || '<i data-lucide="store"></i>';
}

// Highlight map marker when shop card is clicked
function highlightMapMarker(shopId) {
    const markerData = markers.find(({ shop }) => shop.id === shopId);
    if (markerData) {
        // Open popup and gently pan to marker
        markerData.marker.openPopup();
        map.panTo(markerData.marker.getLatLng());

        // Minimal zoom adjustment - only zoom in slightly if needed
        const currentZoom = map.getZoom();
        if (currentZoom < 13) {
            map.setZoom(13);
        }
    }
}

// Make functions available globally
window.highlightMapMarker = highlightMapMarker;
