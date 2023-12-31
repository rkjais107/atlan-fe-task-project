const orders = [
  {
    orderID: 10248,
    customerID: "VINET",
    employeeID: 5,
    orderDate: "1996-07-04 00:00:00.000",
    requiredDate: "1996-08-01 00:00:00.000",
    shippedDate: "1996-07-16 00:00:00.000",
    shipVia: 3,
    freight: 32.38,
    shipName: "Vins et alcools Chevalier",
    shipAddress: "59 rue de l'Abbaye",
    shipCity: "Reims",
    shipRegion: "NULL",
    shipPostalCode: 51100,
    shipCountry: "France",
  },
  {
    orderID: 10249,
    customerID: "TOMSP",
    employeeID: 6,
    orderDate: "1996-07-05 00:00:00.000",
    requiredDate: "1996-08-16 00:00:00.000",
    shippedDate: "1996-07-10 00:00:00.000",
    shipVia: 1,
    freight: 11.61,
    shipName: "Toms Spezialitäten",
    shipAddress: "Luisenstr. 48",
    shipCity: "Münster",
    shipRegion: "NULL",
    shipPostalCode: 44087,
    shipCountry: "Germany",
  },
  {
    orderID: 10250,
    customerID: "HANAR",
    employeeID: 4,
    orderDate: "1996-07-08 00:00:00.000",
    requiredDate: "1996-08-05 00:00:00.000",
    shippedDate: "1996-07-12 00:00:00.000",
    shipVia: 2,
    freight: 65.83,
    shipName: "Hanari Carnes",
    shipAddress: "Rua do Paço 67",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "05454-876",
    shipCountry: "Brazil",
  },
  {
    orderID: 10251,
    customerID: "VICTE",
    employeeID: 3,
    orderDate: "1996-07-08 00:00:00.000",
    requiredDate: "1996-08-05 00:00:00.000",
    shippedDate: "1996-07-15 00:00:00.000",
    shipVia: 1,
    freight: 41.34,
    shipName: "Victuailles en stock",
    shipAddress: "2 rue du Commerce",
    shipCity: "Lyon",
    shipRegion: "NULL",
    shipPostalCode: 69004,
    shipCountry: "France",
  },
  {
    orderID: 10252,
    customerID: "SUPRD",
    employeeID: 4,
    orderDate: "1996-07-09 00:00:00.000",
    requiredDate: "1996-08-06 00:00:00.000",
    shippedDate: "1996-07-11 00:00:00.000",
    shipVia: 2,
    freight: 51.3,
    shipName: "Suprêmes délices",
    shipAddress: "Boulevard Tirou 255",
    shipCity: "Charleroi",
    shipRegion: "NULL",
    shipPostalCode: "B-6000",
    shipCountry: "Belgium",
  },
  {
    orderID: 10253,
    customerID: "HANAR",
    employeeID: 3,
    orderDate: "1996-07-10 00:00:00.000",
    requiredDate: "1996-07-24 00:00:00.000",
    shippedDate: "1996-07-16 00:00:00.000",
    shipVia: 2,
    freight: 58.17,
    shipName: "Hanari Carnes",
    shipAddress: "Rua do Paço 67",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "05454-876",
    shipCountry: "Brazil",
  },
  {
    orderID: 10254,
    customerID: "CHOPS",
    employeeID: 5,
    orderDate: "1996-07-11 00:00:00.000",
    requiredDate: "1996-08-08 00:00:00.000",
    shippedDate: "1996-07-23 00:00:00.000",
    shipVia: 2,
    freight: 22.98,
    shipName: "Chop-suey Chinese",
    shipAddress: "Hauptstr. 31",
    shipCity: "Bern",
    shipRegion: "NULL",
    shipPostalCode: 3012,
    shipCountry: "Switzerland",
  },
  {
    orderID: 10255,
    customerID: "RICSU",
    employeeID: 9,
    orderDate: "1996-07-12 00:00:00.000",
    requiredDate: "1996-08-09 00:00:00.000",
    shippedDate: "1996-07-15 00:00:00.000",
    shipVia: 3,
    freight: 148.33,
    shipName: "Richter Supermarkt",
    shipAddress: "Starenweg 5",
    shipCity: "Genève",
    shipRegion: "NULL",
    shipPostalCode: 1204,
    shipCountry: "Switzerland",
  },
  {
    orderID: 10256,
    customerID: "WELLI",
    employeeID: 3,
    orderDate: "1996-07-15 00:00:00.000",
    requiredDate: "1996-08-12 00:00:00.000",
    shippedDate: "1996-07-17 00:00:00.000",
    shipVia: 2,
    freight: 13.97,
    shipName: "Wellington Importadora",
    shipAddress: "Rua do Mercado 12",
    shipCity: "Resende",
    shipRegion: "SP",
    shipPostalCode: "08737-363",
    shipCountry: "Brazil",
  },
  {
    orderID: 10257,
    customerID: "HILAA",
    employeeID: 4,
    orderDate: "1996-07-16 00:00:00.000",
    requiredDate: "1996-08-13 00:00:00.000",
    shippedDate: "1996-07-22 00:00:00.000",
    shipVia: 3,
    freight: 81.91,
    shipName: "HILARION-Abastos",
    shipAddress: "Carrera 22 con Ave. Carlos Soublette #8-35",
    shipCity: "San Cristóbal",
    shipRegion: "Táchira",
    shipPostalCode: 5022,
    shipCountry: "Venezuela",
  },
  {
    orderID: 10258,
    customerID: "ERNSH",
    employeeID: 1,
    orderDate: "1996-07-17 00:00:00.000",
    requiredDate: "1996-08-14 00:00:00.000",
    shippedDate: "1996-07-23 00:00:00.000",
    shipVia: 1,
    freight: 140.51,
    shipName: "Ernst Handel",
    shipAddress: "Kirchgasse 6",
    shipCity: "Graz",
    shipRegion: "NULL",
    shipPostalCode: 8010,
    shipCountry: "Austria",
  },
  {
    orderID: 10259,
    customerID: "CENTC",
    employeeID: 4,
    orderDate: "1996-07-18 00:00:00.000",
    requiredDate: "1996-08-15 00:00:00.000",
    shippedDate: "1996-07-25 00:00:00.000",
    shipVia: 3,
    freight: 3.25,
    shipName: "Centro comercial Moctezuma",
    shipAddress: "Sierras de Granada 9993",
    shipCity: "México D.F.",
    shipRegion: "NULL",
    shipPostalCode: "05022",
    shipCountry: "Mexico",
  },
  {
    orderID: 10260,
    customerID: "OTTIK",
    employeeID: 4,
    orderDate: "1996-07-19 00:00:00.000",
    requiredDate: "1996-08-16 00:00:00.000",
    shippedDate: "1996-07-29 00:00:00.000",
    shipVia: 1,
    freight: 55.09,
    shipName: "Ottilies Käseladen",
    shipAddress: "Mehrheimerstr. 369",
    shipCity: "Köln",
    shipRegion: "NULL",
    shipPostalCode: 50739,
    shipCountry: "Germany",
  },
  {
    orderID: 10261,
    customerID: "QUEDE",
    employeeID: 4,
    orderDate: "1996-07-19 00:00:00.000",
    requiredDate: "1996-08-16 00:00:00.000",
    shippedDate: "1996-07-30 00:00:00.000",
    shipVia: 2,
    freight: 3.05,
    shipName: "Que Delícia",
    shipAddress: "Rua da Panificadora 12",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "02389-673",
    shipCountry: "Brazil",
  },
  {
    orderID: 10262,
    customerID: "RATTC",
    employeeID: 8,
    orderDate: "1996-07-22 00:00:00.000",
    requiredDate: "1996-08-19 00:00:00.000",
    shippedDate: "1996-07-25 00:00:00.000",
    shipVia: 3,
    freight: 48.29,
    shipName: "Rattlesnake Canyon Grocery",
    shipAddress: "2817 Milton Dr.",
    shipCity: "Albuquerque",
    shipRegion: "NM",
    shipPostalCode: 87110,
    shipCountry: "USA",
  },
  {
    orderID: 10263,
    customerID: "ERNSH",
    employeeID: 9,
    orderDate: "1996-07-23 00:00:00.000",
    requiredDate: "1996-08-20 00:00:00.000",
    shippedDate: "1996-07-31 00:00:00.000",
    shipVia: 3,
    freight: 146.06,
    shipName: "Ernst Handel",
    shipAddress: "Kirchgasse 6",
    shipCity: "Graz",
    shipRegion: "NULL",
    shipPostalCode: 8010,
    shipCountry: "Austria",
  },
  {
    orderID: 10264,
    customerID: "FOLKO",
    employeeID: 6,
    orderDate: "1996-07-24 00:00:00.000",
    requiredDate: "1996-08-21 00:00:00.000",
    shippedDate: "1996-08-23 00:00:00.000",
    shipVia: 3,
    freight: 3.67,
    shipName: "Folk och fä HB",
    shipAddress: "Åkergatan 24",
    shipCity: "Bräcke",
    shipRegion: "NULL",
    shipPostalCode: "S-844 67",
    shipCountry: "Sweden",
  },
  {
    orderID: 10265,
    customerID: "BLONP",
    employeeID: 2,
    orderDate: "1996-07-25 00:00:00.000",
    requiredDate: "1996-08-22 00:00:00.000",
    shippedDate: "1996-08-12 00:00:00.000",
    shipVia: 1,
    freight: 55.28,
    shipName: "Blondel père et fils",
    shipAddress: "24 place Kléber",
    shipCity: "Strasbourg",
    shipRegion: "NULL",
    shipPostalCode: 67000,
    shipCountry: "France",
  },
  {
    orderID: 10266,
    customerID: "WARTH",
    employeeID: 3,
    orderDate: "1996-07-26 00:00:00.000",
    requiredDate: "1996-09-06 00:00:00.000",
    shippedDate: "1996-07-31 00:00:00.000",
    shipVia: 3,
    freight: 25.73,
    shipName: "Wartian Herkku",
    shipAddress: "Torikatu 38",
    shipCity: "Oulu",
    shipRegion: "NULL",
    shipPostalCode: 90110,
    shipCountry: "Finland",
  },
  {
    orderID: 10267,
    customerID: "FRANK",
    employeeID: 4,
    orderDate: "1996-07-29 00:00:00.000",
    requiredDate: "1996-08-26 00:00:00.000",
    shippedDate: "1996-08-06 00:00:00.000",
    shipVia: 1,
    freight: 208.58,
    shipName: "Frankenversand",
    shipAddress: "Berliner Platz 43",
    shipCity: "München",
    shipRegion: "NULL",
    shipPostalCode: 80805,
    shipCountry: "Germany",
  },
  {
    orderID: 10268,
    customerID: "GROSR",
    employeeID: 8,
    orderDate: "1996-07-30 00:00:00.000",
    requiredDate: "1996-08-27 00:00:00.000",
    shippedDate: "1996-08-02 00:00:00.000",
    shipVia: 3,
    freight: 66.29,
    shipName: "GROSELLA-Restaurante",
    shipAddress: "5ª Ave. Los Palos Grandes",
    shipCity: "Caracas",
    shipRegion: "DF",
    shipPostalCode: 1081,
    shipCountry: "Venezuela",
  },
  {
    orderID: 10269,
    customerID: "WHITC",
    employeeID: 5,
    orderDate: "1996-07-31 00:00:00.000",
    requiredDate: "1996-08-14 00:00:00.000",
    shippedDate: "1996-08-09 00:00:00.000",
    shipVia: 1,
    freight: 4.56,
    shipName: "White Clover Markets",
    shipAddress: "1029 - 12th Ave. S.",
    shipCity: "Seattle",
    shipRegion: "WA",
    shipPostalCode: 98124,
    shipCountry: "USA",
  },
  {
    orderID: 10270,
    customerID: "WARTH",
    employeeID: 1,
    orderDate: "1996-08-01 00:00:00.000",
    requiredDate: "1996-08-29 00:00:00.000",
    shippedDate: "1996-08-02 00:00:00.000",
    shipVia: 1,
    freight: 136.54,
    shipName: "Wartian Herkku",
    shipAddress: "Torikatu 38",
    shipCity: "Oulu",
    shipRegion: "NULL",
    shipPostalCode: 90110,
    shipCountry: "Finland",
  },
  {
    orderID: 10271,
    customerID: "SPLIR",
    employeeID: 6,
    orderDate: "1996-08-01 00:00:00.000",
    requiredDate: "1996-08-29 00:00:00.000",
    shippedDate: "1996-08-30 00:00:00.000",
    shipVia: 2,
    freight: 4.54,
    shipName: "Split Rail Beer & Ale",
    shipAddress: "P.O. Box 555",
    shipCity: "Lander",
    shipRegion: "WY",
    shipPostalCode: 82520,
    shipCountry: "USA",
  },
  {
    orderID: 10272,
    customerID: "RATTC",
    employeeID: 6,
    orderDate: "1996-08-02 00:00:00.000",
    requiredDate: "1996-08-30 00:00:00.000",
    shippedDate: "1996-08-06 00:00:00.000",
    shipVia: 2,
    freight: 98.03,
    shipName: "Rattlesnake Canyon Grocery",
    shipAddress: "2817 Milton Dr.",
    shipCity: "Albuquerque",
    shipRegion: "NM",
    shipPostalCode: 87110,
    shipCountry: "USA",
  },
  {
    orderID: 10273,
    customerID: "QUICK",
    employeeID: 3,
    orderDate: "1996-08-05 00:00:00.000",
    requiredDate: "1996-09-02 00:00:00.000",
    shippedDate: "1996-08-12 00:00:00.000",
    shipVia: 3,
    freight: 76.07,
    shipName: "QUICK-Stop",
    shipAddress: "Taucherstraße 10",
    shipCity: "Cunewalde",
    shipRegion: "NULL",
    shipPostalCode: "01307",
    shipCountry: "Germany",
  },
  {
    orderID: 10274,
    customerID: "VINET",
    employeeID: 6,
    orderDate: "1996-08-06 00:00:00.000",
    requiredDate: "1996-09-03 00:00:00.000",
    shippedDate: "1996-08-16 00:00:00.000",
    shipVia: 1,
    freight: 6.01,
    shipName: "Vins et alcools Chevalier",
    shipAddress: "59 rue de l'Abbaye",
    shipCity: "Reims",
    shipRegion: "NULL",
    shipPostalCode: 51100,
    shipCountry: "France",
  },
  {
    orderID: 10275,
    customerID: "MAGAA",
    employeeID: 1,
    orderDate: "1996-08-07 00:00:00.000",
    requiredDate: "1996-09-04 00:00:00.000",
    shippedDate: "1996-08-09 00:00:00.000",
    shipVia: 1,
    freight: 26.93,
    shipName: "Magazzini Alimentari Riuniti",
    shipAddress: "Via Ludovico il Moro 22",
    shipCity: "Bergamo",
    shipRegion: "NULL",
    shipPostalCode: 24100,
    shipCountry: "Italy",
  },
  {
    orderID: 10276,
    customerID: "TORTU",
    employeeID: 8,
    orderDate: "1996-08-08 00:00:00.000",
    requiredDate: "1996-08-22 00:00:00.000",
    shippedDate: "1996-08-14 00:00:00.000",
    shipVia: 3,
    freight: 13.84,
    shipName: "Tortuga Restaurante",
    shipAddress: "Avda. Azteca 123",
    shipCity: "México D.F.",
    shipRegion: "NULL",
    shipPostalCode: "05033",
    shipCountry: "Mexico",
  },
  {
    orderID: 10277,
    customerID: "MORGK",
    employeeID: 2,
    orderDate: "1996-08-09 00:00:00.000",
    requiredDate: "1996-09-06 00:00:00.000",
    shippedDate: "1996-08-13 00:00:00.000",
    shipVia: 3,
    freight: 125.77,
    shipName: "Morgenstern Gesundkost",
    shipAddress: "Heerstr. 22",
    shipCity: "Leipzig",
    shipRegion: "NULL",
    shipPostalCode: "04179",
    shipCountry: "Germany",
  },
  {
    orderID: 10278,
    customerID: "BERGS",
    employeeID: 8,
    orderDate: "1996-08-12 00:00:00.000",
    requiredDate: "1996-09-09 00:00:00.000",
    shippedDate: "1996-08-16 00:00:00.000",
    shipVia: 2,
    freight: 92.69,
    shipName: "Berglunds snabbköp",
    shipAddress: "Berguvsvägen  8",
    shipCity: "Luleå",
    shipRegion: "NULL",
    shipPostalCode: "S-958 22",
    shipCountry: "Sweden",
  },
  {
    orderID: 10279,
    customerID: "LEHMS",
    employeeID: 8,
    orderDate: "1996-08-13 00:00:00.000",
    requiredDate: "1996-09-10 00:00:00.000",
    shippedDate: "1996-08-16 00:00:00.000",
    shipVia: 2,
    freight: 25.83,
    shipName: "Lehmanns Marktstand",
    shipAddress: "Magazinweg 7",
    shipCity: "Frankfurt a.M.",
    shipRegion: "NULL",
    shipPostalCode: 60528,
    shipCountry: "Germany",
  },
  {
    orderID: 10280,
    customerID: "BERGS",
    employeeID: 2,
    orderDate: "1996-08-14 00:00:00.000",
    requiredDate: "1996-09-11 00:00:00.000",
    shippedDate: "1996-09-12 00:00:00.000",
    shipVia: 1,
    freight: 8.98,
    shipName: "Berglunds snabbköp",
    shipAddress: "Berguvsvägen  8",
    shipCity: "Luleå",
    shipRegion: "NULL",
    shipPostalCode: "S-958 22",
    shipCountry: "Sweden",
  },
  {
    orderID: 10281,
    customerID: "ROMEY",
    employeeID: 4,
    orderDate: "1996-08-14 00:00:00.000",
    requiredDate: "1996-08-28 00:00:00.000",
    shippedDate: "1996-08-21 00:00:00.000",
    shipVia: 1,
    freight: 2.94,
    shipName: "Romero y tomillo",
    shipAddress: "Gran Vía 1",
    shipCity: "Madrid",
    shipRegion: "NULL",
    shipPostalCode: 28001,
    shipCountry: "Spain",
  },
  {
    orderID: 10282,
    customerID: "ROMEY",
    employeeID: 4,
    orderDate: "1996-08-15 00:00:00.000",
    requiredDate: "1996-09-12 00:00:00.000",
    shippedDate: "1996-08-21 00:00:00.000",
    shipVia: 1,
    freight: 12.69,
    shipName: "Romero y tomillo",
    shipAddress: "Gran Vía 1",
    shipCity: "Madrid",
    shipRegion: "NULL",
    shipPostalCode: 28001,
    shipCountry: "Spain",
  },
  {
    orderID: 10283,
    customerID: "LILAS",
    employeeID: 3,
    orderDate: "1996-08-16 00:00:00.000",
    requiredDate: "1996-09-13 00:00:00.000",
    shippedDate: "1996-08-23 00:00:00.000",
    shipVia: 3,
    freight: 84.81,
    shipName: "LILA-Supermercado",
    shipAddress: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
    shipCity: "Barquisimeto",
    shipRegion: "Lara",
    shipPostalCode: 3508,
    shipCountry: "Venezuela",
  },
  {
    orderID: 10284,
    customerID: "LEHMS",
    employeeID: 4,
    orderDate: "1996-08-19 00:00:00.000",
    requiredDate: "1996-09-16 00:00:00.000",
    shippedDate: "1996-08-27 00:00:00.000",
    shipVia: 1,
    freight: 76.56,
    shipName: "Lehmanns Marktstand",
    shipAddress: "Magazinweg 7",
    shipCity: "Frankfurt a.M.",
    shipRegion: "NULL",
    shipPostalCode: 60528,
    shipCountry: "Germany",
  },
  {
    orderID: 10285,
    customerID: "QUICK",
    employeeID: 1,
    orderDate: "1996-08-20 00:00:00.000",
    requiredDate: "1996-09-17 00:00:00.000",
    shippedDate: "1996-08-26 00:00:00.000",
    shipVia: 2,
    freight: 76.83,
    shipName: "QUICK-Stop",
    shipAddress: "Taucherstraße 10",
    shipCity: "Cunewalde",
    shipRegion: "NULL",
    shipPostalCode: "01307",
    shipCountry: "Germany",
  },
  {
    orderID: 10286,
    customerID: "QUICK",
    employeeID: 8,
    orderDate: "1996-08-21 00:00:00.000",
    requiredDate: "1996-09-18 00:00:00.000",
    shippedDate: "1996-08-30 00:00:00.000",
    shipVia: 3,
    freight: 229.24,
    shipName: "QUICK-Stop",
    shipAddress: "Taucherstraße 10",
    shipCity: "Cunewalde",
    shipRegion: "NULL",
    shipPostalCode: "01307",
    shipCountry: "Germany",
  },
  {
    orderID: 10287,
    customerID: "RICAR",
    employeeID: 8,
    orderDate: "1996-08-22 00:00:00.000",
    requiredDate: "1996-09-19 00:00:00.000",
    shippedDate: "1996-08-28 00:00:00.000",
    shipVia: 3,
    freight: 12.76,
    shipName: "Ricardo Adocicados",
    shipAddress: "Av. Copacabana 267",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "02389-890",
    shipCountry: "Brazil",
  },
  {
    orderID: 10288,
    customerID: "REGGC",
    employeeID: 4,
    orderDate: "1996-08-23 00:00:00.000",
    requiredDate: "1996-09-20 00:00:00.000",
    shippedDate: "1996-09-03 00:00:00.000",
    shipVia: 1,
    freight: 7.45,
    shipName: "Reggiani Caseifici",
    shipAddress: "Strada Provinciale 124",
    shipCity: "Reggio Emilia",
    shipRegion: "NULL",
    shipPostalCode: 42100,
    shipCountry: "Italy",
  },
  {
    orderID: 10289,
    customerID: "BSBEV",
    employeeID: 7,
    orderDate: "1996-08-26 00:00:00.000",
    requiredDate: "1996-09-23 00:00:00.000",
    shippedDate: "1996-08-28 00:00:00.000",
    shipVia: 3,
    freight: 22.77,
    shipName: "B's Beverages",
    shipAddress: "Fauntleroy Circus",
    shipCity: "London",
    shipRegion: "NULL",
    shipPostalCode: "EC2 5NT",
    shipCountry: "UK",
  },
  {
    orderID: 10290,
    customerID: "COMMI",
    employeeID: 8,
    orderDate: "1996-08-27 00:00:00.000",
    requiredDate: "1996-09-24 00:00:00.000",
    shippedDate: "1996-09-03 00:00:00.000",
    shipVia: 1,
    freight: 79.7,
    shipName: "Comércio Mineiro",
    shipAddress: "Av. dos Lusíadas 23",
    shipCity: "Sao Paulo",
    shipRegion: "SP",
    shipPostalCode: "05432-043",
    shipCountry: "Brazil",
  },
  {
    orderID: 10291,
    customerID: "QUEDE",
    employeeID: 6,
    orderDate: "1996-08-27 00:00:00.000",
    requiredDate: "1996-09-24 00:00:00.000",
    shippedDate: "1996-09-04 00:00:00.000",
    shipVia: 2,
    freight: 6.4,
    shipName: "Que Delícia",
    shipAddress: "Rua da Panificadora 12",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "02389-673",
    shipCountry: "Brazil",
  },
  {
    orderID: 10292,
    customerID: "TRADH",
    employeeID: 1,
    orderDate: "1996-08-28 00:00:00.000",
    requiredDate: "1996-09-25 00:00:00.000",
    shippedDate: "1996-09-02 00:00:00.000",
    shipVia: 2,
    freight: 1.35,
    shipName: "Tradiçao Hipermercados",
    shipAddress: "Av. Inês de Castro 414",
    shipCity: "Sao Paulo",
    shipRegion: "SP",
    shipPostalCode: "05634-030",
    shipCountry: "Brazil",
  },
  {
    orderID: 10293,
    customerID: "TORTU",
    employeeID: 1,
    orderDate: "1996-08-29 00:00:00.000",
    requiredDate: "1996-09-26 00:00:00.000",
    shippedDate: "1996-09-11 00:00:00.000",
    shipVia: 3,
    freight: 21.18,
    shipName: "Tortuga Restaurante",
    shipAddress: "Avda. Azteca 123",
    shipCity: "México D.F.",
    shipRegion: "NULL",
    shipPostalCode: "05033",
    shipCountry: "Mexico",
  },
  {
    orderID: 10294,
    customerID: "RATTC",
    employeeID: 4,
    orderDate: "1996-08-30 00:00:00.000",
    requiredDate: "1996-09-27 00:00:00.000",
    shippedDate: "1996-09-05 00:00:00.000",
    shipVia: 2,
    freight: 147.26,
    shipName: "Rattlesnake Canyon Grocery",
    shipAddress: "2817 Milton Dr.",
    shipCity: "Albuquerque",
    shipRegion: "NM",
    shipPostalCode: 87110,
    shipCountry: "USA",
  },
  {
    orderID: 10295,
    customerID: "VINET",
    employeeID: 2,
    orderDate: "1996-09-02 00:00:00.000",
    requiredDate: "1996-09-30 00:00:00.000",
    shippedDate: "1996-09-10 00:00:00.000",
    shipVia: 2,
    freight: 1.15,
    shipName: "Vins et alcools Chevalier",
    shipAddress: "59 rue de l'Abbaye",
    shipCity: "Reims",
    shipRegion: "NULL",
    shipPostalCode: 51100,
    shipCountry: "France",
  },
  {
    orderID: 10296,
    customerID: "LILAS",
    employeeID: 6,
    orderDate: "1996-09-03 00:00:00.000",
    requiredDate: "1996-10-01 00:00:00.000",
    shippedDate: "1996-09-11 00:00:00.000",
    shipVia: 1,
    freight: 0.12,
    shipName: "LILA-Supermercado",
    shipAddress: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
    shipCity: "Barquisimeto",
    shipRegion: "Lara",
    shipPostalCode: 3508,
    shipCountry: "Venezuela",
  },
  {
    orderID: 10297,
    customerID: "BLONP",
    employeeID: 5,
    orderDate: "1996-09-04 00:00:00.000",
    requiredDate: "1996-10-16 00:00:00.000",
    shippedDate: "1996-09-10 00:00:00.000",
    shipVia: 2,
    freight: 5.74,
    shipName: "Blondel père et fils",
    shipAddress: "24 place Kléber",
    shipCity: "Strasbourg",
    shipRegion: "NULL",
    shipPostalCode: 67000,
    shipCountry: "France",
  },
  {
    orderID: 10298,
    customerID: "HUNGO",
    employeeID: 6,
    orderDate: "1996-09-05 00:00:00.000",
    requiredDate: "1996-10-03 00:00:00.000",
    shippedDate: "1996-09-11 00:00:00.000",
    shipVia: 2,
    freight: 168.22,
    shipName: "Hungry Owl All-Night Grocers",
    shipAddress: "8 Johnstown Road",
    shipCity: "Cork",
    shipRegion: "Co. Cork",
    shipPostalCode: "NULL",
    shipCountry: "Ireland",
  },
  {
    orderID: 10299,
    customerID: "RICAR",
    employeeID: 4,
    orderDate: "1996-09-06 00:00:00.000",
    requiredDate: "1996-10-04 00:00:00.000",
    shippedDate: "1996-09-13 00:00:00.000",
    shipVia: 2,
    freight: 29.76,
    shipName: "Ricardo Adocicados",
    shipAddress: "Av. Copacabana 267",
    shipCity: "Rio de Janeiro",
    shipRegion: "RJ",
    shipPostalCode: "02389-890",
    shipCountry: "Brazil",
  },
  {
    orderID: 10300,
    customerID: "MAGAA",
    employeeID: 2,
    orderDate: "1996-09-09 00:00:00.000",
    requiredDate: "1996-10-07 00:00:00.000",
    shippedDate: "1996-09-18 00:00:00.000",
    shipVia: 2,
    freight: 17.68,
    shipName: "Magazzini Alimentari Riuniti",
    shipAddress: "Via Ludovico il Moro 22",
    shipCity: "Bergamo",
    shipRegion: "NULL",
    shipPostalCode: 24100,
    shipCountry: "Italy",
  },
  {
    orderID: 10301,
    customerID: "WANDK",
    employeeID: 8,
    orderDate: "1996-09-09 00:00:00.000",
    requiredDate: "1996-10-07 00:00:00.000",
    shippedDate: "1996-09-17 00:00:00.000",
    shipVia: 2,
    freight: 45.08,
    shipName: "Die Wandernde Kuh",
    shipAddress: "Adenauerallee 900",
    shipCity: "Stuttgart",
    shipRegion: "NULL",
    shipPostalCode: 70563,
    shipCountry: "Germany",
  },
  {
    orderID: 10302,
    customerID: "SUPRD",
    employeeID: 4,
    orderDate: "1996-09-10 00:00:00.000",
    requiredDate: "1996-10-08 00:00:00.000",
    shippedDate: "1996-10-09 00:00:00.000",
    shipVia: 2,
    freight: 6.27,
    shipName: "Suprêmes délices",
    shipAddress: "Boulevard Tirou 255",
    shipCity: "Charleroi",
    shipRegion: "NULL",
    shipPostalCode: "B-6000",
    shipCountry: "Belgium",
  },
  {
    orderID: 10303,
    customerID: "GODOS",
    employeeID: 7,
    orderDate: "1996-09-11 00:00:00.000",
    requiredDate: "1996-10-09 00:00:00.000",
    shippedDate: "1996-09-18 00:00:00.000",
    shipVia: 2,
    freight: 107.83,
    shipName: "Godos Cocina Típica",
    shipAddress: "C/ Romero 33",
    shipCity: "Sevilla",
    shipRegion: "NULL",
    shipPostalCode: 41101,
    shipCountry: "Spain",
  },
  {
    orderID: 10304,
    customerID: "TORTU",
    employeeID: 1,
    orderDate: "1996-09-12 00:00:00.000",
    requiredDate: "1996-10-10 00:00:00.000",
    shippedDate: "1996-09-17 00:00:00.000",
    shipVia: 2,
    freight: 63.79,
    shipName: "Tortuga Restaurante",
    shipAddress: "Avda. Azteca 123",
    shipCity: "México D.F.",
    shipRegion: "NULL",
    shipPostalCode: "05033",
    shipCountry: "Mexico",
  },
  {
    orderID: 10305,
    customerID: "OLDWO",
    employeeID: 8,
    orderDate: "1996-09-13 00:00:00.000",
    requiredDate: "1996-10-11 00:00:00.000",
    shippedDate: "1996-10-09 00:00:00.000",
    shipVia: 3,
    freight: 257.62,
    shipName: "Old World Delicatessen",
    shipAddress: "2743 Bering St.",
    shipCity: "Anchorage",
    shipRegion: "AK",
    shipPostalCode: 99508,
    shipCountry: "USA",
  },
  {
    orderID: 10306,
    customerID: "ROMEY",
    employeeID: 1,
    orderDate: "1996-09-16 00:00:00.000",
    requiredDate: "1996-10-14 00:00:00.000",
    shippedDate: "1996-09-23 00:00:00.000",
    shipVia: 3,
    freight: 7.56,
    shipName: "Romero y tomillo",
    shipAddress: "Gran Vía 1",
    shipCity: "Madrid",
    shipRegion: "NULL",
    shipPostalCode: 28001,
    shipCountry: "Spain",
  },
  {
    orderID: 10307,
    customerID: "LONEP",
    employeeID: 2,
    orderDate: "1996-09-17 00:00:00.000",
    requiredDate: "1996-10-15 00:00:00.000",
    shippedDate: "1996-09-25 00:00:00.000",
    shipVia: 2,
    freight: 0.56,
    shipName: "Lonesome Pine Restaurant",
    shipAddress: "89 Chiaroscuro Rd.",
    shipCity: "Portland",
    shipRegion: "OR",
    shipPostalCode: 97219,
    shipCountry: "USA",
  },
  {
    orderID: 10308,
    customerID: "ANATR",
    employeeID: 7,
    orderDate: "1996-09-18 00:00:00.000",
    requiredDate: "1996-10-16 00:00:00.000",
    shippedDate: "1996-09-24 00:00:00.000",
    shipVia: 3,
    freight: 1.61,
    shipName: "Ana Trujillo Emparedados y helados",
    shipAddress: "Avda. de la Constitución 2222",
    shipCity: "México D.F.",
    shipRegion: "NULL",
    shipPostalCode: "05021",
    shipCountry: "Mexico",
  },
  {
    orderID: 10309,
    customerID: "HUNGO",
    employeeID: 3,
    orderDate: "1996-09-19 00:00:00.000",
    requiredDate: "1996-10-17 00:00:00.000",
    shippedDate: "1996-10-23 00:00:00.000",
    shipVia: 1,
    freight: 47.3,
    shipName: "Hungry Owl All-Night Grocers",
    shipAddress: "8 Johnstown Road",
    shipCity: "Cork",
    shipRegion: "Co. Cork",
    shipPostalCode: "NULL",
    shipCountry: "Ireland",
  },
];

module.exports = {
  orders,
};
