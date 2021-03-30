import React, {useState} from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import {WiDayCloudy} from "react-icons/wi";
import {IoIosRocket} from "react-icons/io";

import {useHistory, Link} from 'react-router-dom';
import './Cards.css';
import './Header.css';
import './font-awesome.min.css';

import { useQuery } from '@wasp/queries';
import getLaunches from '@wasp/queries/getLaunches';
import deleteLaunch from '@wasp/actions/deleteLaunch';

const MainPage = () => {
  const {data: launches, isFetching, error} = useQuery(getLaunches)
  let history = useHistory()

  function handleClick() {
    history.push("/new")
  }

  return (
    <div>
      <Header />
      <main>
        <h1 className="welcome">Rocket Launches!</h1>
        <LaunchList launches={launches} />
        <button type="button" className="btn draw-border" onClick={handleClick}>new launch</button>
      </main>
  </div>
  )
}

const Launch = (props) => {
  const handleCancelClick = async (event) => {
    try {
      await deleteLaunch({
        launchId: props.launch.id,
      });
    } catch (err) {
      window.alert('Error: ' + err.message);
    }
  }
  return (
    <div className="card">
      <p className="card__name">{props.launch.name}</p>
      <div className="grid-container">

        <div className="grid-child-posts">
          {props.launch.payloadWeight} lbs
        </div>

      </div>
      <button className="btn draw-border cancel" onClick={handleCancelClick}>Cancel</button>
    </div>
  )
}

const LaunchList = (props) => {
    if (!props.launches?.length) return 'No tasks'
    return props.launches.map((launch, idx) => <Launch launch={launch} key={idx} />)
}


export const Header = (props) => {
  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarHeader>
          <div className="logotext">
          </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<IoIosRocket />}>
                <Link to="/home"> My Launches</Link>
              </MenuItem>
              <MenuItem icon={<WiDayCloudy />}>
                <Link to="/weather"> Weather</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};

export default MainPage