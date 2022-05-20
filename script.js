let link1 = document.getElementById('adin');
let link2 = document.getElementById('dva');
let link3 = document.getElementById('tri')
let images = ['featurestab1.JPG', 'featurestab2.JPG', 'featurestab3.JPG'];
let occupyImage = document.getElementById('occupyImage2');
let icon1 = document.getElementById('ichi')
let icon2 = document.getElementById('nii')
let icon3 = document.getElementById('san')
let icon4 = document.getElementById('yon')
let article1 = document.getElementById('first2')
let article2 = document.getElementById('second2')
let article3 = document.getElementById('third')
let article4 = document.getElementById('fourth')


link1.onclick = function(){
    document.imgSpace.src = images[0];
}

link2.onclick = function(){
    document.imgSpace.src = images[1];
}

link3.onclick = function(){
    document.imgSpace.src = images[2];
}

icon1.onclick = function(){
    if(article1.className == "show" ){
        article1.className = ""
    }else{
        article1.className = "show"
    }
}

icon2.onclick = function(){
    if(article2.className == "show" ){
        article2.className = ""
    }else{
        article2.className = "show"
    }
}

icon3.onclick = function(){
    if(article3.className == "show" ){
        article3.className = ""
    }else{
        article3.className = "show"
    }
}

icon4.onclick = function(){
    if(article4.className == "show" ){
        article4.className = ""
    }else{
        article4.className = "show"
    }
}