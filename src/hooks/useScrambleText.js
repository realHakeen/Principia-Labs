import { useState, useEffect } from 'react';

// Hook: "Text Scramble" (文字解码/乱码特效)
// 模拟黑客终端解密的效果，用于标题悬停
const useScrambleText = (text, active = true) => {
  const [displayText, setDisplayText] = useState(text);
  // 优化字符集：去掉宽度差异过大的特殊符号，保留大写字母和数字，视觉更统一
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  useEffect(() => {
    if (!active) {
        setDisplayText(text); // Reset immediately if not active
        return;
    }
    
    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            // 关键修复：如果原文是空格，保持空格不变。
            // 这样可以保留单词间距，极大减少页面跳动。
            if (letter === ' ') return ' ';
            
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Speed of decoding
    }, 30);

    return () => clearInterval(interval);
  }, [text, active]);

  return displayText;
};

export default useScrambleText;
