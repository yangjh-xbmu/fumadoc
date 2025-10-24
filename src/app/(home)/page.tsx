import Link from 'next/link';
import { BookOpen, BarChart3, TrendingUp, Users, ArrowRight, Download, Github } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            统计与数据分析
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            为人文社科领域的数据分析初学者量身打造的在线课程。从Python编程基础到统计分析实践，助您掌握数据驱动的研究方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              开始学习 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/docs/python-basics" 
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Python基础 <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            课程特色
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">零基础友好</h3>
              <p className="text-gray-600">
                专为文科背景学生设计，从最基础的概念开始，循序渐进地引导学习
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">实践导向</h3>
              <p className="text-gray-600">
                结合Python编程和统计分析，通过实际案例学习数据处理和可视化技能
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">数据思维</h3>
              <p className="text-gray-600">
                培养数据分析思维，学会从数据中提取有意义的信息和洞察
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            学习路径
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">01</div>
              <h3 className="text-lg font-semibold mb-2">明确分析目标</h3>
              <p className="text-gray-600 text-sm">学习如何定义数据分析问题和目标</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">02</div>
              <h3 className="text-lg font-semibold mb-2">数据收集</h3>
              <p className="text-gray-600 text-sm">掌握各种数据源的获取和采集方法</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">03</div>
              <h3 className="text-lg font-semibold mb-2">数据清洗与转换</h3>
              <p className="text-gray-600 text-sm">学习处理缺失值、异常值和数据格式转换</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">04</div>
              <h3 className="text-lg font-semibold mb-2">分析与报告</h3>
              <p className="text-gray-600 text-sm">进行统计分析并制作专业的数据报告</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            开始您的数据分析学习之旅
          </h2>
          <p className="text-xl mb-8 opacity-90">
            加入我们，掌握数据驱动的研究方法，为您的学术和职业生涯增添新的技能
          </p>
          <Link 
            href="/docs" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            立即开始学习 <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">统计与数据分析</h3>
              <p className="text-gray-400">
                专为人文社科学生设计的数据分析入门课程
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition-colors">课程内容</Link></li>
                <li><Link href="/docs/python-basics" className="hover:text-white transition-colors">Python基础</Link></li>
                <li><Link href="/docs/statistics" className="hover:text-white transition-colors">统计学概念</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <p className="text-gray-400">
                网站：fuma.yangzh.cn
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 统计与数据分析课程. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
