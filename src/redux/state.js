import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 23 },
                { id: 2, message: "It's my first post!", likesCount: 2 },
                { id: 3, message: "It's my first post!", likesCount: 2 },
                { id: 4, message: "It's my first post!", likesCount: 2 },
                { id: 5, message: "It's my first post!", likesCount: 2 },
                { id: 6, message: "It's my first post!", likesCount: 2 }
            ],
            newPostText: 'SAMURAI'
        },
    
        dialogsPage: {
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo!" }
            ],

            newMessageBody: "",
    
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber () {
        console.log("state was changed");
    },

    addPost (postMessage) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText("");
        this._callSubscriber (this.getState());
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = (newText);
        this._callSubscriber(this.getState());
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}





export default store;
//windows.store = store;