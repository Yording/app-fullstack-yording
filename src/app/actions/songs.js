import {ADD_SONG, DELETE_SONG} from '../constants/ActionTypes';

export function addSong(Song) {
  return {
    type: ADD_SONG, 
    data: {
      name: Song.name,
      votes: Song.votes
    }
  };
}

export function deleteSong(id) {
  return {
    type: DELETE_SONG, 
    id: id
  };
}