import React from "react";
import * as main from "../../jsScripts/main";
import { Helmet } from "react-helmet";
import "./VrMuseumUi.css";

const VrMuseumUi = () => {
  return (
    <>
      <Helmet>
        <script src="../../jsScripts/navigator.js"></script>
        <script src="../../jsScripts/res/strings.bn.js"></script>
        <script src="../../jsScripts/res/strings.en.js"></script>
        <script src="../../jsScripts/res/strings.hin.js"></script>
        <script src="../../jsScripts/res/strings.or.js"></script>
        <script src="../../jsScripts/i18n.js"></script>
        <script src="../../jsScripts/three.min.js"></script>
        <script src="../../jsScripts/panolens.min.js"></script>
        <script src="../../jsScripts/dat.gui.min.js"></script>
        <script src="../../jsScripts/main.js"></script>
      </Helmet>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 flex-column">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                data-i18n="modalHeader"
              ></h5>
              <h3
                className="modal-title mb-4"
                id="exampleModalLabel"
                data-i18n="modalSubHeader"
              ></h3>
              <img alt="360 logo" src="images/360-view2.png" width="80" />
              <div
                className="mt-3"
                style={{ fontSize: "18px" }}
                data-i18n="langSelectText"
              ></div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-warning lang-selector chip-inactive"
                  id="enLangSelect"
                  onClick={main.langSelectHandler}
                >
                  English
                </button>
                <button
                  type="button"
                  className="btn btn-warning lang-selector chip-inactive"
                  id="bnLangSelect"
                  onClick={main.langSelectHandler}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  className="btn btn-warning lang-selector chip-inactive"
                  id="hinLangSelect"
                  onClick={main.langSelectHandler}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  className="btn btn-warning lang-selector chip-inactive"
                  id="odLangSelect"
                  onClick={main.langSelectHandler}
                >
                  ଓଡ଼ିଆ
                </button>
              </div>
              <button
                type="button"
                className="btn btn-secondary my-4 modalCloseBtn px-4"
                onClick={main.closeModal}
                data-i18n="modalBtnLabel"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="thankYouModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="thankYouModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 flex-column pb-5">
              <h4
                className="modal-title mb-4"
                id="thankYouModalLabel"
                data-i18n="thankYouText"
              ></h4>
              <img alt="360 logo" src="images/360-view2.png" width="80" />
            </div>
          </div>
        </div>
      </div>
      <div id="panorama-container" className="open">
        <div id="container"></div>
        <div id="disclaimer-container" data-i18n="disclaimerText"></div>
      </div>
      <div className="cntpan">
        {/* <!-- <div id="panorama">
        <div className="slideshow-container">
          <div id="controls"></div>
          <a className="prev" onclick="plusSlides(-1)">❮</a>
          <a className="next" onclick="plusSlides(1)">❯</a>
        </div>
      </div> --> */}
        {/* <!-- <div id="panorama">
        <div id="slider-container">
          <div id="slider"></div>
        </div>
        <div id="controls"></div>
        <div id="left-arrow">&lt;</div>
        <div id="right-arrow">&gt;</div>
      </div> --> */}

        <div className="gallery-wrap">
          <a id="backBtn">❮</a>
          <div className="gallery">
            <div>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/1.png?sp=r&st=2023-05-17T10:37:26Z&se=2024-06-13T18:37:26Z&sv=2022-11-02&sr=b&sig=dW1o1vnFPgZHJ87AGenV%2BI14mJu7YKQ2p4cVqpgelgo%3D"
                  data-pid="museum"
                  data-index="0"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/2.png?sp=r&st=2023-05-17T10:39:34Z&se=2024-06-13T18:39:34Z&sv=2022-11-02&sr=b&sig=%2BLS%2BZg57D55KXSoIB0YkMnEy73MMwDp7HV%2BMeksRnZg%3D"
                  data-pid="museum"
                  data-index="1"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164339_535.png?sp=r&st=2023-05-17T10:46:43Z&se=2024-06-13T18:46:43Z&sv=2022-11-02&sr=b&sig=dX9htPq1YM4O5La9kZ9iZVPwcAJiGgXVNopmVkrGYyA%3D"
                  data-pid="museum"
                  data-index="2"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/3.png?sp=r&st=2023-05-17T10:40:33Z&se=2024-06-13T18:40:33Z&sv=2022-11-02&sr=b&sig=Cj7fL9cE9tgUpBWTyjpZZ7ZODxH6xoEW4gLZ25qZNtY%3D"
                  data-pid="museum"
                  data-index="3"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/20230516_152822_423_02.png?sp=r&st=2023-05-17T10:45:40Z&se=2024-06-13T18:45:40Z&sv=2022-11-02&sr=b&sig=6TGJ3ADTaad89qV7Hw08q2qU8KBkWKakCVKMSSMH%2Fzk%3D"
                  data-pid="museum"
                  data-index="4"
                  className="imgThumbnail"
                />
              </span>
            </div>
            <div>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164458_527.png?sp=r&st=2023-05-17T10:48:29Z&se=2024-06-13T18:48:29Z&sv=2022-11-02&sr=b&sig=bF4%2FKUFgHCS%2BIEXydIbN8vYPoI4RjH5OOozPYMr%2FIXg%3D"
                  data-pid="museum"
                  data-index="5"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164535_917.png?sp=r&st=2023-05-17T10:49:44Z&se=2024-06-13T18:49:44Z&sv=2022-11-02&sr=b&sig=hm4xh7Po1tQ5wSEDywgWwNwPJBT3R3uBDFgPkyBBcR8%3D"
                  data-pid="museum"
                  data-index="6"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164627_922.png?sp=r&st=2023-05-17T10:50:45Z&se=2024-06-13T18:50:45Z&sv=2022-11-02&sr=b&sig=h1jnRvlvDLKrS7UYPtue%2F5LKgNrbVkamLvqjpcfM3UU%3D"
                  data-pid="museum"
                  data-index="7"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164924_082.png?sp=r&st=2023-05-17T10:51:44Z&se=2024-06-13T18:51:44Z&sv=2022-11-02&sr=b&sig=5VlWQwjDTrExeUOWGyXlADo9dWot43FsLunndxT6eQY%3D"
                  data-pid="museum"
                  data-index="8"
                  className="imgThumbnail"
                />
              </span>
              <span>
                <img
                  src="https://vrstorage360.blob.core.windows.net/vrmuseum/exit.png?sp=r&st=2023-05-17T10:52:42Z&se=2024-06-13T18:52:42Z&sv=2022-11-02&sr=b&sig=ZFxBhBIT1xQJFEU9ObQxWqbl24fh2EL7IMUN1vThr2c%3D"
                  data-pid="museum"
                  data-index="9"
                  className="imgThumbnail"
                />
              </span>
            </div>
            {/* <!-- <div>
            
          </div> --> */}
            {/* <!-- <div>
            <span><img src="https://vrstorage360.blob.core.windows.net/vrmuseum/exit.png?sp=r&st=2023-05-17T10:52:42Z&se=2024-06-13T18:52:42Z&sv=2022-11-02&sr=b&sig=ZFxBhBIT1xQJFEU9ObQxWqbl24fh2EL7IMUN1vThr2c%3D" data-pid="museum"
              data-index="9"
              className="imgThumbnail"></span>
            <span><img src="https://vrstorage360.blob.core.windows.net/vrmuseum/1.png?sp=r&st=2023-05-17T10:37:26Z&se=2024-06-13T18:37:26Z&sv=2022-11-02&sr=b&sig=dW1o1vnFPgZHJ87AGenV%2BI14mJu7YKQ2p4cVqpgelgo%3D" data-pid="museum"
              data-index="0"
              className="imgThumbnail"></span>
            <span><img src="https://vrstorage360.blob.core.windows.net/vrmuseum/2.png?sp=r&st=2023-05-17T10:39:34Z&se=2024-06-13T18:39:34Z&sv=2022-11-02&sr=b&sig=%2BLS%2BZg57D55KXSoIB0YkMnEy73MMwDp7HV%2BMeksRnZg%3D" data-pid="museum"
              data-index="1"
              className="imgThumbnail"></span>
          </div> --> */}
          </div>
          <a id="nextBtn">❯</a>
        </div>
        {/* <!-- <div id="pcontainer" className="right">
        <label for="panoramas" data-i18n="dropdownLabel"></label>
        <div className="dropdown">
          <button
            onclick="clickDropdown()"
            className="dropbtn"
            data-i18n="dropdownBtnLabel"
          >
            Panorama List
          </button>
          <div id="myDropdown" className="dropdown-content"></div>
        </div>
      </div> -->
      <!-- <button id="playAudio" onclick="playAudio()">Play</button> -->
      <!-- <div className="galleryBtn" onclick="backToGallery()">
        Back to gallery
      </div> --> */}
      </div>

      <div className="info generalInfo" style={{ display: "none" }}>
        <div className="text">
          <h1>Placeholder for description text</h1>
        </div>
      </div>
      <div className="info info1" style={{ display: "none" }}>
        <div className="text">
          <div>Portrait of a Man</div>
          <div>Frans Hals (Dutch, ca. 1581–1666)</div>
          <div className="my-3" data-i18n="info1Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud1"
          >
            <source
              id="infoAudioSrc1"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Potrait-Of-Man_Eng.mp3?sp=r&st=2023-05-13T19:12:55Z&se=2024-05-15T03:12:55Z&sv=2022-11-02&sr=b&sig=evheLwBFajFCrsj93LIctOxiE%2BvE03mQFrGX%2BLQFaDQ%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud1"
          >
            <source
              id="infoAudioSrc1"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/PotraitOfManBeng.m4a?sp=r&st=2023-05-13T19:13:46Z&se=2024-05-15T03:13:46Z&sv=2022-11-02&sr=b&sig=XuielU5AUvSJ8OGoK0AtJHHT2YOCCc7y1ppihYiGKso%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud1"
          >
            <source
              id="infoAudioSrc1"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/PotraitOfManHindi.m4a?sp=r&st=2023-05-13T19:14:21Z&se=2024-05-15T03:14:21Z&sv=2022-11-02&sr=b&sig=flcXAQkkEbvNWSFpzyiaBhChrjdGXYAmp8Mn%2FGPO4oo%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud1"
          >
            <source
              id="infoAudioSrc1"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/PotraitOfManOdia.m4a?sp=r&st=2023-05-13T19:15:02Z&se=2024-05-15T03:15:02Z&sv=2022-11-02&sr=b&sig=OJhGKwJVe9bUE1v4fq1772cTjpx%2FOOo70P40iqWiwoU%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info2" style={{ display: "none" }}>
        <div className="text">
          <div>The Deposition</div>
          <div>Gerard David (Dutch, ca. 1460–1523)</div>
          <div className="my-3" data-i18n="info2Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud2"
          >
            <source
              id="infoAudioSrc2"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/deposition_en.m4a?sp=r&st=2023-05-13T19:09:08Z&se=2024-05-15T03:09:08Z&sv=2022-11-02&sr=b&sig=aUuVLq0djfsfzI0mBcMrY%2BtpXEMTvWprIKshWWrdMXw%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud2"
          >
            <source
              id="infoAudioSrc2"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/deposition_bn.m4a?sp=r&st=2023-05-13T19:08:36Z&se=2024-05-15T03:08:36Z&sv=2022-11-02&sr=b&sig=SO92zw7Wu5%2FSGSKEexufqdlK%2F8AiZfHrIQvjLtKxPts%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud2"
          >
            <source
              id="infoAudioSrc2"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/DepositHindi.m4a?sp=r&st=2023-05-13T19:07:46Z&se=2024-05-15T03:07:46Z&sv=2022-11-02&sr=b&sig=0SMnAw7ETAZICaApbVxvkh76YDBRDMG4aGb1xs%2BmUcI%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud2"
          >
            <source
              id="infoAudioSrc2"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/TheDepositOdia.m4a?sp=r&st=2023-05-13T19:10:04Z&se=2024-05-15T03:10:04Z&sv=2022-11-02&sr=b&sig=D5NCqgk66pbBNeKQmGiSAPkWm1k9Yb3cmHjbKUvHU%2Bk%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>

      <div
        className="info info3 infospot-qrdata"
        id="ifodata-3"
        style={{ display: "none" }}
      >
        <div className="qr-info-header">
          <div className="qr-info-title" data-i18n="qrHeader"></div>
          <a href="#" className="close-info"></a>
        </div>
        <div className="qr-info-body">
          <div style={{ paddingRight: "50px" }}>
            <div style={{ paddingBottom: "5px" }} data-i18n="qrText1"></div>
            <div>
              <img
                src="https://vrstorage360.blob.core.windows.net/vrmuseum/qr-icon.jpg?sp=r&st=2023-05-11T10:26:21Z&se=2024-05-11T18:26:21Z&sv=2022-11-02&sr=b&sig=%2BTl9M9fmobMzzwt6NnV4%2FvJqE1w6kUozvOsctDDaUAY%3D"
                width="100"
                height="100"
                alt="product qr code"
              />
            </div>
          </div>
          <div>
            <div style={{ paddingBottom: "5px" }} data-i18n="qrText2"></div>
            <div>
              <img
                src="https://vrstorage360.blob.core.windows.net/vrmuseum/qr-icon.jpg?sp=r&st=2023-05-11T10:26:21Z&se=2024-05-11T18:26:21Z&sv=2022-11-02&sr=b&sig=%2BTl9M9fmobMzzwt6NnV4%2FvJqE1w6kUozvOsctDDaUAY%3D"
                width="100"
                height="100"
                alt="product qr code"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="info info-qr infospot-qrdata"
        id="ifodata-qr"
        style={{ display: "none" }}
      >
        <div className="qr-info-header">
          <div className="qr-info-title" data-i18n="qrHeader"></div>
          <a href="#" className="close-info"></a>
        </div>
        <div className="qr-info-body-common">
          <div style={{ paddingBottom: "5px" }} data-i18n="qrText2"></div>
          <div>
            <img
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/qr-icon.jpg?sp=r&st=2023-05-11T10:26:21Z&se=2024-05-11T18:26:21Z&sv=2022-11-02&sr=b&sig=%2BTl9M9fmobMzzwt6NnV4%2FvJqE1w6kUozvOsctDDaUAY%3D"
              width="100"
              height="100"
              alt="product qr code"
            />
          </div>
        </div>
      </div>

      <div
        className="info info4 infospot-qrdata"
        id="ifodata-4"
        style={{ display: "none" }}
      >
        <div className="qr-info-header">
          <div className="qr-info-title" data-i18n="qrHeader"></div>
          <a href="#" className="close-info"></a>
        </div>
        <div className="qr-info-body">
          <div style={{ paddingRight: "50px" }}>
            <div style={{ paddingBottom: "5px" }} data-i18n="qrText1"></div>
            <div>
              <img
                src="https://vrstorage360.blob.core.windows.net/vrmuseum/qr-icon.jpg?sp=r&st=2023-05-11T10:26:21Z&se=2024-05-11T18:26:21Z&sv=2022-11-02&sr=b&sig=%2BTl9M9fmobMzzwt6NnV4%2FvJqE1w6kUozvOsctDDaUAY%3D"
                width="100"
                height="100"
                alt="product qr code"
              />
            </div>
          </div>
          <div>
            <div style={{ paddingBottom: "5px" }} data-i18n="qrText2"></div>
            <div>
              <img
                src="https://vrstorage360.blob.core.windows.net/vrmuseum/qr-icon.jpg?sp=r&st=2023-05-11T10:26:21Z&se=2024-05-11T18:26:21Z&sv=2022-11-02&sr=b&sig=%2BTl9M9fmobMzzwt6NnV4%2FvJqE1w6kUozvOsctDDaUAY%3D"
                width="100"
                height="100"
                alt="product qr code"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info info5" id="ifodata-5" style={{ display: "none" }}>
        <div className="text">
          {/* <!-- <div className="qr-info-title" data-i18n="qrHeader"></div> --> */}
          <div className="my-3" data-i18n="info5Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud5"
          >
            <source
              id="infoAudioSrc5"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/The%20Corner%20Pillar%20english.m4a?sp=r&st=2023-05-17T18:32:58Z&se=2024-06-14T02:32:58Z&sv=2022-11-02&sr=b&sig=8GJTtQcCrkaaqJwnj2Y3XuaEgkTT5aAgEbyTZXevUGs%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud5"
          >
            <source
              id="infoAudioSrc5"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/The%20Corner%20Pillar%20bengali.m4a?sp=r&st=2023-05-17T18:33:51Z&se=2024-06-14T02:33:51Z&sv=2022-11-02&sr=b&sig=jAHCnKSFbo0r8Tm4fAsfJEmWgRzZi5F%2B9LkUI6ujqgs%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud5"
          >
            <source
              id="infoAudioSrc5"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/The%20Corner%20Pillar%20Hindi.m4a?sp=r&st=2023-05-17T18:34:31Z&se=2024-06-14T02:34:31Z&sv=2022-11-02&sr=b&sig=FXXntphbEYqw655dPuxFM%2BTrWOhnweLPPAgV1F4xjDg%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud5"
          >
            <source
              id="infoAudioSrc5"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/PotraitOfManOdia.m4a?sp=r&st=2023-05-13T19:15:02Z&se=2024-05-15T03:15:02Z&sv=2022-11-02&sr=b&sig=OJhGKwJVe9bUE1v4fq1772cTjpx%2FOOo70P40iqWiwoU%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div
        className="info info6 infospot-qrdata"
        id="ifodata-6"
        style={{ display: "none" }}
      >
        <div className="text">
          <div className="my-3" data-i18n="info6Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud6"
          >
            <source
              id="infoAudioSrc6"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Mother%20of%20liberation%20english.m4a?sp=r&st=2023-05-18T06:29:50Z&se=2024-06-14T14:29:50Z&sv=2022-11-02&sr=b&sig=d9seVzFW73y7OWM89IgwiIEDW2i0gqhxZ7Zrh4ib5mE%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud6"
          >
            <source
              id="infoAudioSrc6"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/mother-of-liberation-bengali-final.m4a?sp=r&st=2023-05-18T06:30:39Z&se=2024-06-14T14:30:39Z&sv=2022-11-02&sr=b&sig=MfE5tx4ChCCewqkuroKht39FDDr5hKwrytV%2Fm1QoyR0%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud6"
          >
            <source
              id="infoAudioSrc6"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/mother-of-liberation-hindi-final.m4a?sp=r&st=2023-05-18T06:31:04Z&se=2024-06-14T14:31:04Z&sv=2022-11-02&sr=b&sig=4%2B9jPYlYKSdzTQeGPzj5LMRYQpGCJAgfkF8nPlAyPHo%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud6"
          >
            <source
              id="infoAudioSrc6"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/mother-of-liberation-odia-final.mp3?sp=r&st=2023-05-18T06:31:31Z&se=2024-06-14T14:31:31Z&sv=2022-11-02&sr=b&sig=qyMEz7fdPozfj1HpZAoYkz9GVoIIMsr0%2FBhmh0HfKsw%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info7" id="ifodata-7" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info7Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud7"
          >
            <source
              id="infoAudioSrc7"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Gautam%20Buddha%20english.m4a?sp=r&st=2023-05-17T18:41:32Z&se=2024-06-14T02:41:32Z&sv=2022-11-02&sr=b&sig=dnXTwTfSemJAnWgqe69xNQj6Pb%2Bee2pUpJxS%2Bi5bfTU%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud7"
          >
            <source
              id="infoAudioSrc7"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/gautam-buddha-bengali-final.m4a?sp=r&st=2023-05-17T18:46:43Z&se=2024-06-14T02:46:43Z&sv=2022-11-02&sr=b&sig=ysWJQ2wukIUDx1Ru6dpnBe07ajboC6RlBVr%2Bu65vKMQ%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud7"
          >
            <source
              id="infoAudioSrc7"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/gautam-buddha-hindi-final.m4a?sp=r&st=2023-05-17T18:47:21Z&se=2024-06-14T02:47:21Z&sv=2022-11-02&sr=b&sig=HREnwAn1Q8V9DIRmd%2FeabvJjgU4FrbzdaWP111ZeZa4%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud7"
          >
            <source
              id="infoAudioSrc7"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/gautam-buddha-odia-final.mp3?sp=r&st=2023-05-17T18:47:59Z&se=2024-06-14T02:47:59Z&sv=2022-11-02&sr=b&sig=clJikS5IFIRZa3NIC%2Bl4T%2BRL%2Bm2gPXZJCNW8QSCpf1s%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info8" id="ifodata-8" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info8Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud8"
          >
            <source
              id="infoAudioSrc8"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/garuda%20English.m4a?sp=r&st=2023-05-17T18:13:17Z&se=2024-06-14T02:13:17Z&sv=2022-11-02&sr=b&sig=1PiG6EQj5%2BjCanmsd3IwvCaufvD03SIpcJzUCJmFvMg%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud8"
          >
            <source
              id="infoAudioSrc8"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/garuda-bengali-final.m4a?sp=r&st=2023-05-17T18:15:43Z&se=2024-06-14T02:15:43Z&sv=2022-11-02&sr=b&sig=eq%2FwrXWLuKfukXfoLE0pv%2Fl5qZzdTMq%2F0i5aYSqQrPw%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud8"
          >
            <source
              id="infoAudioSrc8"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/garuda-hindi-final.m4a?sp=r&st=2023-05-17T18:16:25Z&se=2024-06-14T02:16:25Z&sv=2022-11-02&sr=b&sig=Ul5k1M5WhEy%2FkkAQutjTTuI2zH8HGWQwA0Z9Vg3zOOo%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud8"
          >
            <source
              id="infoAudioSrc8"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/garuda%20odia%20final.mp3?sp=r&st=2023-05-17T18:17:04Z&se=2024-06-14T02:17:04Z&sv=2022-11-02&sr=b&sig=K1jKVJGa93kcJEM%2F0HkqQ%2FxVFii3YVQcwhdyB9a2nS4%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info9" id="ifodata-9" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info9Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud9"
          >
            <source
              id="infoAudioSrc9"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20Ganesha%20English%20final.m4a?sp=r&st=2023-05-18T06:25:20Z&se=2024-06-14T14:25:20Z&sv=2022-11-02&sr=b&sig=llAL9Oev5uI6uLZrI9vBvjbqNwvYIboYNuWThJ5H6nk%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud9"
          >
            <source
              id="infoAudioSrc9"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20Ganesha%20bengali%20final.m4a?sp=r&st=2023-05-18T06:24:46Z&se=2024-06-14T14:24:46Z&sv=2022-11-02&sr=b&sig=FxiHqg2d55JTOqc049Yavigbj4us%2F0naKYW1Yeg7AtE%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud9"
          >
            <source
              id="infoAudioSrc9"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20Ganesha%20hindi%20final.m4a?sp=r&st=2023-05-18T06:25:49Z&se=2024-06-14T14:25:49Z&sv=2022-11-02&sr=b&sig=xXaFPAaz6I5b5FzBXWYA79aioxUdHMor4FJoVPF1PW8%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud9"
          >
            <source
              id="infoAudioSrc9"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/lord-ganesha-odia-final.mp3?sp=r&st=2023-05-18T06:26:54Z&se=2024-06-14T14:26:54Z&sv=2022-11-02&sr=b&sig=7tkJIG9%2BEJ4U1zYvczAnLKUmZMRgLVLJ04W0nRuqNmY%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info10" id="ifodata-10" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info10Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud10"
          >
            <source
              id="infoAudioSrc10"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20shiva%20English%20final.m4a?sp=r&st=2023-05-18T06:21:44Z&se=2024-06-14T14:21:44Z&sv=2022-11-02&sr=b&sig=tK53jEDxWcjZTYxcFeUSw9EOIfd9eeSruLETAO4suWY%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud10"
          >
            <source
              id="infoAudioSrc10"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20shiva%20Bengali%20final.m4a?sp=r&st=2023-05-18T06:20:16Z&se=2024-06-14T14:20:16Z&sv=2022-11-02&sr=b&sig=EoTs05Y8Edrd8TMEDphQzK30v6LPH5t3LjTflPQNFXk%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud10"
          >
            <source
              id="infoAudioSrc10"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Lord%20shiva%20Hindi%20final.m4a?sp=r&st=2023-05-18T06:22:14Z&se=2024-06-14T14:22:14Z&sv=2022-11-02&sr=b&sig=JqDo2TgB1XKD%2BNAM%2F9RRMwa2iEx2ytAK4szuFnu4jis%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud10"
          >
            <source
              id="infoAudioSrc10"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/lord-Shiva-odia-final.mp3?sp=r&st=2023-05-18T06:22:48Z&se=2024-06-14T14:22:48Z&sv=2022-11-02&sr=b&sig=H0kUmVWBfbILIraCRhEUCEB2qSad8mEzOqVxDXjjVVg%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info11" id="ifodata-11" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info11Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud11"
          >
            <source
              id="infoAudioSrc11"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Durga%20english%20final%20.m4a?sp=r&st=2023-05-20T06:45:52Z&se=2024-06-14T14:45:52Z&sv=2022-11-02&sr=b&sig=%2BDAGImx35h61Oee7hBusMTdl%2FPXhhEwWMqJbtdrWH24%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud11"
          >
            <source
              id="infoAudioSrc11"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Durga%20bengali%20final%20.m4a?sp=r&st=2023-05-20T06:45:22Z&se=2024-06-14T14:45:22Z&sv=2022-11-02&sr=b&sig=6nh3EI9V6a7mJjudHmQCt2Oav9ZFP9wrWp2cU5wdhUc%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud11"
          >
            <source
              id="infoAudioSrc11"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Durga%20hindi%20final%20.m4a?sp=r&st=2023-05-20T06:46:21Z&se=2024-06-14T14:46:21Z&sv=2022-11-02&sr=b&sig=02eLrTYqFEPU0K9Q%2FDvtaL0Z5FGF2bE0zLLPimAs7S4%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud11"
          >
            <source
              id="infoAudioSrc11"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/durga%20odia%20final.mp3?sp=r&st=2023-05-20T06:47:08Z&se=2024-06-14T14:47:08Z&sv=2022-11-02&sr=b&sig=%2FPt3jlE5NSM5J54p2hLl6jiloYzOnl%2B%2BTRuperVIyAo%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info12" id="ifodata-12" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info12Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud12"
          >
            <source
              id="infoAudioSrc12"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Avalokite%C5%9Bvara%20english%20final.m4a?sp=r&st=2023-05-20T06:39:38Z&se=2024-06-14T14:39:38Z&sv=2022-11-02&sr=b&sig=vDYmL5YuDiOqJ9BNAgrIQzeUzimprIPT0NBPQQgdKk0%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud12"
          >
            <source
              id="infoAudioSrc12"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Avalokite%C5%9Bvara%20bengali%20final.m4a?sp=r&st=2023-05-20T06:40:14Z&se=2024-06-14T14:40:14Z&sv=2022-11-02&sr=b&sig=ulRjXvOtoBMYIeoWJrJHC9Rcx%2BSwwoAtDuzrv5S6o%2Fc%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud12"
          >
            <source
              id="infoAudioSrc12"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Avalokite%C5%9Bvara%20hindi%20final.m4a?sp=r&st=2023-05-20T06:40:48Z&se=2024-06-14T14:40:48Z&sv=2022-11-02&sr=b&sig=OXXgCkykJ00c2fnWe5AmdsW5mxCHCRXc%2BXdRroyUv2k%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud12"
          >
            <source
              id="infoAudioSrc12"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/avalokitesvara-odia-final.mp3?sp=r&st=2023-05-20T06:41:46Z&se=2024-06-14T14:41:46Z&sv=2022-11-02&sr=b&sig=62UVC9V1iNWPTsmD7has7p2bvB0au65WVNFZnaWv3eA%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info13" id="ifodata-13" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info13Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud13"
          >
            <source
              id="infoAudioSrc13"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vadisimha%20Manjushri%20English%20final%20.m4a?sp=r&st=2023-05-20T06:20:18Z&se=2024-06-14T14:20:18Z&sv=2022-11-02&sr=b&sig=PnaiBbMSPwpzQQl74x3K9WwthA%2BIBQcGd%2F89FzPV8NM%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud13"
          >
            <source
              id="infoAudioSrc13"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vadisimha%20Manjushri%20bengali%20final%20.m4a?sp=r&st=2023-05-20T06:18:21Z&se=2024-06-14T14:18:21Z&sv=2022-11-02&sr=b&sig=hh0hwerXFJWia1wSCmkncUV881saJLZzZxwAolLpnKE%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud13"
          >
            <source
              id="infoAudioSrc13"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vadisimha%20Manjushri%20hindi%20final%20.m4a?sp=r&st=2023-05-20T06:22:06Z&se=2024-06-14T14:22:06Z&sv=2022-11-02&sr=b&sig=JdeF3%2BenVx18oiiU7A8ytUxUxr4HUg6tjoCExXCmP5I%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud13"
          >
            <source
              id="infoAudioSrc13"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/vadisimha-odia-final.mp3?sp=r&st=2023-05-20T06:22:36Z&se=2024-06-14T14:22:36Z&sv=2022-11-02&sr=b&sig=wQAciZ52Ng44E6oAQ7QLwYq5AsiU5s3APDvy%2FoIuX34%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info14" id="ifodata-14" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info14Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud14"
          >
            <source
              id="infoAudioSrc14"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vishnu%20mounted%20on%20garuda%20English%20final%20.m4a?sp=r&st=2023-05-20T06:31:14Z&se=2024-06-14T14:31:14Z&sv=2022-11-02&sr=b&sig=nUt2K7kpqgP%2FUnYk3DMn28FEiwQDpaO8uqoNg0vhTbQ%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud14"
          >
            <source
              id="infoAudioSrc14"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vishnu%20mounted%20on%20garuda%20bengali%20final%20.m4a?sp=r&st=2023-05-20T06:30:30Z&se=2024-06-14T14:30:30Z&sv=2022-11-02&sr=b&sig=lswtVCo0B7Abb%2BbUANdEGzUiwy%2F5HOmgw8zENHeNrtw%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud14"
          >
            <source
              id="infoAudioSrc14"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Vishnu%20mounted%20on%20garuda%20Hindi%20final%20.m4a?sp=r&st=2023-05-20T06:31:47Z&se=2024-06-14T14:31:47Z&sv=2022-11-02&sr=b&sig=u23LN8ZT00AjwSw03i2dkKeoQ7UdIjPfov%2BU4Sh1S2g%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud14"
          >
            <source
              id="infoAudioSrc14"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/vishnu-mounted-on-garuda-odia-final.mp3?sp=r&st=2023-05-20T06:32:17Z&se=2024-06-14T14:32:17Z&sv=2022-11-02&sr=b&sig=zY2sI4Ly0C1y98VGa8EmvvnevzKh8ui4eybuE2X6A7o%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="info info15" id="ifodata-15" style={{ display: "none" }}>
        <div className="text">
          <div className="my-3" data-i18n="info15Text"></div>
          <audio
            controls
            style={{ width: "50%", height: "25px" }}
            className="infoAudio"
            id="infoEnAud15"
          >
            <source
              id="infoAudioSrc15"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Mahaparinirvana%20english%20final.m4a?sp=r&st=2023-05-20T06:35:36Z&se=2024-06-14T14:35:36Z&sv=2022-11-02&sr=b&sig=KuqNfGxBEAMS35myaQSOzyXZOa%2FUC%2Bh877OXeognrO8%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoBnAud15"
          >
            <source
              id="infoAudioSrc15"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Mahaparinirvana%20bengali%20final.m4a?sp=r&st=2023-05-20T06:34:49Z&se=2024-06-14T14:34:49Z&sv=2022-11-02&sr=b&sig=kLCxn%2F2gu17U89C6h5rsrevKDXFlERErqiO9%2B5Zo%2F%2Fo%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoHinAud15"
          >
            <source
              id="infoAudioSrc15"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/Mahaparinirvana%20hindi%20final.m4a?sp=r&st=2023-05-20T06:36:06Z&se=2024-06-14T14:36:06Z&sv=2022-11-02&sr=b&sig=fvjwAhmYh6sghbYnCfPubxqdMu2DE5HEOmd%2FLNy6e%2B0%3D"
            />
            Your browser does not support the audio tag.
          </audio>
          <audio
            controls
            style={{ width: "50%", height: "25px", display: "none" }}
            className="infoAudio"
            id="infoOrAud15"
          >
            <source
              id="infoAudioSrc15"
              src="https://vrstorage360.blob.core.windows.net/vrmuseum/mahapariniravana-odia-final.mp3?sp=r&st=2023-05-20T06:36:46Z&se=2024-06-14T14:36:46Z&sv=2022-11-02&sr=b&sig=fBKNtfIPwNFCgAC6TgO66b%2BxHOSRIiWp2%2B68i5JMkZY%3D"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </>
  );
};

export default VrMuseumUi;
