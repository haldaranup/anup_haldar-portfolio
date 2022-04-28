import "./menu.scss"

export default function Menu({toggleMenu, setToggleMenu}) {
    function closeMenu(){
        setToggleMenu(false)
    }
  return (
    <div className={"menu "+ (toggleMenu && "active")}>
        <ul>
            <li onClick={closeMenu}>
                <a href="#intro">About</a>
            </li>
            <li onClick={closeMenu}>
                <a href="#portfolio">Resume</a>
            </li>
            <li onClick={closeMenu}>
                <a href="#works">Projects</a>
            </li>
            <li onClick={closeMenu}>
                <a href="#contact">Contact</a>
            </li>
        </ul>

    </div>
  )
}
