import Icon from "./Icon";
import MainLogo from "./MainLogo";

const NavIconsList = ({ icons }) => {
  return (
    <ul>
      <li className="nav-list-item">
        <MainLogo />
      </li>
      {icons?.map((icon) => (
        <li key={icon.name} className="nav-list-item">
          <Icon path={icon.path} size={24} label={icon.name} />
        </li>
      ))}
    </ul>
  );
};

export default NavIconsList;
