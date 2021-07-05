import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}/>
        </div>

    );
}

export default Profile;