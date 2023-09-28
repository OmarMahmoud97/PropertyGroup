const Modal = ({ children, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="relative">
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-20"
          onClick={onPrev}
        >
          ←
        </div>
        <div className="bg-white p-4 rounded z-10">{children}</div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-20"
          onClick={onNext}
        >
          →
        </div>
      </div>
    </div>
  );
};

export default Modal;
