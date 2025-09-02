'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChatSize } from './types';
import { useConversationManager } from './conversationManager';
import { DifyApiService } from './difyApiService';

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
  const [likedMessages, setLikedMessages] = useState(new Set<number>());
  const [dislikedMessages, setDislikedMessages] = useState(new Set<number>());
  const [chatSize, setChatSize] = useState<ChatSize>({ width: 384, height: 500 });
  const [isResizing, setIsResizing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Sử dụng conversation manager và Dify service
  const conversationManager = useConversationManager();
  const difyService = DifyApiService.getInstance();

  // Debug conversation manager state changes
  useEffect(() => {
    console.log('🔍 === CONVERSATION STATE ===');
    console.log('ConversationID:', conversationManager.conversationId);
    console.log('Messages count:', conversationManager.messages.length);
    console.log('Show welcome:', conversationManager.showWelcome);
    console.log('Is typing:', conversationManager.isTyping);
    console.log('===============================');
  }, [
    conversationManager.conversationId,
    conversationManager.messages.length,
    conversationManager.isTyping,
    conversationManager.showWelcome
  ]);

  // Client initialization
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Welcome message khi mở chat
  useEffect(() => {
    if (isOpen && conversationManager.showWelcome && conversationManager.messages.length === 0) {
      setTimeout(() => {
        conversationManager.showWelcomeMessage();
      }, 300);
    }
  }, [isOpen, conversationManager.showWelcome, conversationManager.messages.length, conversationManager.showWelcomeMessage]);

  // Scroll to bottom when new messages
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [conversationManager.messages, conversationManager.isTyping, conversationManager.streamingMessage, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // 🚀 OPTIMIZED: Real-time streaming message handler
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || conversationManager.isTyping) {
      console.log('⚠️ Message blocked:', {
        isEmpty: !inputValue.trim(),
        isTyping: conversationManager.isTyping
      });
      return;
    }

    // Lưu input và clear field
    const currentInput = inputValue;
    setInputValue('');
    
    console.log('🚀 === REAL-TIME SEND MESSAGE ===');
    console.log('📝 Input:', currentInput);
    console.log('⏰ Start time:', new Date().toISOString());
    
    // Thêm tin nhắn user
    conversationManager.addUserMessage(currentInput);

    // Lấy conversation ID
    const currentConversationId = conversationManager.conversationId;
    
    console.log('🆔 Using conversation ID:', currentConversationId || 'NEW');
    console.log('👤 User ID:', difyService.getCurrentUserId());

    try {
      // 🚀 Setup real-time streaming callbacks
      const streamingCallbacks = conversationManager.startRealTimeStreaming();

      console.log('🎯 Starting real-time streaming...');

      // 🚀 Call optimized streaming API
      await difyService.sendMessageStreaming(
        currentInput, 
        currentConversationId,
        {
          onStart: () => {
            console.log('▶️ Stream started');
          },
          
          onChunk: (chunk: string) => {
            // Real-time chunk processing - cực nhanh!
            conversationManager.handleStreamingChunk(chunk);
          },
          
          onComplete: (fullMessage: string, conversationId?: string) => {
            console.log('✅ Stream completed');
            console.log('📏 Final message length:', fullMessage.length);
            console.log('🆔 Final conversation ID:', conversationId);
            console.log('⏰ End time:', new Date().toISOString());
            
            // Update conversation ID if needed
            if (conversationId && conversationId !== currentConversationId) {
              console.log('🔄 Updating conversation ID:', conversationId);
              conversationManager.updateConversationId(conversationId);
            }
            
            streamingCallbacks.complete(fullMessage);
          },
          
          onError: (error: string) => {
            console.error('❌ Streaming error:', error);
            streamingCallbacks.error(error);
          }
        }
      );

      console.log('🎯 Streaming initiated successfully');
      
    } catch (error) {
      console.error('💥 === SEND MESSAGE ERROR ===');
      console.error('Error:', error);
      
      // Fallback error handling
      setTimeout(() => {
        conversationManager.simulateStreaming('Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.');
      }, 300);
    }
  }, [inputValue, conversationManager, difyService]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBubbleClick = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const copyMessage = async (content: string, messageId: number) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy message:', err);
    }
  };

  const handleLike = (messageId: number) => {
    setLikedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
        setDislikedMessages(prevDislikes => {
          const newDislikes = new Set(prevDislikes);
          newDislikes.delete(messageId);
          return newDislikes;
        });
      }
      return newSet;
    });
  };

  const handleDislike = (messageId: number) => {
    setDislikedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
        setLikedMessages(prevLikes => {
          const newLikes = new Set(prevLikes);
          newLikes.delete(messageId);
          return newLikes;
        });
      }
      return newSet;
    });
  };

  // Clear conversation với session options
  const clearCurrentConversation = useCallback(() => {
    console.log('🗑️ === CLEARING CONVERSATION ===');
    console.log('Before clear - ConversationId:', conversationManager.conversationId);
    console.log('Current User ID:', difyService.getCurrentUserId());
    
    conversationManager.clearConversation();
    setLikedMessages(new Set());
    setDislikedMessages(new Set());
    
    difyService.clearConversationCache();
    
    console.log('🗑️ Conversation cleared (user ID preserved)');
  }, [conversationManager, difyService]);

  // Clear toàn bộ session
  const clearEntireSession = useCallback(() => {
    console.log('🗑️ === CLEARING ENTIRE SESSION ===');
    
    conversationManager.clearSession();
    setLikedMessages(new Set());
    setDislikedMessages(new Set());
    
    difyService.clearSession();
    
    console.log('🗑️ Entire session cleared');
  }, [conversationManager, difyService]);

  // Debug utilities
  const debugConversationState = useCallback(() => {
    console.log('🔍 === DEBUG CONVERSATION STATE ===');
    console.log('Conversation ID:', conversationManager.conversationId);
    console.log('User ID:', difyService.getCurrentUserId());
    console.log('Messages:', conversationManager.messages);
    console.log('Cache:', difyService.getConversationCache());
    console.log('=====================================');
  }, [conversationManager.conversationId, conversationManager.messages, difyService]);

  // Expose debug functions (development only)
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).debugChatbot = {
        state: debugConversationState,
        clearCache: () => difyService.clearConversationCache(),
        getCache: () => difyService.getConversationCache(),
        getUserId: () => difyService.getCurrentUserId(),
        clearSession: clearEntireSession,
        testRealTimeStream: () => {
          console.log('🧪 Testing real-time stream...');
          handleSendMessage();
        }
      };
    }
  }, [clearEntireSession, debugConversationState, difyService, handleSendMessage]);

  // Resize functionality
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = chatSize.width;
    const startHeight = chatSize.height;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      requestAnimationFrame(() => {
        const deltaX = startX - moveEvent.clientX;
        const deltaY = startY - moveEvent.clientY;
        
        let newWidth = startWidth;
        let newHeight = startHeight;
        
        if (direction.includes('w')) newWidth += deltaX;
        if (direction.includes('n')) newHeight += deltaY;
        
        newWidth = Math.max(300, Math.min(700, newWidth));
        newHeight = Math.max(400, Math.min(800, newHeight));
        
        setChatSize({ width: newWidth, height: newHeight });
      });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    document.body.style.userSelect = 'none';
    document.body.style.cursor = direction.includes('n') && direction.includes('w') ? 'nw-resize' : 
                                  direction.includes('n') && direction.includes('e') ? 'ne-resize' :
                                  direction.includes('s') && direction.includes('w') ? 'sw-resize' :
                                  direction.includes('s') && direction.includes('e') ? 'se-resize' :
                                  direction.includes('n') ? 'n-resize' :
                                  direction.includes('w') ? 'w-resize' : 'default';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return {
    // State từ conversation manager
    messages: conversationManager.messages,
    isTyping: conversationManager.isTyping,
    streamingMessage: conversationManager.streamingMessage,
    
    // State riêng của chatbot
    isOpen,
    isMinimized,
    inputValue,
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
  };
}