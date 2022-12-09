import UserBage from '../userBage/UserBage';
import './NavBar.scss';

const NavBar = ({
  id,
	avatarUrl,
	nickName
}) => {
  return (
		<div className='navbarRoot'>
      <div className="navbarContainer">
        <span>sikoracore</span>
        <UserBage 
          id={id} 
          nickName={nickName} 
          avatarUrl={avatarUrl}
        />
      </div>
    </div>
  )
}

export default NavBar