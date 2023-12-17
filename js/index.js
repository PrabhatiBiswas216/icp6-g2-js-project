/* // booking button js */

        function serviceRoomButton() {
            let roomColor = document.getElementById("room-book-btn");
            let hallColor = document.getElementById("hall-book-btn");
            roomColor.style.backgroundColor = '#1183d5';
            roomColor.style.border = '2px solid grey';
            hallColor.style.backgroundColor = 'white';

        }
        function serviceHallButton() {            
            let hallColor = document.getElementById("hall-book-btn");
            let roomColor = document.getElementById("room-book-btn");
            hallColor.style.backgroundColor = '#1183d5';
            roomColor.style.backgroundColor = 'white';
            hallColor.style.border = '2px solid grey';
        }



        /* // gallery JS */

        let scrollContainer = document.getElementsByClassName("gallery-box");
        let backBtn = document.getElementById("scrl-btn-left");
        let nextBtn = document.getElementById("scrl-btn-right");


        

// +++++++++++++++++++++++++++fedback js +++++++++++++++++++++

let starClick1= document.getElementById("1-star");
let starClick2= document.getElementById("2-star");
let starClick3= document.getElementById("3-star");
let  starClick4= document.getElementById("4-star");
let starClick5= document.getElementById("5-star");

let state = true;

    function star1() {
       if(state){
        starClick1.src="./img/home-img/star.png";
        starClick2.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png";       
        starClick4.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        
       } 
       else{
        starClick1.src="./img/home-img/star (1).png";
        starClick2.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        starClick4.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png";
       }
       state = !state;
    }
    function star2() {

        if(state){
        starClick1.src="./img/home-img/star.png";
        starClick2.src="./img/home-img/star.png";
        starClick5.src="./img/home-img/star (1).png";       
        starClick4.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
       } 
       else{
        starClick1.src="./img/home-img/star (1).png";
        starClick2.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        starClick4.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png"; 
       }
       state = !state;      

    }
    function star3() {

        if(state){
        starClick1.src="./img/home-img/star.png";
        starClick2.src="./img/home-img/star.png";
        starClick3.src="./img/home-img/star.png";
        starClick5.src="./img/home-img/star (1).png";       
        starClick4.src="./img/home-img/star (1).png";
       } 
       else{
        starClick1.src="./img/home-img/star (1).png";
        starClick2.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        starClick4.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png"; 
       }
       state = !state; 
    }
    function star4() {

        if(state){
        starClick1.src="./img/home-img/star.png";
        starClick2.src="./img/home-img/star.png";
        starClick3.src="./img/home-img/star.png";
        starClick4.src="./img/home-img/star.png";
        starClick5.src="./img/home-img/star (1).png";       
       } 
       else{
        starClick1.src="./img/home-img/star (1).png";
        starClick2.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        starClick4.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png"; 
       }
       state = !state; 

    }
    function star5() {
       if(state){
        starClick1.src="./img/home-img/star.png";
        starClick2.src="./img/home-img/star.png";
        starClick3.src="./img/home-img/star.png";
        starClick4.src="./img/home-img/star.png";
        starClick5.src="./img/home-img/star.png";       
       } 
       else{
        starClick1.src="./img/home-img/star (1).png";
        starClick2.src="./img/home-img/star (1).png";
        starClick3.src="./img/home-img/star (1).png";
        starClick4.src="./img/home-img/star (1).png";
        starClick5.src="./img/home-img/star (1).png"; 
       }
       state = !state; 
    }

    let feedbackBtn =document.getElementById("feedback-submit-btn");
    function clickBtn(){
        alert("Your Feedback Is Submited Succesfully")
    }

