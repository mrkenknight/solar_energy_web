// src/components/chatbot/conversationManager.ts

import { useState, useRef, useCallback } from 'react';
import { Message } from './types';

export interface ConversationState {
  messages: Message[];
  conversationId: string;
  isTyping: boolean;
  streamingMessage: string;
  showWelcome: boolean;
}

export function useConversationManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  
  // ✅ Thay đổi: Sử dụng useState thay vì useRef để trigger re-render
  const [conversationId, setConversationId] = useState<string>('');

  // Lấy conversation ID hiện tại
  const getCurrentConversationId = useCallback((): string => {
    return conversationId;
  }, [conversationId]);

  // Cập nhật conversation ID
  const updateConversationId = useCallback((newId: string) => {
    console.log('🔄 Conversation ID:', conversationId, '->', newId);
    setConversationId(newId);
  }, [conversationId]);

  // Thêm tin nhắn user
  const addUserMessage = useCallback((content: string): Message => {
    const userMessage: Message = {
      id: Date.now() + Math.random(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    return userMessage;
  }, []);

  // Thêm tin nhắn bot
  const addBotMessage = useCallback((content: string): Message => {
    const botMessage: Message = {
      id: Date.now() + Math.random(),
      type: 'bot',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    return botMessage;
  }, []);

  // Hiển thị welcome message
  const showWelcomeMessage = useCallback(() => {
    setIsTyping(true);
    setTimeout(() => {
      const welcomeMessage: Message = {
        id: 1,
        type: 'bot',
        content: 'Xin chào! ☀️ Tôi là trợ lý tư vấn năng lượng mặt trời. Tôi có thể giúp bạn:\n\n• Tư vấn hệ thống điện mặt trời\n• Tính toán công suất phù hợp\n• Báo giá và lắp đặt\n• Chính sách hỗ trợ\n\nBạn quan tâm đến vấn đề gì?',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setIsTyping(false);
      setShowWelcome(false);
    }, 1000);
  }, []);

  // 🚀 NEW: Real-time streaming (thay thế simulateStreaming)
  const startRealTimeStreaming = useCallback((onChunk: (chunk: string) => void): {
    complete: (fullMessage: string) => void;
    error: (errorMessage: string) => void;
  } => {
    setIsTyping(true);
    setStreamingMessage('');

    return {
      complete: (fullMessage: string) => {
        setIsTyping(false);
        setStreamingMessage('');
        addBotMessage(fullMessage);
      },
      error: (errorMessage: string) => {
        setIsTyping(false);
        setStreamingMessage('');
        addBotMessage(errorMessage);
      }
    };
  }, [addBotMessage]);

  // 🚀 NEW: Handle streaming chunk
  const handleStreamingChunk = useCallback((chunk: string) => {
    setStreamingMessage(prev => prev + chunk);
  }, []);

  // Simulate streaming effect (DEPRECATED - giữ lại cho compatibility)
  const simulateStreaming = useCallback(async (text: string): Promise<void> => {
    console.log('⚠️ Using deprecated simulateStreaming. Consider using real-time streaming.');
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsTyping(false);
    
    for (let i = 0; i <= text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 20));
      setStreamingMessage(text.slice(0, i));
    }
    
    addBotMessage(text);
    setStreamingMessage('');
  }, [addBotMessage]);

  // Clear conversation - chỉ clear UI state, không clear user session
  const clearConversation = useCallback(() => {
    console.log('🗑️ Clearing conversation (UI only)');
    setMessages([]);
    setShowWelcome(true);
    setStreamingMessage('');
    setIsTyping(false);
    setConversationId(''); // Reset conversation ID với useState
  }, []);

  // 🎯 NEW: Clear toàn bộ session (bao gồm user ID)
  const clearSession = useCallback(() => {
    console.log('🗑️ Clearing entire session');
    setMessages([]);
    setShowWelcome(true);
    setStreamingMessage('');
    setIsTyping(false);
    setConversationId('');
  }, []);

  return {
    // State
    messages,
    conversationId, // ✅ Giờ đây sẽ trigger re-render khi thay đổi
    isTyping,
    streamingMessage,
    showWelcome,

    // Actions
    addUserMessage,
    addBotMessage,
    showWelcomeMessage,
    simulateStreaming, // DEPRECATED
    startRealTimeStreaming, // 🚀 NEW
    handleStreamingChunk,   // 🚀 NEW
    clearConversation,
    clearSession, // 🎯 NEW
    updateConversationId,
    getCurrentConversationId,

    // Setters
    setIsTyping,
    setStreamingMessage,
    setShowWelcome
  };
}