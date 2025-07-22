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
    ficha: "Motor 1.4 turbo Nafta manual, primera mano, 4 gomas nuevas, velocidad crucero, interior de cuero, pantalla, sensores de estacionamiento, camara de retroceso, le funciona todo. Recibo menor."
  },
  {
    id: 2,
    marca: "Fiat",
    modelo: "500 Gucci",
    año: 2020,
    precio: 35000,
    imagen: [
      "/gucci/gucci-1.jpg", "/gucci/gucci-2.jpg", "/gucci/gucci-3.jpg", "/gucci/gucci-4.jpg", "/gucci/gucci-5.jpg", "/gucci/gucci-6.jpg"

    ],
    km: 120000,
    ficha: "Motor 1.4 Nafta manual"
  },
  {
    id: 3,
    marca: "Volkswagen",
    modelo: "Scirocco",
    año: 2022,
    precio: 45000,
    imagen: [
      "/scirocco/scirocco-1.jpg", "/scirocco/scirocco-2.jpg", "/scirocco/scirocco-3.jpg", "/scirocco/scirocco-4.jpg"
    ],
      km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 4,
    marca: "Toyota",
    modelo: "Rav-4",
    año: 2019,
    precio: 28000,
    imagen: [
      "/toyota/toyota-1.jpg", "/toyota/toyota-2.jpg", "/toyota/toyota-3.jpg", "/toyota/toyota-4.jpg", "/toyota/toyota-5.jpg", "/toyota/toyota-6.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 5,
    marca: "Fiat",
    modelo: "Toro",
    año: 2019,
    precio: 28000,
    imagen: [
      "/toro/toro-1.jpg", "/toro/toro-2.jpg", "/toro/toro-3.jpg", "/toro/toro-4.jpg", "/toro/toro-5.jpg", "/toro/toro-6.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 6,
    marca: "Yamaha",
    modelo: "R1",
    año: 2019,
    precio: 28000,
    imagen: [
      "/r1/r1-1.jpg", "/r1/r1-2.jpg", "/r1/r1-3.jpg", "/r1/r1-4.jpg", "/r1/r1-5.jpg", "/r1/r1-6.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 7,
    marca: "Jeep",
    modelo: "Jeep",
    año: 2019,
    precio: 28000,
    imagen: [
      "/jeep/jeep-1.jpg", "/jeep/jeep-2,jpg", "/jeep/jeep-3.jpg", "/jeep/jeep-4.jpg", "/jeep/jeep-5.jpg", "/jeep/jeep-6.jpg", "/jeep/jeep-7.jpg", "/jeep/jeep-8.jpg", "/jeep/jeep-9.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 8,
    marca: "Peugeot",
    modelo: "308",
    año: 2019,
    precio: 28000,
    imagen: [
      "/308/308-1.jpg", "/308/308-2.jpg", "/308/308-3.jpg", "/308/308-4.jpg", "/308/308-5.jpg", "/308/308-6.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 9,
    marca: "Peugeot",
    modelo: "207",
    año: 2019,
    precio: 28000,
    imagen: [
      "/207/207-1.jpg","/207/207-2.jpg", "/207/207-3.jpg", "/207/207-4.jpg", "/207/207-5.jpg", "/207/207-6.jpg", "/207/207-7.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
  {
    id: 10,
    marca: "Honda",
    modelo: "Twister 300",
    año: 2019,
    precio: 28000,
    imagen: [
      "/300/twister-1.jpg", "/300/twister-2.jpg", "/300/twister-3.jpg", "/300/twister-4.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
    {
    id: 11,
    marca: "Volkswagen",
    modelo: "Amarok",
    año: 2019,
    precio: 28000,
    imagen: [
      "/amarok/amarok-1.jpg", "/amarok/amarok-2.jpg", "/amarok/amarok-3.jpg", "/amarok/amarok-4.jpg", "/amarok/amarok-5.jpg", "/amarok/amarok-6.jpg", "/amarok/amarok-7.jpg", "/amarok/amarok-8.jpg", "/amarok/amarok-9.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
    {
    id: 12,
    marca: "Volkswagen",
    modelo: "Gol Trend",
    año: 2019,
    precio: 28000,
    imagen: [
      "/golTrend/gol-1.jpg", "/golTrend/gol-2.jpg", "/golTrend/gol-3.jpg", "/golTrend/gol-4.jpg", "/golTrend/gol-5.jpg", "/golTrend/gol-6.jpg", "/golTrend/gol-7.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
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
    año: 2019,
    precio: 28000,
    imagen: [
      "/siena/siena-1.jpg", "/siena/siena-2.jpg", "/siena/siena-3.jpg", "/siena/siena-4.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
    {
    id: 15,
    marca: "Volkswagen",
    modelo: "Amarok V6",
    año: 2019,
    precio: 28000,
    imagen: [
      "/v6/v6-1.jpg", "/v6/v6-2.jpg", "/v6/v6-3.jpg", "/v6/v6-4.jpg", "/v6/v6-5.jpg", "/v6/v6-6.jpg", "/v6/v6-7.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
    {
    id: 16,
    marca: "Kawasaki",
    modelo: "ZX10",
    año: 2019,
    precio: 28000,
    imagen: [
      "/zx10/zx10-1.jpg", "/zx10/zx10-2.jpg", "/zx10/zx10-3.jpg", "/zx10/zx10-4.jpg", "/zx10/zx10-5.jpg", "/zx10/zx10-6.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
     {
    id: 17,
    marca: "Volkswagen",
    modelo: "Suran",
    año: 2019,
    precio: 28000,
    imagen: [
      "/suran/suran-1.jpg", "/suran/suran-2.jpg", "/suran/suran-3.jpg", "/suran/suran-4.jpg", "/suran/suran-5.jpg"
    ],
    km: 120000,
    ficha: "Motor 1.8, primera mano, servis echo, distribucion echa"
  },
];

export function useAutos() {
  const [autos] = useState(initialAutos);
  return { autos };
}
