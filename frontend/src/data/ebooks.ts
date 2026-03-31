// data/ebooks.ts
export interface Ebook {
  img: string;
  link: string;
  title: string;
}

import dores from "../assets/dores.png";
import viaSacra from "../assets/via-sacra.png";
import confissao from "../assets/confissao.png";
import robertSarah from "../assets/robertSarah.png";
import bentoXVI from "../assets/bentoXVI.png";
import robertSarahII from "../assets/robertSarahII.png";
import sermao from "../assets/sermao.png";
import jardins from "../assets/capa-jardins.png";

export const ebooks: Ebook[] = [
  {
    img: dores,
    link: "https://drive.google.com/file/d/1zoqes_Ynuuu48M_SM-mK9yb9KF5WojkI/view?usp=drive_link",
    title: "As Dores de Nossa Senhora",
  },
  {
    img: viaSacra,
    link: "https://drive.google.com/file/d/1pwC_WfZ9i1rhl2aE9tQKuf011OYJ957V/view?usp=drive_link",
    title: "Via-Sacra",
  },
  {
    img: confissao,
    link: "https://drive.google.com/file/d/1v9iXRKARivRtLbrUJbzY58ub9fRn3Qne/view?usp=drive_link",
    title: "Manual de Confissão",
  },
  {
    img: robertSarah,
    link: "https://drive.google.com/file/d/1Gcme26Ska5JirXJKJn1WsEJ9SgwGf9F_/view?usp=drive_link",
    title: "Homilia Cardeal Robert Sarah",
  },
  {
    img: bentoXVI,
    link: "https://drive.google.com/file/d/1tx0pIYj6G3tl_ej-VjZ-pKurSSmOUUi7/view?usp=drive_link",
    title: "Bento XVI - Reflexões sobre a oração cristã",
  },
  {
    img: robertSarahII,
    link: "https://drive.google.com/file/d/1hi57HjQ1cRytw64kl9Z5GqvJ76dz6y-a/view?usp=drive_link",
    title: "Robert Sarah - A Vida Espiritual",
  },
  {
    img: sermao,
    link: "https://drive.google.com/file/d/1dzZsNFQnEPjth4GWxURG19Tj7HOlyEnx/view?usp=drive_link",
    title: "Sermão de São Leão Magno",
  },
  {
    img: jardins,
    link: "https://drive.google.com/file/d/1bOx2yEASn5CzSkGk5sFYwzl5Va4fsN1h/view?usp=drive_link",
    title: "Os Quatro Jardins",
  },
];