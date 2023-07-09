import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const translate = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames('', {}, [className])}
        onClick={translate}>
        {t('lang')}
      </Button>
  )
}