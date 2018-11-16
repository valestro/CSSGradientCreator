// Variables setup
var radOrlin = false; // false is Radial mode. true is linear mode
var preBuiltGrdntSelctn = 'Socialive'; // Default gradient name

var $body = $("body");
var $genCssDiv = $("#genCssDiv");
var $toggleButton = $("#toggleButton");
var $selectBackGround = $('#selectBackGround');

// ----------------------------------------------------------------------------------------
// Triggered when selecting pre built css gradients from dropdown menu.
$selectBackGround.on('change', '', function(e) {
    renderSelection(this.value);
});

function renderSelection(valSel) {
    switch(valSel) {
        case "YTtvBW":     // r1, g1, b1, r2, g2, b2, r3, g3, b3
            updateRadDisplay(40, 40, 41, 20, 20, 21, 0, 0, 0);
            break;
        case "Lawrencium":
            updateLinDisplay(15, 12, 41, 48, 43, 99, 36, 36, 62);
            break;
        case "Clot":
            updateLinDisplay(7, 0, 0, 76, 0, 1, 7, 0, 0);
            break;
        case "Radar":
            updateLinDisplay(167, 112, 239, 207, 139, 243, 253, 185, 155);
            break;
        case "Socialive":
            updateLinDisplay(6, 190, 182, 6, 190, 182, 72, 177, 191);
            break;
        default:
            updateLinDisplay(6, 190, 182, 6, 190, 182, 72, 177, 191);
    }
}

function updateRadDisplay(r1, g1, b1, r2, g2, b2, r3, g3, b3){
    radOrlin = false; // Radial mode
    $toggleButton.html('Radial');
    $body.css({'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%,rgb(" + r1 + ", " + g1 + ", " + b1 + "), rgb(" + r2 + ", " + g2 + ", " + b2 + "), rgb(" + r3 + ", " + g3 + ", " + b3 + ")" + slidersArr['slider11'].value + "%)"});
    $genCssDiv.html($body.css('background-image') + ';');
    setSliderValues(r1, g1, b1, r2, g2, b2, r3, g3, b3);
}

function updateLinDisplay(r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    radOrlin = true; // Linear mode
    $toggleButton.html('Linear');
    $body.css({'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg,rgb(" + r1 + ", " + g1 + ", " + b1 + "), rgb(" + r2 + ", " + g2 + ", " + b2 + "), rgb(" + r3 + ", " + g3 + ", " + b3 + ")" + slidersArr['slider11'].value + "%)"});
    $genCssDiv.html($body.css('background-image') + ';');
    $('#slidecontainer16').fadeIn();
    $('#slidecontainer10').fadeOut();
    $('#slidecontainer11').fadeOut();
    setSliderValues(r1, g1, b1, r2, g2, b2, r3, g3, b3)
}

// Don't need to declare or select the variables from the DOM, since already there. sketchy
function setSliderValues(r1, g1, b1, r2, g2, b2, r3, g3, b3){
    myRange.value = r1;
    myRange2.value = g1;
    myRange3.value = b1;
    myRange4.value = r2;
    myRange5.value = g2;
    myRange6.value = b2;
    myRange7.value = r3;
    myRange8.value = g3;
    myRange9.value = b3;
    demo.innerHTML = myRange.value;
    demo2.innerHTML = myRange2.value;
    demo3.innerHTML = myRange3.value;
    demo4.innerHTML = myRange4.value;
    demo5.innerHTML = myRange5.value;
    demo6.innerHTML = myRange6.value;
    demo7.innerHTML = myRange7.value;
    demo8.innerHTML = myRange8.value;
    demo9.innerHTML = myRange9.value;
}

// ----------------------------------------------------------------------------------------
/*Toggle radial or linear gradient*/
$toggleButton.click(function() {
    if (radOrlin) {
        $(this).html('Radial');
        $('#slidecontainer16').fadeOut();
        $('#slidecontainer10').fadeIn();
        $('#slidecontainer11').fadeIn();
        $body.css({
            'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
        });
    } else {
        $(this).html('Linear');
        $('#slidecontainer16').fadeIn();
        $('#slidecontainer10').fadeOut();
        $('#slidecontainer11').fadeOut();
        $body.css({
            'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
        });
    }
    radOrlin = !radOrlin;
    $genCssDiv.html($body.css('background-image') + ';');
});

// ----------------------------------------------------------------------------------------
// Logic for the sliders.
var sliders = document.getElementsByClassName("slider");
var demos = document.getElementsByClassName("demos");
var slidersArr = [];
var demosArr = [];  // The span elements to display the r or g or b value

// Populating the slider and sliderValue arrays, & attaching fns to all sliders.
// NOTE: Changing the demos name and d variable in the future for clarity.
for (var i = 0; i < sliders.length; i++) {
    slidersArr['slider' + i] = document.getElementById(sliders.item(i).id);
    demosArr['demos' + i] = document.getElementById(demos.item(i).id);
    initSliders(i, slidersArr['slider' + i], demosArr['demos' + i]);
}

function initSliders(i, sliderX, d) {
    sliderX.oninput = function() {
        d.innerHTML = sliderX.value;
        if (!radOrlin) { // Radial Mode
            if (i <= 11) {
                $body.css({
                    'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                });
            }
            switch(i) {  // For all three RGB (black and white) color sliders.
                case 12:
                    $body.css({
                        'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%, rgb(" + slidersArr['slider12'].value + ", " + slidersArr['slider12'].value + ", " + slidersArr['slider12'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " +slidersArr['slider11'].value + "%)"
                    });
                    layer1Sliders();
                break;
                case 13:
                    $body.css({
                        'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider13'].value + ", " + slidersArr['slider13'].value + ", " + slidersArr['slider13'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                    });
                    layer2Sliders();
                break;
                case 14:
                    $body.css({
                        'background-image': "radial-gradient(circle at " + slidersArr['slider9'].value + "%" + slidersArr['slider10'].value + "%, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider14'].value + ", " + slidersArr['slider14'].value + ", " + slidersArr['slider14'].value + ") " + slidersArr['slider11'].value + "%)"
                    });
                    layer3Sliders();
                    break;
              }
            updateGenCssDiv();
        } else {  // Linear Mode
            if (i <= 11) {
                $body.css({
                    'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                });
            }
            switch(i) {
                case 12:
                    $body.css({
                        'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                    });
                    layer1Sliders();
                  case 13:
                      $body.css({
                          'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                      });
                      layer2Sliders();
                  case 14:
                      $body.css({
                          'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                      });
                      layer3Sliders();
                  case 15:
                      $body.css({
                          'background-image': "linear-gradient(" + slidersArr['slider15'].value + "deg, rgb(" + slidersArr['slider0'].value + ", " + slidersArr['slider1'].value + ", " + slidersArr['slider2'].value + "), rgb(" + slidersArr['slider3'].value + ", " + slidersArr['slider4'].value + ", " + slidersArr['slider5'].value + "),rgb(" + slidersArr['slider6'].value + ", " + slidersArr['slider7'].value + ", " + slidersArr['slider8'].value + ") " + slidersArr['slider11'].value + "%)"
                      });
              }
              updateGenCssDiv();
        }

    }
}

function layer1Sliders(){
    myRange.value = slidersArr['slider12'].value;
    myRange2.value = slidersArr['slider12'].value;
    myRange3.value = slidersArr['slider12'].value;
    demo.innerHTML = myRange.value;
    demo2.innerHTML = myRange2.value;
    demo3.innerHTML = myRange3.value;
}

function layer2Sliders(){
    myRange4.value = slidersArr['slider13'].value;
    myRange5.value = slidersArr['slider13'].value;
    myRange6.value = slidersArr['slider13'].value;
    demo4.innerHTML = myRange4.value;
    demo5.innerHTML = myRange5.value;
    demo6.innerHTML = myRange6.value;
}

function layer3Sliders(){
    myRange7.value = slidersArr['slider14'].value;
    myRange8.value = slidersArr['slider14'].value;
    myRange9.value = slidersArr['slider14'].value;
    demo7.innerHTML = myRange7.value;
    demo8.innerHTML = myRange8.value;
    demo9.innerHTML = myRange9.value;
}

function updateGenCssDiv() {
    var bckgrndCss = ($body.css('background-image'));
    $genCssDiv.html(bckgrndCss + ';');
}

// ----------------------------------------------------------------------------------------
// Copying to clipboard
var copyTextAreaBtn = document.querySelector('.textAreaCopyBtn');

copyTextAreaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.copyTextArea');
    copyTextarea.focus();
    copyTextarea.select();
    $('#copyText').text('Copied!');
    setTimeout(function() {
        $('#copyText').text('Copy');
        copyTextarea.blur();
    }, 800);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});

// ----------------------------------------------------------------------------------------
//Left and right navigatin buttons. Temporary Under Construction
var $goLeft = $("#goLeft");
var $goRight = $("#goRight");

$goLeft.click(function() {
    var nextGrad = $('#selectBackGround option:selected').next().attr('selected', 'selected').val();
    renderSelection(nextGrad);
});
$goRight.click(function() {
  var prevGrad = $('#selectBackGround option:selected').prev().attr('selected', 'selected').val();
  renderSelection(prevGrad);
});

// ----------------------------------------------------------------------------------------
// Initial setup
renderSelection(preBuiltGrdntSelctn); // Renders intial pre built gradient
$genCssDiv.html($body.css('background-image') + ';'); // Writing to genCssDiv
