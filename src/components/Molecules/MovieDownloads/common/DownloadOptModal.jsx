import React from 'react'

const DownloadOptModal = ({
    hideModel
}) => {

    return (
        <div className='download-opt-modal-overlay' onClick={(e) => {
            if (e.target.classList.contains('download-opt-modal-overlay')) {
                hideModel()
            }
        }}>
            {<div className="DownloadSectionOverlay">
                <div className="title_movie_quality">
                    <h1>
                        Select Movie Quality
                    </h1>
                </div>
                <div class="modal-content">
                    <div class="modal-torrent">
                        <div class="modal-quality" id="modal-quality-720p"><span>720p</span></div>
                        <p class="quality-size">BluRay </p>

                        <p>File size</p>
                        <p class="quality-size">999 mb</p>
                        <a class="download-torrent" href="#" rel="nofollow" title="Download The Dark Knight 720p Torrent"><span class="icon-in"></span>Download</a>
                        <a data-torrent-id="5557" href="#" rel="nofollow"><span>Magnet</span></a>
                    </div>
                    <div class="modal-torrent">
                        <div class="modal-quality" id="modal-quality-1080p"><span>1080p</span></div>
                        <p class="quality-size">BluRay </p>

                        <p>File size</p>
                        <p class="quality-size">1.70 GB</p>
                        <a class="download-torrent" href="#"><span class="icon-in"></span>Download</a>
                        <a data-torrent-id="5558" href="#" rel="nofollow"><span>Magnet</span></a>
                    </div>
                    <div class="modal-torrent">
                        <div class="modal-quality" id="modal-quality-2160p"><span>2160p</span></div>
                        <p class="quality-size">BluRay </p>

                        <p>File size</p>
                        <p class="quality-size">7.52 GB</p>
                        <a class="download-torrent" href="#"><span class="icon-in"></span>Download</a>
                        <a data-torrent-id="36199" href="#" rel="nofollow"><span>Magnet</span></a>
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default DownloadOptModal