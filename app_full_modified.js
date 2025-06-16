const map = L.map('map').setView([-7.8, 110.4], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let allFeatures = [], heatmapLayer;
let bulanChart = null; // Global variable to hold Chart.js instance

const klitihData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2022-12-28"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.2880564,
          -7.79686051
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2022-12-28"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3649962,
          -7.872125423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2022-12-28"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3851368,
          -7.894878384
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-11-20"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3939096,
          -7.758911947
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-12-28"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3892405,
          -7.76575998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2022-10-22"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3804692,
          -7.790192398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2022-11-15"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3844885,
          -7.791052499
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2022-11-21"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3632299,
          -7.791625434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2022-12-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3534066,
          -7.792666879
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2022-12-21"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3705912,
          -7.78295587
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-10-09"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3520834,
          -7.6367745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-11-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3956854,
          -7.758431757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-11-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3885348,
          -7.745995146
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-12-03"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4827162,
          -7.790165133
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-12-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3540863,
          -7.746422673
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2022-12-18"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3306148,
          -7.789906155
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-26"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3231953,
          -7.85643057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-26"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3742804,
          -7.841967334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.2537608,
          -7.834365978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-01-14"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4855462,
          -7.836151118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-26"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3164504,
          -7.850367046
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-25"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3215313,
          -7.839117261
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-04"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3390859,
          -7.825504878
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-02-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3245016,
          -7.956514335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-01-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3395643,
          -7.863383797
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-04-27"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3328594,
          -7.800052003
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-05-07"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3745278,
          -7.865584607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-05-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3331914,
          -7.880161593
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-06-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4265426,
          -7.82338818
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-06-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3293236,
          -7.887353058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-06-25"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4100253,
          -7.793583831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-07-23"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3827696,
          -7.835808411
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-08-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3989541,
          -7.802293248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-08-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3573574,
          -7.849821144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-08-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3590077,
          -7.83333728
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-09-30"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3646797,
          -7.837692866
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-10-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3494669,
          -7.839641499
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-10-29"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3825381,
          -7.912873064
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-11-10"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3656435,
          -7.83562059
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-12-04"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3789723,
          -7.837201722
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2023-12-09"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3386402,
          -7.825482225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-02-07"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3653339,
          -7.8014135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-02-19"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3574688,
          -7.790077765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-01-15"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3777133,
          -7.796531555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-03-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3801513,
          -7.79952941
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-03-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.353928,
          -7.789774742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-04-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3622455,
          -7.808651548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-03-25"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3609943,
          -7.820681525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-03-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3580354,
          -7.788163123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-04-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3666974,
          -7.790106766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-04-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3526306,
          -7.785655971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-05-07"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3578394,
          -7.773756335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-05-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3863808,
          -7.790230204
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-05-29"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3955004,
          -7.800470633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-06-23"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3679354,
          -7.790330565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-08-15"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3557181,
          -7.818975747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-09-23"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3932837,
          -7.815656251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-09-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3831421,
          -7.797487952
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-10-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3580895,
          -7.811571103
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-10-01"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3553597,
          -7.820964867
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-10-28"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3879845,
          -7.806950657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2023-11-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3805881,
          -7.79021878
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-01-07"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3243205,
          -7.647328999
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-01-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3173648,
          -7.773786201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-01-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3311329,
          -7.782420188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-02-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3257376,
          -7.654524351
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-03-10"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3486328,
          -7.683785837
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-03-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3731088,
          -7.718831149
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-03-17"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3180498,
          -7.730498745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-03-19"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3171341,
          -7.801861007
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-04-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4020169,
          -7.659783496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-05-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3889178,
          -7.687224892
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-07-26"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3296037,
          -7.799873205
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-08-01"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.2957701,
          -7.690643904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-08-13"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.307305,
          -7.716675045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-08-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4394411,
          -7.762742974
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-10-17"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3319676,
          -7.64390203
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-01-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3964148,
          -7.653237095
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-01-29"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3443997,
          -7.74420779
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-02-12"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3485545,
          -7.701432354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-05-27"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3859096,
          -7.712727108
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-05-27"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4231361,
          -7.821747828
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-07-11"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4337518,
          -7.755834902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-10-14"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3625067,
          -7.725897095
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-10-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3574136,
          -7.644039122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-08-27"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4098585,
          -7.769663309
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2023-03-24"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3386214,
          -7.709446164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-01-27"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.337336,
          -7.806122795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-02-25"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.37589,
          -7.873621905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-03-03"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3851825,
          -7.894673509
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-03-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4095698,
          -7.802540163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-03-13"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.327607,
          -7.888249786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-03-26"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3168526,
          -8.004254612
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-04-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.2651381,
          -7.968612088
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-04-18"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3414093,
          -7.87540877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-06-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3261433,
          -7.877769973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-06-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3228624,
          -7.897851337
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-06-21"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3370049,
          -7.80040526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-05-31"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4058198,
          -7.836882969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-07-01"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.383459,
          -7.834772124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-07-18"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3480663,
          -7.789770668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Bantul",
        "tanggal": "2024-09-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3483182,
          -7.840504885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-01-07"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3678332,
          -7.782836614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-02-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3498512,
          -7.810024862
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-03-17"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3527836,
          -7.812386642
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-03-31"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3517537,
          -7.801014143
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-01-13"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3572813,
          -7.80865893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-04-17"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.356552,
          -7.792266181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Kota Yogyakarta",
        "tanggal": "2024-09-08"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3821235,
          -7.809140396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-02-04"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4282988,
          -7.765408967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-03-03"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4704527,
          -7.763450564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-04-03"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4828231,
          -7.811570645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-05-19"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3460924,
          -7.696188777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-05-25"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3497494,
          -7.740788367
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-03-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3895242,
          -7.682344194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-02-17"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3106431,
          -7.732343803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-01-06"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.4318823,
          -7.825721005
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "tempat": "Sleman",
        "tanggal": "2024-01-05"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          110.3350064,
          -7.79451144
        ]
      }
    }
  ]
};

allFeatures = klitihData.features;
tampilkanData(allFeatures);
isiFilter(allFeatures);
buatChart(allFeatures);
updateDataTable(allFeatures); // Initialize the data table with all features

function tampilkanData(features) {
  if (window.markersLayer) map.removeLayer(window.markersLayer);
  window.markersLayer = L.geoJSON(features, {
    onEachFeature: (feature, layer) => {
      const p = feature.properties;
      layer.bindPopup(`<b>${p.tempat}</b><br>${p.tanggal}`);
    }
  }).addTo(map);
}

// Update the data table to list filtered features
function updateDataTable(features) {
  const tableBody = document.getElementById('dataTable')?.getElementsByTagName('tbody')[0];
  if (!tableBody) return; // Table not found, skip
  tableBody.innerHTML = ''; // Clear existing rows

  features.forEach(feature => {
    const row = tableBody.insertRow();
    const tempatCell = row.insertCell(0);
    const tanggalCell = row.insertCell(1);
    tempatCell.textContent = feature.properties.tempat;
    tanggalCell.textContent = feature.properties.tanggal;
  });
}

function applyFilter() {
  const tahun = document.getElementById('filterTahun').value;
  const bulan = document.getElementById('filterBulan').value;
  const kabupaten = document.getElementById('filterKabupaten').value;

  const hasil = allFeatures.filter(f => {
    const tgl = f.properties.tanggal;
    const tempat = f.properties.tempat;
    return (tahun === '' || tgl.startsWith(tahun)) &&
           (bulan === '' || tgl.slice(5,7) === bulan) &&
           (kabupaten === '' || tempat === kabupaten);
  });
  tampilkanData(hasil);
  updateDataTable(hasil); // Update the table with filtered data
  buatChart(hasil); // Update the chart with filtered data
  if (document.getElementById('toggleHeatmap').checked) showHeatmap(hasil);
  else hideHeatmap();
}

function showHeatmap(features) {
  if (heatmapLayer) map.removeLayer(heatmapLayer);
  if (features.length > 0) {
  heatmapLayer = L.heatLayer(
    features.map(f => [f.geometry.coordinates[1], f.geometry.coordinates[0], 0.5]),
    {
      radius: 50,
      blur: 15,
      maxZoom: 15,
      minOpacity: 0.4,
      gradient: {
        0.1: 'blue',
        0.3: 'cyan',
        0.5: 'lime',
        0.7: 'yellow',
        1.0: 'red'
      }
    }
  ).addTo(map);
}
}

function hideHeatmap() {
  if (heatmapLayer) {
    map.removeLayer(heatmapLayer);
    heatmapLayer = null;
  }
}

// Populate filter dropdowns based on unique years, months, locations
function isiFilter(features) {
  const tahunSet = [...new Set(features.map(f => f.properties.tanggal.slice(0,4)))];
  const bulanSet = [...new Set(features.map(f => f.properties.tanggal.slice(5,7)))];
  const kabupatenSet = [...new Set(features.map(f => f.properties.tempat))];

  const opt = (arr) => arr.map(v => `<option value="${v}">${v}</option>`).join('');
  document.getElementById('filterTahun').innerHTML = `<option value="">Semua</option>${opt(tahunSet)}`;
  document.getElementById('filterBulan').innerHTML = `<option value="">Semua</option>${opt(bulanSet)}`;
  document.getElementById('filterKabupaten').innerHTML = `<option value="">Semua</option>${opt(kabupatenSet)}`;
}

// Improved buatChart function: creates or updates the bar chart dynamically
function buatChart(features) {
  const bulanLabel = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  const totalPerBulan = bulanLabel.map(b => features.filter(f => f.properties.tanggal.slice(5,7) === b).length);

  if (bulanChart) {
    // Update existing chart data and refresh
    bulanChart.data.datasets[0].data = totalPerBulan;
    bulanChart.update();
  } else {
    // Create new chart instance
    bulanChart = new Chart(document.getElementById('chartBulan'), {
      type: 'bar',
      data: {
        labels: bulanLabel,
        datasets: [{
          label: 'Jumlah Per Bulan',
          data: totalPerBulan,
          backgroundColor: 'blue'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  }
}

// Additional function to toggle heatmap when checkbox is clicked
function toggleHeat() {
  applyFilter(); // Reapply filter which checks heatmap toggle and updates accordingly
}
