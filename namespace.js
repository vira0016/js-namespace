var VIRA0016 = {

    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "VIRA0016";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", clickMe);
        div.addEventListener("mouseover", hMouse);
        div.addEventListener("mouseout", hMouse);

        function clickMe(ev) {
            this.style.backgroundColor = "yellow";
            this.style.borderColor = "green";
        }

        function hMouse(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }
    }
}