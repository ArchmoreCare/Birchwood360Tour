var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5200017167335247,
        "pitch": -0.023966050263766192,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.15300139354368625,
          "pitch": -0.004068889437341738,
          "rotation": 0.7853981633974483,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5484058186817506,
        "pitch": 0.17683255675297715,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.77895616574619,
          "pitch": 0.055892781008971326,
          "rotation": 0,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": -2.083524296027381,
          "pitch": 0.07827462093386828,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ground-floor-corridor",
      "name": "Ground Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.989374187267284,
        "pitch": 0.15442922297613393,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.965132333004716,
          "pitch": -0.3225890252008323,
          "rotation": 0.7853981633974483,
          "target": "3-1st-floor-corridor"
        },
        {
          "yaw": 2.894716976891532,
          "pitch": -0.12736994046046135,
          "rotation": 5.497787143782138,
          "target": "4-lounge"
        },
        {
          "yaw": 2.908649490739876,
          "pitch": 0.20999125722126166,
          "rotation": 10.995574287564278,
          "target": "8-dining-room"
        },
        {
          "yaw": -2.7059992577751846,
          "pitch": -0.026347760778172358,
          "rotation": 7.853981633974483,
          "target": "10-room-24"
        },
        {
          "yaw": -0.9661974389213199,
          "pitch": 0.21812491480105223,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st-floor-corridor",
      "name": "1st Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.088548949009205,
        "pitch": 0.05411415005470133,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.2582913672962537,
          "pitch": -0.025695007477761322,
          "rotation": 0.7853981633974483,
          "target": "11-room-26"
        },
        {
          "yaw": -1.973767821925664,
          "pitch": -0.057586850924499444,
          "rotation": 8.63937979737193,
          "target": "2-ground-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.788504488931241,
        "pitch": 0.2136162603029259,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.07532687602396848,
          "pitch": -0.2386584427057752,
          "rotation": 7.853981633974483,
          "target": "7-kitchen"
        },
        {
          "yaw": -0.24193210773142226,
          "pitch": -0.09869259683754628,
          "rotation": 4.71238898038469,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": 2.242855488229644,
          "pitch": -0.03813813052263626,
          "rotation": 0,
          "target": "5-activity-room"
        },
        {
          "yaw": 2.5627688071767283,
          "pitch": -0.07423191281777974,
          "rotation": 1.5707963267948966,
          "target": "9-room-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-activity-room",
      "name": "Activity Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.853995854132804,
        "pitch": 0.38778835585980964,
        "fov": 1.8605572031271687
      },
      "linkHotspots": [
        {
          "yaw": -2.696009912636592,
          "pitch": 0.025624429712642893,
          "rotation": 13.351768777756625,
          "target": "4-lounge"
        },
        {
          "yaw": 1.8720143104846398,
          "pitch": 0.051868231424917255,
          "rotation": 17.27875959474387,
          "target": "6-garden"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6889610870991802,
          "pitch": 0.7814437023790219,
          "title": "Interactive Table",
          "text": "Projector with a sensor camera creating interactive projections"
        }
      ]
    },
    {
      "id": "6-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1471231410978504,
        "pitch": 0.05382823655597235,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.942305285382151,
          "pitch": 0.08219515548849188,
          "rotation": 0,
          "target": "5-activity-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.119706431960811,
          "pitch": 0.1007690786660227,
          "rotation": 17.27875959474387,
          "target": "4-lounge"
        },
        {
          "yaw": -0.10628884419776341,
          "pitch": 0.016424982742845984,
          "rotation": 0,
          "target": "8-dining-room"
        },
        {
          "yaw": -2.3821267274578783,
          "pitch": 0.07479821167243195,
          "rotation": 0.7853981633974483,
          "target": "2-ground-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.94900416376991,
        "pitch": 0.1507483374799392,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.3032702323127268,
          "pitch": -0.006746281069865745,
          "rotation": 11.780972450961727,
          "target": "2-ground-floor-corridor"
        },
        {
          "yaw": 1.295716333592999,
          "pitch": 0.19870758713812897,
          "rotation": 23.561944901923464,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-6",
      "name": "Room 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8920477258033692,
        "pitch": 0.08803790896011776,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.0660590576074522,
          "pitch": -0.031393353897701815,
          "rotation": 0.7853981633974483,
          "target": "4-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-24",
      "name": "Room 24",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.798742703270438,
        "pitch": 0.14352154928694638,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.5866376828931266,
          "pitch": -0.056565117138919874,
          "rotation": 4.71238898038469,
          "target": "2-ground-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-room-26",
      "name": "Room 26",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9337198062394201,
        "pitch": 0.11295630885279451,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.8984248891190063,
          "pitch": 0.028645575725413153,
          "rotation": 1.5707963267948966,
          "target": "3-1st-floor-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
