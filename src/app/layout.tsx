import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '统计与数据分析',
    template: '%s | 统计与数据分析',
  },
  description: '为人文社科领域的数据分析初学者量身打造的在线课程',
  keywords: ['统计学', '数据分析', 'Python', '人文社科', '数据科学'],
  authors: [{ name: '统计与数据分析课程' }],
  openGraph: {
    title: '统计与数据分析',
    description: '为人文社科领域的数据分析初学者量身打造的在线课程',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
