

var cache = "_____"; // caché = hidden
var definition_separator = " - - - ";
var endash = "\u2013";


var definitions = [
    //--------------------------------------------------
    // words
    /*
    [
    	"Large oils, at times combined with silk-screened digital imagery, may initially look like unholy messes: blowsy abstraction jostling with "+cache+" figuration."
    	,"left or deserted, as by the owner or guardian; abandoned: a "+cache+" ship."
    	,"neglectful of duty; delinquent; negligent."
    	,"de- \"entirely\" + relinquere \"leave behind\""
    ]
    ,[
    	"a woman's head, a bathtub, and a leg in a high-heel shoe, all crudely drawn, wander in a brushy "+cache+" of tones."
    	,"an influence or atmosphere that tends to deplete or corrupt: freed from the "+cache+" of poverty"
    	,"Greek \"stain, pollution, defilement, taint of guilt,\""
    ]
    ,[
    	,"a character or thing that suddenly enters the story in a novel, play, movie, etc., and solves a problem that had previously seemed impossible to solve"
    	,"Latin translation of Greek apo mekhanes theos, literally \"the god from the <em>machina</em>,\" the device by which \"gods\" were suspended over the stage in Greek theater"
    ]
    ,[
    	"The Whitney's parochial mandate seemed a handicap during the past century of marching "+cache+" styles"
    	,"free from local, provincial, or national ideas, prejudices, or attachments; at home all over the world."
    	,"a cocktail made with vodka, cranberry juice, an orange-flavored liqueur, and lime juice."
    ]
    ,[
    	"Solomon plumbs a suspicion (almost "+cache+" in biography-writing lately) of homosexuality."
    	,"prescribed or required by fashion, etiquette, or custom: proper"
    	,"French, literally \"of strictness,\" thus \"according to obligation of convention.\""
    ]
    ,[
    	"In a cover that summed up its "+cache+", the magazine showed a caveman holding a fiery torch in one hand and a cup of oil in the other."
    	,"reason or justification for existence"
    ]
    ,[
    	// Freud reader, page 12
    	"Janet's works had anticipated some of [Breuer's] results, such as the tracing back of hysterical symptoms to events in the patient's life, and their removal by means of hypnotic reproduction "+cache
    	,"in the nascent state"
    ]
    ,[
    	// participle
    	// Freud reader, page 64
    	"she no longer conjugated verbs, and eventually she used only infinitives, for the most part incorrectly formed from weak past "+cache+"s; and she omitted both the definite and indefinite article."
    	// paraphrased from dictionary.com
    	,"an adjective derived from a verb, refering to participation in the action or state of the verb: as <em>burning</em>, in <em>a burning candle</em>, or <em>devoted</em> in <em>his devoted friend</em>"
    ]
    ,[
    	// tissue
    	// Freud reader, page 77
    	"Even the most highly gifted girl would be incapable of concocting a "+cache+" of data with such a degree of internal consistency"
    	// dictionary.com
    	,"an interwoven or interconnected series or mass: a "+cache+" of falsehoods."
    ]
    ,[
    	// de novo
    	"Latin, literally 'anew, afresh'"
    	,"a case tried "+cache
    	,"<em>Biology.</em> sequencing a novel genome where there is no reference sequence available for alignment"
    ]
    ,[
    	// diploid
    	"double; twofold"
    	,"<em>Biology.</em> having two similar complements of chromosomes."
    	,"Greek <em>di</em> 'two' + root <em>pel-</em> 'to fold' + <em>eidos</em> 'form'"
    ]
    ,[
    	// affect
    	// merriam webster
    	"<em>Psychiatry.</em> an expressed or observed emotional response"
    	// Freud reader, page 92
    	,"An obsessional idea is accordingly a product of compromise, correct as regards "+cache+" and category but false owing to chronological displacement and substitution by analogy."
    	// etymonline.com
    	// ,"Latin <em>afficere</em> 'to do; treat, use, manage, handle; act on; have influence on, do something to', from <em>ad-</em> 'to, toward, with regard to, in relation to' + <em>facere</em> 'to make, do'"
    ]
    //--------------------------------------------------
    // dates
    ,[
    	{	// Freud
    		birth: 1856,
    		death: 1939
    	}
    ]
    ,[
    	{	// Magritte
    		birth: 1898,
    		death: 1967
    	}
    ]
    ,[
    	{	// Pollock
    		birth: 1912,
    		death: 1956
    	}
    ]
    ,[
    	{	// Picasso
    		birth: 1881,
    		death: 1973
    	}
    ]
    ,[
    	{	// Hegel
    		birth: 1770,
    		death: 1831
    	}
    ]
    ,[
    	{	// Marx
    		birth: 1818,
    		death: 1883
    	}
    ]
    ,[
    	// Breuer treats Anna O.
    	"1880 "+endash+" 1882"
    ]
    ,[
    	{	// Plato
    		birth: 423,
    		death: 347,
    		period: "BC"
    	}
    ]
    ,[
    	{	// Aristotle
    		birth: 384,
    		death: 322,
    		period: "BC"
    	}
    ]
    ,[
    	{	// Darwin
    		birth: 1809,
    		death: 1882
    	}
    ]
    ,[
    	{	// de Chirico
    		birth: 1888,
    		death: 1978
    	}
    ]
    ,
    */
    //--------------------------------------------------
    // french
    [
    	// how do you say ... in french?
    	//"comment est-ce que on dit ... en fran\xe7ais ?"
    ]
    ,[
    	// what does ... mean?
    	// https://www.youtube.com/watch?v=lFEwiNkaLns  - - 0:54
    	//"que est-ce que ... signifie ?"
    ]
	,[
		// how do you write ... ?
		//"comment est-ce que on \xe9crit ... ?"
	]
    ,[
    	// how do you spell ... ?
    	//"comment est-ce que on \xe9pelle ... ?"
    ]
    ,[
    	// can you repeat?
    	//"est-ce que tu peux r\xe9p\xe9ter ?"
    ]
    ,[
    	// I don't understand (this word / this sentence)
    	//"je ne comprends pas (ce mot / cette phrase)"
    ]
    ,[
    	// I have a question
    	// http://forvo.com/word/j%27ai_une_question/#fr
    	//"j'ai une question"
    ]
    ,[
    	// I don't know
    	//"je ne sais pas"
    ]


    ,[
    	// This is Guillaume. He is wearing glasses, a yellow shirt and white shoes.
    	//"Voila "+cache+". il porte des lunettes, une chemise jaune et des chaussures blanches"
    ]
    ,[
		// he wears glasses
    	// Allons-y cd 1-14 @ 1:09, book page 67
		//"il porte des lunettes"
    ]
    ,[
    	// shoes
    	// http://www.linguee.fr/francais-anglais/traduction/chaussures.html
    	//"chaussures"
    ]
    ,[
    	// yellow
    	//"jaune"
    ]
    ,[
    	// pink
    	// http://www.linguee.fr/francais-anglais/traduction/rose.html
    	//"rose"
    ]
    ,[
    	// white
    	// http://forvo.com/word/blanc/#fr
    	// http://www.linguee.fr/francais-anglais/traduction/blanc.html
    	//"blanc"
    ]
    ,[
    	// wear
    	// http://www.linguee.fr/francais-anglais/traduction/porter.html
    	//"porter"
    ]
    ,[
    	// glasses
    	//"lunettes"
    ]
    ,[
    	// my name is ...
    	//"je m\'appelle ..."
    ]
    ,[
    	// you're welcome
    	// https://app.box.com/s/kl9mgkfafb2ncp26gsc531t98v54nrsw  - - 0:12
    	// http://forvo.com/word/je_vous_en_prie/
    	//"je vous en prie"
    ]
    ,[
    	// what's your name?
    	// https://www.youtube.com/watch?v=_Xx0THT3otw  - - 0:07
    	// http://forvo.com/word/comment_tu_t%C2%B4appelles%3F/#fr
    	//"comment tu t'appelles?"
    ]
    ,[
    	// nice to meet you
    	// http://forvo.com/search/enchante/
    	"enchant\xe9"
    ]
    ,[
    	// how are you?
    	"comment \xe7a va ?"
    ]
    ,[
    	// whatever
    	"bof"
    ]
    ,[
    	// and you?
    	"et toi ?"
    ]
    ,[
    	// what's her name?
    	"comment elle s'appelle ?"
    ]
    ,[
    	// tall
    	// http://www.linguee.fr/francais-anglais/traduction/grand.html
    	"grand"
    ]
    ,[
    	// small / little
    	// http://www.linguee.fr/francais-anglais/traduction/grand.html
    	"petit"
    ]
    ,[
    	// young
    	// http://www.linguee.fr/francais-anglais/traduction/jeune.html
    	"jeune"
    ]
    ,[
    	// old
    	// http://www.linguee.fr/francais-anglais/traduction/%C3%A2g%C3%A9.html
    	"\xe2g\xe9"
    ]
    ,[
    	// beautiful
    	"belle"
    ]
    ,[
    	// handsome
    	"beau"
	]
	,[
		// ugly
		"moche"
	]
	,[
		// what are you wearing?
		"qu'est-ce que tu portes ?"
	]
    ,[
    	// light (of clothing)
    	// http://www.linguee.fr/francais-anglais/traduction/clair.html
    	"clair"
    ]
    ,[
    	// dark (of clothing)
    	"fonc\xe9"
    ]




    ,[
    	// I am from ...
    	// http://forvo.com/word/je_suis_de_floride/#fr
    	"je suis de ..."
    ]
    ,[
    	// I am a student (male) in French
    	// http://forvo.com/word/%C3%A9tudiant/#fr
    	"je suis \xe9tudiant en le fran\xe7ais"
    ]
    ,[
    	// his name is Guillaume
    	"il s'appelle Guillaume"
    ]
    ,[
    	// her name is Laura
    	"elle s'appelle Laura"
    ]
    ,[
    	// French
    	"le fran\xe7ais"
    ]
    ,[
    	// English (m)
    	"l'anglais"
    ]
    ,[
    	// history
    	// http://forvo.com/word/l%27histoire/#fr
    	"l'histoire (f)"
    ]
    ,[
    	// computer science
    	"l'informatique (f)"
    ]
    ,[
    	// what's your name (formal)
    	// http://forvo.com/word/comment_vous_appelez-vous/#fr
    	// https://media.la.utexas.edu/fi/aud/voc/005.mp3  @ :50
    	"comment vous appelez-vous?"
    ]
    ,[
    	// see you tomorrow
    	// http://forvo.com/word/%C3%A0_demain/#fr
    	"\xe0 demain"
    ]




    ,[
    	// woman
    	// http://www.linguee.fr/francais-anglais/traduction/femme.html
    	"femme"
    ]
    ,[
    	// man
    	// http://www.linguee.fr/francais-anglais/traduction/homme.html
    	"homme"
    ]
    ,[
    	// brother
    	// http://www.linguee.fr/francais-anglais/traduction/fr%C3%A8re.html
    	"fr\xe9re"
    ]
    ,[
    	// table
    	// http://www.linguee.fr/francais-anglais/traduction/table.html
    	"table"
    ]
    ,[
    	// chair
    	// http://www.linguee.fr/francais-anglais/traduction/chaise.html
    	"chaise"
    ]
    ,[
    	// a boy
    	// http://forvo.com/word/un_gar%C3%A7on/#fr
    	// masculine singular indefinite article
    	// http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en
    	"un gar\xe7on"
    ]
    ,[
    	// the boy
    	// http://forvo.com/word/le_gar%C3%A7on_est_jeune/#fr
    	// masculine singular definite article
    	// http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en
    	"le gar\xe7on"
    ]
    ,[
    	// friends or some friends
    	// http://forvo.com/word/des_amis/#fr
    	// plural indefinite article
    	// http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en
    	"des amis"
    ]
    ,[
    	// a girl
    	// http://forvo.com/word/une_fille/#fr
    	// feminine singular indefinite article
    	// http://www.cliffsnotes.com/~/media/675384c948ce4bd18e51cf4f35bd939c.ashx?la=en
    	"une fille"
    ]
    ,[
    	// the girl, the actress
    	// http://forvo.com/word/la_fille/#fr
    	// http://forvo.com/word/l%27actrice/#fr
    	// feminine singular definite article
    	// http://www.cliffsnotes.com/~/media/32b0277c448b4a609a7a0b6ba6b26da4.ashx?la=en
    	"la fille, l'actrice"
    ]
    ,[
    	// socks
    	// http://forvo.com/word/chaussettes/#fr
    	"chaussettes"
    ]
    ,[
    	// hair
    	// http://forvo.com/word/cheveux/#fr
    	// http://www.linguee.fr/francais-anglais/traduction/cheveux.html
    	"cheveux"
    ]
    ,[
    	// right
    	// http://www.linguee.fr/francais-anglais/traduction/droit.html
    	"droit"
    ]
    ,[
    	// left
    	// http://www.linguee.fr/francais-anglais/traduction/gauche.html
    	"gauche"
    ]



    ,[
    	// 98
    	// http://forvo.com/word/quatre_vingt_dix_huit/#fr
    	"quatre vingt dix huit"
    ]
    ,[
    	// 21
    	// http://forvo.com/word/vingt_et_un/#fr
    	"vingt et un"
    ]
    ,[
    	// 26
    	// http://forvo.com/word/vingt-six/#fr
    	"vingt-six"
    ]
    ,[
    	// 91
    	// http://forvo.com/word/quatre-vingt-onze/#fr
    	"quatre-vingt-onze"
    ]



    ,[
    	// j
    	// http://forvo.com/word/j/#fr
    	"j"
    ]
    ,[
    	// a
    	// http://forvo.com/word/a/#fr
    	"a"
    ]
    ,[
    	// c
    	// http://forvo.com/word/c/#fr
    	"c"
    ]
    ,[
    	// k
    	// http://forvo.com/word/k/#fr
    	"k"
    ]
    ,[
    	// flip flops
    	// http://forvo.com/word/tongs/#fr
    	"tongs"
    ]
    ,[
    	// dress
    	// http://forvo.com/word/robe/#fr
    	"robe"
    ]
    ,[
    	// jacket
    	// http://forvo.com/word/veste/#fr
    	"veste"
    ]
    ,[
    	// top
    	// http://forvo.com/word/en_haut/#fr
    	"en haut"
    ]
    ,[
    	// at the bottom
    	// http://forvo.com/word/en_bas/#fr
    	"en bas"
    ]
    ,[
    	// pants
    	// http://forvo.com/word/pantalon/#fr
    	"pantalon"
    ]



    ,[
    	// jewelry
    	// http://forvo.com/word/bijoux/#fr
    	"bijoux"
    ]
    ,[
    	// work / job
    	// http://forvo.com/word/travail/#fr
    	"travail"
    ]
    ,[
    	// bathing suit
    	// http://forvo.com/word/maillot_de_bain/#fr
    	"maillot de bain"
    ]
    ,[
    	// butterfly
    	// http://forvo.com/word/papillon/#fr
    	"papillon"
    ]
    ,[
    	// sandal
    	// http://forvo.com/word/sandale/#fr
    	// http://www.linguee.fr/francais-anglais/traduction/sandale.html
    	"sandale"
    ]
    ,[
    	// cold
    	// http://forvo.com/word/froide/#fr
    	"froide"
    ]
    ,[
    	// tie (clothing)
    	// http://www.linguee.fr/francais-anglais/traduction/cravate.html
    	"cravate"
    ]
    ,[
    	// how many
    	// http://www.linguee.fr/francais-anglais/traduction/combien.html
    	"combien"
    ]
    ,[
    	// there are
    	// http://forvo.com/word/il_y_a/#fr
    	"il y a"
    ]
    ,[
    	// in the class
    	// http://forvo.com/word/dans/#fr
    	"dans la classe"
    ]
    ,[
    	// vest
    	// http://forvo.com/word/gilet/#fr
    	"gilet"
    ]
    ,[
    	// beard
    	// http://forvo.com/word/barb%C3%A9/#fr
    	"barb\xe9"
    ]
    ,[
    	// open
    	// http://forvo.com/word/ouverte/#fr
    	"ouverte"
    ]
    ,[
    	// closed
    	// http://forvo.com/word/ferm%C3%A9e/#fr
    	// http://www.linguee.fr/francais-anglais/traduction/ferm%C3%A9.html
    	"ferm\xe9e"
    ]
    ,[
    	// in the class, how many tables are there?
    	// 
    	"dans la classe, est-ce que il y a combien de table ?"
    ]
    ,[
    	// notebook
    	// http://www.linguee.fr/francais-anglais/traduction/cahier.html
    	"cahier"
    ]
    ,[
    	// desk
    	// http://www.linguee.fr/francais-anglais/traduction/bureau.html
    	"bureau"
    ]




    //--------------------------------------------------
    // other
    ,[
    	// student next to me
    	"sheshank"
    ]
    ,[
    	// professor's name
    	"guillaume"
    ]
    //--------------------------------------------------
];

function get_shuffled(array){
    var currentIndex = array.length, temporaryValue, randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;        
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function get_broken_apart(array){
	if(array.length < 2){
		// return the array in an array to match below?
		return [array];
	}
	else{
		var out = [];

		//console.log("get_broken_apart(): original array: " + array);

		while(array.length > 0){
			var section_length = Math.max(1, Math.floor(Math.random() * (array.length+1)));
			var section = array.splice(0,section_length);
			out.push(section);

			//console.log("    ----> array: " + array + ",  section_length: " + section_length + ",  section: " + section);
		}
		return out;

		//console.log("");
	}
}
function get_shuffled_list_with_broken_apart_and_shuffled_individuals(array){
	var out = [];
	array.forEach(function(d){
		// d is an individual item in the main list, which is an array itself.
		// shuffle the individual
		d = get_shuffled(d);
		// break the individual into an array of random subsections, each subsection is an array itself
		var sections_list = get_broken_apart(d);
		// put them back into a flat main list
		sections_list.forEach(function(d_section){
			out.push(d_section);
		});
	});
	// shuffle the main list
	out = get_shuffled(out);
	return out;
}
function display_count(list){
    var output = "";
    output += "count: " + list.length;
    document.getElementById("next_to_button").innerHTML = output;
}
function display_with_separate_elements(list){	
	list.forEach(function(d,i){
		var $container = $("<div class='list-item-container'></div>");
		$("#result").append($container);
		var $item = $("<div class='word'>" + d.word + "</div>");
		var $number = $("<div class='line-number'>" + (i+1) + "</div>");
		$container.append($number);

        if(d.links){
            var $link0 = $("<div class='word-link'><a href='" + d.links[0] + "' target='_blank'>link0</a>" + "</div>");
            $container.append($link0);
        }

        $container.append($item);
	});

    var newline = "<br>";
	$("#result").append(
		newline
		+ newline
		+ newline
		+ newline
	);
}
function get_two_layer_array_copy(array){
	var out = [];
	array.forEach(function(d){
		out.push(d.slice(0));
	});
	return out;
}
function go(){
	var shuffled = get_shuffled_list_new();
	var length = parseFloat(document.getElementById('list_length_input').value) || shuffled.length;
	var truncated = shuffled.slice(0,length);
	display_count_new(truncated.length, shuffled.length);
	display_with_separate_elements(truncated);
}
function check_keypress(e) {
    if (e.keyCode == 13) {
    	go();
    }
}
function display_count_new(displayed, max){
    var output = "";
    output += "count: " + displayed + " / " + max;
    document.getElementById("next_to_button").innerHTML = output;
}
function rint(n){
	var random_integer = Math.trunc(Math.random()*n);
	return random_integer;
}
function get_shuffled_list_new(){
    var combo = [];
	if(data.items){
		data.items.forEach(function(item){
			if(typeof item == "object"){
				
                //combo.push(item.word);
                combo.push(item);

			}
			else{
				console.log("item was not an object");
			}
		});
	}
	else{
		console.log("data.items did not evaluate to true");
	}
    var shuffled = get_shuffled(combo.slice());
    return shuffled;
}
function setInputValue(){
	var count = get_shuffled_list_new().length;
	document.getElementById("list_length_input").value = count;
}

console.log("executable.js was loaded");










