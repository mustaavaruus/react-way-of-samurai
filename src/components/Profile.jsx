import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://static01.nyt.com/images/2018/11/30/science/30nasa-01/30nasa-01-superJumbo.jpg" />
            </div>
            <div>
                ava + description
        </div>
            <div>
                my posts
          <div>
                    new post
          </div>
                <div>
                    <div className={s.item}>
                        post 1
              </div>
                    <div className={s.item}>
                        post 2
              </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;