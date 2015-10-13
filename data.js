
var data = {};
data.items = [

	
    //--------------------------------------------------
	// words
    ["a black hat (regular)"]
    ,["a grey suit"]


    /*
    //--------------------------------------------------
	// definitions
    ,[
    	// a black hat
    	// http://forvo.com/word/chapeau/#fr
    	// http://forvo.com/word/noir/#fr
    	"un chapeau noir"
    ]
    ,[
    	// a gray suit
    	// http://forvo.com/word/costume/#fr
    	// http://forvo.com/word/gris/#fr
    	"un costume gris"
    ]
    */

];


add_item(
    "a black hat (object)"
    ,"un chapeau noir"
    ,[
        "http://forvo.com/word/chapeau/#fr"
        ,"http://forvo.com/word/noir/#fr"
    ]
);



function add_item(word, definition, links){
    var item =
    {
        word: word
        ,definition: definition
        ,links: links
    }
    item = [item];
    data.items.push(item);
}


console.log("data.js was loaded");