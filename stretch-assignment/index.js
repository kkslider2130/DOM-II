let rockets = [...document.querySelectorAll('.block')]

function toTop(el) {
    let parentDiv = el.parentNode;
    console.log(parentDiv);
    parentDiv.removeChild(el);
    parentDiv.prepend(el)



}

rockets.forEach((e) => {
    e.addEventListener('contextmenu', function (el) {
        toTop(e)
        el.preventDefault();
    });




})
//alternate code block//

/* rockets.forEach((e) => {
     e.addEventListener('contextmenu', function () {
         let parentDiv = this.parentNode;
         console.log(parentDiv);
         parentDiv.removeChild(this);
         parentDiv.prepend(this)

    })


})
 */

/*let isMoving = false; //boolean used to determine which way block should move; true means right, false means left
let blastRocket = 0; //will be name of timer for blast off
let descendRocket = 0; //will be name of timer for descent

//function to be called if a block gets mousedown
function moveRocket(isMoving, el) {
    if (isMoving) { //when true, moving right
        if (el.style.marginLeft === '') { //if it is the first time through, set this inline style property to 10px (it is set to 10px in the css)
            el.style.marginLeft = '10px';
        }

        clearInterval(descendRocket) //make sure the descend timer loop is turned off
        blastRocket = setInterval(function () { //turn on blast timer loop
            el.style.marginLeft = parseInt(el.style.marginLeft) + 5 + 'px'; //find the Int in the property marginLeft (will be 10 the first time), add 5, then convert to a string by adding 'px'
            if (el.style.marginLeft === '800px') { //once you hit 800px over, turn the timer loop off
                clearInterval(blastRocket);
            }
        }, 1000 / 60) //have the timer go off at 60 fps
    } else { //isMoving is false and we are moving left

        clearInterval(blastRocket); //make sure the blast timer loop is turned off
        descendRocket = setInterval(function () { //turn on descend timer loop
            el.style.marginLeft = `${parseInt(el.style.marginLeft)-5}px`; //see above; same but take 5 px away
            if (el.style.marginLeft === '10px') { //once you get back to the starting point, turn the descend timer loop off
                clearInterval(descendRocket);
            }
        }, 1000 / 60);
    }
}*/