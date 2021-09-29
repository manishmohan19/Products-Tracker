import classes from "./DeleteModal.module.css";

const DeleteModal = ({ onCancel, onConfirm }) => {
  function cancelHandler() {
    onCancel();
  }

  function confirmHandler() {
    onConfirm();
  }

  return (
    <div className={classes.modal}>
      <p>Are you sure?</p>
      <button className={classes.btn} onClick={cancelHandler}>
        Cancel
      </button>
      <button className={classes.btn} onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default DeleteModal;
