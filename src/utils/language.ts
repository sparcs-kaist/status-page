interface detectBrowserLanguageParams {
  availableLanguages: string[]
  defaultLanguage: string
}

// eslint-disable-next-line import/prefer-default-export
export const detectBrowserLanguage = ({
  availableLanguages,
  defaultLanguage,
}: detectBrowserLanguageParams) =>
  [...(window.navigator.languages || []), window.navigator.language]
    .filter(Boolean)
    .map(language => language.substr(0, 2))
    .find(language => availableLanguages.includes(language)) || defaultLanguage
