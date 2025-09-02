export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatSize {
  width: number;
  height: number;
}

export interface DifyConfig {
  apiUrl: string;
  apiKey: string;
  conversationId?: string;
}

export interface DifyMessage {
  answer: string;
  conversation_id: string;
  message_id: string;
}

export interface DifyResponse {
  event: string;
  message_id: string;
  conversation_id: string;
  answer?: string;
}