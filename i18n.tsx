import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Locale = 'zh' | 'en';

interface Translations {
  nav: {
    download: string;
  };
  hero: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    downloadBtn: string;
    version: string;
    compatibility: string;
    lightweight: string;
  };
  features: {
    sectionTitle: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  footer: {
    rights: string;
    feedback: string;
    github: string;
    privacy: string;
  };
}

const translations: Record<Locale, Translations> = {
  zh: {
    nav: {
      download: '下载',
    },
    hero: {
      title: 'TransFlow',
      subtitle1: 'macOS 实时语音转录与翻译 App。',
      subtitle2: 'Apple Speech 原生驱动，性能与隐私双在线。',
      downloadBtn: '立即下载',
      version: 'v1.0.0',
      compatibility: '适用于 macOS Ventura+',
      lightweight: '体积不到 800KB，轻如蝉翼',
    },
    features: {
      sectionTitle: '核心功能',
      items: [
        {
          id: 'transcription',
          title: '🎙️ 实时语音转录',
          description: '基于 Apple Speech 框架，利用 Neural Engine 硬件加速，转录准确率高，适用于会议、讲座、对话等长时间音频场景。',
        },
        {
          id: 'translation',
          title: '🌐 实时翻译',
          description: '使用 Apple Translation 框架，转录结果实时翻译，支持 macOS 内置的所有语言。',
        },
        {
          id: 'capture',
          title: '🔊 应用音频捕获',
          description: '通过 ScreenCaptureKit 捕获其他应用的音频进行转录，轻松转录在线会议和视频。',
        },
        {
          id: 'privacy',
          title: '🔒 隐私优先',
          description: '语音识别与翻译完全在设备端运行（on-device），无需联网，保护您的每一句话。',
        },
        {
          id: 'history',
          title: '📜 历史记录',
          description: '自动保存转录会话，支持浏览、预览、重命名和删除历史记录。',
        },
        {
          id: 'export',
          title: '📤 导出支持',
          description: '支持导出为 SRT 字幕和 Markdown 格式，方便二次编辑与分享。',
        },
        {
          id: 'settings',
          title: '⚙️ 设置与定制',
          description: '配置语言偏好和外观模式（浅色/深色/跟随系统），打造专属体验。',
        },
        {
          id: 'lightweight',
          title: '🪶 轻量小巧',
          description: '应用体积不到 800KB，小而美，即装即用，极致节省磁盘空间。',
        },
      ],
    },
    footer: {
      rights: '© 2026 TransFlow. All rights reserved.',
      feedback: '反馈与 Issue',
      github: 'GitHub',
      privacy: '隐私政策',
    },
  },
  en: {
    nav: {
      download: 'Download',
    },
    hero: {
      title: 'TransFlow',
      subtitle1: 'Real-time speech transcription & translation for macOS.',
      subtitle2: 'Natively powered by Apple Speech — performance and privacy, both online.',
      downloadBtn: 'Download Now',
      version: 'v1.0.0',
      compatibility: 'Requires macOS Ventura+',
      lightweight: 'Less than 800KB, ultra lightweight',
    },
    features: {
      sectionTitle: 'Key Features',
      items: [
        {
          id: 'transcription',
          title: '🎙️ Real-time Transcription',
          description: 'Built on Apple Speech framework with Neural Engine hardware acceleration. High accuracy for meetings, lectures, conversations and more.',
        },
        {
          id: 'translation',
          title: '🌐 Real-time Translation',
          description: 'Powered by Apple Translation framework. Transcription results are translated in real-time, supporting all macOS built-in languages.',
        },
        {
          id: 'capture',
          title: '🔊 App Audio Capture',
          description: 'Capture audio from other apps via ScreenCaptureKit for transcription. Easily transcribe online meetings and videos.',
        },
        {
          id: 'privacy',
          title: '🔒 Privacy First',
          description: 'Speech recognition and translation run entirely on-device. No internet required — every word stays private.',
        },
        {
          id: 'history',
          title: '📜 Session History',
          description: 'Automatically saves transcription sessions. Browse, preview, rename and delete history records.',
        },
        {
          id: 'export',
          title: '📤 Export Support',
          description: 'Export as SRT subtitles or Markdown format for easy editing and sharing.',
        },
        {
          id: 'settings',
          title: '⚙️ Settings & Customization',
          description: 'Configure language preferences and appearance mode (light/dark/system) to personalize your experience.',
        },
        {
          id: 'lightweight',
          title: '🪶 Ultra Lightweight',
          description: 'App size under 800KB — small, beautiful, ready to use, saving maximum disk space.',
        },
      ],
    },
    footer: {
      rights: '© 2026 TransFlow. All rights reserved.',
      feedback: 'Feedback & Issues',
      github: 'GitHub',
      privacy: 'Privacy Policy',
    },
  },
};

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof navigator !== 'undefined') {
      return navigator.language.startsWith('zh') ? 'zh' : 'en';
    }
    return 'zh';
  });

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'zh' ? 'en' : 'zh'));
  }, []);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
