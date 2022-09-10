import Header from '../header';

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />

    <div className="content-wrapper">{children}</div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #1b789e;
        text-decoration: none;
        letter-spacing: 3px;
      }

      a:hover {
        color: #000;
      }

      h1,
      h2 {
        margin: 40px 0 30px;
      }

      h3 {
        margin: 10px 0;
      }

      p {
        margin: 0 0 10px;
      }

      img {
        max-width: 100%;
      }

      .main-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      .content-wrapper {
        display: flex;
        flex-grow: 1;
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default MainLayout;
