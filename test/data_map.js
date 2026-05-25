
  // Create map
  const map = L.map('map').setView([37, -120], 7);

  // Add OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const allMarkers = [];
  const defaultColor = "#3388ff";


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

   genetics: {
  BOL: {
    ploidy: {
      "6x": 0
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "6x": 1
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "6x": 1
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "6x": 0
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "6x": 0
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

   genetics: {
  BOL: {
    ploidy: {
      "6x": 1
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "4x": 0
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "6x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

   genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 4,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
  },

  {
    id: "SMR",
    name: "South Fork Merced River",
    lat: 37.649,
    lon: -119.883,
    elevation: 463,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
      "Along the south-facing slope of the South Fork of the Merced River within the first 2 km upstream of its confluence with the Merced River. This habitat is drier and sunnier and dominated by a diverse mix of perennial herbs, shrubs, and trees."
  ],

  
  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  },
{
    authors:
      "Gross, K., Undin, M., Thompson, J. N., & Friberg, M.",

    title:
      "Components of local adaptation and divergence in pollination efficacy in a coevolving species interaction",

    url:
      "https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecy.4043"
  },

  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
  ]

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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "3x": 0,
      "8x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 1,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 4,
      "4x": 1,
      "5x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

     genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "4x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

   genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "4x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 1,
      "5x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "3x": 0,
      "4x": 0,
      "6x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
  },

  {
    id: "MBL",
    name: "Marble Falls Trails, Sequoia NP",
    lat: 36.522,
    lon: -118.799,
    elevation: 686,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

     genetics: {
  BOL: {
    ploidy: {
      "4x": 1,
    }
  },
},

    notes: [
      "The habitat is a shaded slope, covered in oak (Quercus spp.), buckeye (Aesculus californica), and redbud (Cercis occidentalis). There are thousands of L. bolanderi individuals, and G. politella is comparatively abundant relative to other populations"
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  },
{
    authors:
      "Gross, K., Undin, M., Thompson, J. N., & Friberg, M.",

    title:
      "Components of local adaptation and divergence in pollination efficacy in a coevolving species interaction",

    url:
      "https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecy.4043"
  },

  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 0,
    }
  },
},
    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "4x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

     genetics: {
  BOL: {
    ploidy: {
      "2x": 4,
      "3x": 0,
      "4x": 1,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 0,
      "5x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

     genetics: {
  BOL: {
    ploidy: {
      "4x": 1,
      "5x": 0,
      "6x": 1,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "4x": 0,
      "5x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  BOL: {
    ploidy: {
      "2x": 0,
      "4x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  CYM: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  GLA: {
    ploidy: {
      "2x": 4,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
  ]
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

    genetics: {
  HET: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Gross, K., Yazdi, H. P., Schlager, E., Lilley, J., Romero-Bravo, A., Runemark, A., ... & Friberg, M.",

    title:
      "Repeated polyploidization shapes divergence in floral morphology in Lithophragma bolanderi (Saxifragaceae)",

    url:
      "https://www.pnas.org/doi/abs/10.1073/pnas.2505119122"
  }
]

  },

  
  {
    id: "DOG?",
    name: "Dog Creek",
    lat: 42.36,
    lon: -122.36,
    elevation: -1000,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
]

  },

   
  {
    id: "OAK?",
    name: "Oak Ridge",
    lat: 43.44,
    lon: -122.29,
    elevation: -1000,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
]

  },

   
  {
    id: "ROW?",
    name: "Rowena",
    lat: 45.40,
    lon: -121.13,
    elevation: -1000,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
]

  },

  {
    id: "SJI?",
    name: "San Juan Island",
    lat: 48.35,
    lon: -123.6,
    elevation: -1000,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
]

  },

   
  {
    id: "ANT?",
    name: "Antelope Creek",
    lat: 44.5,
    lon: -120.55,
    elevation: -1000,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
      "2x": 0,
    }
  },
},

    notes: [
  ],

  literature: [
  {
    authors:
      "Thompson, J. N., Schwind, C., & Friberg, M.",

    title:
      "Diversification of trait combinations in coevolving plant and insect lineages",

    url:
      "https://www.journals.uchicago.edu/doi/full/10.1086/692164"
  }
]

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

const entry = {

  marker: marker,
  population: pop,

  state: {
    visible: true,

    popupOpen: false,

    searchMatch: true,

    mothColorMode: false,
    mothColor: defaultColor
  }
};

allMarkers.push(entry);

  marker.bindPopup(`
    <div class="popup-title">
      <a class="linkpopuptitle" href="individuals.html#${pop.id}">
          ${pop.name}
      </a>
    </div>

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
 : "None" }
</div>

<div class="popup-section">
  <div class="popup-label">Lithophragma species</div>

  ${Object.keys(pop.genetics)
  .map(sp => `<div>${sp}</div>`)
  .join("")}
</div>

<div class="popup-section">
  <div class="popup-label">Genetic data</div>

    ${Object.entries(pop.genetics)
    .map(([species, data]) => {

    const ploidyStr = Object.entries(data.ploidy)
    .filter(([_, count]) => count != null)
    .map(([ploidy, count]) => {

    // if no count or 0 → just ploidy
    if (!count) return ploidy;

    return `${ploidy} (${count})`; })
    .join(", ");

    return `<div>
    <strong>${species}:</strong> ${ploidyStr}
  </div>`;
  })
  .join("")}
</div>

<div class="popup-section">
  <div class="popup-label">Phenotypic data</div>
  <div>Morphological: ${pop.site.morphologicalData ? "Yes" : "No"}</div>
  <div>Scent: ${pop.site.scentData ? "Yes" : "No"}</div>
</div>

${ pop.notes && pop.notes.length > 0 ? `
<div class="popup-section">
  <div class="popup-label">Notes</div>

  ${pop.notes
    .map(note => `<div>• ${note}</div>`)
    .join("")}
</div>`: ""}

${ pop.literature && pop.literature.length > 0 ? `
<div class="popup-section">
  <div class="popup-label">Literature</div>

    ${pop.literature.map(ref => `

      <div class="literature-entry">

        <div class="lit-authors">
          ${ref.authors}
        </div>

        <div class="lit-title">
          ${ref.title}
        </div>

        <div class="lit-link">
          <a href="${ref.url}" target="_blank"> View article </a>
        </div>

      </div>

    `).join("")}

</div>
`: ""}

${
  pop.id === "SMR"
  ? `<div class="popup-section popup-highlight">
    <strong>Reference genome (diploid)</strong>
  </div>`
: ""}

<div class="popup-section" style="font-size:11px; color:#666;">
  * POL = G. politella ; OBS = G. obscura<br>
  ** BOL = L. bolanderi, CYM = L. cymbalaria, GLA = L. glabrum, HET = L. heterophyllum, AFF = L. affine, PAR = L. parviflorum
</div>
`);


marker.on("popupopen", () => {

  entry.state.popupOpen = true;

  renderMarker(entry);

});

marker.on("popupclose", () => {

  entry.state.popupOpen = false;

  renderMarker(entry);

});

});

//filter part - moth
const mothColors = {
  POL: "#eaa91eef",
  OBS: "#148b48f0",
  BOTH: "#82114a"
};



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

    entry.state.visible = visible;

// activate special color mode only in this case
entry.state.mothColorMode =
  (mode === "or" && showPOL && showOBS);

// compute moth color
entry.state.mothColor =
  entry.state.mothColorMode
    ? getMothColor(pop)
    : defaultColor;

renderMarker(entry);

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

    entry.state.searchMatch =
      searchQuery === "" ||

      pop.id.toLowerCase().includes(searchQuery) ||

      pop.name.toLowerCase().includes(searchQuery);

    renderMarker(entry);

  });

}



//centralized style function

function renderMarker(entry) {

  const marker = entry.marker;
  const state = entry.state;

  // =========================
  // VISIBILITY
  // =========================

  if (state.visible) {

    marker.addTo(map);

  } else {

    marker.remove();

    return;
  }

  // =========================
  // BASE STYLE
  // =========================

  let style = {

    radius: 7,

    color: "#222",

    fillColor: defaultColor,

    weight: 1,

    opacity: 1,

    fillOpacity: 0.9
  };

  // =========================
  // MOTH COLOR MODE
  // =========================

  if (state.mothColorMode) {

    style.fillColor = state.mothColor;

  }

  // =========================
  // SEARCH EFFECT
  // =========================

  if (searchQuery !== "") {

    if (state.searchMatch) {

      style.weight = 4;

      style.opacity = 1;

      style.fillOpacity = 1;

      marker.bringToFront();

    } else {

      style.opacity = 0.3;

      style.fillOpacity = 0.2;
    }
  }

  // =========================
  // POPUP EFFECT
  // =========================

  if (state.popupOpen) {

    style.radius = 12;

    style.weight = 4;
  }

  // =========================
  // APPLY STYLE
  // =========================

  marker.setStyle(style);

}

  // loading issue

  setTimeout(() => {
  map.invalidateSize();
}, 100);