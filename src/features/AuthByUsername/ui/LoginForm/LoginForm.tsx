import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Username')}
        autofocus={true}
        type="text"
        className={cls.input}/>
      <Input
        placeholder={t('Password')}
        type="text"
        className={cls.input}/>
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} >
        {t('Login')}
      </Button>
    </div>
  )
}
