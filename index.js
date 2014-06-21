var who = [
"donkey",
"potato",
"priest",
"carpenter",
"soldier",
"doctor",
"tree",
"planet",
"stone",
"car",
"iphone",
"apple",
"hen",
"grand father",
"dumbass",
"elephant",
"hippo",
"pig",
"hulk",
"wolverine",
"spiderman",
"superman",
"mario",
"boxing champion",
"ghost",
"hitler",
"samurai",
"aunty",
"cat",
"martial artist",
"kickboxer",
"ninja",
"russian spy",
"plumber",
"pokemon",
"magician",
"white tiger",
"movie star",
"astronaut",
"scientist",
"bodybuilder",
"web designer",
"police officer",
"airforce pilot",
"terrorist",
"pornstar",
"gorilla",
"owl",
"dolphin",
"ant",
];

var what_kind = [
"A fat",
"An angry",
"A retarded",
"A bearded",
"A muscular",
"A psychotic",
"A handsome",
"A beautiful",
"A skinny",
"A happy",
"A sad",
"A sleep-deprived",
"A smelly",
"An ambitious",
"A hyper-active",
"A giant",
"A tiny",
"A miniature",
"A geeky",
"An ignorant",
"A brilliant",
"A religious",
"A short",
"A tall",
"A tired",
"A violent",
"A peaceful",
"A carefree",
"A silly",
"A fucked-up",
"A genius",
"A mentally unstable",
"An ugly",
"An atheist",
"An annoying",
"An invisible",
"A determined",
"A focused",
"A talented",
"A useless",
"A horrified",
"A badass",
"A gentle",
"A blind",
"A self-righteous",
"A deadly",
"A lazy",
"A foolish",
"A dead",
"A time-travelling",
];

var doing_what = [
"eating ice cream",
"washing a car",
"solving math problems",
"cutting carrots",
"feeding some parrots",
"hunting cockroaches",
"playing cricket",
"defusing a bomb",
"locked in a toilet",
"building a raft",
"running in a forest",
"robbing a bank",
"high on cocaine",
"dealing drugs",
"working out at the gym",
"reading a news paper",
"watching Youtube videos",
"preparing for an exam",
"selling condoms",
"stitching clothes",
"making omelets",
"collecting taxes",
"watching Wolf of the Wall Street",
"laughing like crazy",
"stealing a question paper",
"listening to Metallica",
"at a concert",
"screwing",
"waiting for a bus",
"travelling in a train",
"helping African kids",
"fighting for a tooth-brush",
"cooking meth",
"training some dragons",
"destroying a village",
"commiting a murder",
"hiding a dead body",
"learning Kung Fu",
"refusing to go out",
"playing Counter Strike",
"preparing breakfast",
"beating the crap out of Justin Beiber",
"being chased by Miley Cirus",
"stalking the neighbour",
"hacking into facebook",
"learning ballet",
"using Internet Explorer",
"drinking beer",
"smoking a blunt",
"reading comics",
];

var with_whom = [
"some buffaloes",
"Batman",
"Mickey Mouse",
"Popeye",
"some superheroes",
"the X-Men",
"Bill Gates",
"an asteroid",
"a blue whale",
"some dinosaurs",
"some F1 drivers",
"Mark Zuckerberg",
"some sailors",
"an eagle",
"a penguin",
"an ostrich",
"some engineers",
"some dentists",
"some psychiatrists",
"some sheep",
"some cave-men",
"some prisoners",
"the Avengers",
"some naked guys",
"some polar bears",
"a guitarist",
"a biker",
"Bruce Lee",
"Michael Jackson",
"some fat people",
"some thieves",
"some programmers",
"some gamers",
"some painters",
"King Kong",
"Charlie Chaplin",
"Mr.Bean",
"Queen Elizabeth",
"some mental patients",
"some aliens",
"Brad Pitt",
"Will Smith",
"Scarlett Johanson",
"a vampire",
"a werewolf",
"Kristen Stewatr",
"the Justice League",
"Sherlock Holmes",
"Godzilla",
"the Power Rangers",
];

var sentence

function generate()
{
	var one,two,three,four;

	var random = Math.floor((Math.random()*100))%50;

	one = what_kind[random];

	random = Math.floor((Math.random()*100))%50;

	two = who[random];

	random = Math.floor((Math.random()*100))%50;

	three = doing_what[random];

	random = Math.floor((Math.random()*100))%50;

	four = with_whom[random];

	sentence = one + ' ' + two + ' is ' + three + ' with ' + four;
	
	$('#sentence').text(sentence);
	
	position_footer();
}

$(document).ready(function() {
	generate();
	
	$('#container').css('margin-top',$(window).height()/5);
	
	position_footer();
});

$(window).resize(function() {
	$('.jtextfill').textfill({ maxFontPixels: 400 });
	
	$('#container').css('margin-top',$(window).height()/5);
	
	position_footer();
});

$(window).load(function (){
	$('.jtextfill').textfill({ maxFontPixels: 400 });
	
	position_footer();
});

$('#gen').hover(function() {
	$(this).fadeTo(100, 1);
}, function() {
	$(this).fadeTo(100,0.5);
});

$('#gen').click(function() {
	setTimeout(fly_up, 0);
	
	setTimeout(fade_out, 1500);
	
	setTimeout(generate, 1550);
	
	setTimeout(function() {$('.jtextfill').textfill({ maxFontPixels: 100 });},1575);
	
	setTimeout(fade_in, 1600);
	
	setTimeout(fly_down, 1600);
});

function fly_up()
{
	$("#sentence").letterfx({"fx":"fly-top","backwards":true, "words":true, "letter_end":"stay", "element_end":"stay", "fx_duration":"1500ms"});

	$('#gen').fadeTo(1000, 0);
}

function fly_down()
{
	$('#sentence').letterfx({"fx":"fly-top","backwards":false, "words":true, "letter_end":"stay", "element_end":"stay", "fx_duration":"1500ms"});

	$('#gen').fadeTo(1000, 0.5);
	
	position_footer();
}

function fade_out()
{
	$('#sentence').css('opacity',0);
}

function fade_in()
{
	$('#sentence').css('opacity',1);
}

function position_footer()
{
	var width=$('#footer').width();
	
	var w_width=$('body').width();
	
	var w_height=$('body').height();
	
	$('#footer').css('top',w_height-70+'px').css('left',(w_width/2)-(width/2));
}

;(function($) {
    $.fn.textfill = function(options) {
        var fontSize = options.maxFontPixels;
        var ourText = $('span:visible:first', this);
        var maxHeight = $(this).height();
        var maxWidth = $(this).width();
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        return this;
    }
})(jQuery);

$(document).ready(function() {
    $('.jtextfill').textfill({ maxFontPixels: 100 });
});
