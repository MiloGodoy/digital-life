import Link from "next/link";

export default function ThankYouPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por contactarnos!</h1>
            <p className="text-gray-600 mb-6">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.
            </p>
            
            <Link 
              href="/" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Volver al inicio
            </Link>
            
            <p className="mt-6 text-sm text-gray-500">
              ¿Necesitas ayuda inmediata? Llámanos al +595 21 729 6900
            </p>
          </div>
        </div>
      </div>
    )
  }