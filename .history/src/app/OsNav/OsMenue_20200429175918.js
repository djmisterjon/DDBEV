import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Dropdown, Menu } from 'antd';
import { Typography } from 'antd';

const menu_file = (
	<Menu>
		<Menu.Item key='0'>
			<a href='http://www.alipay.com/'>1st menu item</a>
		</Menu.Item>
		<Menu.Item key='1'>
			<a href='http://www.taobao.com/'>2nd menu item</a>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key='3'>3rd menu item</Menu.Item>
	</Menu>
);
const { Text } = Typography;
const OsMenue = () => {
	const underline = { textDecoration: 'underline' };

	return (
		<Box className='OsMenue' display='flex'>
			<Dropdown overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>Ant Design</Text>
				<>
					<b style={underline}>F</b>ile
				</>
			</Dropdown>

			<Box px={1}>
				<b style={underline}>F</b>ile
			</Box>
			<Box px={1}>
				<b style={underline}>E</b>dition
			</Box>
			<Box px={1}>
				<b style={underline}>N</b>avigate
			</Box>
			<Box px={1}>
				<b style={underline}>V</b>iew
			</Box>
			<Box px={1}>
				<b style={underline}>W</b>indow
			</Box>
			<Box px={1}>
				<b style={underline}>H</b>elp
			</Box>
		</Box>
	);
};

export default view(OsMenue);
