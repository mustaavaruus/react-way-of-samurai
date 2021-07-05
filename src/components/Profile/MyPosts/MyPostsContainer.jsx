import Post from './Post/Post.jsx';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}  />);

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let newPostElement = React.createRef();

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange } posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    );
}

export default MyPostsContainer;