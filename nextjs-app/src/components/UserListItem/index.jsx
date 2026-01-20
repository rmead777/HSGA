import React, { useState, useRef } from 'react';
import client from '../../clients/HSWM';
import cx from "classnames";
import styles from "@ui/organisms/Leaderboard/styles.module.scss";

const UserListItem = (props) => {
  const [val, setVal] = useState('');
  const {inpid} = props;
  const [plr, setPlr] = useState(props.placeholdr);
  const [hiddenVal, setHiddenVal] = useState(props.value);
  const [username, setUsername] = useState(props.username);

  // new state for the confirmation dialog
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmBtnRef = useRef(null);

  async function handleDeleteSubmit(e) {
    e.preventDefault();
    try {
      // call the API function that submits the form
      await client.deleteUserFromOwnSquads({ uuid: hiddenVal });
      setShowConfirm(false);

      // notify parent to reload the users list (optional callbacks)
      if (typeof props.reloadUsers === 'function') {
        props.reloadUsers();
      }
      if (typeof props.onDeleted === 'function') {
        props.onDeleted(hiddenVal);
      }
    } catch (err) {
      setShowConfirm(false);
      // Minimal handling: you can expand this to show an error message
      console.error('Delete failed', err);
    }
  }

  function openConfirm(e) {
    e.preventDefault();
    setShowConfirm(true);
    // focus will go to autoFocused confirm button
  }

  function cancelConfirm(e) {
    e && e.preventDefault();
    setShowConfirm(false);
  }

  function onDialogKeyDown(e) {
    // make Enter or Space trigger confirm even if focus is elsewhere in dialog
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      confirmBtnRef.current && confirmBtnRef.current.click();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setShowConfirm(false);
    }
  }

    return (
    <div className='groupcode-input-con my-3'>
      <input type="hidden" value={hiddenVal} name={"uuid"} />
      <a
          href="#"
          style={{marginRight: '5px', color: 'var(--primary-1)', fontSize: '1em' }}
          className="pointer-item"
          onClick={openConfirm}
          aria-label={`Delete ${username}`}
      >
          ✖
      </a>
        <div
            className={cx(styles.table)}
            style={{
              marginLeft: '0.5em',
            }}
        >{username}</div>

      {showConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirm delete"
          onKeyDown={onDialogKeyDown}
          // minimal inline styles to make it appear as a popup; replace with your CSS
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 9999,
          }}
        >
          <form
            onSubmit={handleDeleteSubmit}
            style={{
              background: '#000',
              borderColor: 'var(--primary-3)',
              borderWidth: 2,
              borderStyle: 'solid',
              padding: '1rem',
              borderRadius: 6,
              minWidth: 260,
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              Are you sure you want to delete?
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={cancelConfirm}
                style={{
                  background: '#fff',
                  color: '#000',
                  border: '1px solid var(--primary-3)',
                  padding: '0.0rem 0.6rem',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                ref={confirmBtnRef}
                autoFocus
                style={{
                  background: '#fff',
                  color: '#000',
                  border: '1px solid var(--primary-3)',
                  padding: '0.0rem 0.6rem',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UserListItem