'use client';

import React from 'react';
import { 
  X, 
  Send, 
  Copy, 
  Check,
  Minimize2,
  Maximize2,
  Trash2,
  Bot,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { useChatbot } from './useChatbot';

// Kodee Icon Component - Import SVG file
const KodeeIcon = ({ className = "w-30 h-30" }: { className?: string }) => (
  <img 
    src="/logo_ai.svg" 
    alt="Logo AI" 
    className={className}
    style={{ filter: 'none' }} // Giữ nguyên màu gốc
  />
);

export default function ChatWidget() {
  const {
    // State
    isOpen,
    isMinimized,
    messages,
    inputValue,
    isTyping,
    streamingMessage,
    isClient,
    copiedMessageId,
    likedMessages,
    dislikedMessages,
    chatSize,
    isResizing,
    
    // Refs
    messagesEndRef,
    inputRef,
    
    // Setters
    setIsOpen,
    setIsMinimized,
    setInputValue,
    
    // Handlers
    handleSendMessage,
    handleKeyPress,
    handleBubbleClick,
    copyMessage,
    handleLike,
    handleDislike,
    clearCurrentConversation,
    handleMouseDown,
  } = useChatbot();

  // Enhanced send message handler with auto-focus
  const handleSendMessageWithFocus = async () => {
    await handleSendMessage();
    // Auto focus back to input after sending message
    setTimeout(() => {
      if (inputRef.current && !isTyping) {
        inputRef.current.focus();
      }
    }, 100);
  };

  // Enhanced key press handler
  const handleKeyPressWithFocus = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessageWithFocus();
    }
  };

  // Auto focus when chat opens or minimized state changes
  React.useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300); // Small delay to ensure smooth animation
    }
  }, [isOpen, isMinimized]);

  // Auto focus after typing ends
  React.useEffect(() => {
    if (!isTyping && isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500); // Wait for bot to finish typing
    }
  }, [isTyping, isOpen, isMinimized]);

  return (
    <>
      {isClient && (
        <>
          {/* Chat Bubble */}
          {!isOpen && (
            <div
              className="fixed bottom-6 right-6 z-50 cursor-pointer group"
              onClick={handleBubbleClick}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                
                <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 rounded-full px-5 py-3 shadow-lg transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center space-x-2">
                    <KodeeIcon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm">GPT Tư Vấn</span>
                  </div>
                  
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white">
                    <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Window */}
          {isOpen && (
            <div className="fixed bottom-6 right-6 z-40">
              <div 
                className={`bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative ${
                  isMinimized ? 'h-14' : ''
                } ${isResizing ? 'transition-none' : 'transition-all duration-300'}`}
                style={{ 
                  width: isMinimized ? '320px' : `${chatSize.width}px`,
                  height: isMinimized ? '56px' : `${chatSize.height}px`
                }}
              >
                {/* Resize handles */}
                {!isMinimized && (
                  <>
                    <div
                      className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize hover:bg-purple-100/50 transition-colors z-10 rounded-tl-2xl"
                      onMouseDown={(e) => handleMouseDown(e, 'nw')}
                      title="Resize"
                    />
                    <div
                      className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize hover:bg-purple-100/50 transition-colors z-10 rounded-tr-2xl"
                      onMouseDown={(e) => handleMouseDown(e, 'ne')}
                      title="Resize"
                    />
                    <div
                      className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize hover:bg-purple-100/50 transition-colors z-10 rounded-bl-2xl"
                      onMouseDown={(e) => handleMouseDown(e, 'sw')}
                      title="Resize"
                    />
                    <div
                      className="absolute bottom-0 right-0 w-5 h-5 cursor-nw-resize group/resize z-10 rounded-br-2xl hover:bg-purple-50 transition-colors"
                      onMouseDown={(e) => handleMouseDown(e, 'se')}
                      title="Kéo để thay đổi kích thước"
                    >
                      <div className="absolute bottom-1 right-1 w-3 h-3 flex flex-col justify-end items-end space-y-0.5">
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
                          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
                        </div>
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
                          <div className="w-0.5 h-0.5 bg-gray-400 rounded-full group-hover/resize:bg-purple-500 transition-colors"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div
                      className="absolute top-0 left-4 right-4 h-2 cursor-n-resize hover:bg-purple-100/30 transition-colors z-10"
                      onMouseDown={(e) => handleMouseDown(e, 'n')}
                    />
                    <div
                      className="absolute left-0 top-4 bottom-4 w-2 cursor-w-resize hover:bg-purple-100/30 transition-colors z-10"
                      onMouseDown={(e) => handleMouseDown(e, 'w')}
                    />
                  </>
                )}

                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2.5 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <KodeeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xs">GPT Tư Vấn</h3>
                      {!isMinimized && (
                        <div className="flex items-center space-x-1 text-xs opacity-90">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-xs">Đang hoạt động</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-1">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                    </button>
                    
                    {!isMinimized && (
                      <button
                        onClick={clearCurrentConversation}
                        className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                    
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {!isMinimized && (
                  <>
                    {/* Messages */}
                    <div 
                      className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
                      onWheel={(e) => e.stopPropagation()}
                    >
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} group`}
                        >
                          <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                            <div
                              className={`p-3 rounded-xl shadow-sm transition-all duration-200 ${
                                message.type === 'user'
                                  ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 text-gray-800'
                                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 text-gray-800'
                              }`}
                            >
                              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                {message.content}
                              </p>
                              
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-gray-500">
                                  {message.timestamp.toLocaleTimeString([], { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </span>

                                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={() => copyMessage(message.content, message.id)}
                                    className="p-1 hover:bg-gray-200/70 rounded text-gray-400 hover:text-gray-600 transition-colors"
                                  >
                                    {copiedMessageId === message.id ? (
                                      <Check className="w-3 h-3 text-green-500" />
                                    ) : (
                                      <Copy className="w-3 h-3" />
                                    )}
                                  </button>
                                  
                                  {message.type === 'bot' && (
                                    <>
                                      <button
                                        onClick={() => handleLike(message.id)}
                                        className={`p-1 rounded transition-colors ${
                                          likedMessages.has(message.id) 
                                            ? 'text-green-500 bg-green-100' 
                                            : 'text-gray-400 hover:text-green-500 hover:bg-gray-100'
                                        }`}
                                      >
                                        <ThumbsUp className="w-3 h-3" />
                                      </button>
                                      
                                      <button
                                        onClick={() => handleDislike(message.id)}
                                        className={`p-1 rounded transition-colors ${
                                          dislikedMessages.has(message.id) 
                                            ? 'text-red-500 bg-red-100' 
                                            : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
                                        }`}
                                      >
                                        <ThumbsDown className="w-3 h-3" />
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-3 rounded-xl shadow-sm">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Đang nhập...</span>
                              <div className="flex space-x-1">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Streaming Message */}
                      {streamingMessage && (
                        <div className="flex justify-start">
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-3 rounded-xl shadow-sm max-w-[80%]">
                            <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
                              {streamingMessage}
                              <span className="animate-pulse text-green-500 ml-1">|</span>
                            </p>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-gray-200 bg-white p-4">
                      <div className="flex items-end space-x-3">
                        <div className="flex-1">
                          <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPressWithFocus}
                            placeholder="Nhập câu hỏi..."
                            className="w-full resize-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-h-20"
                            rows={1}
                            disabled={isTyping}
                            autoFocus
                          />
                        </div>

                        <button
                          onClick={handleSendMessageWithFocus}
                          disabled={!inputValue.trim() || isTyping}
                          className="p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-400 text-center mt-2">
                        AI có thể có sai sót • Kiểm tra thông tin quan trọng
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <style jsx>{`
            * {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            }
          `}</style>
        </>
      )}
    </>
  );
}