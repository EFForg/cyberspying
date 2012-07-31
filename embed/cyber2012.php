<?php 
if(isset($_GET['next_url']) && !empty($_GET['next_url']) && preg_match('/^https?:\/\//', $_GET['next_url'])) {
  $next_url = $_GET['next_url'];
} else {
  $next_url = 'http://www.districtdispatch.org/2012/07/ask-your-senators-to-support-privacy-amendments-in-cybersecurity-bill/';
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Stop Cyber Spying</title>
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/embed.css" />
    <link rel="image_src" href="/images/icon.jpg" />
    <script src="/js/jquery-1.7.2.min.js"></script>
    <script src="/js/char_count.js"></script>
    <script src="/js/cyberspying.js"></script>
  </head>

  <body>
    <div id="wrapper">
      <div id="header">
        <img src="/images/header.jpg" />
        <h1 class="hidden">Stop Cyber Spying</h1>
        <p>The Senate is about to vote on the Cybersecurity Act of 2012,<br/><span class="details">which would let companies like Facebook and Google monitor our online communications and then pass that data to the government without a warrant.</span></p>
      </div>

      <noscript>Total respect of course, but JavaScript is required for this action to work.</noscript>
      <input type="hidden" id="next-url" value="<?php echo($next_url); ?>" />

      <div id="content">
        <div id="step-lookup">
          <div id="lookup-wrapper">
            <div id="lookup-loading">
              Commencing Senatorial Twitter Handle Detection
              <img src="/images/loading.gif" /> 
            </div>
            <form id="lookup-form">
            <p><strong>Use our interactive tool to Tweet at your US Senators.</strong> Show them all the unnecessary personal info this cyber spying bill will collect on everyday Internet users.</p>
            <div class="centered">
              <div id="zip-wrapper">
                <label for="zip" id="zip-label">ZIP Code</label>
                <input type="text" id="zip" />
              </div>
              <input type="submit" value="FIND MY REPS" id="lookup" />
              <div id="lookup-links">
                <p><a id="no-zip-code">I don't have a US zip code</a></p>
                <p><a href="<?php echo($next_url); ?>">I'm not on Twitter</a></p>
              </div>
            </div>
            </form>
          </div>
        </div>
        <div id="step-tweet" class="centered">
          <div id="tweet-title">Senatorial Twitter Handle Detection Complete</div>
          <p id="tweet-instead">Your representatives in the Senate don't use Twitter. Express your concerns to Harry Reid (D-NV) and Dick Durbin (D-IL)&mdash;Senate leaders who will be influential in this debate.</p>
          <p id="tweet-no-zip">Express your concerns to Harry Reid (D-NV) and Dick Durbin (D-IL)&mdash;Senate leaders who will be influential in this debate.</p>
          <div id="tweet-body-wrapper">
            <p><strong>What do you do online that's none of the government's business?</strong><br/><small>i.e. "I post in online political forums"</small></p>
            <p><input id="tweet-body" /></p>
            <div id="tweet-links">
              <input id="suggest-a-tweet" value="SUGGEST A TWEET FOR ME" />
              <a id="back-to-lookup">Look up a different ZIP code</a>
              <a target="_top" href="<?php echo($next_url); ?>">I'm not on Twitter</a>
            </div>
          </div>
          <div class="cleared"></div>
          <div id="reps" class="centered"></div>
          <input type="submit" value="I'M DONE TWEETING, NEXT STEP" id="done" />
        </div>
        <div id="eff">Brought to you by <a target="_top" href="https://www.eff.org/">EFF</a></div>
      </div>
    </div>
  </body>
</html>
