import { Track } from 'project_midnight';

export type TracksPageState = {
  userTracks: Track[];
  isUserTracksLoading: boolean;
  currentPage: number;
  setCurrentPage: (number: number) => void,
  setIsUserTracksLoading: (state: boolean) => void;
  getTracksByUser: (userId: string, page: number) => Promise<Track[]>;
};
