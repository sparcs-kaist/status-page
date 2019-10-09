import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { detectBrowserLanguage } from 'utils/language'
import koJson from 'assets/i18n/ko.json'
import enJson from 'assets/i18n/en.json'

class I18nService {
  resources = {
    ko: koJson,
    en: enJson,
  }

  lng = detectBrowserLanguage({
    defaultLanguage: 'en',
    availableLanguages: Object.keys(this.resources),
  })

  init = () =>
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources: this.resources,
        lng: this.lng,
        fallbackLng: 'en',
      })
}

export default new I18nService()
