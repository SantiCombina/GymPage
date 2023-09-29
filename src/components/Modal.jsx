export const Modal = ({ children }) => {
  return (
    <div className="fixed flex items-center justify-center w-full h-full bg-black/60">
      <div className="w-[500px] min-h-[100px] relative rounded-md bg-white flex justify-center items-center p-10 flex-col">
        {children}
        <button>cerrar</button>
      </div>
    </div>
  );
};
