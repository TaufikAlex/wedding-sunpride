import { useState } from 'react';

const DataWedding = () => {
  const [wedding] = useState({
    longLat: [-6.5938353, 107.4768679],
    man: 'Muhammad Notonugroho, S.T ',
    ladies: 'Jalia Adhara',
    callMan: 'Noto',
    callLadies: 'Jalia',
    dateWedding: 'Sunday, 05th June 2022',
    countDownWedding: 'June 5, 2022 08:00:00',
    description:
      'We are getting married, and we want you to be part of our special day',

    venue: "D'Sinta Cafe & Resto Purwakarta",
    venueUrl:
      "https://www.google.com/maps/place/D'Sinta+Cafe+%26+Resto+Purwakarta/@-6.5938353,107.4768679,17z/data=!3m1!4b1!4m5!3m4!1s0x2e690fe2abdc1bfd:0x2ccaff4408edb905!8m2!3d-6.5938353!4d107.4790566",
    locationMarriageContract: 'Jl Kayu Putih No.48',
    locationReception: 'Jl. Sindang Raya No.69',
    timeMarriageContract: '08:00 - 09:00',
    timeReception: '11:00 - 13:00',

    parentNameMan: 'Fauzi & Lindawati',
    parentNameLadies: 'Rusmin Nuryadin & Yeti Nurhayati',
    childMan: 'Putra Tunggal',
    childLadies: 'Putri Tunggal',

    closingText: `Jika ada manusia belum hidup bersama pasangannya, berarti hidupnya akan timpang dan tidak berjalan sesuai dengan ketetapan Allah SWT dan orang yang menikah berarti melengkapi agamanya, sabda Rasulullah SAW: "Barangsiapa diberi Allah seorang istri yang sholihah, sesungguhnya telah ditolong separoh agamanya. Dan hendaklah bertaqwa kepada Allah separoh lainnya." (HR. Baihaqi).`,
    prayText: "Mohon do'a Restu.",
  });
  return { wedding };
};

export default DataWedding;
