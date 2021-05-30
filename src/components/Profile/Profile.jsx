import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>

    );
}

export default Profile;