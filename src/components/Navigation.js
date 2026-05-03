export default function Navigation({ currentPage, onNavigate }) {   
    const menus = [
        { id: "home", label: "Home" },
        { id: "useState", label: "UseState" }
    ];

    return (
        <div className='navigation'>
            <h1>React Tutorial</h1>
            <ul>
                {menus.map(menu => (
                    <li 
                        key={menu.id} 
                        onClick={() => onNavigate(menu.id)}
                        className={currentPage === menu.id ? "active" : ""}
                    >
                        {menu.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}