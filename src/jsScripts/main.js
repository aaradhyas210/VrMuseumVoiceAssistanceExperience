import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Howl } from "howler";
import * as THREE from "three";
import * as PANOLENS from "panolens";
import * as images from "./navigator";
import i18next from "i18next";
import { rerender } from "./i18n";

var viewer,
  container,
  audioSphere,
  audioPlayButton,
  audioBuffer,
  panner,
  cameraZoomData = 1;
var bgSound;
let infoAudio1;
let infoAudio2;
var infoEnAud2 = document.getElementById("infoEnAud2");
var infoBnAud2 = document.getElementById("infoBnAud2");
var infoHinAud2 = document.getElementById("infoHinAud2");
var infoOrAud2 = document.getElementById("infoOrAud2");
var audioLoaderFn;
var languageSelector;
var welcomeAudio;
var welcomeAudioSrc;

var museumThumbnails = [
  "https://vrstorage360.blob.core.windows.net/vrmuseum/1.png?sp=r&st=2023-05-17T10:37:26Z&se=2024-06-13T18:37:26Z&sv=2022-11-02&sr=b&sig=dW1o1vnFPgZHJ87AGenV%2BI14mJu7YKQ2p4cVqpgelgo%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/2.png?sp=r&st=2023-05-17T10:39:34Z&se=2024-06-13T18:39:34Z&sv=2022-11-02&sr=b&sig=%2BLS%2BZg57D55KXSoIB0YkMnEy73MMwDp7HV%2BMeksRnZg%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164339_535.png?sp=r&st=2023-05-17T10:46:43Z&se=2024-06-13T18:46:43Z&sv=2022-11-02&sr=b&sig=dX9htPq1YM4O5La9kZ9iZVPwcAJiGgXVNopmVkrGYyA%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/3.png?sp=r&st=2023-05-17T10:40:33Z&se=2024-06-13T18:40:33Z&sv=2022-11-02&sr=b&sig=Cj7fL9cE9tgUpBWTyjpZZ7ZODxH6xoEW4gLZ25qZNtY%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/20230516_152822_423_02.png?sp=r&st=2023-05-17T10:45:40Z&se=2024-06-13T18:45:40Z&sv=2022-11-02&sr=b&sig=6TGJ3ADTaad89qV7Hw08q2qU8KBkWKakCVKMSSMH%2Fzk%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164458_527.png?sp=r&st=2023-05-17T10:48:29Z&se=2024-06-13T18:48:29Z&sv=2022-11-02&sr=b&sig=bF4%2FKUFgHCS%2BIEXydIbN8vYPoI4RjH5OOozPYMr%2FIXg%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164535_917.png?sp=r&st=2023-05-17T10:49:44Z&se=2024-06-13T18:49:44Z&sv=2022-11-02&sr=b&sig=hm4xh7Po1tQ5wSEDywgWwNwPJBT3R3uBDFgPkyBBcR8%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164627_922.png?sp=r&st=2023-05-17T10:50:45Z&se=2024-06-13T18:50:45Z&sv=2022-11-02&sr=b&sig=h1jnRvlvDLKrS7UYPtue%2F5LKgNrbVkamLvqjpcfM3UU%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164924_082.png?sp=r&st=2023-05-17T10:51:44Z&se=2024-06-13T18:51:44Z&sv=2022-11-02&sr=b&sig=5VlWQwjDTrExeUOWGyXlADo9dWot43FsLunndxT6eQY%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/exit.png?sp=r&st=2023-05-17T10:52:42Z&se=2024-06-13T18:52:42Z&sv=2022-11-02&sr=b&sig=ZFxBhBIT1xQJFEU9ObQxWqbl24fh2EL7IMUN1vThr2c%3D",
];
var templeThumbnails = [
  "https://vrstorage360.blob.core.windows.net/vrmuseum/templepano1.png?sp=r&st=2023-05-08T14:10:19Z&se=2024-05-07T22:10:19Z&sv=2022-11-02&sr=b&sig=MMOYS9pTZK1z0FM8YK428LPChRTE%2FYpgFwrfYTwNEtQ%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/templepano3.png?sp=r&st=2023-05-09T06:30:22Z&se=2024-05-10T14:30:22Z&sv=2022-11-02&sr=b&sig=tombB9LShBv%2FISP4e3UWTzx2FkHxaX6GVb%2Fn6XAtLSU%3D",
];
var realEstateThumbnails = [
  "https://vrstorage360.blob.core.windows.net/vrmuseum/RealEstate1.jpg?sp=r&st=2023-05-09T08:47:53Z&se=2024-05-08T16:47:53Z&sv=2022-11-02&sr=b&sig=7pzWWwgcOBM0Q0pysRzfhVvjhO86HN8CS08opOSikWk%3D",
  "https://vrstorage360.blob.core.windows.net/vrmuseum/RealEstate3.jpg?sp=r&st=2023-05-09T10:29:35Z&se=2024-05-07T18:29:35Z&sv=2022-11-02&sr=b&sig=s%2BBHNUeiYnaIdWgiMnUffx%2B3IfOl4vYRQw9b7Ml5apQ%3D",
];

var museumInfoSpotPos = [
  { panoIndex: 0, infoPos: [] },
  { panoIndex: 1, infoPos: [] },
  { panoIndex: 2, infoPos: [] },
  { panoIndex: 3, infoPos: [] },
];

var lookAtPositions = [new THREE.Vector3(-10000, -2000, 0)];

let museumImg = [];
let templeImg = [];
let realEstateImg = [];
container = document.querySelector("#container");

$(document).ready(function () {
  // debugger;
  // i18next.changeLanguage("en", () => {
  //   rerender();
  // });
  switch (localStorage.getItem("i18nextLng")) {
    case "en":
      // code block
      $("#enLangSelect").removeClass("chip-inactive");
      $("#enLangSelect").addClass("chip-active");
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20english%20final.m4a?sp=r&st=2023-05-20T13:50:12Z&se=2024-06-13T21:50:12Z&sv=2022-11-02&sr=b&sig=7skFqPK17j5C2vQLrla7ZBe7ftEQdUXmCisfT6p6ulE%3D";
      welcomeAudio = new Howl({
        src: [welcomeAudioSrc],
        html5: true,
      });
      break;
    case "bn":
      // code block
      $("#bnLangSelect").removeClass("chip-inactive");
      $("#bnLangSelect").addClass("chip-active");
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20bengali%20final.m4a?sp=r&st=2023-05-20T13:47:18Z&se=2024-06-13T21:47:18Z&sv=2022-11-02&sr=b&sig=VEFgufzuf0Ma%2FeMN9h1yik46aOw7oKLHIN0SGz8z5yY%3D";
      welcomeAudio = new Howl({
        src: [welcomeAudioSrc],
        html5: true,
      });
      break;
    case "hin":
      // code block
      $("#hinLangSelect").removeClass("chip-inactive");
      $("#hinLangSelect").addClass("chip-active");
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20hindi%20final.m4a?sp=r&st=2023-05-20T13:50:56Z&se=2024-06-13T21:50:56Z&sv=2022-11-02&sr=b&sig=l%2FKNFDh3SY60OBmM1M5Bk9z1HSN7OUMNl3LP55oK6QU%3D";
      welcomeAudio = new Howl({
        src: [welcomeAudioSrc],
        html5: true,
      });
      break;
    case "or":
      // code block
      $("#odLangSelect").removeClass("chip-inactive");
      $("#odLangSelect").addClass("chip-active");
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/welcome-odia-final.mp3?sp=r&st=2023-05-20T13:51:40Z&se=2024-06-13T21:51:40Z&sv=2022-11-02&sr=b&sig=tdbiEnldQlliezR14qsG8YK9UY2urNJZOEUdaTwQeiY%3D";
      welcomeAudio = new Howl({
        src: [welcomeAudioSrc],
        html5: true,
      });
      break;
    default:
  }
  loadMuseumPanolens();
  $("#exampleModal").modal({
    backdrop: "static",
    keyboard: false,
  });
  $("#exampleModal").modal("show");
  $("#thankYouModal").modal({
    backdrop: "static",
    keyboard: false,
  });
  $("#thankYouModal").modal("hide");

  $(".close-info").click(function () {
    $(".info").css("display", "none");
  });

  $(".infoAudio").on("play", function () {
    bgSound.pause();
  });

  $(".infoAudio").on("pause", function () {
    bgSound.pause();
    var audioArr = $("audio");
    var isAudioPLaying = false;
    for (var i = 0, len = audioArr.length; i < len; i++) {
      if (audioArr[i].paused === false) {
        isAudioPLaying = true;
      }
    }
    if (document.hasFocus() && !isAudioPLaying) {
      bgSound.play();
    }
  });

  // $(document).click(function () {
  //   var infoTooltips = $(".info");
  //   var isTooltipDisplayed = false;
  //   var activeTooltips = [];
  //   for (var i = 0, len = infoTooltips.length; i < len; i++) {
  //     if (infoTooltips[i].style.display === "block") {
  //       isTooltipDisplayed = true;
  //     }
  //   }
  //   if (isTooltipDisplayed) {
  //     var audios = document.getElementsByTagName("audio");

  //     for (var i = 0, len = audios.length; i < len; i++) {
  //       audios[i].pause();
  //     }
  //   }
  // });

  // $(".info").blur(function () {
  //   var audios = document.getElementsByTagName("audio");

  //   for (var i = 0, len = audios.length; i < len; i++) {
  //     audios[i].pause();
  //   }
  // });

  document.addEventListener(
    "play",
    function (e) {
      var audios = document.getElementsByTagName("audio");

      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] !== e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );
});

export function closeModal() {
  $("#exampleModal").modal("hide");
  welcomeAudio.pause();
  welcomeAudio = null;
  console.log("modal closed");
  bgSound = new Howl({
    src: [
      "https://vrstorage360.blob.core.windows.net/vrmuseum/museumAudioUpdated.mp3?sp=r&st=2023-05-13T14:25:20Z&se=2024-05-14T22:25:20Z&sv=2022-11-02&sr=b&sig=h2fhQdvdTAMUjMq7jlMEayLnGFF%2Fabj53yCK2rVDMd0%3D",
    ],
    html5: true,
    loop: true,
    volume: 0.2,
  });
  bgSound.play();
}

$(document).on("click", ".photo", function () {
  var pid = $(this).data("pid");
  $(document).find("#panorama-container").toggle();
  $(document).find("#gallery-container").toggle();
  switch (pid) {
    case "museumVR":
      $(document).find(".galleryBtn").data("pid", "museum");
      loadMuseumPanolens();
      break;
    case "templeVR":
      $(document).find(".galleryBtn").data("pid", "temple");
      loadTemplePanolens();
      break;
    case "realEstateVR":
      $(document).find(".galleryBtn").data("pid", "realEstate");
      loadRealEstatePanolens();
      break;
    default:
  }
});

const loadMuseumPanolens = () => {
  viewer = new PANOLENS.Viewer({
    container: container,
    autoHideInfospot: false,
  });
  $(document).find("#controls, #myDropdown").empty();
  museumImg = [
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/1.png?sp=r&st=2023-05-17T10:37:26Z&se=2024-06-13T18:37:26Z&sv=2022-11-02&sr=b&sig=dW1o1vnFPgZHJ87AGenV%2BI14mJu7YKQ2p4cVqpgelgo%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/2.png?sp=r&st=2023-05-17T10:39:34Z&se=2024-06-13T18:39:34Z&sv=2022-11-02&sr=b&sig=%2BLS%2BZg57D55KXSoIB0YkMnEy73MMwDp7HV%2BMeksRnZg%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164339_535.png?sp=r&st=2023-05-17T10:46:43Z&se=2024-06-13T18:46:43Z&sv=2022-11-02&sr=b&sig=dX9htPq1YM4O5La9kZ9iZVPwcAJiGgXVNopmVkrGYyA%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/3.png?sp=r&st=2023-05-17T10:40:33Z&se=2024-06-13T18:40:33Z&sv=2022-11-02&sr=b&sig=Cj7fL9cE9tgUpBWTyjpZZ7ZODxH6xoEW4gLZ25qZNtY%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/20230516_152822_423_02.png?sp=r&st=2023-05-17T10:45:40Z&se=2024-06-13T18:45:40Z&sv=2022-11-02&sr=b&sig=6TGJ3ADTaad89qV7Hw08q2qU8KBkWKakCVKMSSMH%2Fzk%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164458_527.png?sp=r&st=2023-05-17T10:48:29Z&se=2024-06-13T18:48:29Z&sv=2022-11-02&sr=b&sig=bF4%2FKUFgHCS%2BIEXydIbN8vYPoI4RjH5OOozPYMr%2FIXg%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164535_917.png?sp=r&st=2023-05-17T10:49:44Z&se=2024-06-13T18:49:44Z&sv=2022-11-02&sr=b&sig=hm4xh7Po1tQ5wSEDywgWwNwPJBT3R3uBDFgPkyBBcR8%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164627_922.png?sp=r&st=2023-05-17T10:50:45Z&se=2024-06-13T18:50:45Z&sv=2022-11-02&sr=b&sig=h1jnRvlvDLKrS7UYPtue%2F5LKgNrbVkamLvqjpcfM3UU%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/IMG_20230516_164924_082.png?sp=r&st=2023-05-17T10:51:44Z&se=2024-06-13T18:51:44Z&sv=2022-11-02&sr=b&sig=5VlWQwjDTrExeUOWGyXlADo9dWot43FsLunndxT6eQY%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/exit.png?sp=r&st=2023-05-17T10:52:42Z&se=2024-06-13T18:52:42Z&sv=2022-11-02&sr=b&sig=ZFxBhBIT1xQJFEU9ObQxWqbl24fh2EL7IMUN1vThr2c%3D"
    ),
  ];
  museumImg[9].addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(lookAtPositions[0], 0);
  });
  for (let index = 0; index < museumImg.length; index++) {
    let nextIndex = index === museumImg.length - 1 ? 0 : index + 1;
    let pano1 = museumImg[index];
    let pano2 = museumImg[nextIndex];
    let linkPos;
    switch (index) {
      case 0:
        linkPos = new THREE.Vector3(70, -550, -5000);
        break;
      case 1:
        linkPos = new THREE.Vector3(150, -1250, -4500);
        break;
      case 2:
        linkPos = new THREE.Vector3(-2400, -1400, -5000);
        break;
      case 3:
        linkPos = new THREE.Vector3(-2550, -1350, -5000);
        break;
      case 4:
        linkPos = new THREE.Vector3(-50, -1250, -5000);
        break;
      case 5:
        linkPos = new THREE.Vector3(-2400, -1400, -5000);
        break;
      case 6:
        linkPos = new THREE.Vector3(-2800, -1400, -5000);
        break;
      case 7:
        linkPos = new THREE.Vector3(-5300, -2100, -5000);
        break;
      case 8:
        linkPos = new THREE.Vector3(-1650, -900, -5000);
        break;
      case 9:
        linkPos = null;
        break;
      default:
        linkPos = new THREE.Vector3(170, -1250, -5000);
        break;
    }
    pano1.link(museumImg[nextIndex], linkPos, 400, images.navImage);
    var infospot = new PANOLENS.Infospot(230, images.infoImage);
    infospot.position.set(2500, 1000, -5000);
    if (index === 0) {
      var infospot1 = new PANOLENS.Infospot(320, images.infoImage);
      infospot1.position.set(-5000, -20, -5000);

      var infospot3 = new PANOLENS.Infospot(230, images.qrCodeIcon);
      infospot3.position.set(-4500, 0, -5000);
      // infospot3.addEventListener("click", function () {
      //   $(".info").css("display", "none");
      //   document.getElementById("ifodata-3").style.display = "block";
      // });

      var infospot2 = new PANOLENS.Infospot(270, images.infoImage);
      infospot2.position.set(-2600, -30, -5000);
      var infospot4 = new PANOLENS.Infospot(200, images.qrCodeIcon);
      infospot4.position.set(-2300, -10, -5000);
      // var Infospot1Toggle = 0;
      // infospot1.addEventListener("click", function () {
      //   if (Infospot1Toggle) {
      //     infospot1.element.style.display = "none";
      //   }
      //   if (Infospot1Toggle) {
      //     Infospot1Toggle = 0;
      //   } else {
      //     Infospot1Toggle = 1;
      //   }
      //   // $(".info").css("display", "none");
      //   // document.getElementById("ifodata-1").style.display = "block";
      // });
      // infospot1.addEventListener("click", function () {
      //   $("#infoTooltipOne").toggle();
      // });
      // infospot2.addEventListener("click", function () {
      //   $(".info").css("display", "none");
      //   document.getElementById("ifodata-2").style.display = "block";
      // });
      // infospot1.addHoverElement($(document).find(".info1")[0], 150);
      // infospot2.addHoverElement($(document).find(".info2")[0], 150);
      // infospot3.addHoverElement($(document).find(".info3")[0], 150);
      // infospot4.addHoverElement($(document).find(".info4")[0], 150);
      // pano1.add(infospot1);
      // pano1.add(infospot2);
      // pano1.add(infospot3);
      // pano1.add(infospot4);
    }
    if (index === 2) {
      var infospot5 = new PANOLENS.Infospot(270, images.infoImage);
      infospot5.position.set(-600, -3040, -5000);
      infospot5.addHoverElement($(document).find(".info5")[0], 150);
      pano1.add(infospot5);
      var infospot5QR = new PANOLENS.Infospot(200, images.qrCodeIcon);
      infospot5QR.position.set(0, -3000, -5000);
      infospot5QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot5QR);

      var infospot6 = new PANOLENS.Infospot(180, images.infoImage);
      infospot6.position.set(1500, -660, -5000);
      infospot6.addHoverElement($(document).find(".info6")[0], 150);
      pano1.add(infospot6);
      var infospot6QR = new PANOLENS.Infospot(135, images.qrCodeIcon);
      infospot6QR.position.set(1800, -650, -5000);
      infospot6QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot6QR);

      var infospot7 = new PANOLENS.Infospot(180, images.infoImage);
      infospot7.position.set(3700, -710, -4900);
      infospot7.addHoverElement($(document).find(".info7")[0], 150);
      pano1.add(infospot7);
      var infospot7QR = new PANOLENS.Infospot(135, images.qrCodeIcon);
      infospot7QR.position.set(4000, -750, -5000);
      infospot7QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot7QR);

      var infospot8 = new PANOLENS.Infospot(270, images.infoImage);
      infospot8.position.set(5500, -2500, -400);
      infospot8.addHoverElement($(document).find(".info8")[0], 150);
      pano1.add(infospot8);
      var infospot8QR = new PANOLENS.Infospot(200, images.qrCodeIcon);
      infospot8QR.position.set(5500, -2470, 200);
      infospot8QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot8QR);

      var infospot9 = new PANOLENS.Infospot(270, images.infoImage);
      infospot9.position.set(6000, -1000, 6000);
      infospot9.addHoverElement($(document).find(".info9")[0], 150);
      pano1.add(infospot9);
      var infospot9QR = new PANOLENS.Infospot(200, images.qrCodeIcon);
      infospot9QR.position.set(6000, -1000, 6500);
      infospot9QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot9QR);

      var infospot10 = new PANOLENS.Infospot(270, images.infoImage);
      infospot10.position.set(-5500, -1200, 8000);
      infospot10.addHoverElement($(document).find(".info10")[0], 150);
      pano1.add(infospot10);
      var infospot10QR = new PANOLENS.Infospot(200, images.qrCodeIcon);
      infospot10QR.position.set(-5500, -1180, 7500);
      infospot10QR.addHoverElement($(document).find(".info-qr")[0], 150);
      pano1.add(infospot10QR);
    }
    if (index === 4) {
      var infospot11 = new PANOLENS.Infospot(270, images.infoImage);
      infospot11.position.set(-2400, -1500, -7200);
      infospot11.addHoverElement($(document).find(".info11")[0], 150);
      pano1.add(infospot11);
      var infospot12 = new PANOLENS.Infospot(270, images.infoImage);
      infospot12.position.set(2400, -1500, -7800);
      infospot12.addHoverElement($(document).find(".info12")[0], 150);
      pano1.add(infospot12);
      var infospot13 = new PANOLENS.Infospot(270, images.infoImage);
      infospot13.position.set(-4000, -3500, -1500);
      infospot13.addHoverElement($(document).find(".info13")[0], 150);
      pano1.add(infospot13);
      var infospot14 = new PANOLENS.Infospot(270, images.infoImage);
      infospot14.position.set(4000, -2500, -1500);
      infospot14.addHoverElement($(document).find(".info14")[0], 150);
      pano1.add(infospot14);
      var infospot15 = new PANOLENS.Infospot(270, images.infoImage);
      infospot15.position.set(600, -1000, 9000);
      infospot15.addHoverElement($(document).find(".info15")[0], 150);
      pano1.add(infospot15);
    }
    viewer.add(pano1);
    //   var thumbnail = `<div class="mySlides fade"><img
    //   class="ctrl imgThumbnail"
    //   data-pid="museum"
    //   data-index="${index}"
    //   alt="panorama ${index + 1}"
    //   src="${museumThumbnails[index]}"
    // /></div>`;
    //   $(document).find("#controls").append(thumbnail);
    // $(document).ready(function () {
    //   var index = 0;
    //   var slideWidth =
    //     $(".ctrl").outerWidth() + parseInt($(".ctrl").css("margin-right"));
    //   var maxIndex = museumThumbnails.length - 1;
    //   var dragging = false;
    //   var startDragX;
    //   var startOffsetX;
    //   var currentOffsetX = 0;

    //   museumThumbnails.forEach(function (thumbnail) {
    //     $("#slider").append(`<img class="ctrl imgThumbnail" data-pid="museum"
    //   data-index="${index}" alt="panorama ${index + 1}" src="${thumbnail}" />`);
    //     index++;
    //   });

    //   $("#slider").css("width", slideWidth * museumThumbnails.length);

    //   function moveSlider() {
    //     $("#slider").css("transform", `translateX(-${currentOffsetX}px)`);
    //   }

    //   $("#left-arrow").on("click", function (event) {
    //     event.stopPropagation();
    //     moveLeft();
    //   });

    //   $("#right-arrow").on("click", function (event) {
    //     event.stopPropagation();
    //     moveRight();
    //   });
    //   $("#left-arrow").on("dblclick", function (event) {
    //     event.preventDefault();
    //     moveLeft();
    //   });

    //   $("#right-arrow").on("dblclick", function (event) {
    //     event.preventDefault();
    //     moveRight();
    //   });

    //   $("#panorama").on("mousedown", function (event) {
    //     if (event.which === 1) {
    //       dragging = true;
    //       startDragX = event.clientX;
    //       startOffsetX = currentOffsetX;
    //     }
    //   });

    //   $(document).on("mouseup", function (event) {
    //     if (dragging && event.which === 1) {
    //       dragging = false;
    //     }
    //   });

    //   $("#panorama").on("mousemove", function (event) {
    //     if (dragging) {
    //       var dragX = event.clientX;
    //       var dragOffsetX = dragX - startDragX;
    //       currentOffsetX = startOffsetX + dragOffsetX;

    //       currentOffsetX = Math.max(
    //         Math.min(currentOffsetX, maxIndex * slideWidth),
    //         0
    //       );

    //       moveSlider();
    //     }
    //   });
    //   function moveLeft() {
    //     index--;
    //     currentOffsetX = slideWidth * index;
    //     moveSlider();
    //   }

    //   function moveRight() {
    //     index++;
    //     currentOffsetX = slideWidth * index;
    //     moveSlider();
    //   }
    // });

    var ddlOption = `<a href="javascript:void(0)" class="imgThumbnail" data-pid="museum"
    data-index="${index}"><span data-i18n="dropdownText"></span> ${
      index + 1
    }</a>`;
    $(document).find("#myDropdown").append(ddlOption);
    rerender();
  }
  // $(document).find("#container").resize();
};

const loadTemplePanolens = () => {
  viewer = new PANOLENS.Viewer({ container: container });
  $(document).find("#controls, #myDropdown").empty();
  templeImg = [
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/templepano1.png?sp=r&st=2023-05-08T14:10:19Z&se=2024-05-07T22:10:19Z&sv=2022-11-02&sr=b&sig=MMOYS9pTZK1z0FM8YK428LPChRTE%2FYpgFwrfYTwNEtQ%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/templepano3.png?sp=r&st=2023-05-09T06:30:22Z&se=2024-05-10T14:30:22Z&sv=2022-11-02&sr=b&sig=tombB9LShBv%2FISP4e3UWTzx2FkHxaX6GVb%2Fn6XAtLSU%3D"
    ),
  ];
  for (let index = 0; index < templeImg.length; index++) {
    let nextIndex = index === templeImg.length - 1 ? 0 : index + 1;
    let pano1 = templeImg[index];
    pano1.link(
      templeImg[nextIndex],
      new THREE.Vector3(850, -200, -5000),
      400,
      images.navImage
    );
    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(5000, 1000, -5000);
    $(document).find(".info .text h1").html(`Placeholder for description text`);
    infospot.addHoverElement($(document).find(".info")[0], 100);
    pano1.add(infospot);
    viewer.add(pano1);
    var thumbnail = `<img
    class="ctrl imgThumbnail"
    data-pid="temple"
    data-index="${index}"
    alt="panorama ${index + 1}"
    src="${templeThumbnails[index]}"
  />`;
    $(document).find("#controls").append(thumbnail);
    var ddlOption = `<a href="javascript:void(0)" class="imgThumbnail" data-pid="temple"
    data-index="${index}">Panorama ${index + 1}</a>`;
    $(document).find("#myDropdown").append(ddlOption);
  }
};

const loadRealEstatePanolens = () => {
  viewer = new PANOLENS.Viewer({ container: container });
  $(document).find("#controls, #myDropdown").empty();
  realEstateImg = [
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/RealEstate1.jpg?sp=r&st=2023-05-09T08:47:53Z&se=2024-05-08T16:47:53Z&sv=2022-11-02&sr=b&sig=7pzWWwgcOBM0Q0pysRzfhVvjhO86HN8CS08opOSikWk%3D"
    ),
    new PANOLENS.ImagePanorama(
      "https://vrstorage360.blob.core.windows.net/vrmuseum/RealEstate3.jpg?sp=r&st=2023-05-09T10:29:35Z&se=2024-05-07T18:29:35Z&sv=2022-11-02&sr=b&sig=s%2BBHNUeiYnaIdWgiMnUffx%2B3IfOl4vYRQw9b7Ml5apQ%3D"
    ),
  ];
  for (let index = 0; index < realEstateImg.length; index++) {
    let nextIndex = index === realEstateImg.length - 1 ? 0 : index + 1;
    let pano1 = realEstateImg[index];
    pano1.link(
      realEstateImg[nextIndex],
      new THREE.Vector3(850, -200, -5000),
      400,
      images.navImage
    );
    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(5000, 1000, -5000);
    $(document).find(".info .text h1").html(`Placeholder for description text`);
    infospot.addHoverElement($(document).find(".info")[0], 100);
    pano1.add(infospot);
    viewer.add(pano1);
    var thumbnail = `<img
    class="ctrl imgThumbnail"
    data-pid="realEstate"
    data-index="${index}"
    alt="panorama ${index + 1}"
    src="${realEstateThumbnails[index]}"
  />`;
    $(document).find("#controls").append(thumbnail);
    var ddlOption = `<a href="javascript:void(0)" class="imgThumbnail" data-pid="realEstate"
    data-index="${index}">Panorama ${index + 1}</a>`;
    $(document).find("#myDropdown").append(ddlOption);
  }
};

const ZoomINFunction = () => {
  let ZoomInIntervalTime = setInterval(function () {
    cameraZoomData = viewer.getCamera().fov;
    if (cameraZoomData > 10) {
      viewer.setCameraFov(cameraZoomData - 0.1);
    }
  }, 1);
  setTimeout(function () {
    clearInterval(ZoomInIntervalTime);
  }, 400);
};

const ZoomOUTFunction = () => {
  let ZoomOutIntervalTime = setInterval(function () {
    cameraZoomData = viewer.getCamera().fov;
    if (cameraZoomData < 115) {
      viewer.setCameraFov(cameraZoomData + 0.1);
    }
  }, 1);
  setTimeout(function () {
    clearInterval(ZoomOutIntervalTime);
  }, 400);
};

// const loadMuseumAudio = () => {
//   var rotationRadius = 400;
//   audioSphere = new THREE.Mesh(
//     new THREE.SphereGeometry(50, 16, 16),
//     new THREE.MeshStandardMaterial({
//       shading: THREE.FlatShading,
//     })
//   );

//   var listener = new THREE.AudioListener();
//   viewer.getCamera().add(listener);

//   var audioLoader = new THREE.AudioLoader();
//   var sound = new THREE.PositionalAudio(listener);
//   audioLoader.load(
//     "https://vrstorage360.blob.core.windows.net/vrmuseum/museumaudio.mp3?sp=r&st=2023-05-11T11:27:30Z&se=2024-05-09T19:27:30Z&sv=2022-11-02&sr=b&sig=hrqxGwndmF7cjYfhUd1jXpxshvcc5ozal8dnfsp94yE%3D",
//     function (buffer) {
//       audioBuffer = buffer;
//       sound.setBuffer(buffer);
//       sound.setRefDistance(100);
//       sound.setLoop(true);
//       sound.play();
//     }
//   );
//   // audioSphere.add(sound);

//   museumImg[0].add(sound);

//   viewer.addUpdateCallback(function () {
//     audioSphere.position.set(
//       rotationRadius * Math.cos(Date.now() * 0.0005),
//       0,
//       rotationRadius * Math.sin(Date.now() * 0.0005)
//     );
//   });
// };

export function loadingFn() {
  var preloader = document.getElementById("loading");
  if (preloader) {
    preloader.style.display = "none";
  }
  $("#thankYouModal").modal("hide");
  // document.getElementById("playAudio").click();
}
$(document).on("click", ".imgThumbnail", function () {
  var pid = $(this).data("pid");
  var index = $(this).data("index");
  switch (pid) {
    case "museum":
      viewer.setPanorama(museumImg[index]);
      if (index === 9) {
        $("#thankYouModal").modal("show");
      }
      break;
    case "temple":
      viewer.setPanorama(templeImg[index]);
      break;
    case "realEstate":
      viewer.setPanorama(realEstateImg[index]);
      break;
    default:
  }
});
export function clickDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// function clickDropdownOption(dropdownValue) {
//   switch (dropdownValue) {
//     case 1:
//       viewer.setPanorama(panorama1);
//       break;
//     case 2:
//       viewer.setPanorama(panorama2);
//       break;
//     case 3:
//       viewer.setPanorama(panorama3);
//       break;
//     case 4:
//       viewer.setPanorama(panorama4);
//       break;
//     default:
//   }
// }
export function backToGallery() {
  var pid = $(document).find(".galleryBtn").data("pid");
  switch (pid) {
    case "museum":
      museumImg.forEach((e) => {
        e.dispose();
        viewer.remove(e);
      });
      break;
    case "temple":
      templeImg.forEach((e) => {
        e.dispose();
        viewer.remove(e);
      });
      break;
    case "realEstate":
      realEstateImg.forEach((e) => {
        e.dispose();
        viewer.remove(e);
      });
      break;
    default:
  }
  $(document).find("#panorama-container").toggle();
  $(document).find("#gallery-container").toggle();
}

$(window).focus(function () {
  //do something
  bgSound?.pause();
  bgSound?.play();
  if (welcomeAudio !== null) {
    welcomeAudio?.play();
  }
});

$(window).blur(function () {
  //do something
  bgSound?.pause();
  welcomeAudio?.pause();
  var audioArr = $("audio");
  for (var i = 0, len = audioArr.length; i < len; i++) {
    audioArr[i].pause();
  }
});

$("#container").on("click", function () {
  var audioArr = $("audio");
  for (var i = 0, len = audioArr.length; i < len; i++) {
    audioArr[i].pause();
  }
});

// const playAudio = () => {
//   var sound = new Howl({
//     src: [
//       "https://vrstorage360.blob.core.windows.net/vrmuseum/museumaudio.mp3?sp=r&st=2023-05-11T11:27:30Z&se=2024-05-09T19:27:30Z&sv=2022-11-02&sr=b&sig=hrqxGwndmF7cjYfhUd1jXpxshvcc5ozal8dnfsp94yE%3D",
//     ],
//     html5: true,
//   });
//   sound.play();
// };

const enAudioLoader = () => {
  $("#infoEnAud1").show();
  $("#infoBnAud1").hide();
  $("#infoHinAud1").hide();
  $("#infoOrAud1").hide();
  $("#infoEnAud2").show();
  $("#infoBnAud2").hide();
  $("#infoHinAud2").hide();
  $("#infoOrAud2").hide();
  $("#infoEnAud5").show();
  $("#infoBnAud5").hide();
  $("#infoHinAud5").hide();
  $("#infoOrAud5").hide();
  $("#infoEnAud6").show();
  $("#infoBnAud6").hide();
  $("#infoHinAud6").hide();
  $("#infoOrAud6").hide();
  $("#infoEnAud7").show();
  $("#infoBnAud7").hide();
  $("#infoHinAud7").hide();
  $("#infoOrAud7").hide();
  $("#infoEnAud8").show();
  $("#infoBnAud8").hide();
  $("#infoHinAud8").hide();
  $("#infoOrAud8").hide();
  $("#infoEnAud9").show();
  $("#infoBnAud9").hide();
  $("#infoHinAud9").hide();
  $("#infoOrAud9").hide();
  $("#infoEnAud10").show();
  $("#infoBnAud10").hide();
  $("#infoHinAud10").hide();
  $("#infoOrAud10").hide();
  $("#infoEnAud11").show();
  $("#infoBnAud11").hide();
  $("#infoHinAud11").hide();
  $("#infoOrAud11").hide();
  $("#infoEnAud12").show();
  $("#infoBnAud12").hide();
  $("#infoHinAud12").hide();
  $("#infoOrAud12").hide();
  $("#infoEnAud13").show();
  $("#infoBnAud13").hide();
  $("#infoHinAud13").hide();
  $("#infoOrAud13").hide();
  $("#infoEnAud14").show();
  $("#infoBnAud14").hide();
  $("#infoHinAud14").hide();
  $("#infoOrAud14").hide();
  $("#infoEnAud15").show();
  $("#infoBnAud15").hide();
  $("#infoHinAud15").hide();
  $("#infoOrAud15").hide();
};

const bnAudioLoader = () => {
  $("#infoEnAud1").hide();
  $("#infoBnAud1").show();
  $("#infoHinAud1").hide();
  $("#infoOrAud1").hide();
  $("#infoEnAud2").hide();
  $("#infoBnAud2").show();
  $("#infoHinAud2").hide();
  $("#infoOrAud2").hide();
  $("#infoEnAud5").hide();
  $("#infoBnAud5").show();
  $("#infoHinAud5").hide();
  $("#infoOrAud5").hide();
  $("#infoEnAud6").hide();
  $("#infoBnAud6").show();
  $("#infoHinAud6").hide();
  $("#infoOrAud6").hide();
  $("#infoEnAud7").hide();
  $("#infoBnAud7").show();
  $("#infoHinAud7").hide();
  $("#infoOrAud7").hide();
  $("#infoEnAud8").hide();
  $("#infoBnAud8").show();
  $("#infoHinAud8").hide();
  $("#infoOrAud8").hide();
  $("#infoEnAud9").hide();
  $("#infoBnAud9").show();
  $("#infoHinAud9").hide();
  $("#infoOrAud9").hide();
  $("#infoEnAud10").hide();
  $("#infoBnAud10").show();
  $("#infoHinAud10").hide();
  $("#infoOrAud10").hide();
  $("#infoEnAud11").hide();
  $("#infoBnAud11").show();
  $("#infoHinAud11").hide();
  $("#infoOrAud11").hide();
  $("#infoEnAud12").hide();
  $("#infoBnAud12").show();
  $("#infoHinAud12").hide();
  $("#infoOrAud12").hide();
  $("#infoEnAud13").hide();
  $("#infoBnAud13").show();
  $("#infoHinAud13").hide();
  $("#infoOrAud13").hide();
  $("#infoEnAud14").hide();
  $("#infoBnAud14").show();
  $("#infoHinAud14").hide();
  $("#infoOrAud14").hide();
  $("#infoEnAud15").hide();
  $("#infoBnAud15").show();
  $("#infoHinAud15").hide();
  $("#infoOrAud15").hide();
};

const hinAudioLoader = () => {
  $("#infoEnAud1").hide();
  $("#infoBnAud1").hide();
  $("#infoHinAud1").show();
  $("#infoOrAud1").hide();
  $("#infoEnAud2").hide();
  $("#infoBnAud2").hide();
  $("#infoHinAud2").show();
  $("#infoOrAud2").hide();
  $("#infoEnAud5").hide();
  $("#infoBnAud5").hide();
  $("#infoHinAud5").show();
  $("#infoOrAud5").hide();
  $("#infoEnAud6").hide();
  $("#infoBnAud6").hide();
  $("#infoHinAud6").show();
  $("#infoOrAud6").hide();
  $("#infoEnAud7").hide();
  $("#infoBnAud7").hide();
  $("#infoHinAud7").show();
  $("#infoOrAud7").hide();
  $("#infoEnAud8").hide();
  $("#infoBnAud8").hide();
  $("#infoHinAud8").show();
  $("#infoOrAud8").hide();
  $("#infoEnAud9").hide();
  $("#infoBnAud9").hide();
  $("#infoHinAud9").show();
  $("#infoOrAud9").hide();
  $("#infoEnAud10").hide();
  $("#infoBnAud10").hide();
  $("#infoHinAud10").show();
  $("#infoOrAud10").hide();
  $("#infoEnAud11").hide();
  $("#infoBnAud11").hide();
  $("#infoHinAud11").show();
  $("#infoOrAud11").hide();
  $("#infoEnAud12").hide();
  $("#infoBnAud12").hide();
  $("#infoHinAud12").show();
  $("#infoOrAud12").hide();
  $("#infoEnAud13").hide();
  $("#infoBnAud13").hide();
  $("#infoHinAud13").show();
  $("#infoOrAud13").hide();
  $("#infoEnAud14").hide();
  $("#infoBnAud14").hide();
  $("#infoHinAud14").show();
  $("#infoOrAud14").hide();
  $("#infoEnAud15").hide();
  $("#infoBnAud15").hide();
  $("#infoHinAud15").show();
  $("#infoOrAud15").hide();
};

const OdAudioLoader = () => {
  $("#infoEnAud1").hide();
  $("#infoBnAud1").hide();
  $("#infoHinAud1").hide();
  $("#infoOrAud1").show();
  $("#infoEnAud2").hide();
  $("#infoBnAud2").hide();
  $("#infoHinAud2").hide();
  $("#infoOrAud2").show();
  $("#infoEnAud5").hide();
  $("#infoBnAud5").hide();
  $("#infoHinAud5").hide();
  $("#infoOrAud5").show();
  $("#infoEnAud6").hide();
  $("#infoBnAud6").hide();
  $("#infoHinAud6").hide();
  $("#infoOrAud6").show();
  $("#infoEnAud7").hide();
  $("#infoBnAud7").hide();
  $("#infoHinAud7").hide();
  $("#infoOrAud7").show();
  $("#infoEnAud8").hide();
  $("#infoBnAud8").hide();
  $("#infoHinAud8").hide();
  $("#infoOrAud8").show();
  $("#infoEnAud9").hide();
  $("#infoBnAud9").hide();
  $("#infoHinAud9").hide();
  $("#infoOrAud9").show();
  $("#infoEnAud10").hide();
  $("#infoBnAud10").hide();
  $("#infoHinAud10").hide();
  $("#infoOrAud10").show();
  $("#infoEnAud11").hide();
  $("#infoBnAud11").hide();
  $("#infoHinAud11").hide();
  $("#infoOrAud11").show();
  $("#infoEnAud12").hide();
  $("#infoBnAud12").hide();
  $("#infoHinAud12").hide();
  $("#infoOrAud12").show();
  $("#infoEnAud13").hide();
  $("#infoBnAud13").hide();
  $("#infoHinAud13").hide();
  $("#infoOrAud13").show();
  $("#infoEnAud14").hide();
  $("#infoBnAud14").hide();
  $("#infoHinAud14").hide();
  $("#infoOrAud14").show();
  $("#infoEnAud15").hide();
  $("#infoBnAud15").hide();
  $("#infoHinAud15").hide();
  $("#infoOrAud15").show();
};

export const langSelectHandler = (e) => {
  console.log(e);
  welcomeAudio.pause();
  let langSelectors = $(".lang-selector");
  for (let index = 0; index < langSelectors.length; index++) {
    const element = langSelectors[index];
    $(element).removeClass("chip-active");
    $(element).removeClass("chip-inactive");
    if (element === e.target) {
      $(element).addClass("chip-active");
    } else {
      $(element).addClass("chip-inactive");
    }
  }
  switch (e.target.id) {
    case "enLangSelect":
      // code block
      audioLoaderFn = enAudioLoader();
      languageSelector = "en";
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20english%20final.m4a?sp=r&st=2023-05-20T13:50:12Z&se=2024-06-13T21:50:12Z&sv=2022-11-02&sr=b&sig=7skFqPK17j5C2vQLrla7ZBe7ftEQdUXmCisfT6p6ulE%3D";
      break;
    case "bnLangSelect":
      // code block
      audioLoaderFn = bnAudioLoader();
      languageSelector = "bn";
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20bengali%20final.m4a?sp=r&st=2023-05-20T13:47:18Z&se=2024-06-13T21:47:18Z&sv=2022-11-02&sr=b&sig=VEFgufzuf0Ma%2FeMN9h1yik46aOw7oKLHIN0SGz8z5yY%3D";
      break;
    case "hinLangSelect":
      // code block
      audioLoaderFn = hinAudioLoader();
      languageSelector = "hin";
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20hindi%20final.m4a?sp=r&st=2023-05-20T13:50:56Z&se=2024-06-13T21:50:56Z&sv=2022-11-02&sr=b&sig=l%2FKNFDh3SY60OBmM1M5Bk9z1HSN7OUMNl3LP55oK6QU%3D";
      break;
    case "odLangSelect":
      // code block
      audioLoaderFn = OdAudioLoader();
      languageSelector = "or";
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/welcome-odia-final.mp3?sp=r&st=2023-05-20T13:51:40Z&se=2024-06-13T21:51:40Z&sv=2022-11-02&sr=b&sig=tdbiEnldQlliezR14qsG8YK9UY2urNJZOEUdaTwQeiY%3D";
      break;
    default:
      // code block
      audioLoaderFn = enAudioLoader();
      languageSelector = "en";
      welcomeAudioSrc =
        "https://vrstorage360.blob.core.windows.net/vrmuseum/Welcome%20english%20final.m4a?sp=r&st=2023-05-20T13:50:12Z&se=2024-06-13T21:50:12Z&sv=2022-11-02&sr=b&sig=7skFqPK17j5C2vQLrla7ZBe7ftEQdUXmCisfT6p6ulE%3D";
  }
  i18next.changeLanguage(languageSelector, () => {
    let collection = document.getElementsByTagName("audio");

    // regular for loop
    for (let i = 0; i < collection.length; i++) {
      collection[i].pause();
    }
    audioLoaderFn();
    rerender();
    welcomeAudio = new Howl({
      src: [welcomeAudioSrc],
      html5: true,
    });
    welcomeAudio.play();
  });
};
