import { Overlay, Modal } from './ModalCategories.styled'
import Categories from '../Categories/Categories'
import { useEffect } from 'react';

export const ModalCategories = ({ closeCategory }) => {

      useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeCategory();
        }
        };
        document.addEventListener("keydown", handleKeyDown, false);
        return () => {
        document.removeEventListener("keydown", handleKeyDown, false);
        };
    }, [closeCategory]);

  return (

    <Overlay onClick={closeCategory}>
      <Modal>
        <Categories/>
      </Modal>
    </Overlay>

  )
}
