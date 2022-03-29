import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";

function HomeComponent() {
  return (
    <div className="homeFirst">
      <div className="homeInside homeInside1">
        <div className="homeInsideLeftContent">
          <div className="LeftContent LeftContent1">
            우크라이나에 기부해서 NFT를 받아가세요!!
          </div>
          <div className="LeftContent LeftContent2">
            1번 클릭마다 1개의 빵을 기부할 수 있습니다.
          </div>
          <div className="LeftContent LeftContent3">
            <Button variant="outlined">Donate</Button>
          </div>
        </div>
      </div>
      <div className="homeInside homeInside2">
        <div className="homeInsideRightContent">
          <div className="homeInsideCard">
            <article className="content">
              <img
                className="image"
                src="https://lh3.googleusercontent.com/qFqqt3LaXgR2wvJxAT0mdGwFbm0s2YqsW29f9orezXSNFSJosGtLgWsUw1Tn-t_8MHqZ52OTGaFI_7wENBpVHwilTnj7iiegcw4lKA=s550"
              />
            </article>
            <footer className="content2">
              <div className="nameCard">
                <img
                  className="boy"
                  src="https://lh3.googleusercontent.com/JbvWs8J7RjXjq_ois27TEU9L_Z5L_24XZ20uaJJdY2NxIr-K1W9pe-GCU3FQBH6oGpfoOdpoNkPc2gMiUvdFdmwUxeMlKCUJO--k=s80"
                />
              </div>
              <div className="nameCardCenter">
                <div className="nameCardCenterContent1">Hong Kong Spring</div>
                <div className="nameCardCenterContent2">Noealzii</div>
              </div>
              <div className="nameCard">
                <i class="fas fa-info-circle"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
