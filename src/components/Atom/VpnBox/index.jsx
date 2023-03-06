import React from 'react'
import "./VpnBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const VpnBox = () => {
    return (
        <div className='container'>
            <div className='containerNew'>
                <h1>Warning!‌‌‌ Download only with VPN..</h1>
                <p className='p1'>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like Expert. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.</p>
                <p className='p2'>Personal data disclosing your real identity: your IP address, <span style={{ color: "white", background: "#AD0000" }}>27.34.49.140</span>    is exposed, which points directly to your location in  <span style={{ color: "white", background: "#AD0000" }}>Nepal</span>. You are browsing with  <span style={{ color: "white", background: "#731407" }}>Chrome 110.0.0.0(Linux)</span>,resolution <span style={{ color: "white", background: "#731407" }}>1360x768px </span>,  <span style={{ color: "white", background: "#731407" }}>3-cores CPU </span>.</p>
                <h2>″Do not risk it! Protect yourself right now by downloading Expert VPN″ - William</h2>
                <a href="#" rel="noindex, nofollow">
                    <div class="btn">
                        <FontAwesomeIcon icon={faDownload} style={{ color: "white" }} />
                        <p>Download Expert VPN</p>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default VpnBox