var APP_DATA = {
  "scenes": [
    {
      "id": "0-uc-entrance",
      "name": "UC Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6681373140313784,
        "pitch": 0.18028693374220417,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 0.11136553479358469,
          "pitch": 0.10613001859549165,
          "rotation": 0,
          "target": "5-uc-exit"
        },
        {
          "yaw": 2.667877928480821,
          "pitch": 0.11793690061630357,
          "rotation": 0,
          "target": "1-uc-main-hall1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.04948954917399462,
          "pitch": 0.09398399505283805,
          "title": "Automatic Door",
          "text": "The doors for entering and exiting the UC can be opened automatically just by waving a hand in front of the switches. Some people don't use the switches though, which baffles me."
        },
        {
          "yaw": 0.9465541588906561,
          "pitch": 0.23574189600593343,
          "title": "UC Statue",
          "text": "I have no idea what this statue is or what it's supposed to represent, but it still looks neat so I'm going to point it out anyway."
        }
      ]
    },
    {
      "id": "1-uc-main-hall1",
      "name": "UC Main Hall(1)",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.10395518303180395,
        "pitch": 0.030018043455065424,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.1892717098391206,
          "pitch": 0.1205513274852077,
          "rotation": 0,
          "target": "0-uc-entrance"
        },
        {
          "yaw": 1.284913693195202,
          "pitch": 0.17373681381796047,
          "rotation": 0,
          "target": "2-uc-main-hall2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6774705171590867,
          "pitch": 0.0810670069654762,
          "title": "The Link",
          "text": "From tutoring services to a writing center to just a nice place to study, if a student needs somewhere to get help with academics, this is the place to go."
        },
        {
          "yaw": 0.9254230825790888,
          "pitch": 0.06796888622330854,
          "title": "Sponsel Mural",
          "text": "A mural dedicated to Drs. Clifford &amp; Juliette Sponsel, whose patronage allowed the Sponsel Library here on campus to be built."
        }
      ]
    },
    {
      "id": "2-uc-main-hall2",
      "name": "UC Main Hall(2)",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.11117508249005326,
        "pitch": 0.032519547076320876,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.1938338450704968,
          "pitch": 0.007902025232805698,
          "rotation": 0,
          "target": "1-uc-main-hall1"
        },
        {
          "yaw": 1.2972379338421955,
          "pitch": 0.2034839157906152,
          "rotation": 0,
          "target": "3-uc-main-hall3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8221524318310109,
          "pitch": -0.03717305656733316,
          "title": "Digital Classroom",
          "text": "The only proper classroom in the UC as far as I'm aware, this room is filled with desktop computers suitable for just about any purpose students might need during class."
        },
        {
          "yaw": 0.4206084182700103,
          "pitch": 0.029805034383736384,
          "title": "Campus Safety",
          "text": "This is the place to go for any security-related concerns or questions students may have, as well as parking-related issues and a lost-and-found."
        }
      ]
    },
    {
      "id": "3-uc-main-hall3",
      "name": "UC Main Hall(3)",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.4432969919134333,
        "pitch": 0.01805432210008462,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.8305500889002673,
          "pitch": 0.11339428206768432,
          "rotation": 0,
          "target": "2-uc-main-hall2"
        },
        {
          "yaw": 1.6445206602034244,
          "pitch": 0.1664676176366271,
          "rotation": 0,
          "target": "4-uc-main-hall4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.822172148880643,
          "pitch": -0.2773183314668053,
          "title": "Fabiani Theatre",
          "text": "An in-house theatre where Trine hosts all kinds of events, including drama performances."
        },
        {
          "yaw": 1.1566705992228243,
          "pitch": 0.07446992639092187,
          "title": "Trine Bookstore",
          "text": "If you need to buy textbooks for a class or want to pick up some Trine merchandise, this is where you want to go."
        }
      ]
    },
    {
      "id": "4-uc-main-hall4",
      "name": "UC Main Hall(4)",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.086537793524263,
          "pitch": 0.14068282832722012,
          "rotation": 0,
          "target": "3-uc-main-hall3"
        },
        {
          "yaw": -1.3633609408304928,
          "pitch": 0.11735548674790763,
          "rotation": 0,
          "target": "5-uc-exit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.562885289295668,
          "pitch": -0.12039367863220285,
          "title": "Career Center",
          "text": "The place to go for students who need help with writing their resumes or finding jobs and internships."
        },
        {
          "yaw": -1.1347008523647606,
          "pitch": -0.06307674389238827,
          "title": "This Staircase",
          "text": "I've never used this staircase before, and as such I have no idea what's on that second floor area. Truly a mystery..."
        }
      ]
    },
    {
      "id": "5-uc-exit",
      "name": "UC Exit",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.25462680183204434,
        "pitch": -0.01250751810627726,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.851193583525781,
          "pitch": 0.23608784370321878,
          "rotation": 0,
          "target": "0-uc-entrance"
        },
        {
          "yaw": 1.4481063519017,
          "pitch": 0.07229360917649785,
          "rotation": 0,
          "target": "4-uc-main-hall4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22912526651393428,
          "pitch": 0.09956482041248194,
          "title": "The Caff.",
          "text": "The primary location on campus where students eat, which offers a wide variety of food options and plenty of food for everyone."
        },
        {
          "yaw": -0.41789169416585104,
          "pitch": 0.1289440406465232,
          "title": "This Guy",
          "text": "A statue of a bison painted to look like Trine's own mascot: Thunder the White Tiger. Why this is a thing is something I will never know or&nbsp; understand."
        }
      ]
    }
  ],
  "name": "Trine University Center Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
