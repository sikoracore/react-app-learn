import { useNavigate } from 'react-router-dom'
import './UserBage.scss';

const UserBage = ({
  id,
  nickName,
  avatarUrl
}) => {
  const navigate = useNavigate();

  const userBageOnClick = () => {
    navigate(`/${id}`)
  }
  return (
    <div className='userBageRoot' onClick={userBageOnClick}>
      {avatarUrl ? <img src={avatarUrl} className='userBageAvatar' alt='logo'/> : <div className='userBageNone'/>}
			<span className='userBageName'>{nickName}</span>
    </div>
  )
}

export default UserBage;