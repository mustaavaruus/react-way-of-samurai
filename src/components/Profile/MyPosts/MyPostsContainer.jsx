import Post from './Post/Post.jsx';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext.js';



const MyPostsContainer = (props) => {

    //let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);



    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                //let newPostElement = React.createRef();

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;