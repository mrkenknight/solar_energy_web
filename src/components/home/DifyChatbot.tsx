// src/components/DifyChatbot.tsx
'use client';

import { useEffect } from 'react';

interface DifyChatbotProps {
  token: string;
  baseUrl?: string;
  // Các tùy chọn customization
  isDraggable?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  themeColor?: string;
  containerProps?: {
    className?: string;
    style?: React.CSSProperties;
  };
}

declare global {
  interface Window {
    difyChatbotConfig?: any;
  }
}

export default function DifyChatbot({
  token,
  baseUrl = 'https://api.dify.ai',
  isDraggable = false,
  position = 'bottom-right',
  themeColor = '#1C64F2',
  containerProps,
}: DifyChatbotProps) {
  useEffect(() => {
    // Cấu hình Dify chatbot
    window.difyChatbotConfig = {
      token,
      baseUrl,
      isDraggable,
      position,
      themeColor,
      containerProps,
    };

    // Tạo và load script
    const script = document.createElement('script');
    script.src = `${baseUrl}/embed.min.js`;
    script.defer = true;
    script.id = 'dify-chatbot-script';

    // Kiểm tra xem script đã load chưa
    const existingScript = document.getElementById('dify-chatbot-script');
    if (!existingScript) {
      document.body.appendChild(script);
    }

    // Cleanup khi component unmount
    return () => {
      const scriptElement = document.getElementById('dify-chatbot-script');
      if (scriptElement) {
        scriptElement.remove();
      }
      
      // Xóa chatbot elements nếu có
      const chatbotElements = document.querySelectorAll('[id*="dify"], [class*="dify"]');
      chatbotElements.forEach(el => el.remove());
    };
  }, [token, baseUrl, isDraggable, position, themeColor, containerProps]);

  return null; // Component này không render gì cả
}

// Component với custom styling example
export function CustomDifyChatbot({ token, baseUrl = 'https://api.dify.ai' }: { token: string; baseUrl?: string }) {
  return (
    <DifyChatbot
      token={token}
      baseUrl={baseUrl}
      isDraggable={true}
      position="bottom-right"
      themeColor="#8B5CF6" // Màu tím
      containerProps={{
        className: 'custom-dify-chat',
        style: {
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
          border: '2px solid #8B5CF6',
        }
      }}
    />
  );
}