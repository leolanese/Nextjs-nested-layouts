const DefaultLayout = ({ children }) => (
  <div className="default-container">
    <div className="main">{children}</div>

    <style jsx>{`
      .default-container {
        font-family: "Lucida Console", "Courier New", monospace;
        padding: 40px 20px;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        background-color: #00bcd430;
        overflow-y: auto;
      }
    `}</style>
  </div>
);

export default DefaultLayout;
