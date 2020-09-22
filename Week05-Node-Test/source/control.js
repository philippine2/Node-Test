/**
 * Created by charlie on 11/5/16.
 */

window.onload = function() {
    function getNine() {

        fetch('/getNine')
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch((ex) => {
                console.log(ex);
            });
    }
    const getNineAction= document.getElementById('getNineAction');
    getNineAction.onclick = getNine;



    const feetFromMiles = () => {
        const userMiles = document.getElementById('userInput').value;
        fetch('/feetFromMiles' + '?miles=' + userMiles)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch(ex => {
                console.log(ex);
            });
    };


    const feetFromMilesAction = document.getElementById('feetFromMilesAction');

    if (feetFromMilesAction) {
        feetFromMilesAction.onclick = feetFromMiles;
    }
};
//$(document).ready(function() {});
