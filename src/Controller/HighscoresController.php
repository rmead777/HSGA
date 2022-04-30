<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Highscores Controller
 *
 * @property \App\Model\Table\HighscoresTable $Highscores
 * @method \App\Model\Entity\Highscore[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class HighscoresController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Users', 'Games'],
        ];
        $highscores = $this->paginate($this->Highscores);

        $this->set(compact('highscores'));
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function mine()
    {

        $this->paginate = [
            'contain' => ['Users', 'Games'],
        ];
        $highscores = $this->paginate($this->Highscores->find('all', ['conditions' => ['Users.id' => $this->Authentication->getIdentity()->id]]));

        $this->set(compact('highscores'));
    }

    /**
     * View method
     *
     * @param string|null $id Highscore id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $highscore = $this->Highscores->get($id, [
            'contain' => ['Users', 'Games'],
        ]);

        $this->set(compact('highscore'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $highscore = $this->Highscores->newEmptyEntity();
        if ($this->request->is('post')) {
            $highscore = $this->Highscores->patchEntity($highscore, $this->request->getData());
            if ($this->Highscores->save($highscore)) {
                $this->Flash->success(__('The highscore has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The highscore could not be saved. Please, try again.'));
        }
        $users = $this->Highscores->Users->find('list', ['limit' => 200])->all();
        $games = $this->Highscores->Games->find('list', ['limit' => 200])->all();
        $this->set(compact('highscore', 'users', 'games'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Highscore id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $highscore = $this->Highscores->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $highscore = $this->Highscores->patchEntity($highscore, $this->request->getData());
            if ($this->Highscores->save($highscore)) {
                $this->Flash->success(__('The highscore has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The highscore could not be saved. Please, try again.'));
        }
        $users = $this->Highscores->Users->find('list', ['limit' => 200])->all();
        $games = $this->Highscores->Games->find('list', ['limit' => 200])->all();
        $this->set(compact('highscore', 'users', 'games'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Highscore id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $highscore = $this->Highscores->get($id);
        if ($this->Highscores->delete($highscore)) {
            $this->Flash->success(__('The highscore has been deleted.'));
        } else {
            $this->Flash->error(__('The highscore could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function post()
    {
        $testdatatable = $this->getTableLocator()->get('Testdata');
        $testdata = $testdatatable->newEmptyEntity();
        if ($this->request->is('post')) {
            echo "posted data was received\r\n";
            $testdata->data = print_r($this->request->getData(), true);
            if ($testdatatable->save($testdata)) {
//                $this->Flash->success(__('The highscore has been saved.'));
                $id = $testdata->id;
                print_r($id);
                echo "\r\n\r\n\r\n";
                print_r($testdata->data); exit;
//                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The highscore could not be saved. Please, try again.'));
        }

        exit;
        $this->set(compact('testdata'));
    }

    public function check(){
        $testdatatable = $this->getTableLocator()->get('Testdata');
        $testdata = $testdatatable->find('all');
        foreach ($testdata as $datum){
            echo "-----\r\n";
            echo "created: ".$datum->created."\r\n";
            print_r($datum->data);
            echo "\r\n";
        }exit;
    }

	public function forgame($id = null)
    {

    	if($id == null){
        	exit;
        }
    	$highscores = $this->getTableLocator()->get('Highscores');
    	$query = $highscores->find('all')->where(['game_id' => $id])->contain('Users')->order(['score' => 'DESC']);
		$results = array();
    	foreach ($query->all() as $row) {
        	$result = new \stdClass;
        	$result->username = $row->user->username;
        	$result->score = $row->score;
			$results[] = $result;
        }
    	header('Content-Type: application/json');
    	echo json_encode($results);exit;
    }

    public function beforeFilter(\Cake\Event\EventInterface $event)
    {
        parent::beforeFilter($event);
        // for all controllers in our application, make index and view
        // actions public, skipping the authentication check
        $this->Authentication->addUnauthenticatedActions(['add', 'post', 'check', 'forgame']);
        $this->FormProtection->setConfig('unlockedActions', ['post', 'check']);

    }
}
