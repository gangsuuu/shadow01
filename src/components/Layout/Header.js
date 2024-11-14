export default function Header() {
  return(
    <header>
        <div className="header__logoWrap">
          <div className="header__logoBox">
            <div className="header__logo"></div>
            {/* <img className="header__logo"></img> */}
          </div>
        </div>
        <div className="header__nav">
          <nav>
            <ul>
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Image Bank</a></li>
              <li><a>Toolkits</a></li>
              <li><a>Exhibition</a></li>
              <li><a>Resources</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}