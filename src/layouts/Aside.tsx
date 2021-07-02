import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import style from './Aside.less';
import './Aside.less'

type Props = {

};
const Aside = (props: Props) => {
  return (
    <Fragment>
      <div className="header-inner">
        <div className="site-brand-wrapper">
          <div className="site-meta">
            <div className="site-title">
              <a href="/" className="brand" rel="start">zone_98f Blogs</a>
            </div>
            {/* <h1 className="site-subtitle">zone_98f@qq.com</h1> */}
          </div>
        </div>

        <nav className="site-nav">
          <ul id="menu" className="menu">
            <li className="menu-item menu-item-active">
              <Link to="/">
                {/* <svg className="icon" aria-hidden="true">
                  <use xlink:href="#iconzhuye" />
                </svg>&nbsp;&nbsp;我的主页 */}
                我的主页
              </Link>
            </li>

            <li className="menu-item menu-item-categories">
              <Link to="/categories">
                {/* <svg className="icon" aria-hidden="true">
                  <use xlink:href="#iconlabel" />
                </svg>&nbsp;&nbsp;标签分类 */}
                标签分类
              </Link>
            </li>

            <li className="menu-item menu-item-archives">
              <Link to="/archives">
                {/* <svg className="icon" aria-hidden="true">
                  <use xlink:href="#iconguidang" />
                </svg>&nbsp;&nbsp;博客归档 */}
                博客归档
              </Link>
            </li>

            <li className="menu-item menu-item-about">
              <Link to="/about">
                {/* <svg className="icon" aria-hidden="true">
                  <use xlink:href="#iconguanyu" />
                </svg>&nbsp;&nbsp;关于博客 */}
                关于博客
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="sidebar-inner">
        <div className="site-overview">
          <img className="site-author-image" :src="require('~/assets/image/avatar.gif')" />
          <p className="site-author-name">zone_98f</p>
          <p className="site-description motion-element"></p>
          <nav className="site-state motion-element">
            <div className="site-state-item site-state-posts">
              <Link to="/archives">
                <span className="site-state-item-count">{{ artLen }}</span>
                <span className="site-state-item-name">日志</span>
              </Link>
            </div>

            <div className="site-state-item site-state-tags">
              <Link to="/categories">
                <span className="site-state-item-count">{{ tagLen }}</span>
                <span className="site-state-item-name">标签</span>
              </Link>
            </div>
          </nav>
        </div>
      </div> */}
    </Fragment>
  );
};
export default Aside