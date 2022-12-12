import log from 'loglevel';

const appConfig = {
  //"trace","debug","info","warn","error"
  "logLevel": "info",

  "mqtt": {
    host: "localhost",
    port: 1883,
    clientId: "connected-vehicle-data-generator",
    username: "default",
    password: "default",
  },

  "vehicles": [
    {
      route: "R41",       // must be the id of one route
      type: "HAUL",
      number: 30,
      speed: 50,         // km/hour
      IDPrefix: "HW",    // the id will be from IDPrefix+"001" to IDPrefix+"number"
      reportInterval: 2, // seconds
    },
    {
      route: "R41",
      type: "WATER",
      number: 5,
      speed: 25,
      IDPrefix: "WT",
      reportInterval: 3,
    },
    {
      route: "R07",
      type: "HAUL",
      number: 20,
      speed: 60,
      IDPrefix: "H3",
      reportInterval: 2,
    },
    {
      route: "R07",
      type: "WATER",
      number: 5,
      speed: 30,
      IDPrefix: "WX",
      reportInterval: 3,
    },
  ],

  "routes": [
    {
      "id": "R41",
      "coordinates": [
        [
          119.670202,
          -23.359829
        ],
        [
          119.6686864,
          -23.3599466
        ],
        [
          119.6686864,
          -23.3599466
        ],
        [
          119.6678925,
          -23.3603996
        ],
        [
          119.6686435,
          -23.360636
        ],
        [
          119.6697164,
          -23.3610497
        ],
        [
          119.6711755,
          -23.3610103
        ],
        [
          119.6711755,
          -23.3610103
        ],
        [
          119.6725059,
          -23.3600648
        ],
        [
          119.6723771,
          -23.3595526
        ],
        [
          119.6719909,
          -23.3592571
        ],
        [
          119.6703172,
          -23.3589616
        ],
        [
          119.668622,
          -23.3586267
        ],
        [
          119.6674848,
          -23.3597496
        ],
        [
          119.6670556,
          -23.3606557
        ],
        [
          119.6677208,
          -23.3609118
        ],
        [
          119.668901,
          -23.3612861
        ],
        [
          119.6697378,
          -23.3620149
        ],
        [
          119.6713901,
          -23.3624483
        ],
        [
          119.6717763,
          -23.3630786
        ],
        [
          119.6723342,
          -23.3630589
        ],
        [
          119.6726346,
          -23.3620346
        ],
        [
          119.6732569,
          -23.3613452
        ],
        [
          119.6737933,
          -23.3617194
        ],
        [
          119.6735573,
          -23.3623498
        ],
        [
          119.6729779,
          -23.3637484
        ],
        [
          119.671905,
          -23.3655803
        ],
        [
          119.6715832,
          -23.3668804
        ],
        [
          119.6714544,
          -23.3678062
        ],
        [
          119.6718407,
          -23.3681804
        ],
        [
          119.6728277,
          -23.3671364
        ],
        [
          119.6733642,
          -23.3660925
        ],
        [
          119.6747375,
          -23.3650288
        ],
        [
          119.6753812,
          -23.3645166
        ],
        [
          119.6759176,
          -23.3649303
        ],
        [
          119.6756601,
          -23.3659349
        ],
        [
          119.67448,
          -23.366841
        ],
        [
          119.6745014,
          -23.3673531
        ],
        [
          119.6752524,
          -23.3675698
        ],
        [
          119.6764541,
          -23.3671955
        ],
        [
          119.6772265,
          -23.3669986
        ],
        [
          119.6782351,
          -23.367491
        ],
        [
          119.6782351,
          -23.367491
        ],
        [
          119.6790504,
          -23.3679834
        ],
        [
          119.6792965,
          -23.3678353
        ],
        [
          119.6797363,
          -23.3674807
        ],
        [
          119.6801762,
          -23.3671557
        ],
        [
          119.6805517,
          -23.3668701
        ],
        [
          119.6807985,
          -23.3668405
        ],
        [
          119.6810453,
          -23.367264
        ],
        [
          119.6810667,
          -23.3676088
        ],
        [
          119.6809487,
          -23.3677269
        ],
        [
          119.6808199,
          -23.3679338
        ],
        [
          119.6808199,
          -23.3682588
        ]
      ],
    },
    {
      "id": "R07",
      "coordinates": [
        [
          119.6793014,
          -23.3652323
        ],
        [
          119.6790975,
          -23.3653603
        ],
        [
          119.6788508,
          -23.3653406
        ],
        [
          119.6788615,
          -23.3651042
        ],
        [
          119.6790117,
          -23.3648678
        ],
        [
          119.6794301,
          -23.3646512
        ],
        [
          119.6799666,
          -23.3643951
        ],
        [
          119.6804601,
          -23.3641686
        ],
        [
          119.6807712,
          -23.3638534
        ],
        [
          119.6812111,
          -23.3635678
        ],
        [
          119.6816724,
          -23.36342
        ],
        [
          119.6820587,
          -23.3633215
        ],
        [
          119.6831745,
          -23.362967
        ],
        [
          119.6844619,
          -23.3626025
        ],
        [
          119.6854705,
          -23.3622578
        ],
        [
          119.6860391,
          -23.3619229
        ],
        [
          119.6867043,
          -23.361657
        ],
        [
          119.6872944,
          -23.3613911
        ],
        [
          119.6878952,
          -23.3612236
        ],
        [
          119.688378,
          -23.3609577
        ],
        [
          119.6885604,
          -23.3604948
        ],
        [
          119.6885925,
          -23.3600811
        ],
        [
          119.6887106,
          -23.3599432
        ],
        [
          119.6895045,
          -23.3602387
        ],
        [
          119.6897405,
          -23.3607115
        ],
        [
          119.6899766,
          -23.3613024
        ],
        [
          119.6899551,
          -23.3615782
        ],
        [
          119.689762,
          -23.3621396
        ],
        [
          119.6896332,
          -23.3624253
        ],
        [
          119.6897513,
          -23.3625828
        ],
        [
          119.6899015,
          -23.3627109
        ],
        [
          119.6897727,
          -23.3630064
        ],
        [
          119.6899658,
          -23.363223
        ],
        [
          119.6902019,
          -23.3632723
        ],
        [
          119.6905237,
          -23.3634003
        ],
        [
          119.6904165,
          -23.3637746
        ],
        [
          119.6901053,
          -23.3640208
        ],
        [
          119.689644,
          -23.3641587
        ],
        [
          119.6867579,
          -23.3653406
        ],
        [
          119.6839899,
          -23.3664732
        ],
        [
          119.683226,
          -23.3667682
        ],
        [
          119.6830007,
          -23.3665319
        ],
        [
          119.6826574,
          -23.3664137
        ],
        [
          119.6825393,
          -23.3667387
        ]
      ],
    },
  ],
}

function checkConfig() {
  try {
    const routeIDs = appConfig.routes.map(r => r.id)
    for (const veh of appConfig.vehicles) {
      if (routeIDs.indexOf(veh.route) == -1) {
        log.error(`Can NOT find route with id==${veh.route} in ${fileName}`)
        process.exit(1)
      }
      if (!Number.isInteger(veh.number)) {
        log.error(`The number ${veh.number} of vehicle('${veh.type}') must be integer`)
        process.exit(1)
      }
    }
  } catch (err) {
    log.error(err);
    return null
  }
}
const logLevel = appConfig.logLevel
log.setLevel(logLevel)
checkConfig()
export { appConfig }