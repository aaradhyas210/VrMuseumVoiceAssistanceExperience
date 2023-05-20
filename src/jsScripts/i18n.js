import $ from "jquery";
import i18next from "i18next";
import { enResourceObj } from "./res/strings.en";
import { hinResourceObj } from "./res/strings.hin";
import { bnResourceObj } from "./res/strings.bn";
import { orResourceObj } from "./res/strings.or";
import LanguageDetector from "i18next-browser-languagedetector";
import jqueryI18next from "jquery-i18next";

export const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $("body").localize();
};

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(
      {
        debug: true,
        fallbackLng: "en",
        resources: {
          en: {
            translation: enResourceObj,
          },
          hin: {
            translation: hinResourceObj,
          },
          bn: {
            translation: bnResourceObj,
          },
          or: {
            translation: orResourceObj,
          },
        },
      },
      (err, t) => {
        if (err) return console.error(err);

        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });

        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $("body").localize();
      }
    );
});
