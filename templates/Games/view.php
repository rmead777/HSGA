<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Game $game
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Game'), ['action' => 'edit', $game->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Game'), ['action' => 'delete', $game->id], ['confirm' => __('Are you sure you want to delete # {0}?', $game->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Games'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Game'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="games view content">
            <h3><?= h($game->title) ?></h3>
            <table>
                <tr>
                    <th><?= __('Title') ?></th>
                    <td><?= h($game->title) ?></td>
                </tr>
                <tr>
                    <th><?= __('Url') ?></th>
                    <td><?= h($game->url) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($game->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($game->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($game->modified) ?></td>
                </tr>
            </table>
            <div class="text">
                <strong><?= __('Api Key') ?></strong>
                <blockquote>
                    <?= $this->Text->autoParagraph(h($game->api_key)); ?>
                </blockquote>
            </div>
            <div class="related">
                <h4><?= __('Related Highscores') ?></h4>
                <?php if (!empty($game->highscores)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('User Id') ?></th>
                            <th><?= __('Game Id') ?></th>
                            <th><?= __('Score') ?></th>
                            <th><?= __('Flagged') ?></th>
                            <th><?= __('Created') ?></th>
                            <th><?= __('Modified') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($game->highscores as $highscores) : ?>
                        <tr>
                            <td><?= h($highscores->id) ?></td>
                            <td><?= h($highscores->user_id) ?></td>
                            <td><?= h($highscores->game_id) ?></td>
                            <td><?= h($highscores->score) ?></td>
                            <td><?= h($highscores->flagged) ?></td>
                            <td><?= h($highscores->created) ?></td>
                            <td><?= h($highscores->modified) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Highscores', 'action' => 'view', $highscores->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Highscores', 'action' => 'edit', $highscores->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Highscores', 'action' => 'delete', $highscores->id], ['confirm' => __('Are you sure you want to delete # {0}?', $highscores->id)]) ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
