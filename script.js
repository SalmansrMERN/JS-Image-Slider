var imgAll = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpeg",]

var imgId = document.getElementById("imgId")

var count = 0;

function next() {
    count++;

    if (count >= imgAll.length) {
        count = 0;
        imgId.src = imgAll[count]
    }
    else {
        imgId.src = imgAll[count]
    }

}

function prv() {
    count--;
    if (count < 0) {
        count = imgAll.length - 1;
        imgId.src = imgAll[count]
    }
    else {
        imgId.src = imgAll[count]
    }



}