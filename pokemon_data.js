const pokemonData = {
    1: {
        identifier: "bulbasaur",
        height: 7,
        weight: 69,
        base_experience: 64
    },
    2: {
        identifier: "ivysaur",
        height: 10,
        weight: 130,
        base_experience: 142
    },
    3: {
        identifier: "venusaur",
        height: 20,
        weight: 1000,
        base_experience: 236
    },
    4: {
        identifier: "charmander",
        height: 6,
        weight: 85,
        base_experience: 62
    },
    5: {
        identifier: "charmeleon",
        height: 11,
        weight: 190,
        base_experience: 142
    },
    6: {
        identifier: "charizard",
        height: 17,
        weight: 905,
        base_experience: 240
    },
    7: {
        identifier: "squirtle",
        height: 5,
        weight: 90,
        base_experience: 63
    },
    8: {
        identifier: "wartortle",
        height: 10,
        weight: 225,
        base_experience: 142
    },
    9: {
        identifier: "blastoise",
        height: 16,
        weight: 855,
        base_experience: 239
    },
    10: {
        identifier: "caterpie",
        height: 3,
        weight: 29,
        base_experience: 39
    },
    11: {
        identifier: "metapod",
        height: 7,
        weight: 99,
        base_experience: 72
    },
    12: {
        identifier: "butterfree",
        height: 11,
        weight: 320,
        base_experience: 178
    },
    13: {
        identifier: "weedle",
        height: 3,
        weight: 32,
        base_experience: 39
    },
    14: {
        identifier: "kakuna",
        height: 6,
        weight: 100,
        base_experience: 72
    },
    15: {
        identifier: "beedrill",
        height: 10,
        weight: 295,
        base_experience: 178
    },
    16: {
        identifier: "pidgey",
        height: 3,
        weight: 18,
        base_experience: 50
    },
    17: {
        identifier: "pidgeotto",
        height: 11,
        weight: 300,
        base_experience: 122
    },
    18: {
        identifier: "pidgeot",
        height: 15,
        weight: 395,
        base_experience: 216
    },
    19: {
        identifier: "rattata",
        height: 3,
        weight: 35,
        base_experience: 51
    },
    20: {
        identifier: "raticate",
        height: 7,
        weight: 185,
        base_experience: 145
    },
    21: {
        identifier: "spearow",
        height: 3,
        weight: 20,
        base_experience: 52
    },
    22: {
        identifier: "fearow",
        height: 12,
        weight: 380,
        base_experience: 155
    },
    23: {
        identifier: "ekans",
        height: 20,
        weight: 69,
        base_experience: 58
    },
    24: {
        identifier: "arbok",
        height: 35,
        weight: 650,
        base_experience: 153
    },
    25: {
        identifier: "pikachu",
        height: 4,
        weight: 60,
        base_experience: 112
    },
    26: {
        identifier: "raichu",
        height: 8,
        weight: 300,
        base_experience: 218
    },
    27: {
        identifier: "sandshrew",
        height: 6,
        weight: 120,
        base_experience: 60
    },
    28: {
        identifier: "sandslash",
        height: 10,
        weight: 295,
        base_experience: 158
    },
    29: {
        identifier: "nidoran-f",
        height: 4,
        weight: 70,
        base_experience: 55
    },
    30: {
        identifier: "nidorina",
        height: 8,
        weight: 200,
        base_experience: 128
    },
    31: {
        identifier: "nidoqueen",
        height: 13,
        weight: 600,
        base_experience: 227
    },
    32: {
        identifier: "nidoran-m",
        height: 5,
        weight: 90,
        base_experience: 55
    },
    33: {
        identifier: "nidorino",
        height: 9,
        weight: 195,
        base_experience: 128
    },
    34: {
        identifier: "nidoking",
        height: 14,
        weight: 620,
        base_experience: 227
    },
    35: {
        identifier: "clefairy",
        height: 6,
        weight: 75,
        base_experience: 113
    },
    36: {
        identifier: "clefable",
        height: 13,
        weight: 400,
        base_experience: 217
    },
    37: {
        identifier: "vulpix",
        height: 6,
        weight: 99,
        base_experience: 60
    },
    38: {
        identifier: "ninetales",
        height: 11,
        weight: 199,
        base_experience: 177
    },
    39: {
        identifier: "jigglypuff",
        height: 5,
        weight: 55,
        base_experience: 95
    },
    40: {
        identifier: "wigglytuff",
        height: 10,
        weight: 120,
        base_experience: 196
    },
    41: {
        identifier: "zubat",
        height: 8,
        weight: 75,
        base_experience: 49
    },
    42: {
        identifier: "golbat",
        height: 16,
        weight: 550,
        base_experience: 159
    },
    43: {
        identifier: "oddish",
        height: 5,
        weight: 54,
        base_experience: 64
    },
    44: {
        identifier: "gloom",
        height: 8,
        weight: 86,
        base_experience: 138
    },
    45: {
        identifier: "vileplume",
        height: 12,
        weight: 186,
        base_experience: 221
    },
    46: {
        identifier: "paras",
        height: 3,
        weight: 54,
        base_experience: 57
    },
    47: {
        identifier: "parasect",
        height: 10,
        weight: 295,
        base_experience: 142
    },
    48: {
        identifier: "venonat",
        height: 10,
        weight: 300,
        base_experience: 61
    },
    49: {
        identifier: "venomoth",
        height: 15,
        weight: 125,
        base_experience: 158
    },
    50: {
        identifier: "diglett",
        height: 2,
        weight: 8,
        base_experience: 53
    },
    51: {
        identifier: "dugtrio",
        height: 7,
        weight: 333,
        base_experience: 142
    },
    52: {
        identifier: "meowth",
        height: 4,
        weight: 42,
        base_experience: 58
    },
    53: {
        identifier: "persian",
        height: 10,
        weight: 320,
        base_experience: 154
    },
    54: {
        identifier: "psyduck",
        height: 8,
        weight: 196,
        base_experience: 64
    },
    55: {
        identifier: "golduck",
        height: 17,
        weight: 766,
        base_experience: 175
    },
    56: {
        identifier: "mankey",
        height: 5,
        weight: 280,
        base_experience: 61
    },
    57: {
        identifier: "primeape",
        height: 10,
        weight: 320,
        base_experience: 159
    },
    58: {
        identifier: "growlithe",
        height: 7,
        weight: 190,
        base_experience: 70
    },
    59: {
        identifier: "arcanine",
        height: 19,
        weight: 1550,
        base_experience: 194
    },
    60: {
        identifier: "poliwag",
        height: 6,
        weight: 124,
        base_experience: 60
    },
    61: {
        identifier: "poliwhirl",
        height: 10,
        weight: 200,
        base_experience: 135
    },
    62: {
        identifier: "poliwrath",
        height: 13,
        weight: 540,
        base_experience: 230
    },
    63: {
        identifier: "abra",
        height: 9,
        weight: 195,
        base_experience: 62
    },
    64: {
        identifier: "kadabra",
        height: 13,
        weight: 565,
        base_experience: 140
    },
    65: {
        identifier: "alakazam",
        height: 15,
        weight: 480,
        base_experience: 225
    },
    66: {
        identifier: "machop",
        height: 8,
        weight: 195,
        base_experience: 61
    },
    67: {
        identifier: "machoke",
        height: 15,
        weight: 705,
        base_experience: 142
    },
    68: {
        identifier: "machamp",
        height: 16,
        weight: 1300,
        base_experience: 227
    },
    69: {
        identifier: "bellsprout",
        height: 7,
        weight: 40,
        base_experience: 60
    },
    70: {
        identifier: "weepinbell",
        height: 10,
        weight: 64,
        base_experience: 137
    },
    71: {
        identifier: "victreebel",
        height: 17,
        weight: 155,
        base_experience: 221
    },
    72: {
        identifier: "tentacool",
        height: 9,
        weight: 455,
        base_experience: 67
    },
    73: {
        identifier: "tentacruel",
        height: 16,
        weight: 550,
        base_experience: 180
    },
    74: {
        identifier: "geodude",
        height: 4,
        weight: 200,
        base_experience: 60
    },
    75: {
        identifier: "graveler",
        height: 10,
        weight: 1050,
        base_experience: 137
    },
    76: {
        identifier: "golem",
        height: 14,
        weight: 3000,
        base_experience: 223
    },
    77: {
        identifier: "ponyta",
        height: 10,
        weight: 300,
        base_experience: 82
    },
    78: {
        identifier: "rapidash",
        height: 17,
        weight: 950,
        base_experience: 175
    },
    79: {
        identifier: "slowpoke",
        height: 12,
        weight: 360,
        base_experience: 63
    },
    80: {
        identifier: "slowbro",
        height: 16,
        weight: 785,
        base_experience: 172
    },
    81: {
        identifier: "magnemite",
        height: 3,
        weight: 60,
        base_experience: 65
    },
    82: {
        identifier: "magneton",
        height: 10,
        weight: 600,
        base_experience: 163
    },
    83: {
        identifier: "farfetchd",
        height: 8,
        weight: 150,
        base_experience: 123
    },
    84: {
        identifier: "doduo",
        height: 14,
        weight: 392,
        base_experience: 62
    },
    85: {
        identifier: "dodrio",
        height: 18,
        weight: 852,
        base_experience: 161
    },
    86: {
        identifier: "seel",
        height: 11,
        weight: 900,
        base_experience: 65
    },
    87: {
        identifier: "dewgong",
        height: 17,
        weight: 1200,
        base_experience: 166
    },
    88: {
        identifier: "grimer",
        height: 9,
        weight: 300,
        base_experience: 65
    },
    89: {
        identifier: "muk",
        height: 12,
        weight: 300,
        base_experience: 175
    },
    90: {
        identifier: "shellder",
        height: 3,
        weight: 40,
        base_experience: 61
    },
    91: {
        identifier: "cloyster",
        height: 15,
        weight: 1325,
        base_experience: 184
    },
    92: {
        identifier: "gastly",
        height: 13,
        weight: 1,
        base_experience: 62
    },
    93: {
        identifier: "haunter",
        height: 16,
        weight: 1,
        base_experience: 142
    },
    94: {
        identifier: "gengar",
        height: 15,
        weight: 405,
        base_experience: 225
    },
    95: {
        identifier: "onix",
        height: 88,
        weight: 2100,
        base_experience: 77
    },
    96: {
        identifier: "drowzee",
        height: 10,
        weight: 324,
        base_experience: 66
    },
    97: {
        identifier: "hypno",
        height: 16,
        weight: 756,
        base_experience: 169
    },
    98: {
        identifier: "krabby",
        height: 4,
        weight: 65,
        base_experience: 65
    },
    99: {
        identifier: "kingler",
        height: 13,
        weight: 600,
        base_experience: 166
    },
    100: {
        identifier: "voltorb",
        height: 5,
        weight: 104,
        base_experience: 66
    },
    101: {
        identifier: "electrode",
        height: 12,
        weight: 666,
        base_experience: 168
    },
    102: {
        identifier: "exeggcute",
        height: 4,
        weight: 25,
        base_experience: 65
    },
    103: {
        identifier: "exeggutor",
        height: 20,
        weight: 1200,
        base_experience: 182
    },
    104: {
        identifier: "cubone",
        height: 4,
        weight: 65,
        base_experience: 64
    },
    105: {
        identifier: "marowak",
        height: 10,
        weight: 450,
        base_experience: 149
    },
    106: {
        identifier: "hitmonlee",
        height: 15,
        weight: 498,
        base_experience: 159
    },
    107: {
        identifier: "hitmonchan",
        height: 14,
        weight: 502,
        base_experience: 159
    },
    108: {
        identifier: "lickitung",
        height: 12,
        weight: 655,
        base_experience: 77
    },
    109: {
        identifier: "koffing",
        height: 6,
        weight: 10,
        base_experience: 68
    },
    110: {
        identifier: "weezing",
        height: 12,
        weight: 95,
        base_experience: 172
    },
    111: {
        identifier: "rhyhorn",
        height: 10,
        weight: 1150,
        base_experience: 69
    },
    112: {
        identifier: "rhydon",
        height: 19,
        weight: 1200,
        base_experience: 170
    },
    113: {
        identifier: "chansey",
        height: 11,
        weight: 346,
        base_experience: 395
    },
    114: {
        identifier: "tangela",
        height: 10,
        weight: 350,
        base_experience: 87
    },
    115: {
        identifier: "kangaskhan",
        height: 22,
        weight: 800,
        base_experience: 172
    },
    116: {
        identifier: "horsea",
        height: 4,
        weight: 80,
        base_experience: 59
    },
    117: {
        identifier: "seadra",
        height: 12,
        weight: 250,
        base_experience: 154
    },
    118: {
        identifier: "goldeen",
        height: 6,
        weight: 150,
        base_experience: 64
    },
    119: {
        identifier: "seaking",
        height: 13,
        weight: 390,
        base_experience: 158
    },
    120: {
        identifier: "staryu",
        height: 8,
        weight: 345,
        base_experience: 68
    },
    121: {
        identifier: "starmie",
        height: 11,
        weight: 800,
        base_experience: 182
    },
    122: {
        identifier: "mr-mime",
        height: 13,
        weight: 545,
        base_experience: 161
    },
    123: {
        identifier: "scyther",
        height: 15,
        weight: 560,
        base_experience: 100
    },
    124: {
        identifier: "jynx",
        height: 14,
        weight: 406,
        base_experience: 159
    },
    125: {
        identifier: "electabuzz",
        height: 11,
        weight: 300,
        base_experience: 172
    },
    126: {
        identifier: "magmar",
        height: 13,
        weight: 445,
        base_experience: 173
    },
    127: {
        identifier: "pinsir",
        height: 15,
        weight: 550,
        base_experience: 175
    },
    128: {
        identifier: "tauros",
        height: 14,
        weight: 884,
        base_experience: 172
    },
    129: {
        identifier: "magikarp",
        height: 9,
        weight: 100,
        base_experience: 40
    },
    130: {
        identifier: "gyarados",
        height: 65,
        weight: 2350,
        base_experience: 189
    },
    131: {
        identifier: "lapras",
        height: 25,
        weight: 2200,
        base_experience: 187
    },
    132: {
        identifier: "ditto",
        height: 3,
        weight: 40,
        base_experience: 101
    },
    133: {
        identifier: "eevee",
        height: 3,
        weight: 65,
        base_experience: 65
    },
    134: {
        identifier: "vaporeon",
        height: 10,
        weight: 290,
        base_experience: 184
    },
    135: {
        identifier: "jolteon",
        height: 8,
        weight: 245,
        base_experience: 184
    },
    136: {
        identifier: "flareon",
        height: 9,
        weight: 250,
        base_experience: 184
    },
    137: {
        identifier: "porygon",
        height: 8,
        weight: 365,
        base_experience: 79
    },
    138: {
        identifier: "omanyte",
        height: 4,
        weight: 75,
        base_experience: 71
    },
    139: {
        identifier: "omastar",
        height: 10,
        weight: 350,
        base_experience: 173
    },
    140: {
        identifier: "kabuto",
        height: 5,
        weight: 115,
        base_experience: 71
    },
    141: {
        identifier: "kabutops",
        height: 13,
        weight: 405,
        base_experience: 173
    },
    142: {
        identifier: "aerodactyl",
        height: 18,
        weight: 590,
        base_experience: 180
    },
    143: {
        identifier: "snorlax",
        height: 21,
        weight: 4600,
        base_experience: 189
    },
    144: {
        identifier: "articuno",
        height: 17,
        weight: 554,
        base_experience: 261
    },
    145: {
        identifier: "zapdos",
        height: 16,
        weight: 526,
        base_experience: 261
    },
    146: {
        identifier: "moltres",
        height: 20,
        weight: 600,
        base_experience: 261
    },
    147: {
        identifier: "dratini",
        height: 18,
        weight: 33,
        base_experience: 60
    },
    148: {
        identifier: "dragonair",
        height: 40,
        weight: 165,
        base_experience: 147
    },
    149: {
        identifier: "dragonite",
        height: 22,
        weight: 2100,
        base_experience: 270
    },
    150: {
        identifier: "mewtwo",
        height: 20,
        weight: 1220,
        base_experience: 306
    },
    151: {
        identifier: "mew",
        height: 4,
        weight: 40,
        base_experience: 270
    },
    152: {
        identifier: "chikorita",
        height: 9,
        weight: 64,
        base_experience: 64
    },
    153: {
        identifier: "bayleef",
        height: 12,
        weight: 158,
        base_experience: 142
    },
    154: {
        identifier: "meganium",
        height: 18,
        weight: 1005,
        base_experience: 236
    },
    155: {
        identifier: "cyndaquil",
        height: 5,
        weight: 79,
        base_experience: 62
    },
    156: {
        identifier: "quilava",
        height: 9,
        weight: 190,
        base_experience: 142
    },
    157: {
        identifier: "typhlosion",
        height: 17,
        weight: 795,
        base_experience: 240
    },
    158: {
        identifier: "totodile",
        height: 6,
        weight: 95,
        base_experience: 63
    },
    159: {
        identifier: "croconaw",
        height: 11,
        weight: 250,
        base_experience: 142
    },
    160: {
        identifier: "feraligatr",
        height: 23,
        weight: 888,
        base_experience: 239
    },
    161: {
        identifier: "sentret",
        height: 8,
        weight: 60,
        base_experience: 43
    },
    162: {
        identifier: "furret",
        height: 18,
        weight: 325,
        base_experience: 145
    },
    163: {
        identifier: "hoothoot",
        height: 7,
        weight: 212,
        base_experience: 52
    },
    164: {
        identifier: "noctowl",
        height: 16,
        weight: 408,
        base_experience: 155
    },
    165: {
        identifier: "ledyba",
        height: 10,
        weight: 108,
        base_experience: 53
    },
    166: {
        identifier: "ledian",
        height: 14,
        weight: 356,
        base_experience: 137
    },
    167: {
        identifier: "spinarak",
        height: 5,
        weight: 85,
        base_experience: 50
    },
    168: {
        identifier: "ariados",
        height: 11,
        weight: 335,
        base_experience: 137
    },
    169: {
        identifier: "crobat",
        height: 18,
        weight: 750,
        base_experience: 241
    },
    170: {
        identifier: "chinchou",
        height: 5,
        weight: 120,
        base_experience: 66
    },
    171: {
        identifier: "lanturn",
        height: 12,
        weight: 225,
        base_experience: 161
    },
    172: {
        identifier: "pichu",
        height: 3,
        weight: 20,
        base_experience: 41
    },
    173: {
        identifier: "cleffa",
        height: 3,
        weight: 30,
        base_experience: 44
    },
    174: {
        identifier: "igglybuff",
        height: 3,
        weight: 10,
        base_experience: 42
    },
    175: {
        identifier: "togepi",
        height: 3,
        weight: 15,
        base_experience: 49
    },
    176: {
        identifier: "togetic",
        height: 6,
        weight: 32,
        base_experience: 142
    },
    177: {
        identifier: "natu",
        height: 2,
        weight: 20,
        base_experience: 64
    },
    178: {
        identifier: "xatu",
        height: 15,
        weight: 150,
        base_experience: 165
    },
    179: {
        identifier: "mareep",
        height: 6,
        weight: 78,
        base_experience: 56
    },
    180: {
        identifier: "flaaffy",
        height: 8,
        weight: 133,
        base_experience: 128
    },
    181: {
        identifier: "ampharos",
        height: 14,
        weight: 615,
        base_experience: 230
    },
    182: {
        identifier: "bellossom",
        height: 4,
        weight: 58,
        base_experience: 221
    },
    183: {
        identifier: "marill",
        height: 4,
        weight: 85,
        base_experience: 88
    },
    184: {
        identifier: "azumarill",
        height: 8,
        weight: 285,
        base_experience: 189
    },
    185: {
        identifier: "sudowoodo",
        height: 12,
        weight: 380,
        base_experience: 144
    },
    186: {
        identifier: "politoed",
        height: 11,
        weight: 339,
        base_experience: 225
    },
    187: {
        identifier: "hoppip",
        height: 4,
        weight: 5,
        base_experience: 50
    },
    188: {
        identifier: "skiploom",
        height: 6,
        weight: 10,
        base_experience: 119
    },
    189: {
        identifier: "jumpluff",
        height: 8,
        weight: 30,
        base_experience: 207
    },
    190: {
        identifier: "aipom",
        height: 8,
        weight: 115,
        base_experience: 72
    },
    191: {
        identifier: "sunkern",
        height: 3,
        weight: 18,
        base_experience: 36
    },
    192: {
        identifier: "sunflora",
        height: 8,
        weight: 85,
        base_experience: 149
    },
    193: {
        identifier: "yanma",
        height: 12,
        weight: 380,
        base_experience: 78
    },
    194: {
        identifier: "wooper",
        height: 4,
        weight: 85,
        base_experience: 42
    },
    195: {
        identifier: "quagsire",
        height: 14,
        weight: 750,
        base_experience: 151
    },
    196: {
        identifier: "espeon",
        height: 9,
        weight: 265,
        base_experience: 184
    },
    197: {
        identifier: "umbreon",
        height: 10,
        weight: 270,
        base_experience: 184
    },
    198: {
        identifier: "murkrow",
        height: 5,
        weight: 21,
        base_experience: 81
    },
    199: {
        identifier: "slowking",
        height: 20,
        weight: 795,
        base_experience: 172
    },
    200: {
        identifier: "misdreavus",
        height: 7,
        weight: 10,
        base_experience: 87
    }
}