import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Space,Row,Avatar } from "antd";
import "./main-layout.scss";
import { Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const { Header, Content } = Layout;

const contribs = ['Khalil Rached','Ghassen BouAziz','Lazher ben Hssine'] 

const MainLayout = (props) => {
  // const location = useLocation();
  const { children, defaultSelectedKeys = [] } = props;
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header className="main-header">
        <Link to={"/"} className="main-module-name">
          <span>Home</span>
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          items={[]}
          onClick={(e) => {
            navigate(`/`);
          }}
        />
      </Header>
      <Layout>
        <Sider width={'20vw'} style={{backgroundImage:'url("https://i.gifer.com/1x6b.gif")',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} />
        <Content>
          <div className="main-layout-content" id="main-layout-content-0">{children}</div>
        </Content>
      </Layout>
      <Footer style={{backgroundColor:'#e8e6e6'}} >
        <Row style={{paddingTop:'10px'}} justify={'center'}>
          <div style={{}}>Akatsuki</div>
        </Row>
        <Row style={{paddingTop:'10px'}} justify={'center'}>
          <div>copyright 2022</div>
        </Row>
      </Footer>
    </Layout>
  );
};

MainLayout.prototypes = {
  children: PropTypes.any,
  defaultSelectedKeys: PropTypes.array,
};

export default MainLayout;
