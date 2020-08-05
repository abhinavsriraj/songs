import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title: 'Yummy', duration: '2:30'},
        {title: 'The Box', duration: '3:50'},
        {title: 'Breaking Me', duration: '3:40'},
        {title: 'Whats Popping?', duration: '3:10'},
        {title: 'Sketchers', duration: '3:30'},
        {title: 'Bad Guy', duration: '4:50'}
    ]
}

const selectedSongReducer = (selectedsong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedsong;
}

export default combineReducers({
    songs:  songReducer,
    selectedSong: selectedSongReducer
})