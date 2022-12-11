import React, { useState } from "react";
import styled from "styled-components";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <ModalStyle modalOn={showModal}>
      <div className="all">
        <div className="instructions">
          <h3>SCROLL</h3>
          <p>
            El usar la rueda del mouse te va a permitir tener una vision mas
            amplia
          </p>
        </div>
        <div className="instructions">
          <h3>CLICK</h3>
          <p>
            El hacer click en diferentes elementos te llevara a sitios web en
            otra pestaña
          </p>
        </div>
        <div className="instructions">
          <h3>DISFRUTA</h3>
          <p>Quiero mostrarme al mundo IT y que vivas una nueva experiencia</p>
        </div>
      </div>
      <span onClick={() => setShowModal(false)}>CONTINUAR</span>
    </ModalStyle>
  );
}

const ModalStyle = styled.div`
  span {
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #fff;
      color: #000;
      transform: scale(1.1);
      transition: all 0.3s ease;
      box-shadow: 0 0 10px #fff;
      border: 1px solid #000;
    }
  }
  .instructions {
    display: flex;
    flex-direction: column;
    max-width: 20%;
    margin: 0 auto;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5%;
    h3 {
      text-align: center;
      font-style: italic;
      font-size: 2vw;
      margin: 5% 0;
      letter-spacing: 2px;
    }
    p {
      font-size: 1vw;
    }
  }
  .all {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 10%;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 100;
  display: ${(props) => (props.modalOn ? "flex" : "none")};
  flex-direction: column;
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;
`;

export default Modal;
