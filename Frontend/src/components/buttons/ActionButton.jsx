function ActionButton(props) {
  return (
    <div>
      <a href="#" className={props.className}>
        {props.text}
      </a>
    </div>
  );
}

export default ActionButton;

/* {`btn btn-primary ${styles.productCardBtn}`} */
