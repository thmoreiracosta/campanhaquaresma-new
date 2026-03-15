import {
  getRosarioDoDia,
  rosarioConteudo,
  TipoRosario,
} from "../utils/rosario";

export interface ModalContentItem {
  title: string;
  content: string;
  summary?: string;
}

export const tipoHoje: TipoRosario = getRosarioDoDia();
export const rosarioHoje = rosarioConteudo[tipoHoje];

export const modalContentData: Record<string, ModalContentItem> = {
  "meditacao-01": {
    title: "Minha última Quaresma",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p style="text-align: justify;">
      Precisamos refletir e ter em mente que vamos morrer! Isso mesmo: vamos morrer!  
      Mas a questão principal não é essa. Isso todos nós sabemos que vai nos acontecer.  
      A questão primordial, urgente e necessária é: <strong>como vamos morrer!</strong>  
      Disso depende nossa eternidade!
    </p><br>
  
    <p style="text-align: justify;">
      São Roberto Belarmino, em seu livro “A arte de morrer bem” adverte: “A regra geral  
      'quem vive bem, irá morrer bem' deve ser mencionada antes de tudo, pois sendo a morte nada mais que o fim da vida,  
      é certo que quem viver bem até o final da sua vida, morrerá bem; nem pode morrer doente quem que nunca estiver doente;  
      por outro lado, quem nunca tiver vivido bem, não poderá morrer bem. A mesma coisa é observável em muitos casos similares:  
      todos que houverem percorrido o caminho certo poderão chegar aos seus destinos; ao contrário, aqueles que vaguearem por aí,  
      jamais chegarão ao final de sua jornada.”
    </p><br>
  
    <p style="text-align: justify;">
      Para viver bem é necessário, em primeiro lugar, morrer para o mundo antes de morrer em corpo.  
      Todos que vivem para o mundo estão mortos para Deus: não podemos de nenhum modo viver para Deus,  
      exceto se primeiro morrermos para o mundo.
    </p><br>
  
    <p style="text-align: center; font-style: italic;">
      “Felizes os que, no tempo da sua morte, estão já mortos para o mundo” - Santo Ambrósio
    </p><br>
  
    <p style="text-align: justify;">
      Três ações que nos ajudam no propósito de viver bem para morrer bem:
    </p>
  
    <p style="text-align: justify; font-weight: bold;">A ORAÇÃO:</p>
    <p style="text-align: justify;">
      A necessidade de oração é repetida tão insistentemente nas Sagradas Escrituras que nada mais é mais claramente pedido que este dever.  
      A oração, saibamo-lo ou não, é o encontro da sede de Deus com a nossa. Deus tem sede de que nós tenhamos sede d’Ele. (CIC 2560)
    </p><br>
  
    <p style="text-align: justify; font-weight: bold;">O JEJUM:</p>
    <p style="text-align: justify;">
      Os frutos e as vantagens do jejum são facilmente provadas. Primeiro, é útil porque ajuda a preparar a alma para a oração e contemplação das coisas divinas.  
      Outra vantagem do jejum é ser realizado como penitência por um pecado.  
      “nem só de pão vive o homem, mas de toda palavra que sai da boca de Deus” (Mt 4,4).
    </p><br>
  
    <p style="text-align: justify; font-weight: bold;">A ESMOLA:</p>
    <p style="text-align: justify;">
      Se não há muito a dizer sobre a necessidade de dar esmolas, há muito mais sobre os frutos, pois estes são abundantes.  
      Primeiro, esmolas salvam a alma da morte eterna, sejam elas uma forma de satisfação ou disposição de receber as graças.  
      Esmolas também, se dadas por um homem justo, e com verdadeira caridade, são meritórias para a vida eterna.  
      As esmolas aumentam a confiança em Deus e produzem alegria espiritual; embora isto seja comum a outras obras de caridade,  
      dá-se de modo particular com as esmolas, pois através delas presta-se um serviço especial a Deus e aos irmãos,  
      e esta obra é claramente reconhecida como boa.
    </p><br>
  
    <p style="text-align: center; font-style: italic;">
      “Para morrer em paz, é vantajosíssimo pormos em ordem durante a vida os negócios temporais,  
      fazendo desde já a disposição dos bens que é preciso deixar, a fim de não termos de nos ocupar então senão da nossa união com Deus.” Santo Agostinho
    </p><br>
  
    <p style="text-align: justify;">
      Se percebermos, as virtudes que São Roberto Belarmino elenca são o tripé da Quaresma: ORAÇÃO, JEJUM E ESMOLA.  
      Mais do que uma tradição, a Quaresma é um chamado à conversão concreta.  
      O jejum nos ensina o desprendimento, a oração nos coloca em sintonia com Deus, e a esmola nos revela que a caridade é a manifestação autêntica da fé.  
      Assim, ao renunciarmos a pequenas vontades e confortos, aprendemos a nos desapegar deste mundo e, pouco a pouco,  
      a morrer para o pecado e ressurgir para uma nova vida, voltando o olhar para o que é essencial:  
      o amor de Deus que nos deu a vida e nos chama à santidade.
    </p><br>
  
    <p style="text-align: center; font-style: italic;">
      “Tu és pó, e ao pó hás de voltar.” (Gn 3, 19b) <br>
      “No entardecer da vida, seremos julgados pelo amor.” São João da Cruz <br>
      “Convertei-vos e crede no Evangelho” (Mc 1,15) <br>
      A Quaresma tem uma mensagem muito séria para nos passar: NÃO ADIE A SUA CONVERSÃO.  
      NÃO ADIE A SUA BUSCA PELA PERFEIÇÃO! NÃO ADIE SUA POSSIBILIDADE DE IR PARA O CÉU!
    </p><br>
  
    <p style="text-align: justify;">
      "Não podemos ser indecisos diante da possibilidade de oferecermos o melhor de nossas vidas para Deus."  
      Santa Terezinha do Menino Jesus
    </p><br>
  
    <p style="text-align: justify;">
      Monsenhor Adolphe Tanquerey, sacerdote católico, professor e Doutor em Direito Canônico e Teologia Dogmática, nos ensina:  
      “é preciso aplicar o desejo de perfeição imediatamente à ação presente, por mínima que seja.  
      Desejar a santidade e adiar o esforço para o dia seguinte é uma tremenda ilusão.”  
      Para ser Santo, só temos hoje!  
      Santa Terezinha do Menino Jesus dizia:  
      “A minha vida é um só instante, uma hora passageira. A minha vida é um só dia que me escapa e me foge  
      Tu sabes, ó meu Deus! Para amar-Te na Terra. Só tenho o dia de hoje!”
    </p><br>
  
    <p style="text-align: justify;">
      “Quantas almas se perdem porque acreditam que terão tempo para se converter mais tarde!  
      Mas quem garante o amanhã? A morte chega como um ladrão, sem avisar. Muitos que planejaram se confessar depois,  
      que deixaram para buscar a Deus em outro momento, foram surpreendidos pelo juízo divino.” Santo Afonso Maria de Ligório
    </p><br>
  
    <p style="text-align: justify;">
      O que a Quaresma nos apresenta:
    </p>
  
    <p style="text-align: justify;">
      <strong>JESUS NO DESERTO</strong> - Seu tempo no deserto simboliza para nós a necessidade de purificação e fortalecimento espiritual,  
      mostrando que a luta contra o pecado exige vigilância, renúncia e uma confiança inabalável no Pai.  
      “Todos os anos, pelos quarenta dias da Grande Quaresma, a Igreja une-se ao mistério de Jesus no deserto” CIC 540
    </p><br>
  
    <p style="text-align: justify;">
      <strong>QUARTA-FEIRA DE CINZAS</strong>: Ao receber as cinzas, ouvimos as palavras:  
      “Lembra-te que és pó e ao pó voltarás” (Gn 3,19) ou “Convertei-vos e crede no Evangelho” (Mc 1,15),  
      recordando-nos da brevidade da vida e do chamado à conversão. Neste dia, entramos, mais profundamente,  
      no espírito quaresmal, rumo a um caminho sincero de conversão e união a Nosso Senhor.
    </p><br>
  
    <p style="text-align: justify;">
      <strong>40 DIAS</strong>: A Bíblia nos apresenta o simbolismo do número 40 como um tempo de provação e purificação.  
      O número 40 aparece repetidamente na Sagrada Escritura como um tempo de preparação e prova. Alguns exemplos são:
    </p>
  
    <ul>
      <li>Durante 40 dias e 40 noites, as águas do dilúvio cobriram a terra, enquanto Noé e sua família aguardavam a renovação do mundo (Gn 7,12);</li>
      <li>O povo de Israel peregrinou 40 anos no deserto, sendo purificado antes de entrar na Terra Prometida (Nm 14,33);</li>
      <li>Moisés jejuou 40 dias no Sinai antes de receber a Lei (Ex 34,28);</li>
      <li>Elias caminhou esse mesmo período até o Horebe, onde encontrou Deus (1Rs 19,8).</li>
    </ul><br>
  
    <p style="text-align: justify;">
      Santo Afonso Maria de Ligório:  
      “Os insensatos que não creem na vida futura, estimulam-se com o pensamento da morte a passarem bem a vida.  
      De maneira bem diferente devemos nós proceder, os que sabemos pela fé que a alma sobrevive ao corpo.  
      Nós, lembrando-nos de que em breve temos de morrer, devemos cuidar da nossa eternidade e por meio de oração e penitência aplacar a justiça divina.  
      É com este intuito que a Igreja, depois de pôr as cinzas sobre a cabeça, nos ordena o jejum da Quaresma.”
    </p><br>
  
    <p style="text-align: center; font-style: italic;">
      “Não há falta que se possa comparar à do descuido da salvação eterna.” Santo Euquério
    </p>

      </div>
    `,
    summary: `
      Precisamos refletir e ter em mente que vamos morrer! Isso mesmo: vamos morrer! 
      Mas a questão principal não é essa. Isso todos nós sabemos que vai nos acontecer...
    `,
  },

  "meditacao-02": {
    title: "Mestre, onde moras?",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p style="text-align: justify;">Os discípulos, diante do convite silencioso de Jesus, perguntaram: "Mestre, onde moras?" (Jo 1,38). Não se tratava de curiosidade geográfica, mas de um ardente desejo de intimidade com Aquele que é o próprio Caminho, a Verdade e a Vida. No coração desta pergunta reside toda a espiritualidade cristã: buscar a presença de Deus em nosso dia a dia, reconhecer a Sua morada na própria alma e na história da salvação.</p><br>
  <p style="text-align: justify;">O chamado de Jesus — "Vinde e vede!" — é um convite à experiência direta, à contemplação do Mistério Encarnado. É um chamado a nos deixar guiar pelo Espírito Santo, tal como os primeiros Apóstolos, que abandonaram suas redes e seguiram o Mestre sem demora. Como Santo Agostinho nos lembra: a verdadeira felicidade só se encontra em Deus, e nossa vida só se cumpre quando nos assentamos à Sua morada, aprendendo a ouvir, contemplar e amar.</p><br>
  <p style="text-align: justify;">Encontramos Cristo nos sacramentos, especialmente na Eucaristia, onde Ele Se entrega totalmente por nós; na Palavra, que ilumina nosso caminho; e na oração, que nos torna participantes do diálogo divino. Os pobres e necessitados também se tornam morada de Jesus, porque "tive fome e me destes de comer" (Mt 25,35). A Igreja, Corpo Místico de Cristo, é o espaço sagrado onde Sua presença continua entre nós, sustentando-nos na caridade e na fé.</p><br>
  <p style="text-align: justify;">Portanto, nesta Quaresma, escutemos novamente o chamado: aproximemo-nos do Mestre com coragem e fidelidade, seguindo o exemplo dos Santos e dos Apóstolos. Reflitamos sobre nossas próprias vidas: onde estamos buscando Cristo? Estamos dispostos a abandonar o que nos afasta d’Ele? O convite de Jesus permanece eterno: <em>"Vinde e vede!"</em> — não apenas com os olhos, mas com o coração aberto, para habitar na Sua presença, experimentar Sua misericórdia e tornar-nos luz no mundo.</p><br>
  <p style="text-align: justify;"><strong>Onde encontrá-Lo?</strong></p>
  <ul>
    <li>Na Eucaristia — Sua presença real. Corpo, sangue, alma e divindade. Para lucrar indulgência na quaresma,recomenda-se ao menos 30 minutos de Adoração ao Santíssimo Sacramento.</li>
    <li>Na Palavra — Através das Escrituras. Lectio Divina, estudo da palavra, liturgia diária.</li>
    <li>Na oração — No silêncio do coração. No encontro consigo mesmo e com E'le que mora em nós.</li>
    <li>Nos pobres — "Tive fome e me destes de comer. Tive sede e me deste de beber."</li>
    <li>Na Igreja — Seu Corpo Místico.</li>
  </ul><br><br>

  <p style="text-align: center; font-style: italic;">Jesus respondeu: "Vinde e vede." (Jo 1,39)</p>

      </div>
    `,
    summary: `
      Os discípulos perguntaram a Jesus não por curiosidade, mas por desejo de intimidade. 
      A Quaresma nos convida a fazer a mesma pergunta: onde encontro Cristo em minha vida?
    `,
  },

  "meditacao-03": {
    title: "Escutar e jejuar",
    content: `
  <div style="font-size: 19px; line-height: 1.9;">

    <p style="text-align: center; font-weight: bold;">
      MENSAGEM DE SUA SANTIDADE PAPA LEÃO XIV<br>
      PARA A QUARESMA 2026
    </p><br>

    <p style="text-align: center; font-style: italic;">
      Escutar e jejuar.<br>
      Quaresma como tempo de conversão
    </p><br>

    <p style="text-align: justify;">
      Queridos irmãos e irmãs!
    </p>

    <p style="text-align: justify;">
      A Quaresma é o tempo em que a Igreja, com solicitude maternal, nos convida a recolocar o mistério de Deus no centro da nossa vida, para que a nossa fé ganhe novo impulso e o coração não se perca entre as inquietações e as distrações do quotidiano.
    </p><br>

    <p style="text-align: justify;">
      Todo o caminho de conversão começa quando nos deixamos alcançar pela Palavra e a acolhemos com docilidade de espírito. Existe, portanto, um vínculo entre o dom da Palavra de Deus, a hospitalidade que lhe oferecemos e a transformação que ela realiza. Por isso, o itinerário quaresmal torna-se uma ocasião propícia para dar ouvidos à voz do Senhor e renovar a decisão de seguir Cristo, percorrendo com Ele o caminho que sobe a Jerusalém, onde se realiza o mistério da sua paixão, morte e ressurreição.
    </p><br>

    <p style="text-align: justify; font-weight: bold;">
      ESCUTAR
    </p>

    <p style="text-align: justify;">
      Este ano gostaria de chamar a atenção, em primeiro lugar, para a importância de dar lugar à Palavra através da escuta, pois a disponibilidade para escutar é o primeiro sinal com que se manifesta o desejo de entrar em relação com o outro.
    </p><br>

    <p style="text-align: justify;">
      O próprio Deus, revelando-se a Moisés na sarça ardente, mostra que a escuta é uma característica distintiva do seu ser: «Eu bem vi a opressão do meu povo que está no Egipto, e ouvi o seu clamor» (Ex 3, 7). Escutar o clamor dos oprimidos é o início de uma história de libertação, na qual o Senhor envolve também Moisés, enviando-o a abrir um caminho de salvação para os seus filhos reduzidos à escravidão.
    </p><br>

    <p style="text-align: justify;">
      É um Deus que nos envolve e, hoje, também vem até nós com os pensamentos que fazem vibrar o seu coração. Por isso, escutar a Palavra na liturgia educa-nos para uma escuta mais verdadeira da realidade: entre as muitas vozes que passam pela nossa vida pessoal e social, as Sagradas Escrituras tornam-nos capazes de reconhecer aquela que surge do sofrimento e da injustiça, para que não fique sem resposta.
    </p><br>

    <p style="text-align: justify;">
      Entrar nesta disposição interior de recetividade significa deixar-se instruir hoje por Deus para escutar como Ele, até reconhecer que «a condição dos pobres representa um grito que, na história da humanidade, interpela constantemente a nossa vida, as nossas sociedades, os sistemas políticos e económicos e, sobretudo, a Igreja».
    </p><br>

    <p style="text-align: justify; font-weight: bold;">
      JEJUAR
    </p>

    <p style="text-align: justify;">
      Se a Quaresma é um tempo de escuta, o jejum constitui uma prática concreta que nos predispõe a acolher a Palavra de Deus. Na verdade, a abstinência de alimentos é um exercício ascético muito antigo e insubstituível no caminho da conversão.
    </p><br>

    <p style="text-align: justify;">
      Precisamente porque implica o corpo, torna mais evidente aquilo de que temos “fome” e o que consideramos essencial para o nosso sustento. Portanto, é útil para discernir e ordenar os “apetites”, para manter vigilante a fome e a sede de justiça, subtraindo-a à resignação e instruindo-a a fim de se tornar oração e responsabilidade para com o próximo.
    </p><br>

    <p style="text-align: justify;">
      Com grande sensibilidade espiritual, Santo Agostinho deixa transparecer a tensão entre o tempo presente e a realização futura que atravessa esta salvaguarda do coração quando observa:
    </p>

    <p style="text-align: center; font-style: italic;">
      «Ao longo da vida terrena, cabe aos homens ter fome e sede de justiça, mas ser saciados pertence à outra vida. Os anjos saciam-se deste pão, deste alimento. Os homens, pelo contrário, sentem fome dele, estão inclinados ao seu desejo. Esta inclinação ao desejo dilata a alma, aumentando a sua capacidade».
    </p><br>

    <p style="text-align: justify;">
      Compreendido neste sentido, o jejum permite-nos não só disciplinar o desejo, purificá-lo e torná-lo mais livre, mas também ampliá-lo, de tal modo que se volte para Deus e se oriente para agir no bem.
    </p><br>

    <p style="text-align: justify;">
      No entanto, para que o jejum conserve a sua autenticidade evangélica e evite a tentação de envaidecer o coração, deve ser sempre vivido com fé e humildade. Ele exige um permanente enraizar-se na comunhão com o Senhor, porque «não jejua verdadeiramente quem não sabe alimentar-se da Palavra de Deus».
    </p><br>

    <p style="text-align: justify;">
      Como sinal visível do nosso compromisso interior de, com o apoio da graça, nos afastarmos do pecado e do mal, o jejum deve incluir também outras formas de privação destinadas a fazer-nos assumir um estilo de vida mais sóbrio, pois «só a austeridade torna forte e autêntica a vida cristã».
    </p><br>

    <p style="text-align: justify;">
      Por isso, gostaria de vos convidar a uma forma de abstinência muito concreta e frequentemente pouco apreciada: a abstinência de palavras que atingem e ferem o nosso próximo. Comecemos por desarmar a linguagem, renunciando às palavras mordazes, ao juízo temerário, ao falar mal de quem está ausente e não se pode defender, às calúnias.
    </p><br>

    <p style="text-align: justify;">
      Em vez disso, esforcemo-nos por aprender a medir as palavras e a cultivar a gentileza: na família, entre amigos, nos locais de trabalho, nas redes sociais, nos debates políticos, nos meios de comunicação social e nas comunidades cristãs. Assim, muitas palavras de ódio darão lugar a palavras de esperança e paz.
    </p><br>

    <p style="text-align: justify; font-weight: bold;">
      JUNTOS
    </p>

    <p style="text-align: justify;">
      Por fim, a Quaresma realça a dimensão comunitária da escuta da Palavra e da prática do jejum. A Escritura sublinha também este aspeto ao narrar no livro de Neemias que o povo se reuniu para escutar a leitura pública da Lei e, praticando o jejum, se dispôs à confissão de fé e à adoração para renovar a aliança com Deus (cf. Ne 9, 1-3).
    </p><br>

    <p style="text-align: justify;">
      Do mesmo modo, as nossas paróquias, famílias, grupos eclesiais e comunidades religiosas são chamadas a percorrer, durante a Quaresma, um caminho partilhado, no qual a escuta da Palavra de Deus, assim como do clamor dos pobres e da terra, se torne forma de vida comum e o jejum suporte um verdadeiro arrependimento.
    </p><br>

    <p style="text-align: justify;">
      Neste contexto, a conversão diz respeito não só à consciência do indivíduo, mas também ao estilo das relações, à qualidade do diálogo, à capacidade de se deixar interpelar pela realidade e de reconhecer o que realmente orienta o desejo, tanto nas nossas comunidades eclesiais como na humanidade sedenta de justiça e reconciliação.
    </p><br>

    <p style="text-align: justify;">
      Caríssimos, peçamos a graça de uma Quaresma que torne os nossos ouvidos mais atentos a Deus e aos últimos. Peçamos a força de um jejum que também passe pela língua, para que diminuam as palavras ofensivas e aumente o espaço dado à voz do outro.
    </p><br>

    <p style="text-align: justify;">
      Comprometamo-nos a fazer das nossas comunidades lugares onde o clamor de quem sofre seja acolhido e a escuta abra caminhos de libertação, tornando-nos mais disponíveis e diligentes no contributo para construir a civilização do amor.
    </p><br>

    <p style="text-align: center; font-style: italic;">
      De coração, abençoo todos vós e o vosso caminho quaresmal.
    </p><br>

    <p style="text-align: center;">
      Vaticano, na Memória de Santa Ágata, virgem e mártir<br>
      5 de fevereiro de 2026
    </p><br>

    <p style="text-align: center; font-weight: bold;">
      LEÃO PP. XIV
    </p>

  </div>
  `,
    summary: `
  A Quaresma é o tempo em que a Igreja, com solicitude maternal, nos convida a recolocar o mistério de Deus no centro da nossa vida, ...
  `,
  },

  "meditacao-04": {
    title: "Ato de contrição para a Quaresma",
    content: `
<div style="font-size: 19px; line-height: 1.9;">

<p style="text-align: center; font-weight: bold;">
UM BELO ATO DE CONTRIÇÃO PARA A QUARESMA
</p><br>

<p style="text-align: center; font-style: italic;">
“Aqui venho a vossos pés”, Senhor. “Não olheis o como; não estranheis o quando, não repareis no tarde, olhai somente que venho.”
</p>

<p style="text-align: center;">
Pe. Fr. António das Chagas
</p><br>

<p style="text-align: justify;">
Meu Deus do meu coração, da minha alma, da minha vida, das minhas entranhas, a quem tanto ofendi: tanto meu Deus, e Senhor, que não tem o mar areias, o céu estrelas, o campo flores, as plantas folhas, cujo número não exceda a multidão sem número de meus pecados, a variedade sem conto de meus delitos.
</p><br>

<p style="text-align: justify;">
Pequei, Senhor, ofendi-vos, fiz mal na face dos Céus e da terra; afastei-me de vossa Lei, dei as costas à vossa graça, adorei a vossa ofensa, fiz ídolo da minha culpa, corri sem temor nem pejo pelos caminhos do engano, da vaidade, da perdição. Ah meu Deus! quanto me pesa do muito que vos ofendi! Pesa-me do pouco que me pesa, do muito que vos agravei: mais me pesa pela muita ingratidão com que vos tenho agravado, que pelo grande inferno, que tenho merecido.
</p><br>

<p style="text-align: justify;">
Mas que digo, Senhor? nada me pesa, meu Deus: um pesar que me não tira a vida, não é pesar; uma pena que me não arranca esta alma, não é pena; uma dor que me não me parte o coração, ainda não é dor. Quisera ter uma pena das culpas que cometi, tamanha como as minhas culpas. Quisera ter uma mágoa da ofensa. Quisera ter uma dor igual à vossa misericórdia. Quisera com lágrimas de sangue chorar meus grandes pecados, mais pelo que tem de culpa e agravo contra vós, que pelo que tem de dano e perdição contra mim. Quisera, Senhor, que assim como no agravo foi infinita a culpa, fosse no arrependimento infinita a pena.
</p><br>

<p style="text-align: justify;">
Ainda que eu por minha culpa perdi o ser de filho, vós, Senhor, infinitamente bom não perdestes o ser e condição que tendes de Pai.
</p><br>

<p style="text-align: justify;">
Mas onde achei esta ânsia, senão na fonte de vossa graça? Onde acharei esta dor, senão no conhecimento de vossa bondade imensa e de minha maldade infinita? De onde hão-de de vir estas lágrimas, senão do mar de Vossa misericórdia?
</p><br>

<p style="text-align: justify;">
Aqui venho a vossos pés; não olheis o como; não estranheis o quando, não repareis no tarde, olhai somente que venho. Oh que miserável que venho, Senhor! Oh que torpe, oh que abominável! vestido das fealdades de meus pecados, coberto das torpezas de minhas culpas, cheio de abominações e vícios de minha vida! Mas como venho a vossos pés, confiado venho, meu Deus, de achar em vossa misericórdia porto, em vossa piedade amparo, em vossa clemência refúgio, em vossa bondade remédio.
</p><br>

<p style="text-align: justify;">
Por isso, tremendo de vossa justiça, não me valho de outro seguro, mais que do de vossa clemência: não solicito outro abrigo, senão vossa misericórdia: nesta me fio, meu Deus; porque ainda que eu por minha culpa perdi o ser de filho, vós, Senhor, infinitamente bom não perdestes o ser e condição que tendes de Pai.
</p><br>

<p style="text-align: justify;">
Acabe pois, Senhor, em mim vossa graça infinita esta obra, que começou em mim vossa piedade infinita: acuda vossa clemência a esta miserável criatura: tende dó e compaixão desta pobre alma. Proponho com vossa graça emendar a vida, confessar as culpas, perseverar na emenda, perdoar agravos, esquecer-me de injúrias, aborrecer meus vícios, restituir como posso, satisfazer como devo a vossos Mandamentos.
</p><br>

<p style="text-align: justify;">
Espero, Senhor, em vossa bondade infinita me haveis de perdoar todos meus pecados, pela morte e paixão de meu Senhor Jesus Cristo: porque, se nas suas chagas tendes a justiça para me castigar, também tendes a misericórdia para me favorecer. Misericórdia. Misericórdia. Misericórdia.
</p><br>

<p style="text-align: center; font-weight: bold;">
Referências
</p>

<p style="text-align: center;">
Composto pelo Padre Frei António das Chagas, Religioso do Seráfico Padre São Francisco da Província dos Algarves, e Pregador Apostólico; retirado do site português “Senza Pagare”.
</p>

</div>
`,
    summary: `
Um profundo ato de contrição quaresmal composto pelo Padre Frei António das Chagas, expressando arrependimento sincero, confiança na misericórdia divina e propósito firme de conversão.
`,
  },

  "meditacao-05": {
    title: "Alegra-te, Jerusalém",
    content: `
<div style="font-size: 19px; line-height: 1.9;">

<p style="text-align: center; font-weight: bold;">
“ALEGRA-TE, JERUSALÉM”, MAS COM O QUÊ?
</p><br>

<p style="text-align: center;">
Michael P. Foley
</p>

<p style="text-align: center; font-style: italic;">
Tradução: Equipe Christo Nihil Praeponere
</p><br>

<p style="text-align: justify;">
No 4.º Domingo da Quaresma, também chamado de “Laetare” ou “da Alegria”, a Igreja se veste de paramentos róseos e faz como que uma pausa, para respirar, durante a maratona de seis semanas da Quaresma. Mas com o que exatamente nos alegramos neste dia?
</p><br>

<p style="text-align: justify;">
Todos sabem que o Domingo Laetare, ou “da Alegria”, é um dos domingos “rosas” do ano litúrgico, servindo de interlúdio mais festivo durante a austeridade da Quaresma. É como uma pausa para respirar durante uma maratona de seis semanas. Mas com o que exatamente nos alegramos? A Coleta nos dá uma pista:
</p><br>

<p style="text-align: justify; font-style: italic;">
Concéde, quáesumus, omnípotens Deus: ut qui ex mérito nostrae actiónis afflígimur, tuae gratiae consolatióne respirémus. Per Dóminum.
</p>

<p style="text-align: justify;">
Nós vos suplicamos, ó Deus todo-poderoso, que, aniquilados pelo mérito das nossas ações, possamos respirar novamente pelo consolo de vossa graça. Por Nosso Senhor…
</p><br>

<p style="text-align: justify;">
A maioria dos Missais de bolso traduz affligimur por “aflitos”, e estão corretos. Mas como, em última instância, affligere deriva de uma raiz que significa “aniquilar”, forma um contraste natural com respirare, “respirar novamente” ou “reviver”.
</p><br>

<p style="text-align: justify;">
Recordamos a terrível tortura infligida a Santa Margarida Clitherow, que estava grávida quando foi aniquilada a pedradas durante o reinado de Elizabete I, na Sexta-Feira Santa, por ter-se recusado a renunciar à fé católica. Nessa Coleta, reconhecemos que nossas próprias ações carregam o grande peso da morte, e rezamos para que ele seja aliviado e nós possamos respirar novamente — o que reforça, por sua vez, a ideia do Domingo da Alegria como uma lufada de ar fresco em meio ao ardor da Quaresma.
</p><br>

<p style="text-align: justify;">
Além disso, rezamos para respirar novamente ou ser reanimados pela consolação da graça de Deus. O apelo à consolação nos leva de volta ao Intróito do dia:
</p><br>

<p style="text-align: justify; font-style: italic;">
Laetáre, Jerúsalem: et convéntum fácite, omnes qui dilígitis eam: gaudéte cum laetítia, qui in tristítia fuístis: ut exsultétis, et satiémini ab ubéribus consolatiónis vestrae. Laetátus sum in his, quae dicta sunt mihi: in domum Dómini íbimus. ℣. Glória Patri.
</p>

<p style="text-align: justify;">
Alegra-te, ó Jerusalém, e reuni-vos todos os que a amam; exultai de alegria, vós que estáveis tristes, para que possais exultar-vos e ficar cheios a partir dos seios de vossa consolação (Is 66,10.11). Alegrei-me no que me disseram: “Iremos à casa do Senhor” (Sl 121,2). ℣. Glória ao Pai.
</p><br>

<p style="text-align: justify;">
São os seios de Jerusalém que trazem consolação. O rito romano tradicional é maravilhosamente concreto: se Jerusalém é uma mãe, como confirma a leitura da Epístola, tirada de Gl 4,22-31, tem seios que nos consolam como uma mãe a acalmar o bebê que chora. Mas o que são exatamente os seios de nossa mãe celestial, a Igreja?
</p><br>

<p style="text-align: justify;">
O Evangelho (cf. Jo 6,1-15) responde à pergunta. No milagre da multiplicação dos pães e dos peixes, temos uma prefiguração da Eucaristia, o Pão da Vida que desafia as leis do espaço, do tempo e da matéria, ao multiplicar de forma mística a nossa comida espiritual.
</p><br>

<p style="text-align: justify;">
Foi essa sensibilidade que levou a bem-aventurada Juliana de Norwich a comparar ao seio materno o “doce lado aberto” do corpo crucificado de Cristo, do qual jorraram água e o preciosíssimo Sangue.
</p><br>

<p style="text-align: justify;">
Na Inglaterra, o Domingo da Alegria é o Mothering Day, isto é, o “Domingo Materno”, o “Dia das Mães” original. Na Idade Média, estudantes e aprendizes eram autorizados a visitar sua “igreja mãe”, isto é, o templo em que foram batizados. Como estavam de visita à casa, iam ver suas mães e levavam presentes. O bolo Simnel é uma herança saborosa dessa antiga tradição.
</p><br>

<p style="text-align: justify;">
O Domingo da Alegria, em outras palavras, é de júbilo porque sabemos que, apesar dos escândalos e corrupções que possam atingi-la, nossa santa Madre Igreja ainda tem os seios da consolação eucarística que nos nutrem e alimentam.
</p><br>

<p style="text-align: justify;">
Por isso, quão apropriado é que recebamos a Sagrada Comunhão de joelhos e na boca! Essa não é, de fato, a posição exata de um bebê a ser amamentado, mas expressa uma atitude de súplica, abandono e receptividade. Como explica a Beata Juliana, Jesus quer que assumamos a natureza dependente e confiante de uma criança.
</p><br>

<p style="text-align: center; font-weight: bold;">
Notas
</p>

<p style="text-align: justify;">
No Missal Romano Quotidiano de D. Gaspar Lefebvre e dos Monges Beneditinos de S. André, a Coleta antiga do 4.º Domingo do Advento vem traduzida de forma mais bela, ainda que menos literal: “Concedei, Senhor onipotente, que nós, que somos merecidamente castigados pela nossa má conduta, encontremos refrigério na paz da vossa graça”.
</p><br>

<p style="text-align: justify;">
Como no último domingo, o Intróito do rito antigo foi preservado no rito de Paulo VI como antífona de entrada da mesma Missa do 4.º Domingo da Quaresma.
</p>

</div>
`,
    summary: `
Uma meditação sobre o Domingo Laetare, explicando a alegria no meio da Quaresma como consolação da graça de Deus, simbolizada na maternidade da Igreja e na Eucaristia que nutre espiritualmente os fiéis.
`,
  },

  "oracao-tema": {
    title: "A Oração Quaresmal",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p>A oração é o primeiro pilar. Jesus mesmo se retirou ao deserto por 40 dias para orar.</p><br>
        <p><strong>Práticas:</strong></p>
        <ul>
          <li>Participar da Santa Missa com frequência</li>
          <li>Rezar o Santo Rosário diariamente</li>
          <li>Lectio Divina com as leituras do dia</li>
          <li>Silêncio e adoração</li>
          <li>Via Sacra semanalmente</li>
        </ul><br>
        <p><em>"Vigiai e orai, para que não entreis em tentação." (Mt 26,41)</em></p>
      </div>
    `,
  },

  "jejum-tema": {
    title: "O Jejum Quaresmal",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p>O jejum purifica corpo e alma, tornando-nos livres para buscar a Deus.</p><br>
        <p><strong>Orientações da Igreja:</strong></p>
        <ul>
          <li>Jejum: Uma refeição completa por dia (Quarta de Cinzas e Sexta Santa)</li>
          <li>Abstinência: Não comer carne nas sextas-feiras da Quaresma</li>
          <li>Jejum de redes sociais e entretenimento</li>
          <li>Mortificação dos pensamentos e palavras</li>
        </ul><br>
        <p><em>"Este gênero de demônios só se expulsa pela oração e pelo jejum." (Mt 17,21)</em></p>
      </div>
    `,
  },

  "esmola-tema": {
    title: "A Esmola Quaresmal",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p>A esmola é expressão concreta do amor ao próximo. Nele encontramos Cristo.</p><br>
        <p><strong>Obras de Misericórdia:</strong></p>
        <ul>
          <li>Dar de comer aos famintos</li>
          <li>Dar de beber aos sedentos</li>
          <li>Vestir os nus</li>
          <li>Acolher peregrinos</li>
          <li>Visitar enfermos</li>
          <li>Visitar presos</li>
          <li>Enterrar os mortos</li>
        </ul><br>
        <p><em>"Cada vez que fizestes isto a um destes irmãos, a mim o fizestes." (Mt 25,40)</em></p>
      </div>
    `,
  },

  "conversao-tema": {
    title: "A Conversão Quaresmal",
    content: `
      <div style="font-size: 19px; line-height: 1.9;">
        <p>A Quaresma é tempo de conversão — mudança radical de vida rumo a Deus.</p><br>
        <p><strong>Passos para a conversão:</strong></p>
        <ul>
          <li>Exame de consciência profundo</li>
          <li>Confissão sacramental sincera</li>
          <li>Arrependimento verdadeiro</li>
          <li>Propósito firme de mudança</li>
          <li>Reparação das faltas</li>
        </ul><br>
        <p><em>"Convertei-vos e crede no Evangelho." (Mc 1,15)</em></p>
      </div>
    `,
  },

  "via-sacra": {
    title: "Via Sacra",
    content: `
      <div style="columns: 2; gap: 20px; font-size: 18px; line-height: 1.8;">
          <p><strong>1ª</strong> - Jesus é condenado à morte</p>
          <p><strong>2ª</strong> - Jesus carrega a cruz</p>
          <p><strong>3ª</strong> - Jesus cai pela primeira vez</p>
          <p><strong>4ª</strong> - Jesus encontra Sua Mãe</p>
          <p><strong>5ª</strong> - Simão ajuda Jesus</p>
          <p><strong>6ª</strong> - Verônica enxuga o rosto de Jesus</p>
          <p><strong>7ª</strong> - Jesus cai pela segunda vez</p>
          <p><strong>8ª</strong> - Jesus consola as mulheres</p>
          <p><strong>9ª</strong> - Jesus cai pela terceira vez</p>
          <p><strong>10ª</strong> - Jesus é despojado</p>
          <p><strong>11ª</strong> - Jesus é pregado na cruz</p>
          <p><strong>12ª</strong> - Jesus morre na cruz</p>
          <p><strong>13ª</strong> - Jesus é descido da cruz</p>
          <p><strong>14ª</strong> - Jesus é sepultado</p>
      </div>
      <br>
      <p style="text-align: center; font-style: italic; margin-top: 20px; font-size: 19px;">
        "Nós Vos adoramos, ó Cristo, e Vos bendizemos, porque pela Vossa Santa Cruz remistes o mundo."
      </p>

    `,
  },

  "terco-misericordia": {
    title: "Terço da Divina Misericórdia",
    content: `
      <div style="columns: 1; gap: 20px; font-size: 18px; line-height: 1.8;">
        <p><strong>Como rezar:</strong></p><br>
    <p><strong>Início:</strong> Pai Nosso, Ave Maria, Credo</p><br>
    <p><strong>Nas contas grandes:</strong></p>
    <p><em>"Eterno Pai, eu Vos ofereço o Corpo e Sangue, Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro."</em></p><br>
    <p><strong>Nas contas pequenas:</strong></p><p><em>"Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro."</em></p><br>
    <p><strong>Final (3 vezes):</strong></p><p><em>"Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro."</em></p><br>
    <p style="text-align: center; font-style: italic;">"Jesus, eu confio em Vós!"</p>, 

      </div>
    `,
  },

  rosario: {
    title: rosarioHoje.titulo,
    content: `
      <div style="columns: 1; gap: 20px; font-size: 18px; line-height: 1.8;">
        <p style="text-align: center; margin-bottom: 12px;"> <strong>Rosário do dia</strong> </p>
        ${rosarioHoje.texto} <br> 
        <p style="text-align: center; font-style: italic;"> "Ó Maria, Rainha do Santíssimo Rosário, rogai por nós!" </p>
      </div>
    `,
  },
  "liturgia-horas": {
    title: "Liturgia das Horas",
    content: `
    <div style="columns: 1; gap: 20px; font-size: 18px; line-height: 1.8;">
    <p>A oração oficial da Igreja, santificando cada momento do dia.</p><br>
    <p><strong>Ofício das Leituras:</strong> Leituras bíblicas e patrísticas (qualquer hora)</p><p><strong>Laudes:</strong> Oração da aurora</p>
    <p><strong>Hora Média:</strong> Tércia (9h), Sexta (12h) ou Noa (15h)</p>
    <p><strong>Vésperas:</strong> Oração do entardecer</p>
    <p><strong>Completas:</strong> Oração antes de dormir</p><br>
    <p>A Liturgia das Horas une toda a Igreja em oração contínua, formando um só coro que louva a Deus sem cessar.</p>
    </div>
    `,
  },

  // exemplos de orações
  "pai-nosso": {
    title: "Pai Nosso",
    content: `<p style="text-align: center; font-size: 22px; line-height: 2;">
    Pai nosso que estais nos Céus, <br>
    santificado seja o vosso Nome,<br>
    venha a nós o vosso Reino,<br>
    seja feita a vossa vontade<br>
    assim na terra como no Céu.<br><br>
    O pão nosso de cada dia nos dai hoje,<br>
    perdoai-nos as nossas ofensas<br>
    assim como nós perdoamos<br>
    a quem nos tem ofendido,<br>
    e não nos deixeis cair em tentação,<br>
    mas livrai-nos do Mal.<br><br> 
    <strong>Amém.</strong></p>`,
  },

  "ave-maria": {
    title: "Ave Maria",
    content: `<p style="text-align: center; font-size: 22px; line-height: 2;">Ave Maria, cheia de graça,<br>o Senhor é convosco,<br>bendita sois vós entre as mulheres<br>e bendito é o fruto do vosso ventre, Jesus.<br><br>Santa Maria, Mãe de Deus,<br>rogai por nós pecadores,<br>agora e na hora da nossa morte.<br><br><strong>Amém.</strong></p>`,
  },
  gloria: {
    title: "Glória ao Pai",
    content: `<p style="text-align: center; font-size: 22px; line-height: 2;">Glória ao Pai, e ao Filho,<br>e ao Espírito Santo.<br><br>Assim como era no princípio,<br>agora e sempre<br>e pelos séculos dos séculos.<br><br><strong>Amém.</strong></p>`,
  },
  credo: {
    title: "Credo Apostólico",
    content: `<p style="text-align: center; font-size: 20px; line-height: 1.9;">Creio em Deus Pai, Todo-Poderoso, Criador do Céu e da terra.<br><br>E em Jesus Cristo, seu único Filho, Nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos Céus, está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos.<br><br>Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna.<br><br><strong>Amém.</strong></p>`,
  },
  "ato-contricao": {
    title: "Ato de Contrição",
    content: `<p style="text-align: center; font-size: 22px; line-height: 2;">Meu Deus, eu me arrependo de todo o coração de Vos ter ofendido, porque sois infinitamente bom e o pecado Vos desagrada.<br><br>Proponho firmemente, com o auxílio da vossa graça, fazer penitência, não mais pecar e fugir das ocasiões de pecado.<br><br><strong>Amém.</strong></p>`,
  },
  "salve-rainha": {
    title: "Salve Rainha",
    content: `<p style="text-align: center; font-size: 20px; line-height: 1.9;">Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve!<br><br>A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas.<br><br>Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre.<br><br>Ó clemente, ó piedosa, ó doce sempre Virgem Maria.<br><br><em>V. Rogai por nós, Santa Mãe de Deus.</em><br><em>R. Para que sejamos dignos das promessas de Cristo. Amém.</em></p>`,
  },
  share: {
    title: "Compartilhar a Campanha",
    content: `
    <p style="text-align: center; margin-bottom: 20px; font-size: 18px;">
      Ajude a divulgar a Campanha da Quaresma 2026!
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">

  <!-- WHATSAPP -->
  <button
    onclick="shareOn('whatsapp'); closeModal();"
    style="
      padding: 10px 16px;
      background: linear-gradient(135deg, #25D366, #20BA61);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="white"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.057 24l1.687-6.163a11.87 11.87 0 01-1.62-6.14C.124 5.29 5.42 0 12 0c3.21 0 6.22 1.24 8.48 3.5A11.88 11.88 0 0124 12c0 6.58-5.42 12-12 12-2.04 0-3.95-.5-5.693-1.44L.057 24zm6.597-3.7c1.69.995 3.75 1.56 5.905 1.56 5.45 0 9.88-4.43 9.88-9.88 0-2.62-1.04-5.08-2.93-6.93A9.78 9.78 0 0012 2.12c-5.45 0-9.88 4.43-9.88 9.88 0 2.2.68 4.28 1.95 5.97l-.77 2.81 2.48-.68zm11.387-5.1c-.297-.15-1.758-.867-2.03-.967-.273-.1-.472-.15-.672.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.48-.883-.788-1.48-1.76-1.654-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.198-.297.298-.495.1-.198.05-.372-.025-.52-.075-.148-.672-1.612-.92-2.21-.242-.58-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.48 1.065 2.876 1.214 3.074c.15.198 2.096 3.2 5.077 4.49.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.124-.272-.198-.57-.347z"/>
    </svg>
    WhatsApp
  </button>

  <!-- FACEBOOK -->
  <button
    onclick="shareOn('facebook'); closeModal();"
    style="
      padding: 10px 16px;
      background: linear-gradient(135deg, #1877F2, #0A66C2);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="white"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.919.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z"/>
    </svg>
    Facebook
  </button>

</div>

 

    <div style="background: #f0f0f0; padding: 16px; border-radius: 12px; text-align: center;">
      
      <p style="font-style: italic; font-size:16px; color: #333; margin: 0;">
        "Participe da Campanha da Quaresma 2026: 'Mestre, onde moras?' — 'Vinde e vede.' (Jo 1,38-39) ✝️🙏"
      </p>
    </div>
  `,
  },
};
