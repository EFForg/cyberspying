$(function(){
    // build logos
    var logos = ['03', '06', 'ACLU', '11', '13', '15', '17', '19', '22', '24', '26', 'OC', '28', '36', 'PPF', '37', '30', '38', '39', '32', '35', 'TestPAC'];
    $.each(logos, function(){
        var logo_id = this;
        $logo = $('<img src="images/logos/cispa-1b_'+logo_id+'.jpg">')
            .hover(function(){
                $(this).attr('src', 'images/logos/cispa-1-over_'+logo_id+'.jpg');
            }, function(){
                $(this).attr('src', 'images/logos/cispa-1b_'+logo_id+'.jpg');
            });
        $('#logos').append($logo);
    });

    // twitter badge opt-in
    $('#twitter-opt-in').click(function(){
        $('#twitter-badge').html('<iframe src="badge.html"></iframe>');
    });
});
