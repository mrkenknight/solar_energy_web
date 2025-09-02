// src/components/chatbot/difyApiService.ts

import { DifyConfig } from './types';

// Cấu hình Dify
const DIFY_CONFIG: DifyConfig = {
  apiUrl: 'https://api.dify.ai/v1',
  apiKey: 'app-lJLBpVNFB4mRsMiCVobGmEcF',
};

export interface DifyApiResponse {
  success: boolean;
  message: string;
  conversationId?: string;
  isNewConversation?: boolean;
}

// 🚀 NEW: Interface cho real-time streaming
export interface StreamingCallbacks {
  onStart?: () => void;
  onChunk?: (chunk: string) => void;
  onComplete?: (fullMessage: string, conversationId?: string) => void;
  onError?: (error: string) => void;
}

export class DifyApiService {
  private static instance: DifyApiService;
  private conversationCache = new Map<string, boolean>();
  private userId: string;
  
  private constructor() {
    this.userId = this.getOrCreateUserId();
  }
  
  public static getInstance(): DifyApiService {
    if (!DifyApiService.instance) {
      DifyApiService.instance = new DifyApiService();
    }
    return DifyApiService.instance;
  }

  private getOrCreateUserId(): string {
    try {
      const existingUserId = sessionStorage.getItem('chatbot_user_id');
      if (existingUserId) {
        console.log('📱 Retrieved existing user ID:', existingUserId);
        return existingUserId;
      }
    } catch (error) {
      console.warn('⚠️ SessionStorage not available');
    }

    const newUserId = 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    
    try {
      sessionStorage.setItem('chatbot_user_id', newUserId);
      console.log('💾 Created new user ID:', newUserId);
    } catch (error) {
      console.warn('⚠️ Could not store user ID');
    }
    
    return newUserId;
  }

  public getCurrentUserId(): string {
    return this.userId;
  }

  public resetUserId(): void {
    this.userId = this.getOrCreateUserId();
  }

  private validateConversationId(conversationId: string): boolean {
    return !!(conversationId && 
             typeof conversationId === 'string' && 
             conversationId.trim().length > 10 &&
             !conversationId.includes(' ') && 
             conversationId.match(/^[a-zA-Z0-9\-_]+$/));
  }

  // 🚀 NEW: Real-time streaming method
  public async sendMessageStreaming(
    message: string, 
    currentConversationId?: string,
    callbacks?: StreamingCallbacks
  ): Promise<DifyApiResponse> {
    
    console.log('🚀 === STREAMING API CALL ===');
    console.log('📝 Message:', message);
    console.log('🆔 Conversation ID:', currentConversationId || 'NEW');
    console.log('👤 User ID:', this.userId);

    const isNewConversation = !currentConversationId || 
                             !this.validateConversationId(currentConversationId);

    console.log('🎯 Mode:', isNewConversation ? 'NEW_CONVERSATION' : 'EXISTING_CONVERSATION');

    try {
      callbacks?.onStart?.();

      const requestBody = {
        inputs: {},
        query: message,
        response_mode: 'streaming',
        user: this.userId,
        files: [],
        ...(isNewConversation ? {} : { conversation_id: currentConversationId })
      };

      console.log('📦 Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`${DIFY_CONFIG.apiUrl}/chat-messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${DIFY_CONFIG.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('📊 Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error:', errorText);
        
        // Nếu conversation không tồn tại, thử tạo mới
        if (!isNewConversation && (
          errorText.includes('not_found') || 
          errorText.includes('Conversation Not Exists'))) {
          
          console.log('🔄 Retrying with new conversation...');
          this.conversationCache.delete(currentConversationId!);
          
          return this.sendMessageStreaming(message, undefined, callbacks);
        }
        
        const errorMsg = 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.';
        callbacks?.onError?.(errorMsg);
        return { success: false, message: errorMsg };
      }

      // 🚀 REAL-TIME STREAMING PROCESSING
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No readable stream');
      }

      const decoder = new TextDecoder();
      let fullMessage = '';
      let finalConversationId: string | undefined;
      let buffer = '';

      console.log('🔄 Starting real-time stream processing...');

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          console.log('✅ Stream completed');
          break;
        }

        // Decode chunk và thêm vào buffer
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Xử lý từng dòng trong buffer
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Giữ lại dòng cuối chưa hoàn chỉnh

        for (const line of lines) {
          if (line.trim() && line.startsWith('data: ')) {
            try {
              const jsonStr = line.replace('data: ', '').trim();
              
              if (jsonStr === '[DONE]') {
                console.log('🏁 Stream marked as done');
                continue;
              }
              
              const data = JSON.parse(jsonStr);
              
              // Lấy conversation_id
              if (data.conversation_id) {
                finalConversationId = data.conversation_id;
              }

              // 🚀 REAL-TIME: Stream answer chunks ngay lập tức
              if (data.event === 'message' && data.answer) {
                fullMessage += data.answer;
                
                // Gửi chunk ngay lập tức cho UI
                callbacks?.onChunk?.(data.answer);
                
                console.log(`📝 Streamed chunk (${data.answer.length} chars):`, 
                           data.answer.substring(0, 50) + '...');
              }
              
            } catch (parseError) {
              console.warn('⚠️ Parse error:', parseError);
            }
          }
        }
      }

      // Xử lý buffer còn lại
      if (buffer.trim()) {
        // Xử lý dòng cuối cùng nếu có
      }

      console.log('✅ === STREAMING COMPLETED ===');
      console.log('📏 Full message length:', fullMessage.length);
      console.log('🆔 Final conversation ID:', finalConversationId);

      // Cache conversation ID nếu có
      if (finalConversationId) {
        this.conversationCache.set(finalConversationId, true);
      }

      const result = {
        success: true,
        message: fullMessage || 'Xin lỗi, tôi không thể trả lời lúc này.',
        conversationId: finalConversationId,
        isNewConversation
      };

      callbacks?.onComplete?.(result.message, result.conversationId);
      return result;

    } catch (error) {
      console.error('💥 Streaming error:', error);
      
      const errorMsg = 'Xin lỗi, có lỗi mạng. Vui lòng thử lại.';
      callbacks?.onError?.(errorMsg);
      
      return { success: false, message: errorMsg };
    }
  }

  // 🗑️ DEPRECATED: Giữ lại method cũ cho backward compatibility
  public async sendMessage(message: string, currentConversationId?: string): Promise<DifyApiResponse> {
    console.log('⚠️ Using deprecated sendMessage method. Consider using sendMessageStreaming for better performance.');
    
    return new Promise((resolve) => {
      this.sendMessageStreaming(message, currentConversationId, {
        onComplete: (fullMessage, conversationId) => {
          resolve({
            success: true,
            message: fullMessage,
            conversationId,
            isNewConversation: !currentConversationId
          });
        },
        onError: (error) => {
          resolve({
            success: false,
            message: error
          });
        }
      });
    });
  }

  public clearConversationCache(): void {
    this.conversationCache.clear();
  }

  public getConversationCache(): Map<string, boolean> {
    return new Map(this.conversationCache);
  }

  public clearSession(): void {
    this.conversationCache.clear();
    
    try {
      sessionStorage.removeItem('chatbot_user_id');
    } catch (error) {
      console.warn('⚠️ Could not clear sessionStorage');
    }
    
    this.userId = this.getOrCreateUserId();
    console.log('🔄 Session cleared, new user ID:', this.userId);
  }
}