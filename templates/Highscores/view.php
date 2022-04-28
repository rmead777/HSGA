<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Highscore $highscore
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Highscore'), ['action' => 'edit', $highscore->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Highscore'), ['action' => 'delete', $highscore->id], ['confirm' => __('Are you sure you want to delete # {0}?', $highscore->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Highscores'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Highscore'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="highscores view content">
            <h3><?= h($highscore->id) ?></h3>
            <table>
                <tr>
                    <th><?= __('User') ?></th>
                    <td><?= $highscore->has('user') ? $this->Html->link($highscore->user->id, ['controller' => 'Users', 'action' => 'view', $highscore->user->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Game') ?></th>
                    <td><?= $highscore->has('game') ? $this->Html->link($highscore->game->title, ['controller' => 'Games', 'action' => 'view', $highscore->game->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($highscore->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Score') ?></th>
                    <td><?= $this->Number->format($highscore->score) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($highscore->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($highscore->modified) ?></td>
                </tr>
                <tr>
                    <th><?= __('Flagged') ?></th>
                    <td><?= $highscore->flagged ? __('Yes') : __('No'); ?></td>
                </tr>
            </table>
        </div>
    </div>
</div>
