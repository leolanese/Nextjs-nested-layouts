import Link from 'next/link';

const BlogLayout = ({ children }) => (
  <div className="blog-container">
    <div className="main">{children}</div>
    <div className="sidebar">
      <h3>Blog</h3>
      {[...Array(50).keys()].map((i) => (
        <div key={i}>
          <Link href="/blog/blog1">
            <a>Page 1</a>
          </Link>
          <Link href="/blog/blog2">
            <a>Page 2</a>
          </Link>
          <Link href="/blog/blog3">
            <a>Page 3</a>
          </Link>
        </div>
      ))}
    </div>

    <style jsx>{`
      .blog-container {
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
        padding: 20px;
        background: #00bcd430;
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

export default BlogLayout;
