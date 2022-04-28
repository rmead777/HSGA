<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.10.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */
use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Core\Plugin;
use Cake\Datasource\ConnectionManager;
use Cake\Error\Debugger;
use Cake\Http\Exception\NotFoundException;

//$this->disableAutoLayout();


$cakeDescription = 'High Score Wins Money!';
?>
<header>
    <div class="container text-center">
        <h1>
            Welcome to High Score Wins Money!
        </h1>
    </div>
</header>
<main class="main">
    <div class="container">
        <div class="content">
            <div class="row">
                <div class="column" style="text-align: left">
                    <h6>Player High Score</h6>
                </div>
                <div class="column" style="text-align: center">
                    <h3>Game would go here</h3>
                </div>
                <div class="column" style="text-align: right">
                    <h5>Top High Score</h5>
                </div>
            </div>
            <div class="row">
                <div class="column" style="padding-right: 0">
                    <ul>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="background-color: cornflowerblue; margin-bottom: 0"></li>
                    </ul>
                </div>
                <div class="column" style="padding-left: 0">
                    <ul>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                        <li class="bullet success" style="text-align: right; background-color: cornflowerblue; margin-bottom: 0"></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="column links">
                    <h3>Advertisement</h3>

                    <div class="message default text-center">
                        <small>Advertisement section. Here might be shown an ad</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
