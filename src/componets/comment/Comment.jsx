import './Comment.scss'

const Comment = ({
	nickName,
	text
}) => {
	return (
		<div className='commentRoot'>
			<span className='commentName'>{nickName}:</span>
			<span className='commentText'>{text}</span>
		</div>
	)
}

export default Comment