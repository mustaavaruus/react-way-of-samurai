import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/200922123042-moon-landing-file-super-tease.jpg" />
            {props.message}
            <div>
                <span>like {props.likesCount} {props.dislikesCount}</span>
                <span>dislike {props.likesCount} {props.dislikesCount}</span>
            </div>
        </div>
    )
}

export default Post;