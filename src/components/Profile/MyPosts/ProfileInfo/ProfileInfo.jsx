import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://static01.nyt.com/images/2018/11/30/science/30nasa-01/30nasa-01-superJumbo.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}


export default ProfileInfo;