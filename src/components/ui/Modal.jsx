import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Modal = ({ visible, onClose, children }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);

  const clickOutside = (event) => {
    if (event.target.id === "modal") {
      closeModal();
    }
  };

  const closeModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      onClose();
      setCloseAnimation(false);
      setOpenAnimation(false);
    }, 150);
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setOpenAnimation(true);
      }, 10);
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="modal"
      onClick={clickOutside}
      className={`${
        closeAnimation || !openAnimation ? "opacity-0" : "opacity-100"
      } fixed flex items-center justify-center w-screen transition-all h-screen top-0 left-0 bg-black/80 z-50`}
    >
      <div
        className={`${
          !openAnimation ? "scale-0" : "scale-100"
        } max-w-[95%] max-h-[95%] transition-all duration-150 relative rounded-lg bg-secondary/95 backdrop-blur-sm border border-gray-700 text-white flex justify-center items-center flex-col p-2`}
      >
        {children}
        <X
          className="absolute w-10 h-10 p-2 text-white transition-all duration-300 bg-primary rounded-full cursor-pointer hover:bg-primary/80 -top-4 -right-4 hover:scale-110"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
