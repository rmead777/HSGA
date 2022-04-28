<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Highscore $highscore
 * @var string[]|\Cake\Collection\CollectionInterface $users
 * @var string[]|\Cake\Collection\CollectionInterface $games
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $highscore->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $highscore->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Highscores'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="highscores form content">
            <?= $this->Form->create($highscore) ?>
            <fieldset>
                <legend><?= __('Edit Highscore') ?></legend>
                <?php
                    echo $this->Form->control('user_id', ['options' => $users]);
                    echo $this->Form->control('game_id', ['options' => $games]);
                    echo $this->Form->control('score');
                    echo $this->Form->control('flagged');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
