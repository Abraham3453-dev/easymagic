import I18n, { fallbacks } from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";
import es from "./locales/es";
import AsyncStorage from "@react-native-async-storage/async-storage";

const locales = RNLocalize.getLocales();
I18n.locale = 'en-EN';
I18n.defaultLocale = 'en-EN';
// if (Array.isArray(locales)) {
//   I18n.locale = locales[0].languageTag;
// }

AsyncStorage.getItem('locale')
.then(
  data => {
      // console.log(JSON.stringify(data))
      // console.log('Language ============= ', data)
      if (data != undefined && data != null && data.length > 0) {
        I18n.locale = data;
        I18n.defaultLocale = data;
      }
  },
  error => {
      console.log(JSON.stringify(error))
  }
)

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  de,
  es
};

export default I18n;