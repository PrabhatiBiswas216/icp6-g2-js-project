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

       
