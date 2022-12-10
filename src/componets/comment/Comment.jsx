import './Comment.scss'

const Comment = ({
	nickname,
	text
}) => {
	return (
		<div className='commentRoot'>
			<span className='commentName'>{nickname}:</span>
			<span className='commentText'>{text}</span>
		</div>
	)
}

export default Comment