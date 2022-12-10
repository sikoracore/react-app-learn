import { useState } from 'react';
import { nanoid } from 'nanoid'
import UserBage from '../userBage/UserBage';
import Comment from '../comment/Comment'

import './DetailedCard.scss'

const DetailedCard = ({
	userId,
	userName,
	avatarUrl,
	imgUrl,
	likes,
	isLikeByYou,
	comments,
	className
}) => {
	const [isCommentsShow, setIsCommentsShow] = useState(false);

	const renderComments = () => {
		if (comments.length > 2 && !isCommentsShow) {
			const commentsCopy = [...comments]
			const commentForRender = commentsCopy.splice(comments.length - 2, 2)
			return (
				<>
					<span className='detailedCardCommentTitle' onClick={() => setIsCommentsShow(true)}>{`Показать еще ${comments.length - commentForRender.length} комментариев`}</span>
					{commentForRender.map((comment) => <Comment {...comment} key={nanoid()} />)}
				</>
			)
		}
		return comments.map((comment) => <Comment {...comment} key={nanoid()} />)
	}

  return (
    <div className="detailedCardRoot">
			<div className="detailedCardHeader">
				<UserBage
					id={userId}
					nickName={userName} 
					avatarUrl={avatarUrl} 
				/>
			</div>
			<div>
				<img 
					src={imgUrl} alt='img' 
					className="detailedCardImg"/>
			</div>
			<div className="detailedCardButtons">
				<i className={`${isLikeByYou ? 'fas' : 'far'} fa-heart detailedCardLikesIcon`} />
				<i className="fas fa-comment detailedCardLikeComment" />
			</div>
			<div className="detailedCardLike">
				{`Оценили ${likes} человек`}
			</div>
			<div className="detailedCardComments">
				{renderComments()}
			</div>
			<textarea className="detailedCardTextArea" />
		</div>
  )
}

export default DetailedCard