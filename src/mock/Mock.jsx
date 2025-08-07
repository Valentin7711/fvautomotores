import { useState } from "react";

const initialAutos = [
  {
    id: 1,
    marca: "Chevrolet",
    modelo: "Cruze",
    año: 2016,
    precio: 17000000,
    imagen: [
      "/cruze/cruze-1.jpg", "/cruze/cruze-2.jpg", "/cruze/cruze-3.jpg", "/cruze/cruze-4.jpg", "/cruze/cruze-5.jpg", "/cruze/cruze-6.jpg", "/cruze/cruze-7.jpg", "/cruze/cruze-8.jpg", "/cruze/cruze-9.jpg"
      ],
    km: 140000,
    ficha: "Motor 1.4 turbo Nafta manual. Primera mano. 4 gomas nuevas. Velocidad crucero. Interior de cuero. Pantalla. Sensores de estacionamiento. Camara de retroceso. Le funciona todo. Papeles al dia listo para transferir."
  },
  {
    id: 2,
    marca: "Fiat",
    modelo: "500 Gucci",
    año: 2011,
    precio: 20000,
    imagen: [
      "/gucci/gucci-1.jpg", "/gucci/gucci-2.jpg", "/gucci/gucci-3.jpg", "/gucci/gucci-4.jpg", "/gucci/gucci-5.jpg", "/gucci/gucci-6.jpg"

    ],
    km: 40000,
    ficha: "Motor 1.4 Nafta. Version Gucci unico en el pais. Interior e exterior en perfectas condiciones. Precio en usd."
  },
  {
    id: 3,
    marca: "Volkswagen",
    modelo: "Scirocco",
    año: 2013,
    precio: 24500,
    imagen: [
      "/scirocco/scirocco-1.jpg", "/scirocco/scirocco-2.jpg", "/scirocco/scirocco-3.jpg", "/scirocco/scirocco-4.jpg"
    ],
      km: 68000,
    ficha: "Motor 1.4T DSG con muchos accesorios. 4 cubiertas con 20.000 km. Bateria Moura colocada hace un año. Tratamiento vidrio liquido en todo el auto. Precio en usd."
  },
  {
    id: 4,
    marca: "Toyota",
    modelo: "Rav-4",
    año: 2020,
    precio: 55000000,
    imagen: [
      "/toyota/toyota-1.jpg", "/toyota/toyota-2.jpg", "/toyota/toyota-3.jpg", "/toyota/toyota-4.jpg", "/toyota/toyota-5.jpg", "/toyota/toyota-6.jpg"
    ],
    km: 111000,
    ficha: "Rav-4 Limited Hibrida 4x4. Motor hibrido. Version full. Mecanica perfecta e interior. Papeles al dia lista para transferir."
  },
  {
    id: 5,
    marca: "Fiat",
    modelo: "Toro",
    año: 2018,
    precio: 25000000,
    imagen: [
      "/toro/toro-1.jpg", "/toro/toro-2.jpg", "/toro/toro-3.jpg", "/toro/toro-4.jpg", "/toro/toro-5.jpg", "/toro/toro-6.jpg"
    ],
    km: 120000,
    ficha: "Version Freedom 4x4 automatica. Distribucion echa. Service completo recien echo. Papeles al dia lista para transferir."
  },
  {
    id: 6,
    marca: "Yamaha",
    modelo: "R1",
    año: 2017,
    precio: 35000,
    imagen: [
      "/r1/r1-1.jpg", "/r1/r1-2.jpg", "/r1/r1-3.jpg", "/r1/r1-4.jpg", "/r1/r1-5.jpg"
    ],
    km: 19000,
    ficha: "Service recien realizado. Sin ningun detalle. Papeles al dia y lista para transferir. Precio en usd."
  },
  {
    id: 7,
    marca: "Jeep",
    modelo: "Renegade Sport",
    año: 2024,
    precio: 33500000,
    imagen: [
      "/jeep/jeep-1.jpg", "/jeep/jeep-2.jpg", "/jeep/jeep-3.jpg", "/jeep/jeep-4.jpg", "/jeep/jeep-5.jpg", "/jeep/jeep-6.jpg", "/jeep/jeep-7.jpg", "/jeep/jeep-8.jpg", "/jeep/jeep-9.jpg"
    ],
    km: 0,
    ficha: "Version Sport, motor 1.8 Nafta, papeles al dia y lista para transferir, garantia oficial de fabrica, manuales y doble llave."
  },
  {
    id: 8,
    marca: "Peugeot",
    modelo: "308",
    año: 2012,
    precio: 0,
    imagen: [
      "/308/308-1.jpg", "/308/308-2.jpg", "/308/308-3.jpg", "/308/308-4.jpg", "/308/308-5.jpg", "/308/308-6.jpg"
    ],
    km: 169000,
    ficha: "Version Allure Nav 1.6 Hdi. Service recien realizado."
  },
  {
    id: 9,
    marca: "Peugeot",
    modelo: "207",
    año: 2014,
    precio: 13000000,
    imagen: [
      "/207/207-1.jpg","/207/207-2.jpg", "/207/207-3.jpg", "/207/207-4.jpg", "/207/207-5.jpg", "/207/207-6.jpg", "/207/207-7.jpg"
    ],
    km: 140000,
    ficha: "Version Active aire y direccion y Gnc. Alarma y cierre centralizado. Cubiertas nuevas."
  },
  {
    id: 10,
    marca: "Honda",
    modelo: "Twister CB300",
    año: 2023,
    precio: 7200000,
    imagen: [
      "/300/twister-1.jpg", "/300/twister-2.jpg", "/300/twister-3.jpg", "/300/twister-4.jpg"
    ],
    km: 10000,
    ficha: "Impecable nada por hacerle. Service recien echo. Papeles al dia lista para transferir."
  },
    {
    id: 11,
    marca: "Volkswagen",
    modelo: "Amarok",
    año: 2017,
    precio: 28000000,
    imagen: [
      "/amarok/amarok-1.jpg", "/amarok/amarok-2.jpg", "/amarok/amarok-3.jpg", "/amarok/amarok-4.jpg", "/amarok/amarok-5.jpg", "/amarok/amarok-6.jpg", "/amarok/amarok-7.jpg", "/amarok/amarok-8.jpg", "/amarok/amarok-9.jpg"
    ],
    km: 140000,
    ficha: "Consultar informacion..."
  },
    {
    id: 12,
    marca: "Volkswagen",
    modelo: "Gol Trend",
    año: 2019,
    precio: 17500000,
    imagen: [
      "/golTrend/gol-1.jpg", "/golTrend/gol-2.jpg", "/golTrend/gol-3.jpg", "/golTrend/gol-4.jpg", "/golTrend/gol-5.jpg", "/golTrend/gol-6.jpg", "/golTrend/gol-7.jpg"
    ],
    km: 86000,
    ficha: "Nafta y Gnc de quinta, nada por hacerle, 2 cubiertas nuevas, papeles al dia listo para transferir."
  },
    {
    id: 13,
    marca: "Renault",
    modelo: "Megane",
    año: 2005,
    precio: 6300000,
    imagen: [
      "/megane/megane-1.jpg", "/megane/megane-2.jpg", "/megane/megane-3.jpg", "/megane/megane-4.jpg", "/megane/megane-5.jpg", "/megane/megane-6.jpg", "/megane/megane-7.jpg", "/megane/megane-8.jpg", "/megane/megane-9.jpg", "/megane/megane-10.jpg"
    ],
    km: 203000,
    ficha: "Motor 1.6 16v nafta y gnc, aire y direccion, 2 gomas nuevas delanteras, distribucion echa, tren delantero nuevo, amortiguadores delanteros echos."
  },
    {
    id: 14,
    marca: "Fiat",
    modelo: "Siena",
    año: 2016,
    precio: 12000000,
    imagen: [
      "/siena/siena-1.jpg", "/siena/siena-2.jpg", "/siena/siena-3.jpg", "/siena/siena-4.jpg"
    ],
    km: 128000,
    ficha: "Motor 1.4 Nafta y Gnc de quinta. Mantenimientos al dia. Papeles al dia listo para transferir."
  },
    {
    id: 15,
    marca: "Volkswagen",
    modelo: "Amarok V6",
    año: 2023,
    precio: 48000000,
    imagen: [
      "/v6/v6-1.jpg", "/v6/v6-2.jpg", "/v6/v6-3.jpg", "/v6/v6-4.jpg", "/v6/v6-5.jpg", "/v6/v6-6.jpg", "/v6/v6-7.jpg"
    ],
    km: 76000,
    ficha: "Consultar informacion..."
  },
    {
    id: 16,
    marca: "Kawasaki",
    modelo: "ZX10",
    año: 2011,
    precio: 22000,
    imagen: [
      "/zx10/zx10-1.jpg", "/zx10/zx10-2.jpg", "/zx10/zx10-3.jpg", "/zx10/zx10-4.jpg", "/zx10/zx10-5.jpg", "/zx10/zx10-6.jpg"
    ],
    km: 120000,
    ficha: "Impecable. Service recien echo. Papeles al dia lista para transferir. Precio en usd."
  },
     {
    id: 17,
    marca: "Volkswagen",
    modelo: "Suran",
    año: 2018,
    precio: 17900000,
    imagen: [
      "/suran/suran-1.jpg", "/suran/suran-2.jpg", "/suran/suran-3.jpg", "/suran/suran-4.jpg", "/suran/suran-5.jpg"
    ],
    km: 100000,
    ficha: "Suran Comfortline, motor y mecanica perfectos, interior como 0km, titular, papeles al dia lista para ser transferida. Ideal para familia o laburo, super comoda y economica."
  },
     {
    id: 18,
    marca: "Volkswagen",
    modelo: "Up",
    año: 2016,
    precio: 14000000,
    imagen: [
      "/up/up-1.jpg", "/up/up-2.jpg", "/up/up-3.jpg", "/up/up-4.jpg", "/up/up-5.jpg", "/up/up-6.jpg", "/up/up-7.jpg"
    ],
    km: 90000,
    ficha: "Impecable muy bien cuidado. Motor excelente economico. Papeles al dia listo para transferir."
  },
     {
    id: 19,
    marca: "Peugeot",
    modelo: "307",
    año: 2007,
    precio: 9000000,
    imagen: [
      "/307/307-1.jpg", "/307/307-2.jpg", "/307/307-3.jpg", "/307/307-4.jpg", "/307/307-5.jpg", "/307/307-6.jpg", "/307/307-7.jpg", "/307/307-8.jpg"
    ],
    km: 160000,
    ficha: "Impecable muy bien cuidado. Motor excelente economico. Papeles al dia listo para transferir."
  },
     {
    id: 20,
    marca: "BMW",
    modelo: "S1000RR",
    año: 2024,
    precio: 53000,
    imagen: [
      "/bmw/bmw-1.jpg", "/bmw/bmw-2.jpg", "/bmw/bmw-3.jpg", "/bmw/bmw-4.jpg", "/bmw/bmw-5.jpg"
    ],
    km: 6000,
    ficha: "Patentada en el 2025. Service recien echo. Cuenta con muchos accesorios. Papeles al dia lista para transferir. Precio en usd."
  },
     {
    id: 21,
    marca: "Peugeot",
    modelo: "307",
    año: 2009,
    precio: 11000000,
    imagen: [
      "/307-2/307-1.jpg", "/307-2/307-2.jpg", "/307-2/307-3.jpg", "/307-2/307-4.jpg", "/307-2/307-5.jpg"
    ],
    km: 190000,
    ficha: "Version XS 1.6 Nafta. Impecable."
  },
      {
    id: 22,
    marca: "Toyota",
    modelo: "Etios",
    año: 2017,
    precio: 17500000,
    imagen: [
      "/etios/etios-1.jpg", "/etios/etios-2.jpg", "/etios/etios-3.jpg", "/etios/etios-4.jpg", "/etios/etios-5.jpg"
    ],
    km: 90000,
    ficha: "Version XLS 1.5 con Gnc."
  },
      {
    id: 23,
    marca: "Chevrolet",
    modelo: "Meriva",
    año: 2009,
    precio: 9000000,
    imagen: [
      "/meriva/meriva-1.jpg", "/meriva/meriva-2.jpg"
    ],
    km: 0,
    ficha: "GNC. Cubiertas nuevas. Controles de fabrica. Manuales."
  },
      {
    id: 24,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2017,
    precio: 23500000,
    imagen: [
      "/corolla/corolla-1.jpg", "/corolla/corolla-2.jpg", "/corolla/corolla-3.jpg", "/corolla/corolla-4.jpg", "/corolla/corolla-5.jpg", "/corolla/corolla-6.jpg"
    ],
    km: 120000,
    ficha: "Version XLI Full. Motor y caja impecables. Toda su documentacion al dia listo para transferir."
  },
       {
    id: 25,
    marca: "Ford",
    modelo: "Ranger",
    año: 2017,
    precio: 34000000,
    imagen: [
      "/ranger/ranger-1.jpg", "/ranger/ranger-2.jpg", "/ranger/ranger-3.jpg", "/ranger/ranger-4.jpg", "/ranger/ranger-5.jpg", "/ranger/ranger-6.jpg", "/ranger/ranger-7.jpg", "/ranger/ranger-8.jpg", "/ranger/ranger-9.jpg", "/ranger/ranger-10.jpg"
    ],
    km: 185000,
    ficha: "Version XLT Manual 3.2 Diesel. Cuenta con muchos accesorios. Papeles al dia lista para transferir."
  },
     {id: 26,
    marca: "Ford",
    modelo: "Eco Sport",
    año: 2022,
    precio: 25000000,
    imagen: [
      "/eco/eco-1.jpg", "/eco/eco-2.jpg", "/eco/eco-3.jpg", "/eco/eco-4.jpg", "/eco/eco-5.jpg"
    ],
    km: 31000,
    ficha: "Version SE 1.5 Nafta. Primera mano. Llantas 16. Camara de retroceso. Sensores de estacionamiento. Papeles al dia lista para transferir."
  },
     {id: 27,
    marca: "BMW",
    modelo: "S1000RR",
    año: 2017,
    precio: 35000,
    imagen: [
      "/bmw-2/bmw-1.jpg", "/bmw-2/bmw-2.jpg", "/bmw-2/bmw-3.jpg", "/bmw-2/bmw-4.jpg", "/bmw-2/bmw-5.jpg", "/bmw-2/bmw-6.jpg"
    ],
    km: 30000,
    ficha: "Service recien echo. Papeles al dia listo para transferir."
  },
     {id: 28,
    marca: "Nisan",
    modelo: "March Vicia",
    año: 2013,
    precio: 11000000,
    imagen: [
      "/nisan/nisan-1.jpg", "/nisan/nisan-2.jpg", "/nisan/nisan-3.jpg", "/nisan/nisan-4.jpg", "/nisan/nisan-5.jpg", "/nisan/nisan-6.jpg", "/nisan/nisan-7.jpg", "/nisan/nisan-8.jpg", "/nisan/nisan-9.jpg"
    ],
    km: 112000,
    ficha: "Consultar informacion..."
  },
];

export function useAutos() {
  const [autos] = useState(initialAutos);
  return { autos };
}
