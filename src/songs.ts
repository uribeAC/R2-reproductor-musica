import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  const areSame: boolean = song.title === songTitle;

  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  const maximumSongsNumber = 4;
  const isFull: boolean = songs.length >= maximumSongsNumber;

  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Error";
  }

  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  const songsCount: number = songs.length;

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;

  if (currentSongPosition === songs.length - 1) {
    nextSongPosition = 0;
  } else {
    nextSongPosition = currentSongPosition + 1;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  const isCurrent: boolean = song.isCurrent;

  return isCurrent;
};
