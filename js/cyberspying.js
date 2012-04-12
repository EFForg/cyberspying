$(function(){
    // initialize zip code
    $('input#zip')
        .val('ZIP Code').addClass('empty')
        .click(function(){
            if($(this).val() == 'ZIP Code') {
                $(this).val('').removeClass('empty');
                $('#zip-label').show();
            }
        })
        .change(function(){
            if($(this).val() == '') {
                $(this).val('ZIP Code').addClass('empty');
                $('#zip-label').hide();
            }
        });

    // lookup
    $('#lookup-form').submit(function(){
        $('#lookup-form').hide(200);
        $('#lookup-loading').css('display', 'inline-block');

        var error_message = function(msg) {
            alert(msg);
            $('#lookup-form').show(200);
            $('#lookup-loading').hide();
        };

        var zip = $('#zip').val();
        $.ajax({
            url: '/lookup.php?zip='+zip,
            dataType: 'json',
            success: function(data, textStatus){
                if(textStatus != 'success') {
                    error_message('Oops, something went wrong! Try again in a couple minutes?');
                    return;
                }
                if(data.error) {
                    error_message(data.error);
                    return;
                }

                // build the tweet step page
                var $reps_html = $('<div id="reps-html"></div>');
                $.each(data.reps, function(key, rep){
                    if(rep.legislator.chamber != 'house') return;
                    $rep = $('<div class="rep"></div>')
                        .append('<p>'+rep.legislator.title+' '+rep.legislator.firstname+' '+rep.legislator.lastname+'</p>');
                    if(rep.legislator.twitter_id == '') {
                        $rep.append('<p>This representative doesn\'t have a Twitter account.</p>');
                    } else {
                        $rep.append('<p><a href="https://twitter.com/'+rep.legislator.twitter_id+'">@'+rep.legislator.twitter_id+'</p>');
                    }
                        //.append('<p>'+JSON.stringify(rep.legislator)+'</p>');
                    $reps_html.append($rep);
                });
                $('#step-tweet').html($reps_html);

                // move to tweet step
                $('#step-tweet').show(200);
                $('#step-lookup').hide(200);
            },
            error: function(){
                error_message('Failed to contact our web server. Are you connected to the internet?');
            }
        });

        return false;
    });
});
