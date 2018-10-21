// var video = document.getElementById('video');
// var preloader = document.getElementById('overlay');
// var i = 0;


// function checkLoad() {
//     // console.log(i);

//     if (video.readyState === 4 || i === 60) {
        
//         preloader.style.display = 'none';
        
//         document.getElementById("logo").classList.add("logo-animation");
//         if (video.paused) { 
//             document.getElementById('video-button').className = "fa fa-play"; 
//         }
        
//     } else {
//         i++;
//         setTimeout(checkLoad, 100);
//     }
// };
// checkLoad();


var i = 0;
var video = document.getElementById('video');
var preloader = document.getElementById('overlay');
var spinner = document.getElementById('spinner');
var button = document.getElementById('video-button');
document.getElementById("logo").classList.add("logo-animation");

function checkLoad() {
    
    preloader.style.display = 'none';
    document.getElementById("logo").classList.add("logo-animation");
    
}

video.addEventListener('canplay', checkLoad(), false);

video.onwaiting = function(){
    spinner.style.display = 'block';
};
video.onplaying = function(){
    spinner.style.display = 'none';
};
video.onpause = function() {
    document.getElementById('video-button').className = "fa fa-play"; 
}; 




function pauseStream() 
{
    var video = document.getElementById('video');

    if (video.paused) {
        video.play();
        button.className = "fa fa-pause";
    }
    else {
        video.pause();
        button.className = "fa fa-play";
    }
}


const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = "muhamedkarajic";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const toolTip = document.getElementById('testing');
    toolTip.style.visibility = "visible";
    setTimeout(function(){
        toolTip.style.visibility = "hidden";
    }, 2000);
};


document.getElementById('video-button').focus();

function parallex()
{
    ypos = window.pageYOffset;
    document.getElementById("preview-bar").style.top = -(ypos * 1) + 'px';
}
window.addEventListener('scroll', parallex);


