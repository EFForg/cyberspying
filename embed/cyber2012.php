<?php 
if(isset($_GET['next_url']) && !empty($_GET['next_url']) && preg_match('/^https?:\/\//', $_GET['next_url'])) {
  $next_url = htmlspecialchars($_GET['next_url'], ENT_QUOTES, 'UTF-8');
} else {
  $next_url = 'http://www.districtdispatch.org/2012/07/ask-your-senators-to-support-privacy-amendments-in-cybersecurity-bill/';
}
$small = isset($_GET['width']) ? TRUE : FALSE;
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Stop Cyber Spying</title>
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <style>
    body { background-image: url('2012/background.jpg'); }
    #header { text-align: center; }
    .hidden { display: none; }
    p { font-family: arial; font-size: 1.5em; color: black; font-weight: bold; padding: 50px; }
    a { color: red; }
    </style>
    <link rel="image_src" href="/images/icon.jpg" />
  </head>

  <body>
    <div id="wrapper">
      <div id="header">
        <?php if ($small): ?>
          <img src="2012/header-small.jpg" />
        <?php else: ?>
          <img src="2012/header.jpg" />
        <?php endif; ?>
        <h1 class="hidden">Stop Cyber Spying</h1>
        <p>See <a href="https://cyberspying.eff.org/" target="_top">cyberspying.eff.org</a> for the latest alerts!</p>
      </div>

    </div>
  </body>
</html>
