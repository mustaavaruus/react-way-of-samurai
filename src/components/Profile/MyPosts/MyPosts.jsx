import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remode post</button>
          </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="5" dislikesCount="0" />
                <Post message="It's my first post!" likesCount="4" dislikesCount="0" />
                <Post message="some 1" likesCount="2" dislikesCount="0" />
                <Post message="some 2" likesCount="1" dislikesCount="0" />
            </div>
        </div>
    );
}

export default MyPosts;