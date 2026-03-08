import {
  logoACC,
  logoLepanto,
  logoPF,
  logoNCS,
  logoECV,
  logoLSJ,
  logoRTC,
  logoEscravo,
  logoTeofilos,
  logoFotoSacra,
  logoEducarParaCeu,
  logoJuventude,
  logoAVidaDoCatolico,
  logoDomine,
  logoViaCrucis,
} from "../assets/logos";

export interface Apoiador {
  id: number;
  name: string;
  image: string;
  instagram: string;
}

export const apoiadores: Apoiador[] = [
  { id: 1, name: "Educar para o céu", image: logoEducarParaCeu, instagram: "https://www.instagram.com/educarparaoceu/" },
  { id: 2, name: "Ateliê Caritas Christi", image: logoACC, instagram: "https://www.instagram.com/atelie.caritaschristi/" },
  { id: 3, name: "Progredir na Fé", image: logoPF, instagram: "https://www.instagram.com/thmoreiracosta/" },
  { id: 4, name: "Lepanto", image: logoLepanto, instagram: "https://www.instagram.com/grupodeestudoslepanto/" },
  { id: 5, name: "Evangelizando com Você", image: logoECV, instagram: "https://www.instagram.com/evangelizandocomvoce/" },
  { id: 6, name: "Lojinha São José", image: logoLSJ, instagram: "https://www.instagram.com/lojinha.sao.jose/" },
  { id: 7, name: "Na Comunhão dos Santos", image: logoNCS, instagram: "https://www.instagram.com/na_comunhao_dos_santos/" },
  { id: 8, name: "Renovação Tradismática Católica", image: logoRTC, instagram: "https://www.instagram.com/brasil.rtc/" },
  { id: 9, name: "Flávio Escravo de Maria", image: logoEscravo, instagram: "https://www.instagram.com/flavio_escravodemariaoficial/" },
  { id: 10, name: "Teófilos", image: logoTeofilos, instagram: "https://www.instagram.com/teofilosoficial/" },
  { id: 11, name: "Lente Sacra Fotografia Religiosa", image: logoFotoSacra, instagram: "https://www.instagram.com/lentesacrafotografia/" },
  { id: 12, name: "Juventude Sementes", image: logoJuventude, instagram: "https://www.instagram.com/juventudesementes/" },
  { id: 13, name: "A vida do Católico", image: logoAVidaDoCatolico, instagram: "https://www.instagram.com/avidadocatolico/" },
  { id: 14, name: "Domine Fotografia Religiosa", image: logoDomine, instagram: "https://www.instagram.com/dominefotografiareligiosa/" },
  { id: 15, name: "Via Crucis Ateliê", image: logoViaCrucis, instagram: "https://www.instagram.com/viacrucisatelie/" },
];