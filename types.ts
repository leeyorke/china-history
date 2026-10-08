export interface Emperor {
  id: string;
  templeName: string; // 庙号 e.g., 太祖
  name: string;      // 姓名 e.g., 朱元璋
  reignStart: number | string; // In years, negative for BC
  reignEnd: number | string;
  eraName?: string;  // 年号
  description?: string; // Short impact summary
}

export interface Dynasty {
  id: string;
  name: string;       // 朝代名 e.g., 唐
  period: string;     // e.g., 618 - 907
  startYear: number;  // For sorting/positioning
  endYear: number;
  capital: string;    // 都城
  summary: string;    // 史学综述
  emperors: Emperor[]; // Major emperors
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
