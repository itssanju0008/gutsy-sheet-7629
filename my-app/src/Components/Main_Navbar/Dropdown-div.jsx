import "./Dropdown.css";
export default function Dropdown_div({ data }) {
  let inform = data;
  return (
    <div id="dropdown-nav">
      <div id="dropdown-list-items">
        <ul id="dropdown-nav-ul">
          {inform.map((item) => (
              <li className="title">
                {item.title}
                <div id="Dropdown-div-item">
                  {item.data.map((item) => (
                    <div>
                      <img src={item.image} alt="x" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </li>
           
          ))}
        </ul>
      </div>
    </div>
  );
}
