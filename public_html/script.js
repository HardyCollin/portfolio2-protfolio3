
$("document").ready(function() {
    $(".class1").css("color", "yellow");
    $("div p:last-child").css("background-color", "blue");
    $("#alertButton").bind("click", alertButtonClick);

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    //$('h1').bind('click', mouseClick);

    $('#superHumans').accordion({header: "h3"});
    $('#superHumans').css('width', '400px');
//<div id="superHumans">
//            <h3>first</h3>
//            <p>1st</p>
//            <h3>second</h3>
//            <p>2nd</p>
//            <h3>third</h3>
//            <p>3rd</p>
//        </div>

    $("#uncover").click(function() {
        $("#blue").animate({right: '1400px'});
    });
    $("#cover").click(function() {
        $("#blue").animate({left: '0px'});
    });
    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removeAPara').bind('click', removeAPara);

    $("#hide").click(function() {
        $("div").hide();
    });
    $("#show").click(function() {
        $("div").show();
    });
});

/*-----------------------------------------------------------
 *                  FUNCTIONS
 * ---------------------------------------------------------*/

function alertButtonClick() {
    alert("this alert means a button was clicked");
}

function mouseOverMe() {
    $("h1").html('this is cool');
}
function mouseOutMe() {
    $('h1').html('it really isnt');
}
function removeAPara() {
    $('#randPara p:last').remove();
}
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText() {
    $('#replaceWText').text('');
}

$(function() {
    $("#draggable").draggable();
});