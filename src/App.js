import styled from "styled-components";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/5cKdf3mRxXOyGGBg/scene.splinecode"
      />

      <Content>
        <ul>
          <a
            href="https://github.com/sanavalos"
            target="_blank"
            rel="noreferrer"
          >
            <li>GitHub</li>
          </a>
          <a
            href="https://www.linkedin.com/in/santiagoavalos/"
            target="_blank"
            rel="noreferrer"
          >
            <li>LinkedIn</li>
          </a>
          <a
            href="https://drive.google.com/file/d/1h7ifMwD4c6FHr1t1xgqXrqIURLxCMIpG/view"
            target="_blank"
            rel="noreferrer"
          >
            <li>Curriculum Vitae</li>
          </a>
        </ul>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  .spline {
    position: absolute;
    height: 100vh;
    width: 100vw;
    margin: 0;
    top: 0;
    right: 0;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 5%;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    a {
      text-decoration: none;
      color: white;
    }
    li {
      margin: 0 1rem;
      &:hover {
        cursor: pointer;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: white;
          animation: slide 0.5s ease-in-out;
          @keyframes slide {
            0% {
              transform: translateX(-15%);
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      }
    }
  }
`;
export default App;
