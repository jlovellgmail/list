

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
];

function go(){
    var shuffled = get_shuffled_list();
    var length = parseFloat(document.getElementById('list_length_input').value) || shuffled.length;
    var truncated = shuffled.slice(0,length);
    display_count(truncated.length, shuffled.length);
    display_with_separate_elements(truncated);
}
function display_with_separate_elements(list){	
    $("#result").empty();
	list.forEach(function(d,i){
		var $container = $("<div class='list-item-container'></div>");
		$("#result").append($container);
		var $item = $("<div class='word'>" + d.word + "</div>");
		var $number = $("<div class='line-number'>" + (i+1) + "</div>");
		$container.append($number);
        if(d.links){
            var $links_container = $("<div class='links-container'></div>");
            $container.append($links_container);
            d.links.forEach(function(link,i){
                var $current_link = $("<a href='" + link + "' target='_blank'><div class='word-link'>" + (i+1) + "</div></a>");
                $links_container.append($current_link);
            });
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
function check_keypress(e) {
    if (e.keyCode == 13) {
    	go();
    }
}
function display_count(displayed, max){
    var output = "";
    output += "count: " + displayed + " / " + max;
    document.getElementById("next_to_button").innerHTML = output;
}
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
function get_shuffled_list(){
    var shuffled = get_shuffled(data.items.slice());
    return shuffled;
}
function setInputValue(){
	var count = get_shuffled_list().length;
	document.getElementById("list_length_input").value = count;
}



//--------------------------------------------------
console.log("executable.js was loaded");



