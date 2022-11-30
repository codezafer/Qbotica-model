/**
 * App Routes
 */
 import React, {useEffect,useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import settingservice from "../../router_service/settingservice";

import Header from './header';
import SettingsSidebar from './settingsidebar';

const SettingsLayout = (props) => {

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
					{settingservice && settingservice.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SettingsSidebar/>
				</div>
			</>
		);
	
}
export default withRouter(SettingsLayout);