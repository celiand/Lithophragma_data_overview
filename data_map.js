
  // Create map
  const map = L.map('map').setView([40, -110], 5);

  // Add OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  //map name
  const sequencingLabels = {
  diploid_BOL: "Diploid BOL",
  tetraploid_BOL: "Tetraploid BOL",
  hexaploid_BOL: "Hexaploid BOL"
};

  // data
  const populations = [
  {
    id: "ORE",
    name: "Oregon Creek",
    lat: 39.397,
    lon: -121.077,
    elevation: 507,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 10,
      tetraploid_BOL: 0
    }
  },

  {
    id: "HOP",
    name: "Hopland",
    lat: 39.000,
    lon: -123.074,
    elevation: 297,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "SAM",
    name: "South Fork American River",
    lat: 38.795,
    lon: -120.775,
    elevation: 405,

    site: {
      mothPresence: "POL",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

   {
    id: "ELE",
    name: "Electra",
    lat: 38.326,
    lon: -120.683,
    elevation: 236,

    site: {
      mothPresence: "POL+OBS",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "JMR",
    name: "Jesus Maria Road",
    lat: 38.286,
    lon: -120.659,
    elevation: 300,

    site: {
      mothPresence: "POL",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

   {
    id: "NHL",
    name: "New Hogan Lake",
    lat: 38.199,
    lon: -120.722,
    elevation: 227,

    site: {
      mothPresence: "POL+OBS",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "DOF",
    name: "Douglas Flat",
    lat: 38.110,
    lon: -120.481,
    elevation: 627,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "BEA",
    name: "Bear Creek",
    lat: 38.108,
    lon: -120.661,
    elevation: 321,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  
  {
    id: "SMC",
    name: "Sixmile Creek",
    lat: 38.096,
    lon: -120.504,
    elevation: 525,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  
  {
    id: "SNE",
    name: "Sneak Gulch",
    lat: 38.041,
    lon: -120.457,
    elevation: 329,

    site: {
      mothPresence: "NA",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

   
  {
    id: "BAM",
    name: "Bald Mountain",
    lat: 38.006,
    lon: -120.350,
    elevation: 836,

    site: {
      mothPresence: "POL",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

   {
    id: "TUO",
    name: "Tuolumne",
    lat: 37.990,
    lon: -120.201,
    elevation: 730,

    site: {
      mothPresence: "POL",
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },
];

  populations.forEach(pop => {

  const marker = L.circleMarker(
  [pop.lat, pop.lon],
  {
    radius: 7,
    fillColor: "#3388ff",
    color: "#222",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
  }
).addTo(map);

  marker.bindPopup(`
  <div class="popup-title">${pop.name}</div>

  <div class="popup-section">
    <div><span class="popup-label">ID:</span> ${pop.id}</div>
    <div><span class="popup-label">Lat:</span> ${pop.lat}</div>
    <div><span class="popup-label">Lon:</span> ${pop.lon}</div>
    <div><span class="popup-label">Elevation:</span> ${pop.elevation} m</div>
  </div>

  <div class="popup-section">
    <div class="popup-label">Moth presence</div>
    ${pop.site.mothPresence}
  </div>

  <div class="popup-section">
    <div class="popup-label">Sequencing</div>
    ${Object.entries(pop.sequencing)
      .filter(([_, v]) => v !== 0 && v != null)
      .map(([k, v]) => `<div>${sequencingLabels[k] || k}: ${v}</div>`)
      .join("")}
  </div>

  <div class="popup-section">
    <div class="popup-label">Phenotypic data</div>
    <div>Morphological: ${pop.site.morphologicalData ? "Yes" : "No"}</div>
    <div>Scent: ${pop.site.scentData ? "Yes" : "No"}</div>
  </div>

  <div class="popup-section" style="font-size:11px; color:#666;">
    * POL = G. politella ; OBS = G. obscura<br>
    ** BOL = L. bolanderi, CYM = L. cymbalaria, GLA = L. glabrum, HET = L. heterophyllum
  </div>
`);

marker.on("popupopen", () => {

  marker.setStyle({
    radius: 12,
    weight: 4
  });

});

marker.on("popupclose", () => {

  marker.setStyle({
    radius: 7,
    weight: 1
  });

});

});