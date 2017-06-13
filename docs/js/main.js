window.addEventListener("load", function () {
    startButton();
});

function startButton() {
    var startButton = document.createElement("startButton");
    document.body.appendChild(startButton);
    startButton.classList.add("startButtonIdle");

    startButton.addEventListener("mousedown", function() {
    startButton.classList.remove("startButtonIdle");
    startButton.classList.add("startButtonHold");
    });

    startButton.addEventListener("mouseup", function() {
    startButton.classList.remove("startButtonHold");
    console.log("ERROR: Compiler State: NULL, Compiler.json file is either corrupted or missing")
    });

}