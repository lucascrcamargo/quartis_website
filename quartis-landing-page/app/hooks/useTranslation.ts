import en from "../translations/en.json"

export const useTranslation = () => {
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = en

    for (const k of keys) {
      value = value[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found.`)
        return key
      }
    }

    return value as string
  }

  return { t }
}

