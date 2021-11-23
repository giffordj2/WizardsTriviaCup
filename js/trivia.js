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

  //Create banner image to append to banner elements
  let bannerImage = document.createElement("img");
  let bannerImage2 = document.createElement("img");

  //set the background color of the two banners
  banner1.style.backgroundColor = backgroundColor;
  banner2.style.backgroundColor = backgroundColor;

  //set banner image src to Lion Silhouette
  bannerImage.src = "../img/" + animal + "-Silhouette.svg";
  bannerImage2.src = "../img/" + animal + "-Silhouette.svg";

  //append banner image to the banners
  banner1.appendChild(bannerImage);
  banner2.appendChild(bannerImage2);
}


//get the buttons for the site
let startGame = document.getElementById("gameStart");

//set the onclick events to add border to image and change banner colors to House colors
gryffindorHouse.addEventListener('click',
        function(){
            //set background color of header and footer
            document.getElementById('header').style.backgroundColor = '#7F0909';
            document.getElementById('footer').style.backgroundColor = '#7F0909';}

          createBanners(gryffindorPrimary, "Lion"));

slytherinHouse.addEventListener('click',
    function () {
      //set background color of header and footer
      document.getElementById('header').style.backgroundColor = '#0D6217';
      document.getElementById('footer').style.backgroundColor = '#0D6217';

        //set the background color of the two banners
        banner1.style.backgroundColor = '#0D6217';
        banner2.style.backgroundColor = '#0D6217';

        //set banner image src to Snake Silhouette
        bannerImage.src = "../img/Snake-Silhouette.svg";
        bannerImage2.src = "../img/Snake-Silhouette.svg";

        //append banner image to the banners
        banner1.appendChild(bannerImage);
        banner2.appendChild(bannerImage2);
    });

hufflepuffHouse.addEventListener('click',
    function () {
      //set background color of header and footer
      document.getElementById('header').style.backgroundColor = '#EEE117';
      document.getElementById('footer').style.backgroundColor = '#EEE117';
        //set the background color of the two banners
        banner1.style.backgroundColor = '#EEE117';
        banner2.style.backgroundColor = '#EEE117';

        //set banner image src to Badger Silhouette
        bannerImage.src = "../img/Badger-Silhouette.svg";
        bannerImage2.src = "../img/Badger-Silhouette.svg";

        //append banner image to the banners
        banner1.appendChild(bannerImage);
        banner2.appendChild(bannerImage2);
    });

ravenclawHouse.addEventListener('click',
    function () {
      //set background color of header and footer
      document.getElementById('header').style.backgroundColor = '#000A90';
      document.getElementById('footer').style.backgroundColor = '#000A90';
        //set the background color of the two banners
        banner1.style.backgroundColor = '#000A90';
        banner2.style.backgroundColor = '#000A60';

        //set banner image src to Raven Silhouette
        bannerImage.src = "../img/Raven-Silhouette.svg";
        bannerImage2.src = "../img/Raven-Silhouette.svg";

        //append banner image to the banners
        banner1.appendChild(bannerImage);
        banner2.appendChild(bannerImage2);
    });

startGame.addEventListener('click' ,
  function(){
    document.getElementById('welcome').classList.add('hide');
    document.getElementById('triviaGame').classList.remove('hide');
  })
