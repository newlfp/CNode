import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import{Menu,Icon} from 'antd';

export default class Nav extends Component{
    render(){
        let {id,mode} = this.props;
        return(
            <Menu 
                mode={mode}
                    id={id}>
                <Menu.Item>
                    <Link to="/index"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book"><Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="about"><Icon type="info-circle-o" />关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}