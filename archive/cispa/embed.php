<?php 
if(isset($_GET['next_url']) && !empty($_GET['next_url']) && preg_match('/^https?:\/\//', $_GET['next_url'])) {
    $next_url = htmlspecialchars($_GET['next_url'], ENT_QUOTES, 'UTF-8');
} else {
    $next_url = 'https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=8444';
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>Stop Cyber Spying</title>
        <link rel="shortcut icon" href="/archive/cispa/images/favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" href="/archive/cispa/css/style.css" />
        <link rel="stylesheet" href="/archive/cispa/css/embed.css" />
        <link rel="image_src" href="/archive/cispa/images/icon.jpg" />
        <script src="/archive/cispa/js/jquery-1.7.2.min.js"></script>
        <script src="/archive/cispa/js/char_count.js"></script>
        <script src="/archive/cispa/js/cyberspying.js"></script>
    </head>

    <body>
        <div id="wrapper">
            <div id="header">
                <img src="/archive/cispa/images/header.jpg" />
                <h1 class="hidden">Stop Cyber Spying</h1>
                <p class="hidden">A week of action against #CISPA</p>
            </div>

            <noscript>Total respect of course, but JavaScript is required for this action to work.</noscript>
            <input type="hidden" id="next-url" value="<?php echo($next_url); ?>" />
            <div id="content">
                <div id="step-lookup">
                    <p class="call-to-action">CISPA&mdash;the Cyber Intelligence Sharing&amp;Protection Act&mdash;would cut a loophole in all existing privacy laws allowing the government to suck up data on everyday Internet users. We can't let that happen.</p>
                    <p><strong>The House of Representatives voted to approve CISPA, but it's not over yet! Urge your Senators to stand up for user privacy and oppose cybersecurity bills.</strong></p>

                    <div id="lookup-wrapper">
                        <div id="lookup-loading">
                            Commencing Senatorial Twitter Handle Detection
                            <img src="/archive/cispa/images/loading.gif" /> 
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
                    <div id="tweet-title">Senatorial Twitter Handle Detection Complete</div>
                    <p id="tweet-instead">Your representatives in the Senate don't use Twitter. Express your concerns to Joseph Lieberman (I-CT), John McMain (R-AZ), Dianne Feinstein (D-CA), and Barbara Mikulski (D-MD)&mdash;sponsors of cybersecurity legislation that threatens your privacy.</p>
                    <p id="tweet-no-zip">Express your concerns to Joseph Lieberman (I-CT), John McMain (R-AZ), Dianne Feinstein (D-CA), and Barbara Mikulski (D-MD)&mdash;sponsors of cybersecurity legislation that threatens your privacy.</p>
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
