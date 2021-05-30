import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}  />);

    let addPost = () => {
        alert("SAMURAI");
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    let newPostElement = React.createRef();

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;