
import ArticleList from './ArticleList';
import { Pagination } from 'antd';
import './index.less'
type Article = {
  id: number,
  title: string,
  createTime: string,
  body: string
};

const list = [
  {
    id: 1,
    title: '231',
    createTime: '2016-2-8',
    body: '这是一段正文'
  },
  {
    id: 2,
    title: 'Commit message 和 Change log 编写指南',
    createTime: '2016-2-8',
    body: `前15分钟

    个人介绍, 什么时候接触的安卓开发, 实习能实习多久, 介绍一下项目
    你说你的软件出现了OOM, 你怎么解决的? 线上crash你是用了什么来分析的?
    这些项目都是怎么来的? 软件中这些内容都怎么来的? 你知道后端怎么来的吗? 后端是不是爬下来的? 每天有多少上传量呢?
    
    接下来15分钟
    
    进程和线程有啥区别呢? 为什么要定义出这样的概念来? 有什么用呢?
    哈希表是一个怎样的数据结构? 怎么避免hash碰撞? 容量有什么样的特点?
    数据库有了解吗? 索引了解吗? 怎么实现的快速查找? 快速查找的是什么东西?
    TCP协议如何确保稳定传输?
    说一下Activity的启动模式
    Handler有了解吗? 说一下原理? 你刚才说到Looper是个死循环, 那么messageQueue 没消息的时候那它不还是会循环占用CPU资源吗?
    我看你用过一些开源库比如说okhttp, 你能说一下原理吗? 分析一下 okhttp 自带的这些 InterceptorChain 是干啥的? 这些 Interceptor 的用途呢?
    
    然后12分钟
    你觉得有什么你擅长的但是我还没问的??
    
    那我讲一下屏幕怎么绘制view的吧
    为什么多次测量性能差了呢? Compose是怎么解决这些的?
    onMeasure里面有个东西叫MeasureSpec, 你说一下这是一个什么样的数据
    
    最后一道算法: 剑指 Offer 38. 字符串的排列 - 力扣（LeetCode） (leetcode-cn.com)
    
    
    作者：冬日毛毛雨
    链接：https://juejin.cn/post/6979882374725107720
    来源：掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`
  }
]
const Home = () => {
  const articles = list.map((article: Article) => {
    return <ArticleList id={article.id} title={article.title} body={article.body} createTime={article.createTime} />
  })
  return (
    <div id="content" className="index">
      <section id="posts" className="posts-expand">
        {articles}
      </section >
      <div className="page-block">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div >
  )
}
export default Home