$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#glassAnimalsVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#glassAnimals").on('hide.bs.modal', function(){
        $("#glassAnimalsVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#glassAnimals").on('show.bs.modal', function(){
        $("#glassAnimalsVideo").attr('src', url);
    });
});


$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#DiVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#Di").on('hide.bs.modal', function(){
        $("#DiVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#Di").on('show.bs.modal', function(){
        $("#DiVideo").attr('src', url);
    });
});

$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#fimVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#fim").on('hide.bs.modal', function(){
        $("#fimVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#fim").on('show.bs.modal', function(){
        $("#fimVideo").attr('src', url);
    });
});

$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#blaVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#bla").on('hide.bs.modal', function(){
        $("#blaVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#bla").on('show.bs.modal', function(){
        $("#blaVideo").attr('src', url);
    });
});

$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#superVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#super").on('hide.bs.modal', function(){
        $("#superVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#super").on('show.bs.modal', function(){
        $("#superVideo").attr('src', url);
    });
});

$(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#superVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#bjo").on('hide.bs.modal', function(){
        $("#bjoVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#bjo").on('show.bs.modal', function(){
        $("#bjoVideo").attr('src', url);
    });
});
