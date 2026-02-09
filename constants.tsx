import React from 'react';
import { Feature } from './types';

export const COLORS = {
  primary: '#007AFF',
  success: '#4CAF50',
};

export const FEATURES: Feature[] = [
  {
    id: 'transcription',
    title: '🎙️ 实时语音转录',
    description: '基于 Apple Speech 框架，利用 Neural Engine 硬件加速，转录准确率高，适用于会议、讲座、对话等长时间音频场景。',
    icon: null, // Using emojis in titles as per request
  },
  {
    id: 'translation',
    title: '🌐 实时翻译',
    description: '使用 Apple Translation 框架，转录结果实时翻译，支持 macOS 内置的所有语言。',
    icon: null,
  },
  {
    id: 'capture',
    title: '🔊 应用音频捕获',
    description: '通过 ScreenCaptureKit 捕获其他应用的音频进行转录，轻松转录在线会议和视频。',
    icon: null,
  },
  {
    id: 'privacy',
    title: '🔒 隐私优先',
    description: '语音识别与翻译完全在设备端运行（on-device），无需联网，保护您的每一句话。',
    icon: null,
  },
  {
    id: 'history',
    title: '📜 历史记录',
    description: '自动保存转录会话，支持浏览、预览、重命名和删除历史记录。',
    icon: null,
  },
  {
    id: 'export',
    title: '📤 导出支持',
    description: '支持导出为 SRT 字幕和 Markdown 格式，方便二次编辑与分享。',
    icon: null,
  },
  {
    id: 'settings',
    title: '⚙️ 设置与定制',
    description: '配置语言偏好和外观模式（浅色/深色/跟随系统），打造专属体验。',
    icon: null,
  },
  {
    id: 'lightweight',
    title: '🪶 轻量小巧',
    description: '应用体积不到 900KB，小而美，即装即用，极致节省磁盘空间。',
    icon: null,
  },
];