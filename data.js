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
add_item("nice to meet you");
add_item("how are you?");
add_item("whatever");
add_item("and you?");
add_item("what's her name?");
add_item("tall");
add_item("small / little");
add_item("young");
add_item("old");
add_item("beautiful");
add_item("handsome");
add_item("ugly");
add_item("what are you wearing?");
add_item("light (of clothing)");
add_item("dark (of clothing)");

add_item("I am from ...");
add_item("I am a student (male) in french");
add_item("his name is Guillaume");
add_item("her name is Laura");
add_item("French");
add_item("English (m)");
add_item("history");
add_item("computer science");
add_item("what's your name? (formal)");
add_item("see you tomorrow");
    
add_item("woman");
add_item("man");
add_item("brother");
add_item("table");
add_item("chair");
add_item("a boy");// masculine singular indefinite article
add_item("the boy");// masculine singular definite article
add_item("friends or some friends");// plural indefinite article
add_item("a girl");// feminine singular indefinite article
add_item("the girl, the actress");// feminine singular definite article
add_item("socks");
add_item("hair");
add_item("right");
add_item("left");

add_item("98");
add_item("21");
add_item("26");
add_item("91");

add_item("j");
add_item("a");
add_item("c");
add_item("k");
add_item("flip flops");
add_item("dress");
add_item("jacket");
add_item("top");
add_item("at the bottom");
add_item("pants");

add_item("jewelry");
add_item("job");
add_item("bathing suit");
add_item("butterfly");
add_item("sandal");
add_item("cold");
add_item("tie (clothing)");
add_item("how many");
add_item("there are");
add_item("in the class");
add_item("vest");
add_item("beard");
add_item("open");
add_item("closed");
add_item(
    "in the class, how many tables are there?"
    ,"Dans la classe, combien est-ce que il y a de tables ?"
);
add_item("notebook");
add_item("desk");

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


//--------------------------------------------------
console.log("data.js was loaded");




