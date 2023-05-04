import react, { useEffect, useState } from 'react'
import './Home.module.scss';
import styles from '../components/Home.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from "../img/Spring-Bike.jpg";
import Charts from './Charts';
import classNames from 'classnames';
import Graph from './Graph';
import icon from '../img/icon.png'
import icon1 from '../img/icon1.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'
import Popup from './Popup';

export default function Home() {
    const [iconName, setIconName] = useState(0);
    const [iconColor, setIconColor] = useState('');
    const [rightIconColor, setRightIconColor] = useState('');
    const [open,setOpen] = useState(false);
    const data = [
        {
            icon: "fa-solid fa-house"
        },
        {
            icon: "fa-regular fa-square-minus"
        },
        {
            icon: "fa-regular fa-lightbulb"
        },
        {
            icon: "fa-solid fa-shield-halved"
        },
        {
            icon: "fa-solid fa-location-dot"
        },
        {
            icon: "fa-solid fa-battery-quarter"
        }
    ]
    const memberIcon = [
        {
            icon: icon
        },
        {
            icon: icon1
        },
        {
            icon: icon3
        },
        {
            icon: icon4
        },
    ]
    const gridData = [
        {
            switch: "ON",
            icon: "fa-solid fa-charging-station",
            title: "Refrigerator"
        },
        {
            switch: "ON",
            icon: "fa-solid fa-bolt-lightning",
            title: "Temprature"
        },
        {
            switch: "ON",
            icon: "fa-solid fa-fan",
            title: "Air Conditioner"
        },
        {
            switch: "ON",
            icon: "fa-regular fa-lightbulb",
            title: "Lights"
        }
    ]
    const rightGridData = {
        top: [
            {
                icon: "fa-solid fa-charging-station",
                title: "Refrigerator",
                color: "#AA77FF"
            },
            {
                icon: "fa-solid fa-bolt-lightning",
                title: "Temprature",
                color: "#F9D949"
            },
            {
                icon: "fa-solid fa-fan",
                title: "Air Conditioner",
                color: "#F4B183"
            },
            {
                icon: "fa-regular fa-lightbulb",
                title: "Lights",
                color: "#19A7CE"
            }
        ],
    }

    const handleClick = (icon, i) => {
        console.log(i, "-===");
        setIconName(i);
    }

    const clickIcon = (i) => {
        console.log(i, "test");
        setIconColor(i);
    }
    const clickRightIcon = (i) => {
        setRightIconColor(i);
    }
    const popUp = () => {
        setOpen(true) 
        }
      const handleCancel=()=>{
        setOpen(false)
      }
    return (
        <div className={styles.container}>
            <div className={styles.nav_body}>
                <div className={styles.nav_inner_body}>
                    {data?.map((data, i) => <div className={iconName === i ? styles.click_icon : styles.nav_icon}>
                        <FontAwesomeIcon icon={data.icon} size='xl' style={iconName == i ? { color: "#AA77FF" } : { color: "white" }} onClick={() => handleClick(data.icon, i)} />
                    </div>)}
                </div>
            </div>
            <div className={styles.content_body}>
                <div className={styles.header}>
                    <div className={styles.search}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{ fontSize: "calc(0.5vw + 0.5rem)" }} />
                        <input type="text" size="40" placeholder="Search..." />
                    </div>
                    <div className={styles.inner_header}>
                        <FontAwesomeIcon className={styles.icon_nav} icon="fa-solid fa-gear" size="xl" style={{ color: "394867", fontSize: "calc(0.5vw + 1.5rem)" }} />
                        <FontAwesomeIcon className={styles.icon_nav} icon="fa-regular fa-bell" size="xl" style={{ color: "394867", fontSize: "calc(0.5vw + 1.5rem)" }} />
                        <div className={styles.profile_img}></div>
                        <div style={{ "margin-right": "15px" }} >Scarlett</div>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" size='xl' style={{ color: "394867", fontSize: "calc(0.5vw + 1.5rem)" }} onClick={popUp} />
                        <Popup
                            show={open}
                            close={handleCancel}
                        />
                    </div>
                </div>
                <div className={styles.content_section}>
                    <div className={styles.left_body}>
                        <div className={styles.inner_content}>
                            <div className={styles.inner_top_content}>
                                <h2 className={styles.heading}>Hello, Scarlett!</h2>
                                <div className={styles.text}>Welcome Home! The air quality is good & fresh
                                    you can go out today.</div>
                                <div className={styles.text_content}>
                                    <FontAwesomeIcon icon="fa-solid fa-temperature-low" size='lg' style={{ fontSize: "calc(0.5vw + 1rem)" }} />
                                    <div className={styles.text2}>+25°C Outdoor Temperature</div>
                                </div>
                                <div className={styles.text_content}>
                                    <FontAwesomeIcon icon="fa-solid fa-cloud" size='lg' style={{ fontSize: "calc(0.5vw + 1rem)" }} />
                                    <div className={styles.text2}>Fuzzy cloudy weather</div>
                                </div>
                            </div>
                            <div className={styles.inner_img_content} />
                        </div>
                        <div className={styles.inner_content_header}>
                            <div className={styles.heading1}>Scarlett's Home</div>
                            <div className={styles.inner_header}>
                                <FontAwesomeIcon className={styles.icon_nav} icon="fa-solid fa-droplet" style={{ color: "394867", fontSize: "calc(0.5vw + 0.5rem)" }} />
                                <div className={styles.icon_nav} >35%</div>
                                <FontAwesomeIcon className={styles.icon_nav} icon="fa-solid fa-temperature-quarter" style={{ color: "394867", fontSize: "calc(0.5vw + 0.5rem)" }} />                            <div className={styles.icon_nav}>15°C</div>
                                <div className={styles.input_box}>
                                    <div style={{ fontSize: "calc(0.5vw + 0.5rem)", marginRight: "10px" }} >Living Room</div>
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" style={{ fontSize: "calc(0.5vw + 0.5rem)" }} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid_body}>
                            {gridData.map((data, i) => <div className={iconColor === i ? styles.grid_box_tm : styles.grid_box} onClick={() => clickIcon(i)}>
                                <div className={styles.grid_content_box}>
                                    <div className={styles.grid_inner_box}>
                                        <div className={iconColor === i ? styles.icon_nav_tm : styles.icon_nav} >{data.switch}</div>



                                        <label className={styles.switch}>
                                            <input type="checkbox" />
                                            {iconColor === i ? <span className={cn(styles.slider, styles.slider_round)}></span> : <span className={cn(styles.sliders, styles.slider_rounds)}></span>}
                                        </label>
                                    </div>
                                    <div className={styles.grid_icon}>
                                        {iconColor === i ?
                                            <FontAwesomeIcon icon={data.icon} style={{ color: "#ffff", fontSize: "calc(1vw + 0.5rem)" }} />
                                            : <FontAwesomeIcon icon={data.icon} style={{ color: "#AA77FF", fontSize: "calc(1vw + 0.5rem)" }} />
                                        }
                                        <div className={iconColor === i ? styles.icon_grid_tm : styles.icon_grid} >{data.title}</div>
                                    </div>
                                </div>

                            </div>)}
                        </div>
                        <div className={styles.grid_box_large}>
                            <div className={styles.inner_grid_box}>
                                <div className={styles.chart_box_icon}>
                                    <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" style={{ color: "#AA77FF", fontSize: "calc(1vw + 0.5rem)" }} />
                                </div>
                                <div className={styles.icon_grid1} >Living Room Temperature</div>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={cn(styles.sliders, styles.slider_rounds)}></span>
                                </label>
                            </div>
                            <div className={styles.chart_content}>
                                <div className={styles.minus_button}>
                                    -
                                </div>
                                <Charts style={{ width: "40%", height: "200px" }} />
                                <div className={styles.minus_button}>
                                    +
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className={styles.right_content}>
                        <div className={styles.top_right_content}>
                            <div className={styles.right_content_heading}>My Devices</div>
                            <div className={styles.right_switch}>
                                <div className={styles.input_box}>
                                    <div style={{ fontSize: "calc(0.5vw + 0.5rem)" }}>ON</div>
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" style={{ fontSize: "calc(0.5vw + 0.5rem)" }} />
                                </div>
                            </div>
                            <div className={styles.minus}>
                                {">"}
                            </div>
                        </div>

                        <div className={styles.right_grid_body}>
                            {rightGridData?.top?.map((data, i) =>
                                <div className={styles.grid_box_right} style={{ backgroundColor: data?.color }}>
                                    <div className={styles.grid_content_box}>
                                        <div className={styles.grid_inner_box}>
                                            <div className={styles.icon_nav} >{data.switch}</div>
                                            <label className={styles.switch} onClick={() => clickRightIcon(i)}>
                                                <input type="checkbox" />
                                                {rightIconColor === i ? <span className={cn(styles.slider, styles.slider_round)}></span> : <span className={cn(styles.sliders, styles.slider_rounds)}></span>}
                                            </label>
                                        </div>
                                        <div className={styles.grid_icon}>
                                            <FontAwesomeIcon icon={data.icon} style={{ color: "#FFFBF5", fontSize: "calc(1vw + 0.5rem)" }} />
                                            <div className={styles.icon_grid2}>{data.title}</div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>
                        <div className={styles.top_right_content}>
                            <div className={styles.right_content_heading}>Members</div>
                            <div className={styles.minus}>
                                {">"}
                            </div>
                        </div>
                        <div className={styles.member_box}>
                            {memberIcon.map((data) => <div className={styles.member_box_icon}>

                                <img className={styles.box_icon} src={data?.icon} alt='' />
                            </div>)}
                        </div>
                        <div className={styles.top_right_content}>
                            <div className={styles.right_content_heading}>Power Consumed</div>
                            <div className={styles.right_top_switch}>
                                <div className={styles.input_box}>
                                    <FontAwesomeIcon icon="fa-regular fa-calendar-days" style={{ fontSize: "calc(0.3vw + 0.5rem)" }} />
                                    <div style={{ fontSize: "calc(0.5vw + 0.5rem)" }}>Month</div>
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" style={{ fontSize: "calc(0.3vw + 0.5rem)" }} />
                                </div>
                            </div>
                            <div className={styles.minus}>
                                {">"}
                            </div>
                        </div>
                        <div className={styles.member_graph_box}>
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
