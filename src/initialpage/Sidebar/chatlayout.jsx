/**
 * App Routes
 */

 import React, {useEffect,useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import chatService from "../../router_service/chatservice";

import Header from './header';
import Chatsidebar from './chatsidebar';


const chatlayout = (props) => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
		const { match } = props;
		return (
			<>
			 <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}>           
		  		<Header onMenuClick={(value) => toggleMobileMenu()} />
			
				<div>
					{chatService && chatService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<Chatsidebar/>
			</div>
			</>
		);
	
}
export default withRouter(chatlayout);