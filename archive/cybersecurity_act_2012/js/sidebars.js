$(function(){
    // build logos
    var logos = ['eff'];
    $.each(logos, function(){
        var logo_id = this;
        $logo = $('<img src="images/logos/'+logo_id+'.jpg">')
            .hover(function(){
                $(this).attr('src', 'images/logos/'+logo_id+'_hover.jpg');
            }, function(){
                $(this).attr('src', 'images/logos/'+logo_id+'.jpg');
            });
        $('#logos').append($logo);
    });

    // twitter badge opt-in
    $('#twitter-opt-in').click(function(){
        $('#twitter-badge').html('<iframe src="badge.html"></iframe>');
    });
});
