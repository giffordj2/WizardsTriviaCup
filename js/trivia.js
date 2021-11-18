//set variables for all HTML elements to be manipulated
const gryffindorHouse = document.getElementById("gryffindor");
const slytherinHouse = document.getElementById('slytherin');
const hufflepuffHouse = document.getElementById('hufflepuff');
const ravenclawHouse = document.getElementById('ravenclaw');

const banner1 = document.getElementById('banner1');
const banner2 = document.getElementById('banner2');

const bannerImage = document.createElement("img");
const bannerImage2 = document.createElement("img");


//set the onclick events to add border to image and change banner colors to House colors
gryffindorHouse.addEventListener('click',
        function(){
            gryffindorHouse.classList.add('selected');
            //set the background color of the two banners
            banner1.style.backgroundColor = '#7F0909';
            banner2.style.backgroundColor = '#7F0909';
            
            //set banner image src to Lion Silhouette
            bannerImage.src = "../img/Lion-Silhouette.svg";
            bannerImage2.src = "../img/Lion-Silhouette.svg";

            //append banner image to the banners
            banner1.appendChild(bannerImage);
            banner2.appendChild(bannerImage2);
        });

slytherinHouse.addEventListener('click',
    function () {
        slytherinHouse.classList.add('selected');
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
        hufflepuffHouse.classList.add('selected');
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
        ravenclawHouse.classList.add('selected');
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