var VIRA0016 = {

    init: function () {
        var div = document.createElement('div'),
        boxes = document.getElementById('boxes');
        div.textContent = "VIRA0016";
        div.classList.add('box');
        boxes.appendChild(box);
        box.addEventListener('click', this.MClick);
        box.addEventListener('mouseover', this.MOver);
        box.addEventListener('mouseout', this.MOut);

        function MClick(ev) {
            ev.currentTarget.style.borderColor = "#BBCA76";
            ev.currentTarget.style.backgroundColor = "#11487E";
            ev.currentTarget.style.fontSize=10px;
        }

        function MOver(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};