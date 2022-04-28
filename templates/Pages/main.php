<?php
use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Core\Plugin;
use Cake\Datasource\ConnectionManager;
use Cake\Error\Debugger;
use Cake\Http\Exception\NotFoundException;

$this->disableAutoLayout();

$checkConnection = function (string $name) {
    $error = null;
    $connected = false;
    try {
        $connection = ConnectionManager::get($name);
        $connected = $connection->connect();
    } catch (Exception $connectionError) {
        $error = $connectionError->getMessage();
        if (method_exists($connectionError, 'getAttributes')) {
            $attributes = $connectionError->getAttributes();
            if (isset($attributes['message'])) {
                $error .= '<br />' . $attributes['message'];
            }
        }
    }

    return compact('connected', 'error');
};

if (!Configure::read('debug')) :
    throw new NotFoundException(
        'Please replace templates/Pages/home.php with your own version or re-enable debug mode.'
    );
endif;

$cakeDescription = 'Testing Template';

/*
 * Auth variable
 */
$l = false;
$username = '';
$userid = null;
if($this->request->getAttribute('identity')):
    $user = $this->request->getAttribute('identity');
    $l = true;
    $username = $user->username;
    $userid = $user->id;
endif;

?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content=""><title>
        <?= $cakeDescription ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">

    <?= $this->Html->css([ 'bootstrap','product']) ?>

<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">-->

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
</head>
<body>
<nav class="site-header sticky-top py-1 navbar navbar-expand-lg navbar-dark">
    <a href="#" target="_pg_blank" class="py-2 align-content-sm-center logo navbar-brand"> <img src="https://static.wixstatic.com/media/5bd9e1_38f860f6b2804b54bc6499ef904d12ec~mv2.png/v1/fill/w_403,h_313,al_c,usm_0.66_1.00_0.01,enc_auto/HS_reverse_portrait.png" class="d-flex text-center" width="75"> </a>
    <button type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarTogglerDemo02" style="" class="navbar-collapse dropdown-menu-right collapse">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <?php if($l): ?>
                <li class="nav-item">
                    <a href="<?= $this->Url->build('/highscores/mine') ?>" class="nav-link">My High Scores</a>
                </li>
            <?php else: ?>
                <li class="nav-item">
                    <a href="<?= $this->Url->build('/login') ?>" class="nav-link">Log In</a>
                </li>
            <?php endif; ?>
            <li class="nav-item">
                <?= $l ? $this->Html->link(__("Welcome $username"), ['controller' => 'Users','action' => 'view', $userid], ['class' => 'nav-link']) : $this->Html->link(__('Sign Up'), ['controller' => 'Users','action' => 'add'], ['class' => 'nav-link']) ?>
            </li>
            <li class="nav-item">
                <small><?= $l ? $this->Html->link(__("(logout)"), ['controller' => 'Users','action' => 'logout']) : '' ?></small>
            </li>
        </ul>
    </div>
</nav>
<div class="product-device box-shadow d-none d-md-block">
    <h1>All Time Scores</h1>
    <div>
        <ul class="list-group">
            <li class="d-flex justify-content-between align-items-center">
                NinjaTurtle
                <span class="badge-pill">5483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                NewPlayer
                <span class="badge-pill">5463914</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                NewPlayer
                <span class="badge-pill">3586688</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                AAA
                <span class="badge-pill">3443886</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                RadMuffin
                <span class="badge-pill">2336448</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ZombieLuvr223
                <span class="badge-pill">837849</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ImaGonwin
                <span class="badge-pill">543848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                ameenwaaa
                <span class="badge-pill">483848</span>
            </li>
        </ul>
    </div>
</div>
<div class="product-device product-device-2 box-shadow d-none d-lg-block">
    <h1>Your Best</h1>
    <div>
        <ul class="list-group">
            <li class="d-flex justify-content-between align-items-center">
                4-20-22
                <span class="badge-pill">5483848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-23-22
                <span class="badge-pill">4983852</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-10-22
                <span class="badge-pill">4584838</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-11-22
                <span class="badge-pill">4558868</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-11-22
                <span class="badge-pill">2268848</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-05-22
                <span class="badge-pill">958523</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                4-05-22
                <span class="badge-pill">848863</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                3-26-22
                <span class="badge-pill">85568</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                3-05-22
                <span class="badge-pill">3553</span>
            </li>
        </ul>
    </div>
</div>
<div class="overflow-hidden text-center position-relative m-lg-5 game">
    <iframe src="http://test.ttechr.com/webroot/thegames/testgame/index.html"></iframe>
</div>
<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
</div>
<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
</div>
<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
</div>
<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
</div>
<footer class="container py-5">
    <div class="row">
        <div class="col-md col">
            <h5>Advertisement Here?</h5>
            <ul class="list-unstyled text-small">
            </ul>
        </div>
    </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnout.com/popper.js"></script>
<?= $this->fetch('script') ?>
</body>
</html>
