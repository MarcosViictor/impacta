interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}
  
  export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-lg">
          <button
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
            onClick={onClose}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    )
  }
  