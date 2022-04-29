<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */

if(isset($error)):

function callback($buffer){

    $pattern = "/<input.+?>/i";
    preg_match_all($pattern, $buffer, $matches);
//    return (print_r($matches[0], true));


    $theFormArray = [];
    foreach ($matches[0] as $match) {
        $pattern = '/(type|value|name)=".+?"/i';
        $pattern = '/\w+=".+?"/i';
        preg_match_all($pattern, $match, $matches_s);
        $theForm = new stdClass();
        foreach ($matches_s[0] as $matches_) {
            $n = substr($matches_, 0, strpos($matches_, "="));
            $v = substr($matches_, strpos($matches_, '"')+1, -1);
            $theForm->$n = $v;
        }
        $theFormArray[] = $theForm;

    }
    return json_encode($theFormArray);
//    return $buffer;

}

ob_start('callback');
?>

            <?= $this->Form->create($user) ?>
                <?php
                    echo $this->Form->control('username'); echo "\r\n";
                    echo $this->Form->control('password'); echo "\r\n";
//                    echo $this->Form->control('Date_Of_Birth'); echo "\r\n";
                    echo $this->Form->control('email'); echo "\r\n";
                ?>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
<?php
ob_end_flush();
endif;
