import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Modal = ({ visible, onClose, children }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);

  const clickOutside = (event) => {
    event.target.id === "modal" ? closeModal() : null;
  };

  const closeModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenAnimation(visible);
    }, 100);
  }, [visible]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = null);
  }, []);

  return (
    <div
      id="modal"
      onClick={clickOutside}
      className={`${
        closeAnimation || !openAnimation ? "opacity-0" : "opacity-100"
      } fixed flex items-center justify-center w-screen transition-all h-screen top-0 left-0 bg-black/60`}
    >
      <div
        className={`${
          !openAnimation ? "scale-0" : "scale-100"
        } max-w-[60%] min-h-[100px] transition-all duration-100 relative rounded-md bg-white text-black flex justify-center items-center flex-col`}
      >
        {children}
        <X
          className="absolute w-8 h-8 p-1 text-black transition-all duration-300 bg-white rounded-full cursor-pointer active:bg-gray-400 -top-3 -right-3 active:scale-90"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
