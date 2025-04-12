"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send, Paperclip } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "¡Hola! Soy el asistente virtual del CIP Junín. ¿En qué puedo ayudarte hoy?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    // Añadir mensaje del usuario
    setMessages([...messages, { type: "user", content: newMessage }])

    // Simular respuesta del bot después de un breve retraso
    setTimeout(() => {
      let botResponse =
        "Gracias por tu mensaje. En estos momentos estamos procesando tu consulta. Un representante del CIP Junín se pondrá en contacto contigo a la brevedad."

      // Respuestas predefinidas basadas en palabras clave
      if (newMessage.toLowerCase().includes("certificado") || newMessage.toLowerCase().includes("habilidad")) {
        botResponse =
          "Para obtener un certificado de habilidad, puedes solicitarlo a través de nuestra plataforma en la sección 'Trámites > Certificado de Habilidad' o acercarte a nuestras oficinas con tu carnet de colegiado."
      } else if (newMessage.toLowerCase().includes("colegiatura") || newMessage.toLowerCase().includes("colegiarse")) {
        botResponse =
          "Para colegiarte, necesitas presentar tu título profesional, DNI y otros documentos. Puedes ver los requisitos completos en la sección 'Trámites > Colegiatura'."
      } else if (newMessage.toLowerCase().includes("curso") || newMessage.toLowerCase().includes("capacitación")) {
        botResponse =
          "Tenemos diversos cursos y capacitaciones disponibles. Puedes consultar nuestra oferta actual en la sección 'Capacitaciones'."
      } else if (newMessage.toLowerCase().includes("pago") || newMessage.toLowerCase().includes("cuota")) {
        botResponse =
          "Puedes realizar el pago de tus cuotas a través de nuestra plataforma virtual en la sección 'Intranet' o en nuestras oficinas."
      }

      setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
    }, 1000)

    setNewMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-800 rotate-90" : "bg-red-700 hover:bg-red-800"
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[500px]">
          {/* Encabezado */}
          <div className="bg-red-700 text-white p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">Asistente CIP Junín</h3>
              <p className="text-xs opacity-80">Respuesta en minutos</p>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px]">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-red-700 text-white rounded-tr-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {message.type === "bot" && (
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center mr-2">
                        <Image
                          src="/placeholder.svg?height=24&width=24&text=CIP"
                          alt="CIP Logo"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-xs font-bold">Asistente CIP</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  <div className="text-right mt-1">
                    <span className={`text-xs ${message.type === "user" ? "text-white/70" : "text-gray-500"}`}>
                      {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Entrada de mensaje */}
          <div className="border-t p-3 bg-gray-50">
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2">
                <Paperclip className="h-5 w-5" />
              </button>
              <Input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <button
                className="ml-2 bg-red-700 hover:bg-red-800 text-white p-2 rounded-full"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs text-center text-gray-500 mt-2">
              Horario de atención: Lunes a Viernes 8:00 am - 6:00 pm
            </div>
          </div>
        </div>
      )}
    </>
  )
}
