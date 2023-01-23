import { PageContainer } from "@ant-design/pro-components";
import { Card } from "antd";
import { useModel } from '@umijs/max';
import React from "react";
import MenuCard from "@/components/Card/MenuCard";

const DashBoard: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  // const menuData = 
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            // backgroundImage:
            //   "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <MenuCard
              index={1}
              href="https://umijs.org/docs/introduce/introduce"
              title="Hồ sơ bệnh nhân"
              desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
            />
            <MenuCard
              index={2}
              title="Kết luận bệnh"
              href="https://ant.design"
              desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
            />
            <MenuCard
              index={3}
              title="Quản lý truy cập"
              href="https://procomponents.ant.design"
              desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
            />
            
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <MenuCard
              index={4}
              href="https://umijs.org/docs/introduce/introduce"
              title="Hồ sơ bệnh nhân"
              desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
            />
            <MenuCard
              index={5}
              title="Kết luận bệnh"
              href="https://ant.design"
              desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
            />
            <MenuCard
              index={6}
              title="Quản lý truy cập"
              href="https://procomponents.ant.design"
              desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
            />
            
          </div>
        </div>
      </Card>
    </PageContainer>
  );
}

export default DashBoard