import { FC, ReactNode } from 'react';

import { Menu } from '@headlessui/react';

import Dropdown from '@/components/Dropdown/Dropdown';

import DropdownTrackInfo from './DropdownTrackInfo';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  trackAuthor: string | null;
  trackImgUrl: string | null;
  trackTitle: string | null;
  trackSource: string | null;
  actionButtons: ReactNode;
};

const TrackModal: FC<Props> = ({
  showModal,
  setShowModal,
  trackAuthor,
  trackImgUrl,
  trackTitle,
  trackSource,
  actionButtons,
}) => {
  return (
    <Menu>
      <Dropdown
        headerItem={
          trackTitle &&
          trackSource &&
          trackAuthor &&
          trackImgUrl && (
            <DropdownTrackInfo
              artist={trackAuthor}
              imgUrl={trackImgUrl}
              name={trackTitle}
              provider={trackSource}
            />
          )
        }
        className="
                sm:right-0
                sm:top-8
                sm:w-[254px]
                sm:absolute
                py-4
                sm:py-0
                shadow-[16px_-16px_16px_0px_#0C0D0B80]
                "
        isOpen={showModal}
        setIsOpen={setShowModal}
      >
        {actionButtons}
      </Dropdown>
    </Menu>
  );
};

export default TrackModal;
