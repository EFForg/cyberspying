$(function(){
  // rep twitter names
  var committee_d= ['RepThompson', 'janschakowsky', 'jimlangevin', 'RepAdamSchiff', 'LuisGutierrez', 'jahimes', 'RepTerriSewell']
    , committee_r= ['MacTXPress', 'ConawayTX11', 'RepPeteKing', 'RepLoBiondo', 'DevinNunes', 'RepWestmoreland', 'MicheleBachmann', 'TomRooney', 'RepJoeHeck', 'RepMikePompeo']
    , committee = []
    , i;

  // democrats are twice as likely to get picked
  for(i=0; i<committee_d.length; i++) {
    committee.push(committee_d[i]);
    committee.push(committee_d[i]);
  }
  // add the republicans too
  for(i=0; i<committee_r.length; i++) {
    committee.push(committee_r[i]);
  }

  // random tweets
  var rep_tweets = [
    'Oppose CISPA, @[[twitter_name]]! Preserve privacy and liberty on the Internet. https://eff.org/CISPA #CISPAalert',
    'Hey @[[twitter_name]]: CISPA sacrifices liberty without improving security.  We deserve both. https://eff.org/CISPA #CISPAalert',
    'Hey @[[twitter_name]]: We can\'t have security without privacy. Help us defend the Internet from CISPA! https://eff.org/CISPA #CISPAalert',
    'Hey @[[twitter_name]], a free and open internet depends on more privacy, but CISPA gives us less. Vote no! https://eff.org/CISPA #CISPAalert',
    'Hey @[[twitter_name]]: CISPA allows our information to go to agencies who don\'t care about our privacy. https://eff.org/CISPA #CISPAalert',
  ];
  var leader_tweets = [
    'Hey @RepMikeRogers @Call_Me_Dutch: CISPA sacrifices liberty without improving security. We deserve both. https://eff.org/CISPA #CISPAalert', 
    'Hey @Call_Me_Dutch @RepMikeRogers: For an open internet, we need more privacy, but CISPA gives us less. https://eff.org/CISPA #CISPAalert'
  ];

  function random_tweet() {
    var rand_rep_name = Math.floor(Math.random()*committee.length)
      , rand_rep_tweet = Math.floor(Math.random()*rep_tweets.length)
      , rand_leader_tweet = Math.floor(Math.random()*leader_tweets.length);

    var rep_tweet = rep_tweets[rand_rep_tweet].replace('[[twitter_name]]', committee[rand_rep_name])
      , leader_tweet = leader_tweets[rand_leader_tweet];

    $('#tweet-rep').html(rep_tweet).attr('href', 'https://twitter.com/?status='+encodeURIComponent(rep_tweet));
    $('#tweet-leader').html(leader_tweet).attr('href', 'https://twitter.com/?status='+encodeURIComponent(leader_tweet));

  }
  $('#suggest').click(random_tweet);
  random_tweet();

  // twitter badge opt-in
  $('#twitter-opt-in').click(function(){
    $('#twitter-badge').html('<iframe src="badge.html"></iframe>');
  });

  // embed
  function embed_code(width, height) {
    $('#embed pre').html('&lt;iframe src="https://cyberspying.eff.org/embed/2013-cispa/" style="border: 0; width: '+width+'px; height: '+height+'px;"&gt;&lt;/iframe&gt;');
  }
  $('.embed-size').click(function(){
    $('.embed-size').removeClass('active');
    $(this).addClass('active');
    var size = $(this).attr('id').split('-')[1].split('x');
    embed_code(size[0], size[1]);
  });
  $('#embed-500x500').click();

  // next step
  // if coming from action, next step is EFF donate
  if(document.location.hash == '#action') {
    $('#next-step').html('<p>Done tweeting? <a href="https://supporters.eff.org/donate/thanks-opposing-cispa">Defend privacy by supporting EFF</a>.<br/><a href="https://www.facebook.com/share.php?u=https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=9048" target="_blank">Share on Facebook</a>.</p>');
  }
  // otherwise next step is action
  else {
    $('#next-step').html('<p>Done tweeting? <a href="https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=9048">Tell Congress to defend privacy</a>.<br/>Not in the United States? <a href="https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=9137">Take action here instead</a>.</p>');
  }

});
