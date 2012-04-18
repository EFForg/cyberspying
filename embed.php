<?php 
if(isset($_GET['next_url']) && !empty($_GET['next_url']) && preg_match('/^https?:\/\//', $_GET['next_url'])) {
    $next_url = $_GET['next_url'];
} else {
    $next_url = 'https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=8444';
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
                <p class="hidden">A week of action against #CISPA</p>
            </div>

            <noscript>Total respect of course, but JavaScript is required for this action to work.</noscript>
            <input type="hidden" id="next-url" value="<?php echo($next_url); ?>" />
            <div id="content">
                <div id="step-lookup">
                    <p class="call-to-action">CISPA &mdash; the Cyber Intelligence Sharing &amp; Protection Act &mdash; would cut a loophole in all existing privacy laws allowing the government to suck up data on everyday Internet users. We can't let that happen.</p>

                    <div id="lookup-wrapper">
                        <div id="lookup-loading">
                            Commencing Congressional Twitter Handle Detection
                            <img src="/images/loading.gif" /> 
                        </div>
                        <form id="lookup-form">
                        <p>Use our interactive tool to Tweet at your Representatives in Congress. Show them all the unnecessary personal info this cyber spying bill will collect on everyday Internet users.</p>
                        <div class="centered">
                            <div id="zip-wrapper">
                                <label for="zip" id="zip-label">ZIP Code</label>
                                <input type="text" id="zip" />
                            </div>
                            <input type="submit" value="FIND MY REPS" id="lookup" />
                            <div id="lookup-links">
                                <p><a id="no-zip-code">I don't have a US zip code</a></p>
                                <p><a target="_top" href="<?php echo($next_url); ?>">I'm not on Twitter</a></p>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div id="step-tweet" class="centered">
                    <div id="tweet-title">Congressional Twitter Handle Detection Complete</div>
                    <p id="tweet-instead">Your representative in the House doesn't use Twitter. Express your concerns to the House Intel Committee (<a target="_blank" href="https://twitter.com/#!/HouseIntelComm">@HouseIntelComm</a>).</p>
                    <p id="tweet-no-zip">Express your concerns to the House Intel Committee (<a target="_blank" href="https://twitter.com/#!/HouseIntelComm">@HouseIntelComm</a>).</p>
                    <div id="tweet-body-wrapper">
                        <p><strong>What do you do online that's none of the government's business?</strong><br/><small>i.e. "I post in online political forums"</small></p>
                        <p><input id="tweet-body" /></p>
                        <div id="tweet-links">
                            <input id="suggest-a-tweet" value="SUGGEST A TWEET FOR ME" />
                            <a id="back-to-lookup">Look up a different ZIP code</a>
                            <a href="https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=8444">I'm not on Twitter</a>
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
