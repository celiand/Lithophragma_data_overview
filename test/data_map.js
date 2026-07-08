
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
      "2x": 10,
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
      "2x": 10,
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
      "2x": 10,
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
      "2x": 7,
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
      "2x": 10,
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
      "2x": 10,
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
      "2x": 10,
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
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "BER?",
    name: "Berg Mountain",
    lat: 45.25,
    lon: -116.11,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "BCO?",
    name: "Buck Creek Overlook",
    lat: 41.53,
    lon: -120.17,
    

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

  GLA: {
    ploidy: {
    }
  },

  TEN: {
    ploidy: {
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
    id: "EPH?",
    name: "Ephrata",
    lat: 47.20,
    lon: -119.35,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  THO: {
    ploidy: {
    }
  },

  GLA: {
    ploidy: {
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
    id: "FIS?",
    name: "Fish Lake",
    lat: 42.44,
    lon: -118.39,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  TEN: {
    ploidy: {
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
    id: "GRA?",
    name: "Granite Point",
    lat: 46.35,
    lon: -117.20,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "KEA?",
    name: "Keating Ridge",
    lat: 46.35,
    lon: -117.20,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "KLI?",
    name: "Klickitat River",
    lat: 45.50,
    lon: -121.04,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  GLA: {
    ploidy: {
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
    id: "MNF?",
    name: "Malheur National Forest",
    lat: 44.15,
    lon: -119.00,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "MEA?",
    name: "Meadow Creek",
    lat: 46.2,
    lon: -115.17,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "CNF?",
    name: "Choco National Forest",
    lat: 44.24,
    lon: -120.15,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "RAP?",
    name: "Rapid River",
    lat: 45.21,
    lon: -116.22,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "SAD?",
    name: "Saddle Mountain",
    lat: 45.40,
    lon: -116.30,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "SAL?",
    name: "Salmon River, Near Riggins",
    lat: 45.24,
    lon: -116.5,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "SEL?",
    name: "Selway River",
    lat: 46.5,
    lon: -115.27,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "SFC?",
    name: "South Fork Clearwater",
    lat: 45.55,
    lon: -116.1,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "STE?",
    name: "Steen Mountains",
    lat: 42.47,
    lon: -118.45,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "STO?",
    name: "Stough Reservoir",
    lat: 41.33,
    lon: -120.15,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  GLA: {
    ploidy: {
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
    id: "TNW?",
    name: "Turnbull National Wildlife Refuge",
    lat: 47.24,
    lon: -117.34,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {

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
    id: "WEN?",
    name: "Wenaha River",
    lat: 45.56,
    lon: -117.28,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "WIN?",
    name: "Wind River",
    lat: 45.27,
    lon: -115.56,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  PAR: {
    ploidy: {
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
    id: "COW?",
    name: "Cow Creek",
    lat: 42.55,
    lon: -123.27,
    

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {

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
    id: "KLA?",
    name: "Klamathon",
    lat: 41.51,
    lon: -122.33,
    

    site: {
      moths: ["OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {

    }
  },

  GLA: {
    ploidy: {
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
    id: "KLR?",
    name: "Klamath River",
    lat: 41.49,
    lon: -122.39,
    

    site: {
      moths: ["OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  GLA: {
    ploidy: {
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
    id: "PIT?",
    name: "Pit River",
    lat: 40.58,
    lon: -121.50,
    

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  CAM: {
    ploidy: {
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
    id: "PAL?",
    name: "Palmer Creek",
    lat: 42.6,
    lon: -123.5,
    

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "SQU?",
    name: "Squaw Creek",
    lat: 42.1,
    lon: -123.5,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "TAY?",
    name: "Taylor Creek",
    lat: 42.31,
    lon: -123.36,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "TRI?",
    name: "Trinity Mountain",
    lat: 40.49,
    lon: -122.39,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  CAM: {
    ploidy: {
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
    id: "TRI2?",
    name: "Trinity Mountain 2",
    lat: 40.56,
    lon: -122.36,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "WAL?",
    name: "Walker Road",
    lat: 41.50,
    lon: -122.54,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "BLU?",
    name: "Blue Oak Reserve",
    lat: 37.22,
    lon: -121.43,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "COA?",
    name: "Coalinga Road",
    lat: 36.23,
    lon: -120.55,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "COL?",
    name: "Cold Springs",
    lat: 39.56,
    lon: -122.44,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  CAM: {
    ploidy: {
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
    id: "FAR?",
    name: "Farley",
    lat: 39.36,
    lon: -123.21,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "HAS?",
    name: "Hastings Reserve",
    lat: 36.23,
    lon: -121.33,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "HFS?",
    name: "Hopland Field Station",
    lat: 38.59,
    lon: -123.4,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  BOL: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "MAD?",
    name: "Mad River",
    lat: 40.24,
    lon: -123.28,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "SAN?",
    name: "Santa Margarita",
    lat: 35.25,
    lon: -120.33,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  CYM: {
    ploidy: {
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
    id: "MEN?",
    name: "Mendocino National Forest",
    lat: 39.40,
    lon: -122.41,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "NFR?",
    name: "Nacimiento-Fergusson Road",
    lat: 36.0,
    lon: -121.24,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  HET: {
    ploidy: {
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
    id: "NYB?",
    name: "North Yolla Bolly Wilderness",
    lat: 40.23,
    lon: -122.58,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  CAM: {
    ploidy: {
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
    id: "PEP?",
    name: "Pepperwood Reserve",
    lat: 38.34,
    lon: -122.43,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "PNPE?",
    name: "Pinnacles National Park East",
    lat: 36.30,
    lon: -121.7,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "PNP?",
    name: "Pinnacles National Park",
    lat: 36.29,
    lon: -121.8,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
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
    id: "PNPW?",
    name: "Pinnacles National Park West",
    lat: 36.29,
    lon: -121.12,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  CYM: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "QRR?",
    name: "Quail Ridge Reserve",
    lat: 38.29,
    lon: -122.9,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {
  AFF: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "RIN?",
    name: "Rinconado Creek",
    lat: 35.17,
    lon: -120.28,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  CYM: {
    ploidy: {
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
    id: "REL?",
    name: "Relize Canyon",
    lat: 36.14,
    lon: -121.17,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "SPE?",
    name: "Spenceville",
    lat: 39.6,
    lon: -121.14,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
    }
  },

  BOL: {
    ploidy: {
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
    id: "BLA?",
    name: "Black Springs",
    lat: 38.23,
    lon: -120.11,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "COLC?",
    name: "Colson Canyon",
    lat: 34.56,
    lon: -120.12,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  CYM: {
    ploidy: {
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
    id: "COU2?",
    name: "Coulterville 2",
    lat: 37.41,
    lon: -120.10,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "DIN2?",
    name: "Dinkey Creek 2",
    lat: 36.59,
    lon: -119.7,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
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
    id: "FEA?",
    name: "Feather Falls",
    lat: 39.38,
    lon: -121.16,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  AFF: {
    ploidy: {
    }
  },

  CAM: {
    ploidy: {
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
    id: "HOG?",
    name: "Hogsback Road",
    lat: 40.16,
    lon: -121.51,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  TRI: {
    ploidy: {
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
    id: "HMV?",
    name: "Hunter Mountain Valley Road",
    lat: 37.35,
    lon: -120.8,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  AFF: {
    ploidy: {
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
    id: "IGR2?",
    name: "Indian Gulch Road2",
    lat: 37.25,
    lon: -120.9,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
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
    id: "MFS?",
    name: "Marble Fork, Sequoia National Park",
    lat: 36.31,
    lon: -118.48,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
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
    id: "MEH?",
    name: "Mehrten Springs",
    lat: 38.33,
    lon: -120.17,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "MFR?",
    name: "Musick Farm Road",
    lat: 37.4,
    lon: -119.22,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  HET: {
    ploidy: {
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
    id: "MSR?",
    name: "Mineral Springs Road",
    lat: 36.27,
    lon: -118.49,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
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
    id: "ORE2?",
    name: "Oregon Creek 2",
    lat: 39.23,
    lon: -121.4,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  CAM: {
    ploidy: {
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
    id: "POR2?",
    name: "Portola 2",
    lat: 39.48,
    lon: -120.24,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  GLA: {
    ploidy: {
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
    id: "RED2?",
    name: "Redinger Lake 2",
    lat: 37.7,
    lon: -119.23,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
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
    id: "SFK?",
    name: "South Fork Kaweah River",
    lat: 36.21,
    lon: -118.46,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  AFF: {
    ploidy: {
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
    id: "SMR2?",
    name: "South Fork Merced River 2",
    lat: 37.39,
    lon: -119.53,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  AFF: {
    ploidy: {
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
    id: "SUT?",
    name: "Sutter Butte",
    lat: 39.13,
    lon: -121.46,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  BOL: {
    ploidy: {
    }
  },

  TRI: {
    ploidy: {
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
    id: "THO?",
    name: "Thompson Canyon",
    lat: 39.55,
    lon: -120.53,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "TUOR?",
    name: "Tuolumne River",
    lat: 37.59,
    lon: -120.12,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
    }
  },

  BOL: {
    ploidy: {
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
    id: "WAS?",
    name: "Washington Hills",
    lat: 39.47,
    lon: -120.52,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  GLA: {
    ploidy: {
    }
  },

  TEN: {
    ploidy: {
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
    id: "WOO2?",
    name: "Woody 2",
    lat: 35.43,
    lon: -118.47,

    site: {
      moths: ["POL"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
    }
  },

  BOL: {
    ploidy: {
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
    id: "CER?",
    name: "Cerro Noroeste",
    lat: 34.52,
    lon: -119.20,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFF: {
    ploidy: {
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
    id: "SED?",
    name: "Sedgwick Reserve",
    lat: 34.42,
    lon: -120.2,

    site: {
      moths: ["POL","OBS"],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  CYM: {
    ploidy: {
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
    id: "SMP?",
    name: "San Marcos Pass",
    lat: 34.32,
    lon: -119.50,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  CYM: {
    ploidy: {
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
    id: "SCI?",
    name: "San Clemente Island",
    lat: 32.51,
    lon: -118.24,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  MAX: {
    ploidy: {
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
    id: "SCP2?",
    name: "Santa Cruz Island",
    lat: 34.01,
    lon: -119.41,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  CYM: {
    ploidy: {
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
    id: "LAH?",
    name: "Lake Helmet",
    lat: 33.40,
    lon: -116.41,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "HEN?",
    name: "Henshaw 2",
    lat: 33.12,
    lon: -116.44,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "IDY?",
    name: "Idyllwild",
    lat: 33.42,
    lon: -116.43,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "MTL?",
    name: "Mt Laguna",
    lat: 32.53,
    lon: -116.26,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "PIN?",
    name: "Pine Valley",
    lat: 32.50,
    lon: -116.32,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "RAN?",
    name: "Ranger Peak",
    lat: 33.50,
    lon: -116.48,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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
    id: "SIL?",
    name: "Silverwood Lake",
    lat: 34.16,
    lon: -117.16,

    site: {
      moths: [],
      morphologicalData: true,
      scentData: false
    },

    genetics: {

  AFFm: {
    ploidy: {
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

const pieMarker = L.marker(
  [pop.lat, pop.lon],
  {
    icon: L.divIcon({
      className:"pie-marker",
      html:"",
      iconSize:[24,24],
      iconAnchor:[12,12]
    })
  }
);

const entry = {

  marker: marker,
  pieMarker: pieMarker,
  population: pop,

  state: {
    visible: true,

    popupOpen: false,

    searchMatch: true,

    mothColorMode: false,
    mothColor: defaultColor,

    lithoColorMode: false,
    lithoSpecies: [],

    isPie: false
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
  <div>
  <span class="popup-label">Elevation:</span>

  ${
    pop.elevation != null
      ? `${pop.elevation} m`
      : "NA"
  }
</div>
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

      const ploidyEntries =
        Object.entries(data.ploidy || {})
          .filter(([_, count]) => count != null);

      let ploidyStr = "";

      // no ploidy data
      if (ploidyEntries.length === 0) {

        ploidyStr = "NA";

      } else {

        ploidyStr = ploidyEntries
          .map(([ploidy, count]) => {

            // 0 → ploidy only
            if (count === 0) {
              return ploidy;
            }

            return `${ploidy} (${count})`;

          })
          .join(", ");
      }

      return `
        <div>
          <strong>${species}:</strong> ${ploidyStr}
        </div>
      `;

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
  ** BOL = L. bolanderi, CYM = L. cymbalaria, GLA = L. glabrum, HET = L. heterophyllum, AFF = L. affine, PAR = L. parviflorum, TEN = L. tenellum, THO = L. thompsonii, CAM = L. campanulatum, TRI = L. trifoliatum, MAX = L. maximum, AFFm= L. affine mixtum
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


// display type

    document
  .querySelectorAll('input[name="displayMode"]')
  .forEach(el =>
    el.addEventListener("change", updateDisplayMode)
  );

const mothControls = document.getElementById("mothControls");
const lithoControls = document.getElementById("lithoControls");

function updateDisplayMode() {

  console.log("display mode script loaded");

  const mode = document.querySelector(
    'input[name="displayMode"]:checked'
  ).value;

  mothControls.classList.toggle("hidden", mode !== "moth");
  lithoControls.classList.toggle("hidden", mode !== "litho");

  updateFilters();
}

// filter part : PNAS 2025

  const HAS_PNAS_2025 = (pop) =>
  pop.literature?.some(ref =>
    ref.url?.includes("10.1073/pnas.2505119122")
  );


// filter part : has sequencing data

function hasSequencingData(pop) {

  return Object.values(pop.genetics || {}).some(species =>

    Object.values(species.ploidy || {}).some(count =>
      count > 0
    )

  );

}

//filter part - moth
const mothColors = {
  POL: "#eaa91eef",
  OBS: "#148b48f0",
  BOTH: "#82114a"
};


// filter part - litho

const lithoColors = {
  BOL: "#eaa91e",
  GLA: "#148b48",
  AFF: "#4a6cff",
  HET: "#9a39e0",
  CYM: "#6e0e0e",
  PAR: "#5cff11",
  TRI: "#adaecd",
  CAM: "#58eaf1",
  TEN: "#e176b4",
  THO: "#7d4d0b",
  MAX: "#0ec566",
  AFFm: "#450e56",
};

function createPieSVG(speciesList) {

  const colors = speciesList.map(
    sp => lithoColors[sp] || defaultColor
  );

  const n = speciesList.length;

  // calculate slices
  let slices = "";

  let start = 0;

  speciesList.forEach((sp, i) => {

    const end = start + 360 / n;

    slices += `
      <path
        d="${describeArc(10,10,10,start,end)}"
        fill="${colors[i]}"
      />
    `;

    start = end;

  });


  return `
  <svg width="24" height="24" viewBox="0 0 20 20">

    ${slices}

    <circle
      cx="10"
      cy="10"
      r="9.5"
      fill="none"
      stroke="#222"
      stroke-width="1"
    />

  </svg>
  `;
}

function describeArc(cx, cy, r, startAngle, endAngle) {

  const start = polarToCartesian(
    cx,
    cy,
    r,
    endAngle
  );

  const end = polarToCartesian(
    cx,
    cy,
    r,
    startAngle
  );

  const largeArcFlag =
    endAngle - startAngle <= 180 ? "0" : "1";


  return [
    "M", cx, cy,
    "L", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");

}


function polarToCartesian(cx, cy, r, angle) {

  const radians =
    (angle - 90) * Math.PI / 180;

  return {

    x: cx + r * Math.cos(radians),

    y: cy + r * Math.sin(radians)

  };

}

function computeLithoColor(pop, selectedSpecies, mode) {

  const present = Object.keys(pop.genetics || {});

  if (mode === "or") {

    // first match wins OR multiple → pick first match
    const match = present.find(sp => selectedSpecies.includes(sp));

    return match ? lithoColors[match] : defaultColor;
  }

  if (mode === "and") {

    const allPresent = selectedSpecies.every(sp =>
      present.includes(sp)
    );

    return allPresent ? "#333" : defaultColor;
  }

  return defaultColor;
}

function updatePieMarker(entry) {

  const pieMarker = entry.pieMarker;
  const state = entry.state;

  pieMarker.setIcon(
    L.divIcon({

      className:"pie-marker",

      html:createPieSVG(
        state.lithoSpecies
      ),

      iconSize:[24,24],

      iconAnchor:[12,12]

    })
  );

}

function populationHasSpecies(pop, species) {

  return pop.genetics &&
         pop.genetics[species] !== undefined;

}


function updateFilters() {
  const displayMode =
  document.querySelector(
    'input[name="displayMode"]:checked'
  ).value;

  const showPOL =
    document.getElementById("filterPOL").checked;

  const showOBS =
    document.getElementById("filterOBS").checked;

  const mode =
    document.querySelector('input[name="mothMode"]:checked').value;

    const showPNAS =
  document.getElementById("filterPNAS2025").checked;

  const showSequencing =
  document.getElementById("filterSequencing").checked;


  // ----------------------
  // Lithophragma filters
  // ----------------------

  const selectedLitho = [];

  if (document.getElementById("filterBOL").checked)
    selectedLitho.push("BOL");

  if (document.getElementById("filterCYM").checked)
    selectedLitho.push("CYM");

  if (document.getElementById("filterGLA").checked)
    selectedLitho.push("GLA");

  if (document.getElementById("filterAFF").checked)
    selectedLitho.push("AFF");

  if (document.getElementById("filterPAR").checked)
    selectedLitho.push("PAR");

  if (document.getElementById("filterTRI").checked)
    selectedLitho.push("TRI");

  if (document.getElementById("filterHET").checked)
    selectedLitho.push("HET");

  if (document.getElementById("filterCAM").checked)
    selectedLitho.push("CAM");

  if (document.getElementById("filterTEN").checked)
    selectedLitho.push("TEN");

  if (document.getElementById("filterAFFm").checked)
    selectedLitho.push("AFFm");

  if (document.getElementById("filterMAX").checked)
    selectedLitho.push("MAX");

  if (document.getElementById("filterTHO").checked)
    selectedLitho.push("THO");

  const lithoMode =
    document.querySelector(
      'input[name="lithoMode"]:checked'
    ).value;

  allMarkers.forEach(entry => {
    const pop = entry.population;
    const marker = entry.marker;

    const hasPOL = pop.site.moths.includes("POL");
    const hasOBS = pop.site.moths.includes("OBS");

    const hasPNAS = HAS_PNAS_2025(pop);

    const hasSequencing = hasSequencingData(pop);

    let visible = true;
    
    // if no filters selected → show everything
    if (displayMode === "moth") {

      if (showPOL || showOBS) {

        if (mode === "or") {

          visible =
            (showPOL && hasPOL) ||
            (showOBS && hasOBS);

        }

        if (mode === "and") {

          if (showPOL && !hasPOL) visible = false;
          if (showOBS && !hasOBS) visible = false;

        }

      }

    }

    if (displayMode === "litho") {

  const lithoMode =
    document.querySelector(
      'input[name="lithoMode"]:checked'
    ).value;

  if (selectedLitho.length > 0) {

    if (lithoMode === "or") {

      visible = selectedLitho.some(
        species => populationHasSpecies(pop, species)
      );

    }

    if (lithoMode === "and") {

      visible = selectedLitho.every(
        species => populationHasSpecies(pop, species)
      );

    }

  }

}

    if (showPNAS && !hasPNAS) {
      visible = false;
    }

    if (showSequencing && !hasSequencing) {
  visible = false;
}

    entry.state.visible = visible;
    

// activate special color mode only in this case
entry.state.mothColorMode =
  (displayMode === "moth" && mode === "or" && showPOL && showOBS);

// compute moth color
entry.state.mothColor =
  entry.state.mothColorMode
    ? getMothColor(pop)
    : defaultColor;

    entry.state.lithoColorMode =
  displayMode === "litho" &&
  lithoMode === "or" &&
  selectedLitho.length >= 2;

entry.state.lithoSpecies =
  selectedLitho.filter(sp =>
    populationHasSpecies(pop, sp)
  );

renderMarker(entry);

  });

  const legend = document.getElementById("legend");

if (displayMode === "moth" && mode === "or" && showPOL && showOBS) {
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

  document.getElementById("filterPNAS2025")
  .addEventListener("change", updateFilters);

  document
  .getElementById("filterSequencing")
  .addEventListener("change", updateFilters);

  document
  .querySelectorAll(".lithoFilter")
  .forEach(el =>
    el.addEventListener("change", updateFilters)
  );

  document
  .querySelectorAll('input[name="lithoMode"]')
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
  const pieMarker = entry.pieMarker;
  const state = entry.state;

  // restore normal circle if we are leaving pie mode

if (!state.lithoColorMode && state.isPie) {

  marker.setStyle({
    radius:7,
    color:"#222",
    fillColor:defaultColor,
    weight:1,
    opacity:1,
    fillOpacity:0.9
  });

  state.isPie=false;

}

  // =========================
  // VISIBILITY
  // =========================

  if (state.visible) {

    marker.addTo(map);

  } else {

    marker.remove();
    pieMarker.remove();

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
  // LITHO COLOR MODE
  // =========================


if (state.lithoColorMode) {

  if (state.lithoSpecies.length === 1) {

    style.fillColor =
      lithoColors[state.lithoSpecies[0]];

  }

  // multi species handled differently

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

// =========================
// FINAL MARKER TYPE
// =========================


if (
  state.lithoColorMode &&
  state.lithoSpecies.length > 1
) {

  marker.remove();

  updatePieMarker(entry);

  pieMarker.addTo(map);

  state.isPie=true;

}
else {

  pieMarker.remove();

  marker.addTo(map);

  state.isPie=false;

  marker.setStyle(style);

}

}

  // loading issue

  setTimeout(() => {
  map.invalidateSize();
}, 100);