var fs = require("fs");

const israelPara = `Milim yafot me-ele The Idan Raichel project group Shir afreha Ofra Haza Mala, mala, mala Tzika Pik Alev Maya Buskila & Tzika Pik Eineh yehola Ahalonot agvo-im Ata hayav lamut alay Hamsa Ze akol bishvileh Dany Senderson Lagur ito Riki Gal Ani lo yehola biladeha Dana  Alevay- Boaz Sharabi Eloim natan leha bematana Aburganim Shuv lo shaket Arik Einstein Od Shabbat Tipex group Siman sheata tzair Gidi Gov Yad be-Yad Ofra Haza Ani ve ata Arik Einstein Zemer nuge, Atishma koli Ahalonot agvo-im Ze kore Arik Lavi Holem besfradit Shlomo Idov Kol anehalim shir stav Arik Lavi Etzli akol beseder Boaz Sharabi Panim el mul panim Yehuda Poliker Etzel adoda veadod Dany Senderson Mary Lou Tzvika Pik Leolam beikvot ashemesh Sherry Shir a-ava bedoui Itzhak Klepter Kmo tzipor Ofra Haza`;
const chinaPara = ` Chūnnuǎn de huāxiāng dài zǒu dōngtiān de jīhán wéifēng chuī lái yìwài de àiqíng niǎo er de gāogē lā jìn wǒmen jùlí wǒ jiù zài cǐkè túrán ài shàng nǐ zuótiān yǐ láibují míngtiān jiù huì kěxí jīntiān jià gěi wǒ hǎo ma  Xià rì de rèqíng dǎdòng chūntiān de lǎnsǎn yángguāng zhàoyào měimǎn de jiātíng   měi yī shǒu qínggē dūhuì gōu qǐ huíyì xiǎng dāngnián wǒ shì zěnme rènshì nǎi`;
const usPara = `Even if we both break down tonight And you say you hate me, and we go to bed angry I know everything will be alright I'll be here waiting, I promise I'm changing I just need A little time to show you I'm worth it I know that I can be a difficult person I'm a stress case, drive you up the wall when I'm workin' Actually, I'm probably worse when I'm not, you don't deserve it Make you nervous 'cause you know I'ma break soon Every time I do, I say somethin' that hurts you Actin' like I'm gone, but we both in the same room I don't like to be wrong, which I know you relate to And I know I make you feel like you're at the end of your rope That's when I look at you and tell you I'd be better alone Just the pride talkin', isn't it? 'Cause both of us know I'm the definition of "wreck" if you look into my soul Comes out the most when I feel I'm in a vulnerable place Made a lot of mistakes I wish I knew how to erase When I'm afraid, might get distant and I push you away But no matter the case, I'ma do whatever it takes even if Even if we both break down tonight And you say you hate me, and we go to bed angry I know everything will be alright I'll be here waiting, I promise I'm changing I just need Time (oh) I, I need time (oh, oh) I just need time (oh) I, I need time (oh) Time (oh), time (oh) Yeah, way before I bought you the ring We were fighting back and forth like you were wearin' the thing Two passionate people not afraid to say what they think Lead to passionate conversation when it's hard to agree You know me well, sittin' on the edge of my seat Lookin' at life, overanalyzin' everything`;
const dubaiPara = `Unki jaame jam aankhen Shishaye badan mera Unki band muthi me Sara baakpan mera Arze gang meri hai Khittaye jaman mera Mai gulame khwaja hu Hind hai watan mera Aashiqe nabi hu mai Warise ali hu mai Maila ho na payega Hashr tak kafan mera Naate mustafa kehna Naate mustafa sun na Mujhko bakshwayega Haa yahi chalan mera Hashr me nida hogi Yeh gulam kiska hai Mujh ko dekhe aur kehde Ya shahe zaman mera Arsh jhoom jhoom utha Qudsiyo`;
const nepalPara = `Jhari pachhi ko badal jhai ma Hos gumeko pagal jhai ma Timro maya bina, timro maya bina Timro maya bina, timro maya bina Samhali deu yo maya Garera tara bara Timro khusi bhanda para Chhaina mero rahara Chaidaina timi binako Hoo, Chaidaina timi binako Chaidaina timi binako Hoo, Chaidaina timi binako Sunaiko darbara, sunaiko darbara Sunaiko darbara, sunaiko darbara Sunaiko darbara Paluwa muskaudai palauchha Basanta bahar sajauchha Dekhera hamro maya, dekhera hamro maya Panchhi gagan ma udi udi  Marde barko si hunchhan khusi Dekhera hamro maya, dekhera hamro maya Dekhera hamro maya, dekhera hamro maya`;
const lankaPara = `Ithin Epa Matanam Wangu Gatha Hitha Numba Magema Hangu Ale Numbatama Walangu Manike Wennepa Thawa Sunangu Game Katakarama Kella Hitha Wela Numbs Ruwata Billa Nathin Netha Gaththama Alla Mage Hithath Na Matama Mella Kelle Kelle Wela Mage Hitha Paththu Wenawada Thawa Tikak Kittu Mata Pissu Thadawena Widihata Gassu Oya Dunnu Ingiyata Mathwu`;
const brazilPara = `Tão natural quanto a luz do dia Mas que preguiça boa, me deixa aqui à toa Hoje ninguém vai estragar meu dia Só vou gastar energia pra beijar sua boca Fica comigo então, não me abandona não Alguém te perguntou como é que foi seu dia? Uma palavra amiga, uma notícia boa Isso faz falta no dia a dia A gente nunca sabe quem são essas pessoas Eu só queria te lembrar Que aquele tempo eu não podia fazer mais por nós Eu estava errado e você não tem que me perdoar Mas também quero te mostrar Que existe um lado bom nessa história Tudo que ainda temos a compartilhar E viver, e cantar Não importa qual seja o dia Vamos viver, vadiar O que importa é nossa alegria Vamos viver, e cantar Não importa qual seja o dia Vamos viver, vadiar O que importa é nossa alegria Tão natural quanto a luz do dia Mas que preguiça boa, me deixa aqui à toa Hoje ninguém vai estragar meu dia Só vou gastar energia pra beijar sua boca Eu só queria te lembrar Que aquele tempo eu não podia fazer mais por nós Eu estava errado e você não tem que me perdoar Mas também quero te mostrar Que existe um lado bom nessa história Tudo que ainda temos a compartilhar`;
const japanPara = `yureta yuganda sekai ni tatta boku wa tsukitootte mienaku natte mitsukenaide boku no koto wo mitsumenaidedareka ga egaita sekai no naka de anata wo kizutsuketaku wa nai yo oboetete boku no koto woazayaka na mamamugen ni hirogaru kodoku ga kurumaru mujaki ni waratta kioku ga sasatte ugokenai hodokenai ugokenai hodokenai ugokenai ugokenai yo Unravelling the worldkawatte shimatta kaerarenakatta futatsu ga kurumaru futari ga horobiru kowaseru kowasenai kurueru kuruenai anata wo yogosenai yo`;
const indonesiaPara = `Ku buka mata dan ku lihat dunia Tlah ku terima anugerah cintanya Tak pernah aku menyesali yang ku punya Tapi ku sadari ada lubang dalam hati Ku cari sesuatu yang mampu mengisi lubang ini Ku menanti jawaban apa yang dikatakan oleh hati Apakah itu kamu apakah itu dia Selama ini ku cari tanpa henti Apakah itu cinta apakah itu cita Yang mampu melengkapi lubang di dalam hati Ku mengira hanya dialah obatnya Tapi ku sadari bukan itu yang kucari Ku teruskan perjalanan panjang yang begitu melelahkan Dan ku yakin kau tak ingin aku berhenti Apakah itu kamu apakah itu dia Selama ini ku cari tanpa henti Apakah itu cinta Apakah itu cita Yang mampu melengkapi lubang di dalam hati`;
const taiwanPara = `xí guàn tīng nǐ fēn xiǎng shēng huó xì jié bǎo chí zhe jù lí yī kē xīn de yáo yuǎn wǒ de jì mò nǐ jiù tīng bu jiàn wǒ zǒu huí cóng qián nǐ wǎng wèi lái fēi yù jiàn duì de rén cuò guò jiāo chā diǎn yǐ hòu bié zuò péng yǒu péng yǒu bù néng qiān shǒu xiǎng ài nǐ de chōng dòng wǒ zhǐ néng xiào zhe dài guò uì hǎo de péng yǒu yǒu xiē mèng bù néng shuō chū kǒu`;
const indiaPara = `Zindagi ke har ek modi pe main Git gaata chala ja raha hun Bekhudi ka ye alam na puchhon Mnjilo se badha ja raha hun Saj gayi aj saari dishaaen Khul gayi aj jannat ki raahen Husn jab se mera ho gaya hai Mujh pe padti hain sab ki nigaahen Jism ko maut ati hai lekin Ruh ko maut ati nahin hai Ishk roshan hai, roshan rahega Roshani is ki jaati nahin hai`;

const namer = (data) => {
  let words = data.split(" ");
  words=words.filter(word=>word.length>2)
  let names = [];
  const mails = ["gmail", "aol", "outlook", "hotmail", "yahoo"];
  for (let i = 0; i < 1500; i++) {
    let randommail = mails[Math.floor(Math.random() * mails.length)];
    let randomfirst = words[Math.floor(Math.random() * words.length)];
    let randomlast = words[Math.floor(Math.random() * words.length)];

    names.push({
      firstname: randomfirst,
      lastname: randomlast,
      email: `${randomfirst}${randomlast}@${randommail}.com`,
     father: words[Math.floor(Math.random() * words.length)],
     mother:words[Math.floor(Math.random() * words.length)],
     spouse:words[Math.floor(Math.random() * words.length)]
    });
  }
  return Array.from(new Set(names));
};

const allNames = [
  ...namer(israelPara),
  ...namer(indiaPara),
  ...namer(chinaPara),
  ...namer(usPara),
  ...namer(dubaiPara),
  ...namer(nepalPara),
  ...namer(lankaPara),
  ...namer(brazilPara),
  ...namer(japanPara),
  ...namer(indonesiaPara),
  ...namer(taiwanPara),
];

fs.writeFile("names.json", JSON.stringify(allNames), function (err) {
  if (err) throw err;
  console.log("Saved!");
});
