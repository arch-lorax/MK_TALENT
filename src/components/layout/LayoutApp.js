import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import TvIcon from '@mui/icons-material/Tv';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RightSideBarUserCard from './RightSideBarUserCard';
import UserStatus from './userStatusBar';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { changeLight } from '../../redux/counter/mode';
import { DarkMode } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';

const { Header, Sider,Footer, Content } = Layout;

const LayoutApp =()=> {
  const dispatch = useDispatch()
  const [collapsed,setCollapsed]=useState(false)
  const [windowWidth,setWindowWidth]=useState("")
  const light = useSelector(state=>state.mode.light)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
        }

     window.addEventListener('resize', handleResize)
  },[windowWidth]) 

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  console.log(windowWidth)
 
    return (
      <LayoutStyle >
         <Layout className=' bg-green-500' style={{minHeight:"100vh"}}>
        <Sider breakpoint="lg" width={300} style={{backgroundColor:light?"#F0F2F5":"#001529",
                                                   borderRight:!light&&"1px solid #00417e",
                                                   minHeight:"100vh",
                                                   position: "fixed",
                                                   }}  trigger={null} collapsible collapsed={windowWidth<1370?true:collapsed}>
          <div >
          <div className={`flex ${collapsed||windowWidth<1370?"h-[67px]":"h-60"} justify-center items-center bg-[#001529]   border-solid border-red-700 `}  >
           
            <h1 className='text-white'>Logo</h1>
          </div>
          <Menu theme={!light&&"dark"} style={{backgroundColor:light&&"#F0F2F5"}}  mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Video
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              People
            </Menu.Item>
            <Menu.Item key="4" icon={<TvIcon/>}>
              Advert
            </Menu.Item>
            <Menu.Item key="5" icon={<FestivalOutlinedIcon />}>
              Event
            </Menu.Item>
            
            <Menu.Item key="6" icon={<WorkOutlineOutlinedIcon />}>
              
            <Link to={"ooo"}>Job</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<StickyNote2OutlinedIcon />}>
              Blog
            </Menu.Item>
            <Menu.Item key="8" icon={<EmojiEventsOutlinedIcon />}>
              Reward
            </Menu.Item>
          </Menu>
        
          </div>
          </Sider>
        <Layout className="site-layout" style={{marginLeft:windowWidth<1370?80:300}}>
          <Header style={{backgroundColor:!light && "#001529",borderBottom:!light&&"1px solid #00417e",position:"sticky",top:0}}  className="site-layout-background p-0 m-0" >
             <div className='flex  justify-between '>
                 <div>
                 {windowWidth<1370?"":collapsed?<MenuUnfoldOutlined style={{color:!light && "white",
                                                         padding:" 0 24px",
                                                         fontSize: "18px",
                                                         lineHeight: "64px",
                                                         cursor: "pointer",
                                                         transition: "color 0.3s"
                                                         }}  className='  ' onClick={toggle}/>:
                           <MenuFoldOutlined style={{color:!light && "white",
                                                    padding:" 0 24px",
                                                    fontSize: "18px",
                                                    lineHeight: "64px",
                                                    cursor: "pointer",
                                                    transition: "color 0.3s"
                                                    }} className='trigger' onClick={toggle} />}
                 
                 </div>
                 <div className={`${light?"navbar-a":"navbar-a dark__navbar_a"} flex  mx-8 `}>
                   <NavLink  to={'/ww'}>ABOUT US</NavLink>
                   <NavLink to={'/ee'}>CONTACT</NavLink>
                   <NavLink to={'/ll'}>LOGIN</NavLink>
                   <NavLink to={'/pp'}>REGISTER</NavLink>
                   {light?
     <Button onClick={()=>dispatch(changeLight())}  style={{width:"50px",backgroundColor:"#1E293B"}} variant="" ><DarkMode style={{color:"white"}}/> </Button> 

      :
      <Button onClick={()=>dispatch(changeLight())}  style={{width:"50px",backgroundColor:"#1E293B"}} variant="" ><LightModeIcon style={{color:"white"}}/> </Button> 

    }
                 </div>
                   
              </div>            
          </Header>
          <Layout>
          <Content
            className={`${!light ? "bg-[#001529]":"bg-[#fbfbfb]"}`}
            style={{
              padding: '0 16px',
              minHeight: 280,
            }}
          >
            <UserStatus/>
            <UserStatus/>
            <UserStatus/>

          </Content>
          
          </Layout>
          
        </Layout>
      </Layout> 
    </LayoutStyle>
    );
  
}



const LayoutStyle = styled.div`
   .navbar-a{
    
    height: 61px;
   }
   .navbar-a a{
     color: black;
     padding: 0 14px;
     border-bottom:3px solid white ;
     
   }
   .dark__navbar_a a{
    color: white;
    border-bottom:3px solid #001529 ;

   }
  
   .navbar-a .active{
    background-color: #E6F7FF;
     border-bottom:3px solid #1890FF ;
     
   }
   .navbar-a a:hover{
     color:#1890FF;
     
   }
   .dark__navbar_a .active{
     background-color: #1890FF;
   }
   .dark__navbar_a .active:hover{
     color: white;
   }
   
`;


export default LayoutApp




 