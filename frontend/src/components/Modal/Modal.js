import React from "react";
import { useTransition, animated } from "react-spring";
import './modalStyle.css'
import { useSelector } from "react-redux";

function Modal({ isShow, onCancel }) {
  const props = useTransition(isShow, null, {
    from: { opacity: 0, marginTop: "-50px" },
    enter: { opacity: 1, marginTop: "0px" },
    leave: { opacity: 0, marginTop: "50px" }
  });

  const propsWrapper = useTransition(isShow, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.3 },
    leave: { opacity: 0 }
  });


  const modalNameCard = useSelector(state => state.cards.modalNameCard)

  return (
    <React.Fragment>
      {propsWrapper.map(({ item, props, key }) => {
        return item ? (
          <animated.div
            key={key}
            style={props}
            onClick={onCancel}
            className="modal-close-wrapper"
          />
        ) : null;
      })}
      {props.map(({ item, props, key }) => {
        return item ? (
          <animated.div key={key} style={props} className="modal-container">
            <h2 className="modal__title">{modalNameCard}</h2>
            <button type="button" onClick={onCancel}>
              CLOSE
            </button>
          </animated.div>
        ) : null;
      })}
    </React.Fragment>
  );
}

export default Modal;