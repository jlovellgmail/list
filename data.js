// html codes:
// http://webdesign.about.com/od/localization/l/blhtmlcodes-fr.htm
//--------------------------------------------------
var cache = "_____"; // caché = hidden
var endash = "\u2013";
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
*/
//--------------------------------------------------
// french
add_item(
    "how do you say ... in French?"
    ,"comment est-ce que on dit ... en fran\xe7ais ?"
);
add_item(
    "what does ... mean?"
    ,"que est-ce que ... signifie ?"
    ,[ 
        "https://www.youtube.com/watch?v=lFEwiNkaLns" // @ 0:54
     ]
);
add_item(
    "how do you write ... ?"
    ,"comment est-ce que on \xe9crit ... ?"
);
add_item(
    "how do you spell ... ?"
    ,"comment est-ce que on \xe9pelle ... ?"
);
add_item(
    "can you repeat?"
    ,"est-ce que tu peux r\xe9p\xe9ter ?"
);
add_item(
    "I don't understand (this word / this sentence)"
    ,"je ne comprends pas (ce mot / cette phrase)"
);
add_item(
    "I have a question"
    ,"j'ai une question"
    ,["http://forvo.com/word/j%27ai_une_question/#fr"]
);
add_item(
    "I don't know"
    ,"je ne sais pas"
);
add_item("student next to me");
add_item("professor's name");
add_item(
    "This is "+cache+". He is wearing glasses, a yellow shirt and white shoes."
    ,"Voila "+cache+". il porte des lunettes, une chemise jaune et des chaussures blanches"
);
add_item(
    "he wears glasses"
    ,"il porte des lunettes"
    // Allons-y cd 1-14 @ 1:09, book page 67
);
add_item(
    "shoes"
    ,"chaussures"
    ,["http://www.linguee.fr/francais-anglais/traduction/chaussures.html"]
);
add_item(
    "yellow"
    ,"jaune"
);
add_item(
    "pink"
    ,"rose"
    ,["http://www.linguee.fr/francais-anglais/traduction/rose.html"]
);
add_item(
    "white"
    ,"blanc"
    ,[
        "http://forvo.com/word/blanc/#fr"
        ,"http://www.linguee.fr/francais-anglais/traduction/blanc.html"
    ]
);
add_item(
    "wear"
    ,"porter"
    ,["http://www.linguee.fr/francais-anglais/traduction/porter.html"]
);
add_item(
    "glasses"
    ,"lunettes"
);
add_item(
    "my name is..."
    ,"je m\'appelle ..."
);
add_item(
    "you're welcome"
    ,"je vous en prie"
    ,[
        "https://app.box.com/s/kl9mgkfafb2ncp26gsc531t98v54nrsw" // @ 0:12
        ,"http://forvo.com/word/je_vous_en_prie/"
    ]
);
add_item(
    "what's your name?"
    ,"comment tu t'appelles?"
    ,[
        "https://www.youtube.com/watch?v=_Xx0THT3otw" // @ 0:07
        ,"http://forvo.com/word/comment_tu_t%C2%B4appelles%3F/#fr"
    ]
);
add_item(
    "nice to meet you"
    ,"enchant\xe9"
    ,["http://forvo.com/search/enchante/"]
);
add_item(
    "how are you?"
    ,"comment \xe7a va ?"
);
add_item(
    "whatever"
    ,"bof"
);
add_item("and you?", "et toi ?");
add_item("what's her name?", "comment elle s'appelle ?");
add_item(
    "tall"
    ,"grand"
    ,["http://www.linguee.fr/francais-anglais/traduction/grand.html"]
);
add_item(
    "small / little"
    ,"petit"
    ,["http://www.linguee.fr/francais-anglais/traduction/grand.html"]
);
add_item(
    "young"
    ,"jeune"
    ,["http://www.linguee.fr/francais-anglais/traduction/jeune.html"]
);
add_item(
    "old"
    ,"\xe2g\xe9"
    ,["http://www.linguee.fr/francais-anglais/traduction/%C3%A2g%C3%A9.html"]
);
add_item("beautiful", "belle");
add_item("handsome", "beau");
add_item("ugly", "moche");
add_item("what are you wearing?", "qu'est-ce que tu portes ?");
add_item(
    "light (of clothing)"
    ,"clair"
    ,["http://www.linguee.fr/francais-anglais/traduction/clair.html"]
);
add_item("dark (of clothing)", "fonc\xe9");
add_item("I am from ...", "je suis de ...", ["http://forvo.com/word/je_suis_de_floride/#fr"]);
add_item(
    "I am a student (male) in french"
    ,"je suis \xe9tudiant en le fran\xe7ais"
    ,["http://forvo.com/word/%C3%A9tudiant/#fr"]
);
add_item("his name is Guillaume", "il s'appelle Guillaume");
add_item("her name is Laura", "elle s'appelle Laura");
add_item("French", "le fran\xe7ais");
add_item("English (m)", "l'anglais");
add_item("history", "l'histoire (f)", ["http://forvo.com/word/l%27histoire/#fr"]);
add_item("computer science", "l'informatique (f)");
add_item(
    "what's your name? (formal)"
    ,"comment vous appelez-vous?"
    ,[
        "http://forvo.com/word/comment_vous_appelez-vous/#fr"
        ,"https://media.la.utexas.edu/fi/aud/voc/005.mp3" // @ 0:50
    ]
);
add_item("see you tomorrow", "\xe0 demain", ["http://forvo.com/word/%C3%A0_demain/#fr"]);
add_item("woman", "femme", ["http://www.linguee.fr/francais-anglais/traduction/femme.html"]);
add_item("man", "homme", ["http://www.linguee.fr/francais-anglais/traduction/homme.html"]);
add_item("brother", "fr\xe9re", ["http://www.linguee.fr/francais-anglais/traduction/fr%C3%A8re.html"]);
add_item("table", "table", ["http://www.linguee.fr/francais-anglais/traduction/table.html"]);
add_item("chair", "chaise", ["http://www.linguee.fr/francais-anglais/traduction/chaise.html"]);
add_item(
    // masculine singular indefinite article
    "a boy"
    ,"un gar\xe7on"
    ,[
        "http://forvo.com/word/un_gar%C3%A7on/#fr"
        ,"http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"
    ]
);
add_item(
    // masculine singular definite article
    "the boy"
    ,"le gar\xe7on"
    ,[
        "http://forvo.com/word/le_gar%C3%A7on_est_jeune/#fr"
        ,"http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"
    ]
);
add_item(
    // plural indefinite article
    "friends or some friends"
    ,"des amis"
    ,[
        "http://forvo.com/word/des_amis/#fr"
        ,"http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"
    ]
);
add_item(
    // feminine singular indefinite article
    "a girl"
    ,"une fille"
    ,[
        "http://forvo.com/word/une_fille/#fr"
        ,"http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en"
    ]
);
add_item(
    // feminine singular definite article
    "the girl, the actress"
    ,"la fille, l'actrice"
    ,[
        "http://forvo.com/word/la_fille/#fr"
        ,"http://forvo.com/word/l%27actrice/#fr"
        ,"http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en"
    ]
);
add_item("socks", "chaussettes", ["http://forvo.com/word/chaussettes/#fr"]);
add_item(
    "hair"
    ,"cheveux"
    ,[
        "http://forvo.com/word/cheveux/#fr"
        ,"http://www.linguee.fr/francais-anglais/traduction/cheveux.html"
    ]
);
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
add_item(
    "sandal"
    ,"sandale"
    ,[
        "http://forvo.com/word/sandale/#fr"
        ,"http://www.linguee.fr/francais-anglais/traduction/sandale.html"
    ]
);
add_item("cold", "froide", ["http://forvo.com/word/froide/#fr"]);
add_item("tie (clothing)", "cravate", ["http://www.linguee.fr/francais-anglais/traduction/cravate.html"]);
add_item("how many", "combien", ["http://www.linguee.fr/francais-anglais/traduction/combien.html"]);
add_item("there are", "il y a", ["http://forvo.com/word/il_y_a/#fr"]);
add_item("in the class", "dans la classe", ["http://forvo.com/word/dans/#fr"]);
add_item("vest", "gilet", ["http://forvo.com/word/gilet/#fr"]);
add_item("beard", "barb\xe9", ["http://forvo.com/word/barb%C3%A9/#fr"]);
add_item("open", "ouverte", ["http://forvo.com/word/ouverte/#fr"]);
add_item(
    "closed"
    ,"ferm\xe9e"
    ,[
        "http://forvo.com/word/ferm%C3%A9e/#fr"
        ,"http://www.linguee.fr/francais-anglais/traduction/ferm%C3%A9.html"
    ]
);
add_item("in the class, how many tables are there?", "Dans la classe, combien est-ce que il y a de tables ?");
add_item("notebook", "cahier", ["http://www.linguee.fr/francais-anglais/traduction/cahier.html"]);
add_item("desk", "bureau", ["http://www.linguee.fr/francais-anglais/traduction/bureau.html"]);
add_item(
    "a black hat"
    ,"un chapeau noir"
    ,[
        "http://forvo.com/word/chapeau/#fr"
        ,"http://forvo.com/word/noir/#fr"
    ]
);
add_item(
    "a grey suit"
    ,"un costume gris"
    ,[
        "http://forvo.com/word/costume/#fr"
        ,"http://forvo.com/word/gris/#fr"
    ]
);
add_item("some white basketball shoes", "des baskets blanches");
add_item(
    "a brown skirt"
    ,"une jupe marron"
    ,[
        "http://forvo.com/word/marron/#fr"
        ,"http://forvo.com/word/jupe/#fr"
    ]
);
add_item("boots", "des bottes", ["http://forvo.com/word/bottes/#fr"]);
add_item("pencil", "un crayon", ["http://forvo.com/word/crayon/#fr"]);
add_item("a pen", "un stylo", ["http://forvo.com/word/stylo/#fr"]);
add_item("a book", "un livre", ["http://forvo.com/word/un_livre/#fr"]);
add_item("wall", "wall", ["http://forvo.com/word/mur/#fr"]);
add_item("a computer", "un ordinateur", ["http://forvo.com/word/un_ordinateur/#fr"]);
add_item("the floor", "le plancher", ["http://forvo.com/word/plancher/#fr"]);


//--------------------------------------------------
console.log("data.js was loaded");




