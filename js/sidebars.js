$(function(){
    // build logos
    var logos = ['eff', 'ala', 'bordc', 'cdt', 'cippic', 'competitive_enterprise', 'demand_progress', 'democrats', 'fftf', 'freepress', 'liberty_coalition', 'open_congress', 'ppf', 'privacy_camp', 'prc', 'reporters_without_borders', 'techdirt'];
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
