import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    

    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;