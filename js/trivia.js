//set variables to get House Crest
let gryffindorHouse = document.getElementById("gryffindor");
let slytherinHouse = document.getElementById('slytherin');
let hufflepuffHouse = document.getElementById('hufflepuff');
let ravenclawHouse = document.getElementById('ravenclaw');

//Set variables for House colors
let gryffindorPrimary = '#7F0909';
let gryffindorSecondary = '#FFC500';

let slytherinPrimary = '#0D6217';
let slytherinSecondary = '#AAA';

let hufflepuffPrimary = '#EEE117';
let hufflepuffSecondary = '#000';

let ravenclawPrimary = '#000A90';
let ravenclawSecondary = '#946B2D';


//function to create House Banners
function createBanners(backgroundColor,animal){
  //get aside elements that represent the banners
  let banner1 = document.getElementById('banner1');
  let banner2 = document.getElementById('banner2');

  //set the background color of the two banners
  banner1.style.backgroundColor = backgroundColor;
  banner2.style.backgroundColor = backgroundColor;

  //Check to set if banner already has images if not create them
  if(document.getElementById('bannerImage') === null){

  //Create banner image to append to banner elements
  let bannerImage = document.createElement("img");
  let bannerImage2 = document.createElement("img");

  //set id for images
  bannerImage.id = 'bannerImage';
  bannerImage2.id = 'bannerImage2';

  //set banner image src to animal Silhouette
  bannerImage.src = "img/" + animal + "-Silhouette.svg";
  bannerImage2.src = "img/" + animal + "-Silhouette.svg";

  //append banner image to the banners
  banner1.appendChild(bannerImage);
  banner2.appendChild(bannerImage2);
}
else { //change the banner image source
  bannerImage = document.getElementById('bannerImage');
  bannerImage2 = document.getElementById('bannerImage2');

  bannerImage.src = "img/" + animal + "-Silhouette.svg";
  bannerImage2.src = "img/" + animal + "-Silhouette.svg";

}
}


//get the buttons for the site
let startGame = document.getElementById("gameStart");
let quitGame = document.getElementById("quitGame");

//set the onclick events to change banner colors to House colors
gryffindorHouse.addEventListener('click',
        function(){
            //set background color of header and footer
            document.getElementById('header').style.backgroundColor = gryffindorSecondary;
            document.getElementById('footer').style.backgroundColor = gryffindorSecondary;});

gryffindorHouse.addEventListener('click',
          function(){
            createBanners(gryffindorPrimary, "Lion") }
          );

slytherinHouse.addEventListener('click',
function(){
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = slytherinSecondary;
    document.getElementById('footer').style.backgroundColor = slytherinSecondary;});

slytherinHouse.addEventListener('click',
    function(){
      createBanners(slytherinPrimary, "Snake") }
    );

hufflepuffHouse.addEventListener('click',
function(){
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = hufflepuffSecondary;
    document.getElementById('footer').style.backgroundColor = hufflepuffSecondary;});

hufflepuffHouse.addEventListener('click',
        function(){
          createBanners(hufflepuffPrimary, "Badger") }
        );

ravenclawHouse.addEventListener('click',
function(){
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = ravenclawSecondary;
    document.getElementById('footer').style.backgroundColor = ravenclawSecondary;});

ravenclawHouse.addEventListener('click',
        function(){
          createBanners(ravenclawPrimary, "Raven") }
        );

startGame.addEventListener('click' ,
  function(){
    document.getElementById('welcome').classList.add('hide');
    document.getElementById('triviaGame').classList.remove('hide');
  });

  quitGame.addEventListener('click',
  function(){
    document.getElementById('welcome').classList.remove('hide');
    document.getElementById('triviaGame').classList.add('hide');
  })
