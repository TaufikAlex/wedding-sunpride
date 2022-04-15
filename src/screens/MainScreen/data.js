import { useState } from 'react';

const DataWedding = () => {
  const [wedding] = useState({
    longLat: [-6.5938353, 107.4768679],
    man: "Muhammad Notonugroho, S... ",
    ladies: "Jalia Adhara, S... ",
    callMan: "Noto",
    callLadies: "Jalia",
    dateWedding: "Sunday, 05th June 2022",
    countDownWedding: "June 5, 2022 08:00:00",
    description:
      "We are getting married, and we want you to be part of our special day",

    venue: "D'Sinta Cafe & Resto Purwakarta",
    locationMarriageContract: "Jl Kayu Putih No.48",
    locationReception: "Jl. Sindang Raya No.69",
    timeMarriageContract: "08:00 - 09:00",
    timeReception: "11:00 - 13:00",

    parentNameMan: 'Bapaknya Noto & Ibunya noto',
    parentNameLadies: 'Bapaknya Jalia & Ibu Jalia',
    childMan: 'Putra Tunggal',
    childLadies: 'Putri Tunggal',

    closingText: `Jika ada manusia belum hidup bersama pasangannya, berarti hidupnya akan timpang dan tidak berjalan sesuai dengan ketetapan Allah SWT dan orang yang menikah berarti melengkapi agamanya, sabda Rasulullah SAW: "Barangsiapa diberi Allah seorang istri yang sholihah, sesungguhnya telah ditolong separoh agamanya. Dan hendaklah bertaqwa kepada Allah separoh lainnya." (HR. Baihaqi).`,
    prayText: "Mohon bantuan dana & doanya yaa semua...",
  });
  return { wedding }
}

export default DataWedding
