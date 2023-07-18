import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(!isAuthModal)
  }, [isAuthModal])

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onToggleModal}
        className={cls.links}>
          {t('Login')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal} ></Modal>

    </div>
  )
}
