import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


ReactDOM.render(
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      U
    </Avatar>
    <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
  </>,
//   mountNode,
document.getElementById('container')
);
// export default TestingAvatar