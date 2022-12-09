import NavBar from '../navBar/NavBar';
import './Layout.scss';

const Layout = ({
  id,
  nickName,
  avatarUrl,
  children
}) => {
  return (
  	<div className='layoutRoot'>
      <NavBar 
        id={id}
        nickName={nickName} 
        avatarUrl={avatarUrl}
      />
      <div className='layoutContainer'>
        {children}
      </div>
    </div>
  )
}

export default Layout