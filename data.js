/*
html codes:
http://webdesign.about.com/od/localization/l/blhtmlcodes-fr.htm

    é   \xe9
    ê   \xea
    à   \xe0

*/
//--------------------------------------------------
var cache = "_____";
var endash = "\u2013";
var ref_folder = "references/";
var slides2_page3 = ref_folder+"Extension_French 1_Cours 2 - page 3.jpg";
var slides2_page5 = ref_folder+"Extension_French 1_Cours 2 - page 5.jpg";
var slides2_page6 = ref_folder+"Extension_French 1_Cours 2 - page 6.jpg";
var slides2_page7 = ref_folder+"Extension_French 1_Cours 2 - page 7.jpg";
//--------------------------------------------------
var data = {};
data.items = [];
function add_item(word, definition, links){
    var item ={};
    if(word) item.word = word;
    if(definition) item.definition = definition;
    if(links) item.links = links;
    data.items.push(item);
}
/*
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// words
add_item("derelict");
add_item("miasma");
add_item("deus ex machina");
add_item("cosmopolitan");
add_item("de rigueur");
add_item("raison d'\xEAtre");
add_item("in statu nascendi");
add_item("participle");
add_item("tissue");
add_item("de novo");
add_item("diploid");
add_item("affect");
//--------------------------------------------------
// dates
add_item("Freud");
add_item("Magritte");
add_item("Pollock");
add_item("Picasso");
add_item("Hegel");
add_item("Marx");
add_item("Breuer treats Anna O.");
add_item("Plato");
add_item("Aristotle");
add_item("Darwin");
add_item("de Chirico, Giorgio");
add_item("Dali", "1904"+endash+"1989");
*/
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// French
/*
add_item("how do you say ... in French?", "comment est-ce que on dit ... en fran\xe7ais ?");
add_item("what does ... mean?", "que est-ce que ... signifie ?", ["https://www.youtube.com/watch?v=lFEwiNkaLns"]);
add_item("how do you write ... ?", "comment est-ce que on \xe9crit ... ?");
add_item("how do you spell ... ?", "comment est-ce que on \xe9pelle ... ?");
add_item("can you repeat?", "est-ce que tu peux r\xe9p\xe9ter ?");
add_item("I don't understand (this word / this sentence)", "je ne comprends pas (ce mot / cette phrase)");
add_item("I have a question", "j'ai une question", ["http://forvo.com/word/j%27ai_une_question/#fr"]);
add_item("I don't know", "je ne sais pas");
add_item("student next to me", "Sheshank");
add_item("professor's name", "Guillaume");
add_item("This is "+cache+". He is wearing glasses, a yellow shirt and white shoes.", "Voila "+cache+". il porte des lunettes, une chemise jaune et des chaussures blanches");
add_item("he wears glasses", "il porte des lunettes");
add_item("shoes", "chaussures", ["http://www.linguee.fr/francais-anglais/traduction/chaussures.html"]);
add_item("yellow", "jaune");
add_item("pink", "rose", ["http://www.linguee.fr/francais-anglais/traduction/rose.html"]);
add_item("white", "blanc", ["http://forvo.com/word/blanc/#fr", "http://www.linguee.fr/francais-anglais/traduction/blanc.html"]);
add_item("wear", "porter", ["http://www.linguee.fr/francais-anglais/traduction/porter.html"]);
add_item("glasses", "lunettes");
add_item("my name is...", "je m\'appelle ...");
add_item("you're welcome", "je vous en prie", ["https://app.box.com/s/kl9mgkfafb2ncp26gsc531t98v54nrsw","http://forvo.com/word/je_vous_en_prie/"]);
add_item("what's your name?", "comment tu t'appelles?", ["https://www.youtube.com/watch?v=_Xx0THT3otw","http://forvo.com/word/comment_tu_t%C2%B4appelles%3F/#fr"]);
add_item("nice to meet you", "enchant\xe9", ["http://forvo.com/search/enchante/"]);
add_item("how are you?", "comment \xe7a va ?");
add_item("whatever", "bof");
add_item("and you?", "et toi ?");
add_item("what's her name?", "comment elle s'appelle ?");
add_item("tall", "grand", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
add_item("small / little", "petit", ["http://www.linguee.fr/francais-anglais/traduction/grand.html"]);
add_item("young", "jeune", ["http://www.linguee.fr/francais-anglais/traduction/jeune.html"]);
add_item("old", "\xe2g\xe9", ["http://www.linguee.fr/francais-anglais/traduction/%C3%A2g%C3%A9.html"]);
add_item("beautiful", "belle");
add_item("handsome", "beau");
add_item("ugly", "moche");
add_item("what are you wearing?", "qu'est-ce que tu portes ?");
add_item("light (of clothing)", "clair", ["http://www.linguee.fr/francais-anglais/traduction/clair.html"]);
add_item("dark (of clothing)", "fonc\xe9");
add_item("I am from ...", "je suis de ...", ["http://forvo.com/word/je_suis_de_floride/#fr"]);
add_item("I am a student (male) in french", "je suis \xe9tudiant en le fran\xe7ais", ["http://forvo.com/word/%C3%A9tudiant/#fr"]);
add_item("his name is Guillaume", "il s'appelle Guillaume");
add_item("her name is Laura", "elle s'appelle Laura");
add_item("French", "le fran\xe7ais");
add_item("English (m)", "l'anglais");
add_item("history", "l'histoire (f)", ["http://forvo.com/word/l%27histoire/#fr"]);
add_item("computer science", "l'informatique (f)");
add_item("what's your name? (formal)", "comment vous appelez-vous?", ["http://forvo.com/word/comment_vous_appelez-vous/#fr", "https://media.la.utexas.edu/fi/aud/voc/005.mp3"]);
add_item("see you tomorrow", "\xe0 demain", ["http://forvo.com/word/%C3%A0_demain/#fr"]);
add_item("woman", "femme", ["http://www.linguee.fr/francais-anglais/traduction/femme.html"]);
add_item("man", "homme", ["http://www.linguee.fr/francais-anglais/traduction/homme.html"]);
add_item("brother", "fr\xe9re", ["http://www.linguee.fr/francais-anglais/traduction/fr%C3%A8re.html"]);
add_item("table", "table", ["http://www.linguee.fr/francais-anglais/traduction/table.html"]);
add_item("chair", "chaise", ["http://www.linguee.fr/francais-anglais/traduction/chaise.html"]);
add_item("a boy", "un gar\xe7on", ["http://forvo.com/word/un_gar%C3%A7on/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("the boy", "le gar\xe7on", ["http://forvo.com/word/le_gar%C3%A7on_est_jeune/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
add_item("friends or some friends", "des amis", ["http://forvo.com/word/des_amis/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("a girl", "une fille", ["http://forvo.com/word/une_fille/#fr", "http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"]);
add_item("the girl, the actress", "la fille, l'actrice", ["http://forvo.com/word/la_fille/#fr", "http://forvo.com/word/l%27actrice/#fr", "http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"]);
add_item("socks", "chaussettes", ["http://forvo.com/word/chaussettes/#fr"]);
add_item("hair", "cheveux", ["http://forvo.com/word/cheveux/#fr", "http://www.linguee.fr/francais-anglais/traduction/cheveux.html"]);
add_item("right", "droit", ["http://www.linguee.fr/francais-anglais/traduction/droit.html"]);
add_item("left", "gauche", ["http://www.linguee.fr/francais-anglais/traduction/gauche.html"]);
add_item("98", "quatre vingt dix huit", ["http://forvo.com/word/quatre_vingt_dix_huit/#fr"]);
add_item("21", "vingt et un", ["http://forvo.com/word/vingt_et_un/#fr"]);
add_item("26", "vingt-six", ["http://forvo.com/word/vingt-six/#fr"]);
add_item("91", "quatre-vingt-onze", ["http://forvo.com/word/quatre-vingt-onze/#fr"]);
add_item("j", "j", ["http://forvo.com/word/j/#fr"]);
add_item("a", "a", ["http://forvo.com/word/a/#fr"]);
add_item("c", "c", ["http://forvo.com/word/c/#fr"]);
add_item("k", "k", ["http://forvo.com/word/k/#fr"]);
add_item("flip flops", "tongs", ["http://forvo.com/word/tongs/#fr"]);
add_item("dress", "robe", ["http://forvo.com/word/robe/#fr"]);
add_item("jacket", "veste", ["http://forvo.com/word/veste/#fr"]);
add_item("top", "en haut", ["http://forvo.com/word/en_haut/#fr"]);
add_item("at the bottom", "en bas", ["http://forvo.com/word/en_bas/#fr"]);
add_item("pants", "pantalon", ["http://forvo.com/word/pantalon/#fr"]);
add_item("jewelry", "bijoux", ["http://forvo.com/word/bijoux/#fr"]);
add_item("job", "travail", ["http://forvo.com/word/travail/#fr"]);
add_item("bathing suit", "maillot de bain", ["http://forvo.com/word/maillot_de_bain/#fr"]);
add_item("butterfly", "papillon", ["http://forvo.com/word/papillon/#fr"]);
add_item("sandal", "sandale", ["http://forvo.com/word/sandale/#fr", "http://www.linguee.fr/francais-anglais/traduction/sandale.html"]);
add_item("cold", "froide", ["http://forvo.com/word/froide/#fr"]);
add_item("tie (clothing)", "cravate", ["http://www.linguee.fr/francais-anglais/traduction/cravate.html"]);
add_item("how many", "combien", ["http://www.linguee.fr/francais-anglais/traduction/combien.html"]);
add_item("there are", "il y a", ["http://forvo.com/word/il_y_a/#fr"]);
add_item("in the class", "dans la classe", ["http://forvo.com/word/dans/#fr"]);
add_item("vest", "gilet", ["http://forvo.com/word/gilet/#fr"]);
add_item("beard", "barb\xe9", ["http://forvo.com/word/barb%C3%A9/#fr"]);
add_item("open", "ouverte", ["http://forvo.com/word/ouverte/#fr"]);
add_item("closed", "ferm\xe9e", ["http://forvo.com/word/ferm%C3%A9e/#fr", "http://www.linguee.fr/francais-anglais/traduction/ferm%C3%A9.html"]);
add_item("in the class, how many tables are there?", "Dans la classe, combien est-ce que il y a de tables ?");
add_item("notebook", "cahier", ["http://www.linguee.fr/francais-anglais/traduction/cahier.html", "http://forvo.com/word/cahier/#fr"]);
add_item("desk", "bureau", ["http://www.linguee.fr/francais-anglais/traduction/bureau.html"]);
add_item("a black hat", "un chapeau noir", ["http://forvo.com/word/chapeau/#fr", "http://forvo.com/word/noir/#fr"]);
add_item("a grey suit", "un costume gris", ["http://forvo.com/word/costume/#fr", "http://forvo.com/word/gris/#fr"]);
add_item("some white basketball shoes", "des baskets blanches");
add_item("a brown skirt", "une jupe marron", ["http://forvo.com/word/jupe/#fr", "http://forvo.com/word/marron/#fr"]);
add_item("boots", "des bottes", ["http://forvo.com/word/bottes/#fr"]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 3
add_item("a pencil", "un crayon", ["http://forvo.com/word/crayon/#fr", slides2_page3]);
add_item("a pen", "un stylo", ["http://forvo.com/word/stylo/#fr", slides2_page3]);
add_item("a book", "un livre", ["http://forvo.com/word/un_livre/#fr", slides2_page3]);
add_item("wall", "mur", ["http://forvo.com/word/mur/#fr", slides2_page3]);
add_item("a computer", "un ordinateur", ["http://forvo.com/word/un_ordinateur/#fr"], slides2_page3);
add_item("the floor", "le plancher", ["http://forvo.com/word/plancher/#fr", slides2_page3]);
add_item("cell phone", "portable", ["http://forvo.com/word/portable/#fr", slides2_page3]);
add_item("(f) a student", "une \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
add_item("(m) a student", "un \xe9tudiante", ["http://forvo.com/word/%C3%A9tudiant/#fr", slides2_page3]);
add_item("the professor", "le professeur", ["http://forvo.com/word/le_professeur/#fr", slides2_page3]);
add_item("the clock", "l'horloge (f)", ["http://forvo.com/word/l%27horloge/#fr", slides2_page3]);
add_item("the door", "la porte", ["http://forvo.com/word/la_porte/#fr", slides2_page3]);
add_item("the lights", "les lumi\xe9res (f)", ["http://forvo.com/word/lumi%C3%A8res/#fr", slides2_page3]);
add_item("a window", "une fen\xeatre", ["http://forvo.com/word/fen%C3%AAtre/#fr", slides2_page3]);
add_item("the ceiling", "le plafond", ["http://forvo.com/word/le_plafond/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=le+plafond", slides2_page3]);
//--------------------------------------------------
//--------------------------------------------------
add_item("hidden", "cach\xe9", ["http://www.linguee.fr/francais-anglais/traduction/cach%C3%A9.html", "http://forvo.com/word/cach%C3%A9/#fr"]);
add_item("in the street", "dans la rue", ["http://forvo.com/word/dans_la_rue/#fr", "http://forvo.com/word/dans_la_rue/#fr"]);
*/
//--------------------------------------------------
//--------------------------------------------------
// class 2 - notebook page
add_item("on the table", "sur la table", ["http://forvo.com/word/sur_la_table/#fr", "http://forvo.com/word/sur/#fr"]);
add_item("glasses case", "\xe9tui \xe0 lunettes", ["http://forvo.com/word/%C3%A9tui_%C3%A0_lunettes/#fr"]);
add_item("mouse (for computer)", "souris", ["http://forvo.com/word/souris/#fr"]);
add_item("the watch", "la montre", ["http://forvo.com/word/la_montre/#fr"]);
add_item("key", "cl\xe9", ["http://forvo.com/word/cl%C3%A9/#fr"]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 5
add_item("the following sentences", "les phrases suivantes", ["http://www.linguee.fr/francais-anglais/traduction/phrases.html", "http://forvo.com/word/phrases/#fr", "http://forvo.com/word/suivantes/#fr", slides2_page5]);
add_item("we choose a modern phone", "Nous choisissons un t\xe9l\xe9phone moderne", ["http://forvo.com/word/nous/#fr", "http://forvo.com/word/choisissons/#fr", "http://forvo.com/word/t%C3%A9l%C3%A9phone/#fr", "http://forvo.com/word/moderne/#fr", slides2_page5]);
add_item("choose", "choisir", ["http://forvo.com/word/choisir/#fr", "http://www.linguee.fr/francais-anglais/traduction/choisir.html"]);
add_item("we choose", "nous choisissions", ["http://www.french-linguistics.co.uk/verbs/table/choisir.html#.ViKqyJmrTfA"]);
add_item("assist", "assister", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=assistez", slides2_page5]);
add_item("you assist", "vous assistez", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=vous", slides2_page5]);
add_item("you are wearing your friend's sweater", "tu portes le pull de ton ami", ["http://www.linguee.fr/francais-anglais/traduction/pull.html", "http://forvo.com/word/pull/#fr", "http://forvo.com/word/ton/#fr", slides2_page5]);
add_item("your", "ton", ["http://forvo.com/word/ton/#fr"]);
add_item("I look at the computer produced by Apple", "je regarde l'ordinateur produit par Apple", ["http://forvo.com/word/regarde/#fr", "http://forvo.com/word/produit/#fr", "http://forvo.com/word/par/#fr", slides2_page5]);
add_item("produced", "produit", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=produit", slides2_page5]);
add_item("look at", "regarder", ["http://www.linguee.fr/francais-anglais/traduction/regarder.html", slides2_page5]);
add_item("he has black shoes", "il a des chaussures noires", ["http://forvo.com/word/noires/#fr", slides2_page5]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 6
add_item("we have", "nous avons", ["http://forvo.com/word/nous_avons/#fr", slides2_page6]);
add_item("the computer is modern but the notebook is ancient", "l'ordinateur est moderne mais le cahier est ancien", ["http://forvo.com/word/moderne/#fr", "http://forvo.com/word/ancien/#fr", slides2_page6]);
add_item("ancient", "ancien", ["http://forvo.com/word/ancien/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=ancien", slides2_page6]);
add_item("UCSD Extension has a number of teachers", "UCSD Extension a une quantit\xe9 de professeurs", ["http://forvo.com/word/quantit%C3%A9/#fr", "http://www.linguee.fr/francais-anglais/traduction/quantit%C3%A9.html", "http://forvo.com/word/professeur/#fr", slides2_page6]);
add_item("u", "u", ["http://forvo.com/word/u/#fr"]);
add_item("s", "s", ["http://forvo.com/word/s/#fr"]);
add_item("d", "d", ["http://forvo.com/word/d/#fr"]);
/*
add_item("the quality of teachers is impressive!", "La qualit\xe9 des professeurs est impressionnante!", ["http://forvo.com/word/qualit%C3%A9/#fr", "http://forvo.com/search/impressionnante/", slides2_page6]);
add_item("our teacher gives a composition or essay", "Notre professeur donne une composition ou une r\xe9daction", ["http://forvo.com/word/notre/#fr", "http://forvo.com/word/donne/#fr", "http://forvo.com/search/composition/fr/", "http://forvo.com/word/r%C3%A9daction/#fr", slides2_page6]);
add_item("the composition has a strict organization", "La composition a une organisation stricte", ["http://forvo.com/word/organisation/#fr", "http://forvo.com/word/stricte/#fr", slides2_page6]);
add_item("the position of words and the selection of vocabulary are important", "La position des mots et la s\xe9lection du vocabulaire sont importantes", ["http://forvo.com/word/mots/#fr", "http://forvo.com/word/s%C3%A9lection/#fr", "http://forvo.com/word/sont/#fr", "http://forvo.com/word/importantes/#fr", slides2_page6]);
//--------------------------------------------------
//--------------------------------------------------
// class 2 - slides page 7
add_item("masculine", "masculin", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=Masculin", slides2_page7]);
add_item("feminine", "féminin", ["http://forvo.com/word/f%C3%A9minin/#fr", "http://www.linguee.fr/francais-anglais/search?query=f%E9minin&source=auto", slides2_page7]);
add_item("kind / gender", "genre", ["http://forvo.com/word/genre/#fr", "http://www.linguee.fr/francais-anglais/search?source=auto&query=genre", slides2_page7]);
add_item("le genre des noms", "the gender of nouns", ["http://forvo.com/word/genre/#fr", "http://forvo.com/word/noms/#fr", slides2_page7]);
*/
// masculine nouns
add_item("[masculine nouns]", "le gouvernement, le r\xe9alisme, le journal, le pommier, le couloir, le garage, le g\xe9ranium", ["http://forvo.com/word/gouvernement/#fr", "http://forvo.com/word/r%C3%A9alisme/#fr", "http://forvo.com/word/le_journal/#fr", "http://forvo.com/word/pommier/#fr", "http://forvo.com/word/couloir/#fr", "http://forvo.com/word/garage/#fr", "http://forvo.com/word/g%C3%A9ranium/#fr", slides2_page7]);
add_item("the government", "le gouvernement", ["http://forvo.com/word/gouvernement/#fr"]);
add_item("the realism", "le r\xe9alisme", ["http://forvo.com/word/r%C3%A9alisme/#fr"]);
add_item("the journal", "le journal", ["http://forvo.com/word/le_journal/#fr"]);
add_item("the apple tree", "le pommier", ["http://forvo.com/word/pommier/#fr"]);
add_item("the corridor", "le couloir", ["http://forvo.com/word/couloir/#fr"]);
add_item("the garage", "le garage", ["http://forvo.com/word/garage/#fr"]);
add_item("the geranium", "le g\xe9ranium", ["http://forvo.com/word/g%C3%A9ranium/#fr"]);
// feminine nouns
add_item("[feminine nouns]", "la voiture, la beaut\xe9, la mouche, la philosophie, la tablette, la dur\xe9e, la comp\xe9tence", ["http://forvo.com/word/voiture/#fr", "http://forvo.com/word/beaut%C3%A9/#fr", "http://forvo.com/word/la_mouche/#fr", "http://forvo.com/word/philosophie/#fr", "http://forvo.com/word/tablette/#fr", "http://forvo.com/word/dur%C3%A9e/#fr", "http://forvo.com/word/comp%C3%A9tence/#fr", slides2_page7]);
add_item("the car", "la voiture", ["http://forvo.com/word/voiture/#fr"]);
add_item("the beauty", "la beaut\xe9", ["http://forvo.com/word/beaut%C3%A9/#fr"]);
add_item("the fly", "la mouche", ["http://forvo.com/word/la_mouche/#fr"]);
add_item("the philosophy", "la philosophie", ["http://forvo.com/word/philosophie/#fr"]);
add_item("the tablet", "la tablette", ["http://forvo.com/word/tablette/#fr"]);
add_item("the duration", "la dur\xe9e", ["http://forvo.com/word/dur%C3%A9e/#fr"]);
add_item("the competence", "la comp\xe9tence", ["http://forvo.com/word/comp%C3%A9tence/#fr"]);
//
add_item("park the car", "garer la voiture", ["http://forvo.com/word/garer_la_voiture/#fr"]);
/*
add_item("the job (position), the post office", "le poste, la poste", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=poste", "http://forvo.com/word/le_poste/#fr", slides2_page7]);
add_item("the tour, the tower", "le tour, la tour", ["http://www.linguee.fr/francais-anglais/search?source=auto&query=tour", "http://forvo.com/word/le_tour/#fr", "http://forvo.com/word/tour/#fr", "http://forvo.com/word/la_tour_d%27argent/#fr", slides2_page7]);
*/
//--------------------------------------------------
//--------------------------------------------------
/*
add_item("", "", [""]);
*/
//--------------------------------------------------
console.log("data.js was loaded");




