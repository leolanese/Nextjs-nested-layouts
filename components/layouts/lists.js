import Link from 'next/link';

const ListsLayout = ({ children }) => (
  <div className="lists-container">
    <div className="sidebar">
      <h3>Lists</h3>

      {[...Array(50).keys()].map((n) => (
        <div key={n}>
          <Link href="/lists/list1">
            <a>Page 1</a>
          </Link>
          <Link href="/lists/list2">
            <a>Page 2</a>
          </Link>
          <Link href="/lists/list3">
            <a>Page 3</a>
          </Link>
        </div>
      ))}
    </div>

    <div className="main">{children}</div>

    <style jsx>{`
      .lists-container {
        display: flex;
      }
      .sidebar {
        width: 200px;
        padding: 20px;
        background: #fafafa;
        overflow-y: auto;
        flex: 0 0 170px;
      }
      .main {
        font-family: "Lucida Console", "Courier New", monospace;
        padding: 20px;
        flex: 0 1 auto;
        background-color: #00bcd430;
        overflow-y: auto;
      }
      a {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
);

export default ListsLayout;
