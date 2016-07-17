import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './side-bar.css';
import NavButton from '../NavButton';
import StarSvg from '../../../svg/star.svg';
import DashSvg from '../../../svg/speed.svg';
import BubbleSvg from '../../../svg/bubble.svg';
import ClockSvg from '../../../svg/clock.svg';
import HeartSvg from '../../../svg/heart.svg';
import BeakerSvg from '../../../svg/beaker.svg';
import CalendarSvg from '../../../svg/calendar.svg';
import PlusSvg from '../../../svg/plus.svg';
import WrenchSvg from '../../../svg/wrench.svg';

const StarSvgElement = <StarSvg className={styles.icon}/>
const DashSvgElement = <DashSvg className={styles.icon}/>
const BubbleSvgElement = <BubbleSvg className={styles.icon}/>
const ClockSvgElement = <ClockSvg className={styles.icon}/>
const HeartSvgElement = <HeartSvg className={styles.icon}/>
const BeakerSvgElement = <BeakerSvg className={styles.icon}/>
const CalendarSvgElement = <CalendarSvg className={styles.icon}/>
const PlusSvgElement = <PlusSvg className={styles.icon}/>
const WrenchSvgElement = <WrenchSvg className={styles.icon}/>

const SideBar = ({ currentRoute }) => (
  <div className={styles.sideBar}>
    <NavButton
      route="/favourites"
      currentRoute={currentRoute}
      title="Favourites"
      icon={StarSvgElement}
    />
    <NavButton
      route="/dashboard"
      currentRoute={currentRoute}
      title="Dashboard"
      icon={DashSvgElement}
    />
    <NavButton
      route="/"
      currentRoute={currentRoute}
      title="Messages"
      icon={BubbleSvgElement}
    />
    <NavButton
      route="/reminder"
      currentRoute={currentRoute}
      title="vReminder"
      icon={ClockSvgElement}
    />
    <NavButton
      route="/service"
      currentRoute={currentRoute}
      title="vService"
      icon={HeartSvgElement}
    />
    <NavButton
      route="/lab"
      currentRoute={currentRoute}
      title="vLab"
      icon={BeakerSvgElement}
    />
    <NavButton
      route="/appointments"
      currentRoute={currentRoute}
      title="vAppointment"
      icon={CalendarSvgElement}
    />
    <NavButton
      route="/new"
      currentRoute={currentRoute}
      title="New"
      icon={PlusSvgElement}
    />
    <NavButton
      route="/configuration"
      currentRoute={currentRoute}
      title="Configuration"
      icon={WrenchSvgElement}
    />
  </div>
)

SideBar.propTypes = {
  currentRoute: PropTypes.string.isRequired,
}
export default SideBar;
export {
  styles,
}
