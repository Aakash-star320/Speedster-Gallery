var flash={
    character:"Flash",
    title:"flash",
    name:"Barry Allen",
    height:"6'0\"",
    weight:"178 lbs",
    bio:"Flash, is a superhero with the ability to move at superhuman speeds, thanks to his connection to the Speed Force, a mysterious energy source that grants him his powers.",
    theme:"flash.mp3"

}

var reverseFlash={
    character:"Reverse Flash",
    title:"reverseFlash",
    name:"Eobard Thawne",
    height:"5'11\"",
    weight:"179 lbs",
    bio:"Reverse-Flash, also known as Eobard Thawne, is the archenemy of The Flash (Barry Allen).",
    theme:"reverse_flash_theme.mp3"
}

var zoom={
    character:"Zoom",
    title:"zoom",
    name:"Hunter Zolomon",
    height:"6'1\"",
    weight:"181 lbs",
    bio:"Hunter Zolomon's Zoom is notable for his terrifying black suit with a demonic mask, which distorts his voice into a menacing growl.Zoom's goal is to be the only speedster in the multiverse, believing that becoming faster would mean ultimate power and dominance. ",
    theme:""
}

var savitar={
    character:"Savitar",
    title:"savitar",
    name:" Barry Allen",
    height:"6'0\"",
    weight:"178 lbs",
    bio:" Savitar is a future, corrupted version of Barry Allen, making him a darker and more personal adversary for Team Flash.",
    theme:"savitar.mp3"
   
}

var Xs={
  character:"Xs",
  title:"Xs",
  name:"Nora Allen",
  height:"5'1/2\"",
  weight:"unknown",
  bio:"Nora West-Allen comes from the future—specifically, around the year 2049—and is a speedster like her father, possessing a deep admiration for him despite their strained relationship. ",
  theme:""

}

var godspeed={
    character:"Godspeed",
    title:"godspeed",
    name:"August Heart",
    height:"unknown",
    weight:"unknown",
    bio:"August Heart is a brilliant scientist from the year 2049 who reverse-engineers the Speed Force to grant himself powers.  ",
    theme:"godspeed.mp3"
}

var kidFlash={
  character:"Kid Flash",
  title:"kidflash",
  name:"Wally West",
  height:"6'10\"",
  weight:"184 lbs",
  bio:"Wally adopts the Kid Flash identity and wears a distinct yellow and red speedster suit with a lightning bolt emblem, differentiating him from Barry's iconic red Flash suit. ",
  theme:""
}

var characters=[flash,reverseFlash,zoom,savitar,Xs,godspeed,kidFlash];

$('#right').mouseover(function(){
    $('#next').css("display","block");
});

$('#right').mouseout(function(){
    $('#next').css("display","none");
});

function characterFinder(){
  var characterBio=$("#bio").text();
  var characterIndex="";
  for(var i=0;i<7;i++){
    if(characterBio===characters[i].bio){
        characterIndex=i;
    };
  };
  return characterIndex;
}

var charNumber=characterFinder();
console.log(charNumber);
console.log(characters[charNumber].theme);
var audio=new Audio(characters[charNumber].theme);

$("#next").click(function(){
  var characterIndex=characterFinder();
  if(characterIndex==6){
    $("#characterName").text("Flash");
    $('.char').attr("src","./flash.png");
    $("#name").text(flash.name);
    $("#height").text(flash.height);
    $("#weight").text(flash.weight);
    $("#bio").text(flash.bio);
    $("#player").prop("disabled",false);
    charNumber=characterFinder();
    audio=new Audio(characters[charNumber].theme);

  }else{
    var src="./"+characters[characterIndex+1].title+".png";
    console.log(src);
    $("#characterName").text(characters[characterIndex+1].character);
    $('.char').attr("src",src);
    $("#name").text(characters[characterIndex+1].name);
    $("#height").text(characters[characterIndex+1].height);
    $("#weight").text(characters[characterIndex+1].weight);
    $("#bio").text(characters[characterIndex+1].bio);

    if(characters[characterIndex+1].theme===""){
      $("#player").prop("disabled",true);
    }else{
      $("#player").prop("disabled",false);
    }
    charNumber=characterFinder();
    audio=new Audio(characters[charNumber].theme);


  }

});

$('#left').mouseover(function(){
  $('#next_left').css("display","block");
});

$('#left').mouseout(function(){
  $('#next_left').css("display","none");
});

$("#next_left").click(function(){
  var charIndex=characterFinder();
  if(charIndex===0){
    $("#characterName").text("Kid Flash");
    $('.char').attr("src","./kidflash.png");
    $("#name").text(kidFlash.name);
    $("#height").text(kidFlash.height);
    $("#weight").text(kidFlash.weight);
    $("#bio").text(kidFlash.bio);
    $("#player").prop("disabled",true);
    charNumber=characterFinder();
    audio=new Audio(characters[charNumber].theme);
    
  }else{
    var src="./"+characters[charIndex-1].title+".png";
    $("#characterName").text(characters[charIndex-1].character);
    $('.char').attr("src",src);
    $("#name").text(characters[charIndex-1].name);
    $("#height").text(characters[charIndex-1].height);
    $("#weight").text(characters[charIndex-1].weight);
    $("#bio").text(characters[charIndex-1].bio);

    if(characters[charIndex-1].theme===""){
      $("#player").prop("disabled",true);
    }else{
      $("#player").prop("disabled",false);
    }
    charNumber=characterFinder();
    audio=new Audio(characters[charNumber].theme);
    
  }

});


var isPlaying=false;
$(".btn").click(function(){
  console.log(charNumber);
  if(characters[charNumber].theme===""){
    console.log("Soundtrack not available")
  }else{
  if(isPlaying===false){
    audio.play();
  }else if(isPlaying===true){
    audio.pause();
  }

  audio.onplaying=function(){
    isPlaying=true;
  };
  
  audio.onpause=function(){
    isPlaying=false;
  };
  console.log(isPlaying);  

}});





