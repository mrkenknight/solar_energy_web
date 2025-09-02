// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   MessageCircle, 
//   X, 
//   Send, 
//   Copy, 
//   Check,
//   Minimize2,
//   Maximize2,
//   Trash2,
//   Bot,
//   ThumbsUp,
//   ThumbsDown
// } from 'lucide-react';

// export default function MinimalSolarChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);

//   interface Message {
//     id: number;
//     type: 'user' | 'bot';
//     content: string;
//     timestamp: Date;
//   }
  
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [streamingMessage, setStreamingMessage] = useState('');
//   const [isClient, setIsClient] = useState(false);
//   const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
//   const [likedMessages, setLikedMessages] = useState(new Set<number>());
//   const [dislikedMessages, setDislikedMessages] = useState(new Set<number>());
//   const [showWelcome, setShowWelcome] = useState(true);
//   const [chatSize, setChatSize] = useState({ width: 384, height: 500 });
//   const [isResizing, setIsResizing] = useState(false);
  
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLTextAreaElement>(null);

//   // Resize functionality - optimized with proper types
//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, direction: string) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsResizing(true);
    
//     const startX = e.clientX;
//     const startY = e.clientY;
//     const startWidth = chatSize.width;
//     const startHeight = chatSize.height;

//     const handleMouseMove = (moveEvent: MouseEvent) => {
//       // Use requestAnimationFrame for smooth updates
//       requestAnimationFrame(() => {
//         const deltaX = startX - moveEvent.clientX;
//         const deltaY = startY - moveEvent.clientY;
        
//         let newWidth = startWidth;
//         let newHeight = startHeight;
        
//         if (direction.includes('w')) newWidth += deltaX;
//         if (direction.includes('n')) newHeight += deltaY;
        
//         // Smooth constraints
//         newWidth = Math.max(300, Math.min(700, newWidth));
//         newHeight = Math.max(400, Math.min(800, newHeight));
        
//         setChatSize({ width: newWidth, height: newHeight });
//       });
//     };

//     const handleMouseUp = () => {
//       setIsResizing(false);
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.body.style.userSelect = '';
//       document.body.style.cursor = '';
//     };

//     // Prevent text selection during resize
//     document.body.style.userSelect = 'none';
//     document.body.style.cursor = direction.includes('n') && direction.includes('w') ? 'nw-resize' : 
//                                   direction.includes('n') && direction.includes('e') ? 'ne-resize' :
//                                   direction.includes('s') && direction.includes('w') ? 'sw-resize' :
//                                   direction.includes('s') && direction.includes('e') ? 'se-resize' :
//                                   direction.includes('n') ? 'n-resize' :
//                                   direction.includes('w') ? 'w-resize' : 'default';

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Welcome message
//   useEffect(() => {
//     if (isOpen && showWelcome && messages.length === 0) {
//       setTimeout(() => {
//         setIsTyping(true);
//         setTimeout(() => {
//           const welcomeMessage = {
//             id: 1,
//             type: 'bot' as const,
//             content: 'Xin chào! ☀️ Tôi là trợ lý tư vấn năng lượng mặt trời. Tôi có thể giúp bạn:\n\n• Tư vấn hệ thống điện mặt trời\n• Tính toán công suất phù hợp\n• Báo giá và lắp đặt\n• Chính sách hỗ trợ\n\nBạn quan tâm đến vấn đề gì?',
//             timestamp: new Date()
//           };
//           setMessages([welcomeMessage]);
//           setIsTyping(false);
//           setShowWelcome(false);
//         }, 1000);
//       }, 300);
//     }
//   }, [isOpen, showWelcome, messages.length]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   useEffect(() => {
//     if (isOpen && !isMinimized && inputRef.current) {
//       setTimeout(() => inputRef.current?.focus(), 100);
//     }
//   }, [isOpen, isMinimized]);

//   const handleBubbleClick = () => {
//     setIsOpen(true);
//     setIsMinimized(false);
//   };

//   const simulateStreaming = async (text: string) => {
//     setIsTyping(true);
//     await new Promise(resolve => setTimeout(resolve, 500));
//     setIsTyping(false);
    
//     for (let i = 0; i <= text.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 20));
//       setStreamingMessage(text.slice(0, i));
//     }
    
//     const newMessage = {
//       id: Date.now(),
//       type: 'bot' as const,
//       content: text,
//       timestamp: new Date()
//     };
    
//     setMessages(prev => [...prev, newMessage]);
//     setStreamingMessage('');
//   };

//   const handleSendMessage = async () => {
//     if (!inputValue.trim() || isTyping) return;

//     const userMessage = {
//       id: Date.now(),
//       type: 'user' as const,
//       content: inputValue,
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');

//     const input = inputValue.toLowerCase();
//     let response = "";

//     if (input.includes('giá') || input.includes('cost') || input.includes('phí')) {
//       response = "💰 Báo giá hệ thống điện mặt trời:\n\n🏠 Hộ gia đình (3-5kW): 45-75 triệu\n🏢 Doanh nghiệp (10-50kW): 150-750 triệu\n🏭 Công nghiệp (>50kW): Báo giá riêng\n\nGiá đã bao gồm thiết bị + lắp đặt. Bạn muốn tư vấn cụ thể cho ngôi nhà nào?";
//     } else if (input.includes('công suất') || input.includes('kw') || input.includes('điện')) {
//       response = "⚡ Cách tính công suất phù hợp:\n\n📊 Hóa đơn điện hàng tháng × 12 ÷ 1200 = kW cần thiết\n\nVí dụ: Hóa đơn 2 triệu/tháng → Cần hệ thống ~20kW\n\n🏠 Diện tích mái cần: 1kW = 6-8m²\n\nBạn có thể cho tôi biết hóa đơn điện hàng tháng để tính chính xác?";
//     } else if (input.includes('lắp đặt') || input.includes('thi công') || input.includes('setup')) {
//       response = "🔧 Quy trình lắp đặt chuyên nghiệp:\n\n1️⃣ Khảo sát mái nhà (Miễn phí)\n2️⃣ Thiết kế hệ thống 3D\n3️⃣ Báo giá chi tiết\n4️⃣ Thi công (2-5 ngày)\n5️⃣ Nghiệm thu & vận hành\n\n⏱️ Bảo hành 25 năm panel, 10 năm inverter\nBạn muốn đặt lịch khảo sát không?";
//     } else {
//       const responses = [
//         "☀️ Cảm ơn bạn! Năng lượng mặt trời là lựa chọn thông minh cho tương lai. Bạn muốn tìm hiểu thêm về điều gì?",
//         "🌱 Rất vui được tư vấn cho bạn! Với kinh nghiệm 10+ năm, chúng tôi cam kết chất lượng tốt nhất. Bạn có câu hỏi cụ thể nào?",
//         "⭐ Tôi hiểu! Hãy để tôi hỗ trợ bạn tìm giải pháp phù hợp nhất. Bạn có thể chia sẻ thêm chi tiết được không?"
//       ];
//       response = responses[Math.floor(Math.random() * responses.length)];
//     }
    
//     setTimeout(() => {
//       simulateStreaming(response);
//     }, 300);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const copyMessage = async (content: string, messageId: number) => {
//     try {
//       await navigator.clipboard.writeText(content);
//       setCopiedMessageId(messageId);
//       setTimeout(() => setCopiedMessageId(null), 2000);
//     } catch (err) {
//       console.error('Failed to copy message:', err);
//     }
//   };

//   const handleLike = (messageId: number) => {
//     setLikedMessages(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(messageId)) {
//         newSet.delete(messageId);
//       } else {
//         newSet.add(messageId);
//         setDislikedMessages(prevDislikes => {
//           const newDislikes = new Set(prevDislikes);
//           newDislikes.delete(messageId);
//           return newDislikes;
//         });
//       }
//       return newSet;
//     });
//   };

//   const handleDislike = (messageId: number) => {
//     setDislikedMessages(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(messageId)) {
//         newSet.delete(messageId);
//       } else {
//         newSet.add(messageId);
//         setLikedMessages(prevLikes => {
//           const newLikes = new Set(prevLikes);
//           newLikes.delete(messageId);
//           return newLikes;
//         });
//       }
//       return newSet;
//     });
//   };

//   const clearCurrentConversation = () => {
//     setMessages([]);
//     setShowWelcome(true);
//   };

//   return (
//     <>
//       {isClient && (
//         <>
//           {/* Minimal Chat Bubble - chỉ hiện khi chưa mở chat */}
//           {!isOpen && (
//             <div
//               className="fixed bottom-6 right-6 z-50 cursor-pointer group"
//               onClick={handleBubbleClick}
//             >
//               <div className="relative">
//                 {/* Simple hover glow */}
//                 <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                
//                 {/* Main button - giống ảnh bạn gửi */}
//                 <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 rounded-full px-5 py-3 shadow-lg transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
//                   <div className="flex items-center space-x-2">
//                     <MessageCircle className="w-5 h-5 text-white" />
//                     <span className="text-white font-medium text-sm">GPT Tư vấn</span>
//                   </div>
                  
//                   {/* Chấm xanh online */}
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white">
//                     <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Resizable Chat Window */}
//           {isOpen && (
//             <div className="fixed bottom-6 right-6 z-40">
//               <div 
//                 className={`bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative ${
//                   isMinimized ? 'h-14' : ''
//                 } ${isResizing ? 'transition-none' : 'transition-all duration-300'}`}
//                 style={{ 
//                   width: isMinimized ? '320px' : `${chatSize.width}px`,
//                   height: isMinimized ? '56px' : `${chatSize.height}px`
//                 }}
//               >
//                 {/* Resize handles - improved */}
//                 {!isMinimized && (
//                   <>
//                     {/* Corner resize handles - larger and smoother */}
//                     <div
//                       className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize hover:bg-purple-100/50 transition-colors z-10 rounded-tl-2xl"
//                       onMouseDown={(e) => handleMouseDown(e, 'nw')}
//                       title="Resize"
//                     />
//                     <div
//                       className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize hover:bg-purple-100/50 transition-colors z-10 rounded-tr-2xl"
//                       onMouseDown={(e) => handleMouseDown(e, 'ne')}
//                       title="Resize"
//                     />
//                     <div
//                       className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize hover:bg-purple-100/50 transition-colors z-10 rounded-bl-2xl"
//                       onMouseDown={(e) => handleMouseDown(e, 'sw')}
//                       title="Resize"
//                     />
//                     {/* Bottom-right corner với visual indicator tốt hơn */}
//                     <div
//                       className="absolute bottom-0 right-0 w-5 h-5 cursor-nw-resize group/resize z-10 rounded-br-2xl hover:bg-purple-50 transition-colors"
//                       onMouseDown={(e) => handleMouseDown(e, 'se')}
//                       title="Kéo để thay đổi kích thước"
//                     >
//                       <div className="absolute bottom-1 right-1 w-3 h-3 flex flex-col justify-end items-end space-y-0.5">
//                         <div className="flex space-x-0.5">
//                           <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
//                           <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
//                         </div>
//                         <div className="flex space-x-0.5">
//                           <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
//                           <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Edge resize handles - thinner and smoother */}
//                     <div
//                       className="absolute top-0 left-4 right-4 h-2 cursor-n-resize hover:bg-purple-100/30 transition-colors z-10"
//                       onMouseDown={(e) => handleMouseDown(e, 'n')}
//                     />
//                     <div
//                       className="absolute left-0 top-4 bottom-4 w-2 cursor-w-resize hover:bg-purple-100/30 transition-colors z-10"
//                       onMouseDown={(e) => handleMouseDown(e, 'w')}
//                     />
//                   </>
//                 )}
//                 {/* Simple Header */}
//                 <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2.5 flex items-center justify-between text-white">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Bot className="w-3 h-3 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-xs">GPT Tư vấn</h3>
//                       {!isMinimized && (
//                         <div className="flex items-center space-x-1 text-xs opacity-90">
//                           <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
//                           <span className="text-xs">Đang hoạt động</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="relative flex items-center space-x-1">
//                     <button
//                       onClick={() => setIsMinimized(!isMinimized)}
//                       className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
//                     </button>
                    
//                     {!isMinimized && (
//                       <button
//                         onClick={clearCurrentConversation}
//                         className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
//                       >
//                         <Trash2 className="w-3 h-3" />
//                       </button>
//                     )}
                    
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
//                     >
//                       <X className="w-3 h-3" />
//                     </button>
//                   </div>
//                 </div>

//                 {!isMinimized && (
//                   <>
//                     {/* Messages */}
//                     <div 
//                       className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
//                       onWheel={(e) => {
//                         e.stopPropagation();
//                       }}
//                     >
//                       {messages.map((message) => (
//                         <div
//                           key={message.id}
//                           className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} group`}
//                         >
//                           <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
//                             <div
//                               className={`p-3 rounded-xl shadow-sm transition-all duration-200 ${
//                                 message.type === 'user'
//                                   ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 text-gray-800'
//                                   : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 text-gray-800'
//                               }`}
//                             >
//                               <p className="text-sm leading-relaxed whitespace-pre-wrap">
//                                 {message.content}
//                               </p>
                              
//                               <div className="flex items-center justify-between mt-2">
//                                 <span className="text-xs text-gray-500">
//                                   {message.timestamp.toLocaleTimeString([], { 
//                                     hour: '2-digit', 
//                                     minute: '2-digit' 
//                                   })}
//                                 </span>

//                                 <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                                   <button
//                                     onClick={() => copyMessage(message.content, message.id)}
//                                     className="p-1 hover:bg-gray-200/70 rounded text-gray-400 hover:text-gray-600 transition-colors"
//                                   >
//                                     {copiedMessageId === message.id ? (
//                                       <Check className="w-3 h-3 text-green-500" />
//                                     ) : (
//                                       <Copy className="w-3 h-3" />
//                                     )}
//                                   </button>
                                  
//                                   {message.type === 'bot' && (
//                                     <>
//                                       <button
//                                         onClick={() => handleLike(message.id)}
//                                         className={`p-1 rounded transition-colors ${
//                                           likedMessages.has(message.id) 
//                                             ? 'text-green-500 bg-green-100' 
//                                             : 'text-gray-400 hover:text-green-500 hover:bg-gray-100'
//                                         }`}
//                                       >
//                                         <ThumbsUp className="w-3 h-3" />
//                                       </button>
                                      
//                                       <button
//                                         onClick={() => handleDislike(message.id)}
//                                         className={`p-1 rounded transition-colors ${
//                                           dislikedMessages.has(message.id) 
//                                             ? 'text-red-500 bg-red-100' 
//                                             : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
//                                         }`}
//                                       >
//                                         <ThumbsDown className="w-3 h-3" />
//                                       </button>
//                                     </>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}

//                       {/* Typing Indicator */}
//                       {isTyping && (
//                         <div className="flex justify-start">
//                           <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-3 rounded-xl shadow-sm">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-sm text-gray-600">Đang nhập...</span>
//                               <div className="flex space-x-1">
//                                 {[...Array(3)].map((_, i) => (
//                                   <div
//                                     key={i}
//                                     className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
//                                     style={{ animationDelay: `${i * 0.2}s` }}
//                                   />
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {/* Streaming Message */}
//                       {streamingMessage && (
//                         <div className="flex justify-start">
//                           <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-3 rounded-xl shadow-sm max-w-[80%]">
//                             <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
//                               {streamingMessage}
//                               <span className="animate-pulse text-green-500 ml-1">|</span>
//                             </p>
//                           </div>
//                         </div>
//                       )}

//                       <div ref={messagesEndRef} />
//                     </div>

//                     {/* Input Area */}
//                     <div className="border-t border-gray-200 bg-white p-4">
//                       <div className="flex items-end space-x-3">
//                         <div className="flex-1">
//                           <textarea
//                             ref={inputRef}
//                             value={inputValue}
//                             onChange={(e) => setInputValue(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                             placeholder="Nhập câu hỏi..."
//                             className="w-full resize-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-h-20"
//                             rows={1}
//                             disabled={isTyping}
//                           />
//                         </div>

//                         <button
//                           onClick={handleSendMessage}
//                           disabled={!inputValue.trim() || isTyping}
//                           className="p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
//                         >
//                           <Send className="w-4 h-4" />
//                         </button>
//                       </div>
                      
//                       <p className="text-xs text-gray-400 text-center mt-2">
//                         AI có thể có sai sót • Kiểm tra thông tin quan trọng
//                       </p>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           )}

//           <style jsx>{`
//             * {
//               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
//             }
//           `}</style>
//         </>
//       )}
//     </>
//   );
// }