$(function(){
    var default_twitter_ids = ['JoeLieberman', 'SenJohnMcCain', 'SenFeinstein', 'SenatorBarb'];
    var next_url = $('#next-url').val();

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

    // build a tweet box
    function build_tweet(twitter_id, agency) {
        $tweet = $('<form class="tweet" method="GET" target="_blank" action="https://twitter.com/home"></form>')
            .data('twitter_id', twitter_id)
            .data('agency', agency)
            .hover(function(){
                $(this).addClass('hover');
            }, function(){
                $(this).removeClass('hover');
            })
            .click(function(){
                $(this).submit();
            });
        $twitter_status = $('<input type="hidden" name="status" class="twitter-status-hidden" />');
        $twitter_status_p = $('<p class="twitter-status"></p>');
        $twitter_button = $('<input type="submit" class="twitter-tweet" value="Tweet" />');
        $tweet.append($twitter_status).append($twitter_status_p).append($twitter_button);
        return $tweet;
    }

    // update the status of a tweet
    var update_status = function() {
        var tweet_body = $('#tweet-body').val();

        $('.tweet').each(function(){
            var twitter_id = $(this).data('twitter_id');
            if(twitter_id != '') twitter_id = '.@'+twitter_id;
            var agency = $(this).data('agency');
            var text = twitter_id+' Does the '+agency+' really need to know '+tweet_body+'? #CongressTMI Stop #CISPA https://eff.org/r.1X2';
            var text_html = twitter_id+' Does the '+agency+' really need to know <strong>'+tweet_body+'</strong>? #CongressTMI Stop #CISPA https://eff.org/r.1X2';
            $('.twitter-status-hidden', this).val(text);
            $('.twitter-status', this).html(text_html);
        });
    }
    $('#tweet-body').change(update_status);
    $('#tweet-body').keyup(update_status);

    // fill a random suggestion into the tweet body
    var suggestions = [ 
        'I read XKCD comics',
        'I edit the Wikipedia article on burritos',
        'I look at my girlfriend\'s vacation pictures on Facebook',
        'I send my Mom lolcat pictures',
        'I watch Netflix from my work computer',
        'I watch old episodes of Sliders on Hulu',
        'I have weekly YouTube parties',
        'I edit a controversial political blog about government surveillance',
        'I use Tor to protect my privacy',
        'I read about the history of anarchism',
        'I log into my OkCupid account and search for love',
        'I donate to EFF',
        'what books I checked out from my local library',
        'I read all kinds of blogs online at my local library',
        'what RSS feeds I read',
        'I read BoingBoing on a daily basis',
        'I always have HackerNews open',
        'I prefer Zerg over Terran or Protoss'
    ];
    function random_suggestion() {
        // pick a suggestion that's short enough
        var max_length = $('#tweet-body').data('max_length');
        var suggestion = suggestions[Math.floor(Math.random()*suggestions.length)];
        while(suggestion.length > max_length) {
            suggestion = suggestions[Math.floor(Math.random()*suggestions.length)];
        }

        // suggest it
        $('#tweet-body').val(suggestion).change().select();
    }
    $('#suggest-a-tweet').click(function(){
        random_suggestion();
    });

    // build the tweet page
    function build_tweet_page(reps) {
        var $reps_html = $('<div id="reps-html"></div>');
        
        // count how many reps have twitter_ids
        var twitter_id_count = 0;
        $.each(reps, function(key, rep) {
            if(rep.twitter_id != '') twitter_id_count++;
        });
        if(twitter_id_count == 0) {
            $(default_twitter_ids).each(function(key, twitter_id){
                reps.push({twitter_id:twitter_id, name:''});
            });
            $('#tweet-instead').show();
        }

        // build the tweet step page
        var agencies = ['FBI', 'CIA', 'NSA'];
        var agency = agencies[Math.floor(Math.random()*agencies.length)];
        var longest_twitter_length = 0;
        $.each(reps, function(key, rep){
            if(rep.twitter_id.length > longest_twitter_length) longest_twitter_length = rep.twitter_id.length;
            $rep = $('<div class="rep"></div>');
            if(rep.twitter_id != '') {
                $rep.append(build_tweet(rep.twitter_id, agency));
            } else {
                $rep.append('<p><strong>'+rep.name+'</strong> isn\'t on Twitter</p>');
            }
            $reps_html.append($rep);
        });

        // figure out tweet length stuff
        var length = 140 - '.@ Does the  really need to know ? #CongressTMI Stop #CISPA https://eff.org/r.1X2'.length - agency.length - longest_twitter_length;
        $('#tweet-body').data('max_length', length);
        $('#tweet-body').charCount({ allowed: length });

        // clear out the tweet body
        $('#tweet-body').val('I post in online political forums').change().focus();

        // display the reps
        $('#step-tweet #reps').html($reps_html);
        update_status();

        // move to tweet step
        $('#step-tweet').show(200);
        $('#step-lookup').hide(200);
    }

    // lookup
    $('#lookup-form').submit(function(){
        $('#lookup-form').hide(200);
        $('#lookup-loading').show(200);

        var error_message = function(msg) {
            alert(msg);
            $('#lookup-form').show(200);
            $('#lookup-loading').hide();
        };

        var zip = $('#zip').val();
        $.ajax({
            url: '/lookup.php?zip='+zip,
            type: 'GET',
            dataType: 'json',
            timeout: 1000,
            success: function(data, textStatus){
                if(textStatus != 'success') {
                    error_message('Oops, something went wrong! Try again in a couple minutes?');
                    return;
                }
                if(data.error) {
                    error_message(data.error);
                    return;
                }

                build_tweet_page(data.reps);
            },
            error: function(){
                error_message('Failed to contact our web server. Are you connected to the internet?');
            }
        });

        return false;
    });

    // I don't have a US zip code
    $('#no-zip-code').click(function(){
        var reps = [];
        $(default_twitter_ids).each(function(key, twitter_id){
            reps.push({twitter_id:twitter_id, name:''});
        });

        build_tweet_page(reps);
        $('#tweet-no-zip').show();
    });

    // look up a different zip code
    $('#back-to-lookup').click(function(){
        $('span.counter').remove();
        $('#tweet-instead').hide();
        $('#tweet-no-zip').hide();
        $('#lookup-form').show(200);
        $('#lookup-loading').hide();
        $('#step-tweet').hide(200);
        $('#step-lookup').show(200);
    });

    // done
    $('#done').click(function(){
        if(top) {
            top.location = next_url;
        } else {
            document.location = next_url;
        }
    });
});
