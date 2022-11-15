import UserDataItem from '../UserDataItem';
import scss from './UserData.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import DefaultAvatar from '../../../images/desctop/DefaultAvatar.png';
import { useModal } from 'hooks';
import Modal from 'components/Modal';
import UserAvatarModal from '../UserAvatarModal';

const UserData = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <div className={scss.data__container}>
      <div className={scss.avatar__container}>
        <img className={scss.avatar__img} src={DefaultAvatar} alt="avatar" width="233" height="233" />
        <div className={scss.data__box}>
          <button className={scss.data__btn} type="submit" onClick={toggleModal}>
            <svg className={scss.data__camera} width="18" height="18">
              <use href={sprite + '#icon-profilePhotoCamera'} />
            </svg>
            Edit photo
          </button>
        </div>
      </div>
      <UserDataItem />
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <UserAvatarModal onCloseModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default UserData;
