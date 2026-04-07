/* ── DATA ── */
const attractions = [
  { id: 1,  name: "Cathedral of the Assumption",  category: "Historical Spots",    description: "One of Bulgaria's largest cathedrals, consecrated in 1886. Its soaring neo-Byzantine domes dominate the Varna skyline and the interior is covered in spectacular frescoes and golden iconostases.", city: "Varna", lat: 43.2047, lng: 27.9100, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Varna_-_Cathedral_%281%29.jpg/800px-Varna_-_Cathedral_%281%29.jpg" },
  { id: 2,  name: "Sea Garden",                   category: "Scenic Places",       description: "An 80‑hectare coastal park along the Black Sea established in the 1880s. Home to the Dolphinarium, Summer Theatre, Naval Museum, and miles of beautiful seaside walkways.", city: "Varna", lat: 43.2045, lng: 27.9222, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Varna_sea_garden.jpg/1280px-Varna_sea_garden.jpg" },
  { id: 3,  name: "Archaeological Museum",         category: "Historical Spots",    description: "Houses the world's oldest processed gold treasure — the Varna Chalcolithic Necropolis collection, dating to 4600–4200 BC. An essential visit for anyone interested in ancient history.", city: "Varna", lat: 43.2074, lng: 27.9149, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Varna_Archaeological_Museum.jpg/800px-Varna_Archaeological_Museum.jpg" },
  { id: 4,  name: "Roman Thermae",                category: "Historical Spots",    description: "The largest ancient Roman baths on the Balkan Peninsula, built in the 2nd–3rd century AD. The ruins cover 7,000 sq metres and still stand nearly 20 metres high in places.", city: "Varna", lat: 43.2003, lng: 27.9175, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Roman_Thermae_-_Varna_-_panoramio.jpg/800px-Roman_Thermae_-_Varna_-_panoramio.jpg" },
  { id: 5,  name: "Euxinograd Palace",            category: "Romantic Places",     description: "A stunning Bulgarian royal residence set in a large park on the Black Sea coast, built in 1882. Famous for its French‑style gardens and award‑winning estate winery.", city: "Varna", lat: 43.2192, lng: 27.9892, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evksinograd_2.jpg/800px-Evksinograd_2.jpg" },
  { id: 6,  name: "Varna Dolphinarium",           category: "Scenic Places",       description: "The oldest and largest dolphinarium in Bulgaria, open since 1984. Located in the Sea Garden, it hosts daily dolphin and seal performances in a spectacular Black Sea setting.", city: "Varna", lat: 43.2120, lng: 27.9472, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Varna_Dolphinarium_exterior.jpg/800px-Varna_Dolphinarium_exterior.jpg" },
  { id: 7,  name: "Varna Farmers Market",         category: "Local Food & Drinks", description: "A vibrant daily open‑air market in the heart of the city where local producers sell seasonal vegetables, artisan cheeses, honey, dried herbs, and traditional Bulgarian crafts.", city: "Varna", lat: 43.2065, lng: 27.9056, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Varna_Central_Market.jpg/800px-Varna_Central_Market.jpg" },
  { id: 8,  name: "Aladzha Monastery",            category: "Historical Spots",    description: "A medieval Orthodox cave monastery in the forest near Varna, with serene surroundings and historical significance.", city: "Varna", lat: 43.2778, lng: 28.0164, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aladzha_monastery.jpg/800px-Aladzha_monastery.jpg" },
  { id: 9,  name: "Butterfly House Varna",        category: "Hidden Gems",         description: "A special museum with live butterflies in a beautiful garden. Quiet and colorful, perfect for families and photography.", city: "Varna", lat: 43.2327, lng: 28.0068, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Butterfly_House_Varna.jpg/800px-Butterfly_House_Varna.jpg" },
  { id: 10, name: "Retro Museum Varna",           category: "Hidden Gems",         description: "A small museum showcasing retro cars, motorcycles, and 20th-century memorabilia. Off the standard tourist track.", city: "Varna", lat: 43.2163, lng: 27.9048, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Retro_Museum_Varna.jpg/800px-Retro_Museum_Varna.jpg" },
  { id: 11, name: "Sea Casino Varna",             category: "Romantic Places",     description: "Historic building in the Sea Garden hosting exhibitions, concerts, and cultural events. Offers a great view of the sea.", city: "Varna", lat: 43.2019, lng: 27.9238, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Varna_Sea_Casino.jpg/800px-Varna_Sea_Casino.jpg" },
  { id: 12, name: "Asparuhov Park & Bridge",      category: "Scenic Places",       description: "A scenic park and bridge offering panoramic views and peaceful walking trails, away from the main tourist crowds.", city: "Varna", lat: 43.1852, lng: 27.8841, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Asparuhov_Bridge_Varna.jpg/800px-Asparuhov_Bridge_Varna.jpg" },
  { id: 13, name: "Varna Zoo",                   category: "Scenic Places",       description: "The central zoo of Varna – classic and well-known, located in the Sea Garden.", city: "Varna", lat: 43.2147, lng: 27.9353, image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Varna_Zoo.jpg" },
  { id: 14, name: "Talyana Art District",         category: "Hidden Gems",         description: "Street alley with graffiti and art installations in the historic center.", city: "Varna", lat: 43.2015, lng: 27.9150, image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Street_Art_Varna.jpg" },
  { id: 15, name: "Small Roman Thermae",          category: "Historical Spots",    description: "Small archaeological ruins of the Roman forum, a quiet spot in the Greek Quarter.", city: "Varna", lat: 43.2014, lng: 27.9201, image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Varna_Roman_Forum.jpg" },
  { id: 16, name: "St. Nicholas Church",          category: "Historical Spots",    description: "Beautiful Orthodox church near the pedestrian zone with a peaceful atmosphere.", city: "Varna", lat: 43.2025, lng: 27.9189, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/St_Nicholas_Varna.jpg" },
  { id: 17, name: "Naval Museum Yard",            category: "Hidden Gems",         description: "Outdoor part of the Naval Museum featuring the Drazki ship and helicopters.", city: "Varna", lat: 43.2008, lng: 27.9221, image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Maritime_Museum_Varna.jpg" },
  { id: 18, name: "Sea Garden Alpinarium",        category: "Scenic Places",       description: "Hidden rocky garden with bridges, ideal for a peaceful walk.", city: "Varna", lat: 43.2085, lng: 27.9302, image: "https://upload.wikimedia.org" },
  { id: 19, name: "Varna State Archives",         category: "Historical Spots",    description: "Stunning historic building, a masterpiece of early 20th-century architecture.", city: "Varna", lat: 43.2038, lng: 27.9125, image: "https://upload.wikimedia.org" },
  { id: 20, name: "Underground Basilica Ruins",   category: "Historical Spots",    description: "Ancient basilica remains located below the modern street level.", city: "Varna", lat: 43.2018, lng: 27.9180, image: "https://upload.wikimedia.org" },
  { id: 21, name: "The Dragon Sculpture",         category: "Romantic Places",     description: "Bronze sculpture of two dragons, a famous local hidden spot near the sea.", city: "Varna", lat: 43.2005, lng: 27.9228, image: "https://upload.wikimedia.org" },
  { id: 22, name: "City Art Gallery",             category: "Hidden Gems",         description: "The Boris Georgiev gallery, set in a historic Gothic-style building.", city: "Varna", lat: 43.2068, lng: 27.9172, image: "https://upload.wikimedia.org" },
  { id: 23, name: "The Re-Born Tree",             category: "Hidden Gems",         description: "Artistic wood carving on a dead tree trunk, a unique sight in the park.", city: "Varna", lat: 43.2062, lng: 27.9268, image: "https://upload.wikimedia.org" },
  { id: 24, name: "Officer's Beach Viewpoint",    category: "Romantic Places",     description: "Panoramic terrace with an incredible view of the sea bay.", city: "Varna", lat: 43.2162, lng: 27.9405, image: "https://upload.wikimedia.org" },
  { id: 25, name: "Eco Park Varna",               category: "Scenic Places",       description: "University Botanical Garden – a vast park perfect for a nature escape.", city: "Varna", lat: 43.2325, lng: 28.0018, image: "https://upload.wikimedia.org" }
];
/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');

  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  window.scrollTo(0, 0);

  if (page === 'explore') renderExplore();
  if (page === 'map') initMap();

  window.location.hash = page;
}

window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '') || 'home';
  if (['home', 'explore', 'map', 'blog', 'create'].includes(h)) {
    navigate(h);
  }
});

/* ── EXPLORE ── */
function setDirFilter(f) {
  dirFilter = f;

  document.querySelectorAll('#page-explore .pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === f);
  });

  renderExplore();
}

function goToPlace(id) {
  navigate('map');
  setTimeout(() => selectPlace(id), 300);
}

function renderExplore() {
  const q = (document.getElementById('dir-search-input')?.value || '').toLowerCase();

  const filtered = attractions.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);

    return matchCat && matchQ;
  });

  const grid = document.getElementById('dir-grid');

  if (!filtered.length) {
    grid.innerHTML = `<div class="dir-empty">No places found.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const catClass = p.category.toLowerCase().replace(/[^a-z0-9]/g, '-');

    const image =
      p.image && p.image.startsWith('http')
        ? p.image
        : 'https://via.placeholder.com/800x600';

    return `
    <div class="place-card" onclick="goToPlace(${p.id})">
      <div class="place-card-img" style="background-image: url('${image}')"></div>

      <div class="place-card-header">
        <div>
          <span class="place-card-cat ${catClass}">${p.category}</span>
          <div class="place-card-name">${p.name}</div>
        </div>
        <span class="place-card-number">${String(i + 1).padStart(2, '0')}</span>
      </div>

      <div class="place-card-body">
        <p class="place-card-desc">${p.description}</p>
        <div class="place-card-footer">${p.city}, Bulgaria</div>
      </div>
    </div>`;
  }).join('');
}

/* ── MAP ── */
function getMarkerColor(cat) {
  switch (cat) {
    case 'Historical Spots': return '#c9a84c';
    case 'Scenic Places': return '#5dcaa5';
    case 'Romantic Places': return '#e07a55';
    case 'Hidden Gems': return '#b0a8e8';
    case 'Local Food & Drinks': return '#f4a261';
    default: return '#999';
  }
}

function createMarkerIcon(cat) {
  const color = getMarkerColor(cat);

  return L.divIcon({
    html: `<svg width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6 0 0 6 0 14c0 10 14 22 14 22s14-12 14-22C28 6 22 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="14" r="5" fill="white"/>
    </svg>`,
    className: '',
    iconSize: [28, 36],
    iconAnchor: [14, 36]
  });
}

function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;

  setTimeout(() => {
    leafletMap = L.map('leaflet-map').setView([43.2141, 27.9212], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(leafletMap);

    attractions.forEach(p => {
      const marker = L.marker([p.lat, p.lng], {
        icon: createMarkerIcon(p.category)
      })
        .addTo(leafletMap)
        .bindPopup(`<b>${p.name}</b><br>${p.category}`)
        .on('click', () => highlightSidebarItem(p.id));

      mapMarkers.push({ id: p.id, marker, place: p });
    });

    renderMapList();
  }, 200);
}

function renderMapList(list) {
  const data = list || attractions;
  const container = document.getElementById('map-places-list');

  container.innerHTML = data.map(p => {
    const dotClass = p.category.toLowerCase().replace(/[^a-z0-9]/g, '-');

    return `
    <div class="map-place-item ${selectedPlaceId === p.id ? 'selected' : ''}"
         id="map-item-${p.id}"
         onclick="selectPlace(${p.id})">

      <div class="map-place-dot ${dotClass}"></div>

      <div>
        <div>${p.name}</div>
        <div>${p.category}</div>
      </div>
    </div>`;
  }).join('');
}

function selectPlace(id) {
  const p = attractions.find(x => x.id === id);
  if (!p) return;

  selectedPlaceId = id;

  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16);
    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }

  highlightSidebarItem(id);
}

function highlightSidebarItem(id) {
  document.querySelectorAll('.map-place-item')
    .forEach(el => el.classList.remove('selected'));

  const el = document.getElementById('map-item-' + id);
  if (el) el.classList.add('selected');
}

/* ── PLAN ── */
let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set();

function generatePlan() {
  if (!planInterests.size) {
    alert("Select at least one interest");
    return;
  }

  const interestMap = {
    history: ['Historical Spots'],
    romantic: ['Romantic Places'],
    scenic: ['Scenic Places'],
    food: ['Local Food & Drinks'],
    hidden: ['Hidden Gems']
  };

  let filtered = attractions.filter(p =>
    [...planInterests].some(key =>
      interestMap[key]?.includes(p.category)
    )
  );

  filtered = filtered.sort(() => Math.random() - 0.5);

  const plan = Array.from({ length: planDays }, () => []);

  filtered.forEach((place, i) => {
    plan[i % planDays].push(place);
  });

  const container = document.getElementById('plan-results');

  container.innerHTML = plan.map((day, i) => `
    <div>
      <h3>Day ${i + 1}</h3>
      <ul>
        ${day.map(p => `<li>${p.name}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
