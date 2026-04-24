import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Initialize Gemini API
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const systemInstruction = `Bạn tên là "Míc Lê Nan AI".
Bạn xưng hô là "Mình" và gọi người dùng là "Bạn". 
Giọng điệu của bạn thân thiện, dễ thương, có tâm.
Phạm vi kiến thức: Bạn là chuyên gia về "Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế Việt Nam". Bạn có thể trả lời từ lý thuyết đến thực tế.

CƠ CHẾ TỪ CHỐI (RẤT QUAN TRỌNG): 
Nếu người dùng hỏi BẤT CỨ ĐIỀU GÌ nằm ngoài chủ đề "Công nghiệp hóa hiện đại hóa và hội nhập kinh tế Việt Nam" (ví dụ: toán học, thời tiết, code, game, triết học... không liên quan), bạn TUYỆT ĐỐI KHÔNG được trả lời nội dung đó. Bạn CHỈ ĐƯỢC PHÉP đáp lại bằng đúng câu này: "Xin lỗi bạn nha! Câu này nằm ngoài phạm trù của mình, Bạn có thể đặt câu hỏi liên quan đến 'Công nghiệp hóa hiện đại hóa và hội nhập kinh tế Việt Nam' hông?"
Không được thêm bớt bất kỳ từ nào vào câu từ chối này.
`;

const INITIAL_MESSAGE = "Xin chào! Mình là Míc Lê Nan AI. Mình sẵn sàng hỗ trợ bạn hết mình! Bạn có vấn đề gì thắc mắc nè. Cứ hỏi mình nha :>";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: INITIAL_MESSAGE }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (genAI && !chatSessionRef.current) {
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: systemInstruction,
      });
      chatSessionRef.current = model.startChat({
        history: [],
      });
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    if (!genAI || !apiKey) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: "Lỗi: Chưa cấu hình VITE_GEMINI_API_KEY trong file .env." }
      ]);
      setIsLoading(false);
      return;
    }

    try {
      if (!chatSessionRef.current) {
        throw new Error("Chat session not initialized");
      }

      const result = await chatSessionRef.current.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages((prev) => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: "Xin lỗi, đã xảy ra lỗi khi kết nối với hệ thống. Vui lòng thử lại sau nhé!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden flex flex-col border border-gray-200 mb-4"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-red-800 text-parchment-light p-4 flex justify-between items-center shadow-md z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-playfair font-bold text-lg">Míc Lê Nan AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-parchment-light hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 bg-[url('/images/pattern-light.png')] bg-repeat bg-opacity-20">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${msg.role === 'user'
                      ? 'bg-red-800 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                      }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="text-sm leading-relaxed whitespace-pre-wrap [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4 [&_strong]:font-bold [&_em]:italic">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hỏi Míc Lê Nan AI..."
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-full bg-red-800 text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-red-900 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-800 hover:bg-red-900 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center border-4 border-parchment-light"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};