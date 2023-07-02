import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('about')
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
          {t('Main page')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          {t('About page')}
        </AppLink>
      </div>
    </div>
  )
}
