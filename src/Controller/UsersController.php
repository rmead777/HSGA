<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $users = $this->paginate($this->Users);

        $this->set(compact('users'));
    }

    /**
     * View method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => ['Highscores'],
        ]);

        $this->set(compact('user'));
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $user = $this->Users->newEmptyEntity();
        if ($this->request->is('post')) {
//            print_r($this->request->getData());exit;
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $this->set(compact('user'));
    }

    /**
     * Edit method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $this->set(compact('user'));
    }

    /**
     * Delete method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $this->Flash->success(__('The user has been deleted.'));
        } else {
            $this->Flash->error(__('The user could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }


    /**
     * Login method
     *
     * @return \Cake\Http\Response|void|null Renders view. Redirects if successful
     */
    public function login()
    {
        $this->request->allowMethod(['get', 'post']);
        $result = $this->Authentication->getResult();
        // regardless of POST or GET, redirect if user is logged in
        if ($result->isValid()) {
            // redirect to /articles after login success
            $redirect = $this->request->getQuery('redirect', [
                'controller' => 'Games',
                'action' => 'index',
            ]);

            return $this->redirect($redirect);
        }
        // display error if user submitted and authentication failed
        if ($this->request->is('post') && !$result->isValid()) {
            $this->Flash->error(__('Invalid username or password'));
        }
    }

    /**
     * Logout method
     *
     * @return \Cake\Http\Response|void|null Logs out and redirects
     */
    public function logout()
    {
        $result = $this->Authentication->getResult();
        // regardless of POST or GET, redirect if user is logged in
        if ($result->isValid()) {
            $this->Authentication->logout();
            return $this->redirect(['controller' => 'Users', 'action' => 'login']);
        }
    }


    /**
     * Get Current User method for games
     *
     * @return \Cake\Http\Response|void|null api action
     */
    public function currentuser(){
        testingCORS();
        $result = $this->Authentication->getResult();
        if($result->isValid())
            print_r($this->Authentication->getIdentity()->username);
        else
            echo "Guest";
        exit;
    }

    /**
     * Return the add sign up form in json
     * @return void
     */
    public function jsonsignupform(){
        $user = $this->Users->newEmptyEntity();
        if ($this->request->is('post')) {

            $user = $this->Users->patchEntity($user, $this->request->getData());

            if ($this->Users->save($user)) {
                //$this->Flash->success(__('The user has been saved.'));
//            print_r($user);exit;
                $this->set('response', "Success");
            }
            else{
                $this->viewBuilder()->setOption('serialize', true);
                $this->set('error', $user->getErrors());
            }
        }
        $this->set(compact('user'));

        $this->viewBuilder()->disableAutoLayout();

//        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * testing stuff here
     *
     * @return \Cake\Http\Response|void|null
     */
    public function test()
    {
        header('Content-Type: application/json');
//        echo "this is the test file\r\n";
        echo json_encode($_POST);
        exit;
    }

    public function csrftest(){
        header('Content-Type: application/json');
        print_r(json_encode([0 => $this->request->getAttribute('csrfToken'), 1 => $_SESSION]));
        exit;
    }


    public function example()
    {

        $highscores = $this->getTableLocator()->get('Highscores');
        $query = $highscores->find('all')->where(['game_id' => 1])->contain('Users')->order(['score' => 'DESC']);
        $results = array();
        foreach ($query->all() as $row) {
            $results[] = [$row->user->username => $row->score];
        }
        header('Content-Type: application/json');
        echo json_encode($results);exit;
    }

    public function beforeFilter(\Cake\Event\EventInterface $event)
    {
        parent::beforeFilter($event);
        // Configure the login action to not require authentication, preventing
        // the infinite redirect loop issue
        $this->Authentication->addUnauthenticatedActions(['login', 'add', 'currentuser', 'test', 'csrftest', 'jsonsignupform']);


        //disable form tampering check for test action
//        if($this->getAction() == 'test'){
//            $this->FormProtection->setConfig('validate', false);
//        }
    }
}
