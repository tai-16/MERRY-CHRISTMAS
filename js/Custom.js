var sound = new Howl({
    urls: ['song/background.mp3'],
    loop: true
  });

function loading() {
    $('body').css('height', $(window).height());
    $('#loading').css('visibility', 'visible');
    setTimeout('loadingVisible()', 1500);
}

function loadingVisible() {
    $('#loading').css('visibility', 'hidden');
    $('body').css({
        'overflow': 'visible',
        'height': '100%'
    });
    sound.play();
}

/* Scroll Title Begin */
var scrl = "Giáng sinh vui vẻ! ";
function scrlsts() {
    scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
    document.title = scrl;
    setTimeout("scrlsts()", 100);
}
/* Scroll Title End */

/* Santa Claus Begin */
// Ông già noel
var leftToRight = true;
var endPos = 0;
var size = 0;
function showSantaClaus()
{
    if (leftToRight == true)
    {
        leftToRight = false;
        endPos = $(window).width();
        $("img#santaClaus").attr("src", "imgs/santaclaus.gif");
        $("img#santaClaus").css("left", "-390px");
    }
    else
    {
        leftToRight = true;
        endPos = -390;
        $("img#santaClaus").attr("src", "imgs/santaclausreverse.gif");
        $("img#santaClaus").css("left", $(window).width() + "px");
    }

    size = Math.floor(Math.random() * 5 + 1) + 15;
    $("img#santaClaus").css("height", size + "%");
    $("img#santaClaus").css("width", size + "%");
    $("img#santaClaus").css("top", Math.floor(Math.random() * 10 + 1) + 5 + "%");

    $("img#santaClaus").animate({
        "left": endPos
    }, 15000, "linear", showSantaClaus);
}
/* Santa Claus End */

/* Snow Begin */
// Kích thước màn hình
var SCREEN_WIDTH = $(window).width();
var SCREEN_HEIGHT = $(window).height();

// Vị trí giữa màn hình
var windowHalfX = SCREEN_WIDTH / 2;
var windowHalfY = SCREEN_HEIGHT / 2;

// Tọa độ chuột
var mouseX = 0;
var mouseY = 0;

var container;
var particle;
var camera;
var scene;
var renderer;

// Mảng các bông tuyết
var particles = [];
var particleImage = new Image();
particleImage.src = 'imgs/particlesmoke.png';

function snowEffectBind() {

    container = $('.snow');

    camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    var material = new THREE.ParticleBasicMaterial({ map: new THREE.Texture(particleImage) });

    for (var i = 0; i < 500; i++) {
        particle = new Particle3D(material);
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        particle.scale.x = particle.scale.y = 1;
        scene.add(particle);
        particles.push(particle);
    }

    container.html(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    setInterval(loop, 1000 / 60);
}

function onDocumentMouseMove(event) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {

    if (event.touches.length == 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

function onDocumentTouchMove(event) {

    if (event.touches.length == 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

function loop() {

    for (var i = 0; i < particles.length; i++) {

        var particle = particles[i];
        particle.updatePhysics();

        with(particle.position) {
            if (y < -1000) y += 2000;
            if (x > 1000) x -= 2000;
            else if (x < -1000) x += 2000;
            if (z > 1000) z -= 2000;
            else if (z < -1000) z += 2000;
        }
    }

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}
/* Snow End */

var bShowLetter = false;
$(document).ready(function() {
    scrlsts();
    snowEffectBind();
    showSantaClaus();

    // Bắt sự kiện nhấn tuần lộc
    $("#reindeer").click(function() {
        // Chưa mở thư
        if (bShowLetter == false)
        {
            $('#reindeer').animate({
                right: -122
            }, 1000, function() {
                
                $("#letter").show("drop", {direction: "down"}, "fast");

                $("img#reindeer").attr("src", "imgs/reindeerhide.png");
                
                $('#reindeer').animate({
                    right: 0
                }, 1000, function() {
                    
                    $(".message").typed({
                        strings: [
                        "🌟 Merry Christmas 🌟",
                        ],
                        typeSpeed: 100,
                        startDelay: 0,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message1").typed({
                        strings: [
                        "🎄I know we are always busy this ", 
                        ],
                        typeSpeed: 100,
                        startDelay: 4000,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message2").typed({
                        strings: [
                        "holiday season but I want to ", 
                        ],
                        typeSpeed: 100,
                        startDelay: 9400,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message3").typed({
                        strings: [
                        "take the time to wish you, Merry", 
                        ],
                        typeSpeed: 100,
                        startDelay: 14500,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message4").typed({
                        strings: [
                        "Christmas. I hope we can spend", 
                        ],
                        typeSpeed: 100,
                        startDelay: 19300,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message5").typed({
                        strings: [
                        "time together soon.🎄", 
                        ],
                        typeSpeed: 100,
                        startDelay: 24000,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });
                    $(".message6").typed({
                        strings: [
                        "- From N.T.T to Đ.T.T 🥰 -", 
                        ],
                        typeSpeed: 100,
                        startDelay: 27500,
                        backSpeed: 1000000,
                        backDelay: 1000000,
                        loop: true,
                        contentType: 'html',
                        showCursor: false
                    });

                });

            });

            bShowLetter = true;
        }
        else
        {
            $('#reindeer').animate({
                right: -122
            }, 1000, function() {
                
                $("#letter").hide("drop", {direction: "down"}, "slow");
                
                $("img#reindeer").attr("src", "imgs/reindeer.png");
                
                $('#reindeer').animate({
                    right: 0
                }, 1000);

            });

            bShowLetter = false;
        }
    });
});
