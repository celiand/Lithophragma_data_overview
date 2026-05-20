
  // Create map
  const map = L.map('map').setView([37, -120], 7);

  // Add OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const allMarkers = [];

  //name mapping
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
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
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
     moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      hexaploid_BOL: 1,
    }
  },

  {
    id: "SAM",
    name: "South Fork American River",
    lat: 38.795,
    lon: -120.775,
    elevation: 405,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      hexaploid_BOL: 1,
    }
  },

   {
    id: "ELE",
    name: "Electra",
    lat: 38.326,
    lon: -120.683,
    elevation: 236,

    site: {
      moths: ["POL","OBS"],
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
      moths: ["POL"],
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
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      hexaploid_BOL: 1,
    }
  },

  {
    id: "DOF",
    name: "Douglas Flat",
    lat: 38.110,
    lon: -120.481,
    elevation: 627,

    site: {
      moths: [],
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
      moths: [],
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
      moths: [],
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
      moths: [],
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
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 4,
    }
  },

   {
    id: "TUO",
    name: "Tuolumne",
    lat: 37.990,
    lon: -120.201,
    elevation: 730,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "ELP",
    name: "El Portal",
    lat: 37.669,
    lon: -119.838,
    elevation: 487,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "COU",
    name: "Coulterville",
    lat: 37.661,
    lon: -120.145,
    elevation: 676,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "SMR",
    name: "South Fork Merced River",
    lat: 37.649,
    lon: -119.883,
    elevation: 463,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "BRI",
    name: "Briceburg",
    lat: 37.607,
    lon: -119.965,
    elevation: 363,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "IGR",
    name: "Indian Gulch Road",
    lat: 37.427,
    lon: -120.165,
    elevation: 241,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "LIL",
    name: "Lillian Mountain",
    lat: 37.206,
    lon: -119.778,
    elevation: 355,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "KER",
    name: "Kerkhoff Lake",
    lat: 37.148,
    lon: -119.505,
    elevation: 314,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  
  {
    id: "RED",
    name: "Redinger Lake",
    lat: 37.131,
    lon: -119.395,
    elevation: 927,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  
  {
    id: "DIN",
    name: "Dinkey Creek",
    lat: 36.989,
    lon: -119.125,
    elevation: 1295,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "CHM",
    name: "Cats Head Mountain",
    lat: 36.965,
    lon: -119.216,
    elevation: 655,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "WVR",
    name: "Watts Valley Road",
    lat: 36.960,
    lon: -119.348,
    elevation: 592,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      tetraploid_BOL: 1,
    }
  },

  {
    id: "MXN",
    name: "Maxon Road",
    lat: 36.917,
    lon: -119.316,
    elevation: 429,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 4,
      tetraploid_BOL: 1
    }
  },

   {
    id: "EPA",
    name: "Eagle Peak",
    lat: 36.914,
    lon: -119.273,
    elevation: 304,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "HOM",
    name: "Hog Mountain",
    lat: 36.885,
    lon: -119.296,
    elevation: 364,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },


   {
    id: "KNG",
    name: "King's River",
    lat: 36.858,
    lon: -119.104,
    elevation: 336,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      tetraploid_BOL: 1,
    }
  },

  {
    id: "HUG",
    name: "Hughes Mountain",
    lat: 36.856,
    lon: -119.358,
    elevation: 304,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "WON",
    name: "Wonder Valley",
    lat: 36.799,
    lon: -119.321,
    elevation: 195,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "ELL",
    name: "Ellis Mountain",
    lat: 36.539,
    lon: -119.011,
    elevation: 329,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "PAC",
    name: "Paradise Creek",
    lat: 36.514,
    lon: -118.760,
    elevation: 980,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "MBL",
    name: "Marble Falls Trails, Sequoia NP",
    lat: 36.522,
    lon: -118.799,
    elevation: 686,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      tetraploid_BOL: 1,
    }
  },


  {
    id: "NFK",
    name: "North Fork Kaweah River",
    lat: 36.521,
    lon: -118.894,
    elevation: 477,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "KAW",
    name: "Kaweah",
    lat: 36.484,
    lon: -118.920,
    elevation: 345,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "MIN",
    name: "Mineral King Road, Sequoia",
    lat: 36.459,
    lon: -118.829,
    elevation: 673,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 4,
      tetraploid_BOL: 1
    }
  },

  {
    id: "TRV",
    name: "Three Rivers",
    lat: 36.411,
    lon: -118.894,
    elevation: 300,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },


  {
    id: "SEQ",
    name: "South Fork Kaweah River Road, Sequoia",
    lat: 36.351,
    lon: -118.769,
    elevation: 1080,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "BAT",
    name: "Battle Mountain",
    lat: 36.263,
    lon: -118.762,
    elevation: 996,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      tetraploid_BOL: 1,
      hexaploid_BOL: 1,
    }
  },


  {
    id: "YOK",
    name: "Yokohl Road, above Yokohl Valley",
    lat: 36.231,
    lon: -118.864,
    elevation: 655,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "WOO",
    name: "Woody",
    lat: 35.720,
    lon: -118.798,
    elevation: 740,

    site: {
      moths: ["POL"],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "SCP",
    name: "Santa Cruz Island, Prisoner's Harbor",
    lat: 34.020,
    lon: -119.689,
    elevation: 62,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_BOL: 0,
      tetraploid_BOL: 0
    }
  },

  {
    id: "POR",
    name: "Portola",
    lat: 39.815,
    lon: -120.404,
    elevation: 1495,

    site: {
      moths: [],
      morphologicalData: false,
      scentData: false
    },

    sequencing: {
      diploid_GLA:4,
    }
  },

  {
    id: "QRG",
    name: "Quail Ridge",
    lat: 38.494,
    lon: -122.150,
    elevation: 166,

    site: {
      moths: [],
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

allMarkers.push({
  marker: marker,
  population: pop
});

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

  ${
    pop.site.moths.length > 0
      ? pop.site.moths.join(", ")
      : "None"
  }
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

  ${
  pop.id === "SMR"
    ? `<div class="popup-section popup-highlight">
         <strong>Reference genome (diploid)</strong>
       </div>`
    : ""
}

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

//filter part - moth
const mothColors = {
  POL: "#eaa91eef",
  OBS: "#148b48f0",
  BOTH: "#82114a"
};

const defaultColor = "#3388ff";

function updateFilters() {

  const showPOL =
    document.getElementById("filterPOL").checked;

  const showOBS =
    document.getElementById("filterOBS").checked;

  const mode =
    document.querySelector('input[name="mothMode"]:checked').value;

  allMarkers.forEach(entry => {

    const pop = entry.population;
    const marker = entry.marker;

    const hasPOL = pop.site.moths.includes("POL");
    const hasOBS = pop.site.moths.includes("OBS");

    let visible = true;

    // if no filters selected → show everything
    if (showPOL || showOBS) {

      if (mode === "or") {

        // OR logic: at least one match
        visible =
          (showPOL && hasPOL) ||
          (showOBS && hasOBS);

      }

      if (mode === "and") {

        // AND logic: must satisfy all selected filters

        if (showPOL && !hasPOL) visible = false;
        if (showOBS && !hasOBS) visible = false;
      }
    }

    if (visible) {

let color = defaultColor;

// color when OR + BOTH filters checked
if (mode === "or" && showPOL && showOBS) {
  color = getMothColor(pop);
}

  marker.setStyle({
    color: "#222",
    fillColor: color
  });

  marker.addTo(map);

} else {
  marker.remove();
}

  });

  const legend = document.getElementById("legend");

if (mode === "or" && showPOL && showOBS) {
  legend.classList.remove("hidden");
} else {
  legend.classList.add("hidden");
}

//update search among the filtered pop
updateSearchHighlight();

}

document
  .getElementById("filterPOL")
  .addEventListener("change", updateFilters);

document
  .getElementById("filterOBS")
  .addEventListener("change", updateFilters);

document
  .querySelectorAll('input[name="mothMode"]')
  .forEach(el =>
    el.addEventListener("change", updateFilters)
  );


function getMothColor(pop) {

  const hasPOL = pop.site.moths.includes("POL");
  const hasOBS = pop.site.moths.includes("OBS");

  if (hasPOL && hasOBS) return mothColors.BOTH;
  if (hasPOL) return mothColors.POL;
  if (hasOBS) return mothColors.OBS;

  return defaultColor;
}

// search logic

let searchQuery = "";

document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  updateSearchHighlight();
});

function updateSearchHighlight() {

  allMarkers.forEach(entry => {

    const pop = entry.population;
    const marker = entry.marker;

    const match =
      pop.id.toLowerCase().includes(searchQuery) ||
      pop.name.toLowerCase().includes(searchQuery);

    if (searchQuery === "") {

      // reset style if empty search
      marker.setStyle({
        opacity: 1,
        fillOpacity: 0.9
      });

    } else if (match) {

      // highlight match
      marker.setStyle({
        opacity: 1,
        fillOpacity: 1,
        weight: 4
      });

      marker.bringToFront();

    } else {

      // dim non-matching
      marker.setStyle({
        opacity: 0.3,
        fillOpacity: 0.2
      });
    }
  });
}

  // loading issue

  setTimeout(() => {
  map.invalidateSize();
}, 100);