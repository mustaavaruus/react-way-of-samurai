import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://static01.nyt.com/images/2018/11/30/science/30nasa-01/30nasa-01-superJumbo.jpg" />
            </div>
            <div>
                ava + description
        </div>
        <MyPosts />
        </div>

    );
}

export default Profile;