<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Highscore[]|\Cake\Collection\CollectionInterface $highscores
 */
?>
<div class="highscores index content">
    <?= $this->Html->link(__('New Highscore'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Highscores') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('user_id') ?></th>
                    <th><?= $this->Paginator->sort('game_id') ?></th>
                    <th><?= $this->Paginator->sort('score') ?></th>
                    <th><?= $this->Paginator->sort('flagged') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($highscores as $highscore): ?>
                <tr>
                    <td><?= $this->Number->format($highscore->id) ?></td>
                    <td><?= $highscore->has('user') ? $this->Html->link($highscore->user->id, ['controller' => 'Users', 'action' => 'view', $highscore->user->id]) : '' ?></td>
                    <td><?= $highscore->has('game') ? $this->Html->link($highscore->game->title, ['controller' => 'Games', 'action' => 'view', $highscore->game->id]) : '' ?></td>
                    <td><?= $this->Number->format($highscore->score) ?></td>
                    <td><?= h($highscore->flagged) ?></td>
                    <td><?= h($highscore->created) ?></td>
                    <td><?= h($highscore->modified) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $highscore->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $highscore->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $highscore->id], ['confirm' => __('Are you sure you want to delete # {0}?', $highscore->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
