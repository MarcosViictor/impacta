import Logo from "@/static/assets/logo.svg";

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen = ({ message = "Carregando..." }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <figure className="w-16 animate-pulse">
          <img src={Logo} alt="Logo" />
        </figure>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};
