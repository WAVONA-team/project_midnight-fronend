import React, { useCallback, useEffect } from 'react';

import { useStore } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';
import { Track } from 'project_midnight';

import { TrackInfo } from '@/components/TrackInfo';

import { Container } from '@/ui/Container';
import { Spinner } from '@/ui/Spinner';

type Props = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  tracks: Track[];
  totalTracks: number;
  header: string;
};

const TrackList: React.FC<Props> = React.memo(
  ({ isLoading, setIsLoading, tracks, totalTracks, header }) => {
    const {
      currentTrack,
      changeCurrentTrack,
      changePlayerState,
      playerState,
      query,
    } = useStore(
      ({
        currentTrack,
        changeCurrentTrack,
        changePlayerState,
        playerState,
        query,
      }) => ({
        currentTrack,
        changeCurrentTrack,
        changePlayerState,
        playerState,
        query,
      }),
    );

    const handleTrack = async (track: Track) => {
      await changeCurrentTrack(track).then(() =>
        changePlayerState(
          track.url === currentTrack?.url ? !playerState : true,
        ),
      );
    };

    const scrollHandler = useCallback(() => {
      if (
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <
          100 &&
        tracks.length < totalTracks
      ) {
        setIsLoading(true);
      }
    }, [tracks, totalTracks]);

    useEffect(() => {
      document.addEventListener('scroll', scrollHandler);
      document.addEventListener('resize', scrollHandler);

      return () => {
        document.removeEventListener('scroll', scrollHandler);
        document.removeEventListener('resize', scrollHandler);
      };
    }, [scrollHandler]);

    return (
      <div className="mb-8 sm:mb-12 flex flex-col gap-11 relative">
        {isLoading && (
          <Container className="flex justify-center absolute left-1/2 -translate-x-1/2 -top-4">
            <Spinner width="w-7" height="h-7" />
          </Container>
        )}

        {!isLoading && !tracks.length && !!query.length && (
          <Container>
            <h2
              className="
                font-rubik
                font-semibold
                text-secondary-cadet-gray
                text-2xl
                sm:text-2xl
                lg:text-xl
                tracking-wide
              "
            >
              {header}
            </h2>
          </Container>
        )}

        <AnimatePresence>
          {tracks && !isLoading && (
            <div>
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrackInfo
                    artist={track.author as string}
                    name={track.title}
                    handlerPlay={() => handleTrack(track)}
                    handlerModal={() => {}}
                    duration={track.duration}
                    provider={track.source}
                    imgUrl={track.imgUrl!}
                    isPlay={track.url === currentTrack?.url}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export default TrackList;
