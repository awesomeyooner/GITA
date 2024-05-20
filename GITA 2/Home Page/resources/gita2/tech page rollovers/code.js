 //create two functions to change the text color
        //on the links and then change it back
    
        function linkHover(linkVar){
            document.getElementById(linkVar).style.color = "red";
            document.getElementById(linkVar).style.textDecoration = "none";
        }

        function linkLeave(linkVar){
            document.getElementById(linkVar).style.color = "blue";
            document.getElementById(linkVar).style.textDecoration = "underline";
        }

        function linkClick(linkVar){
            document.getElementById(linkVar).style.color = "green";
            document.getElementById(linkVar).style.textDecoration = "none";
        }

        function changePic(thePic){
            document.getElementById(thePic).src="resources/gptLogo.png";
        }

        function changeBack(thePic2){
            document.getElementById(thePic2).src="resources/big brain.jpg";
        }

        function dynamicPic(thePic, newPic){
            document.getElementById(thePic).src = newPic;
        }