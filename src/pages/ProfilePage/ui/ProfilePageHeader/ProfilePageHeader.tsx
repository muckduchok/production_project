import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onDeclineEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
    // dispatch(profileActions.setReadonly(true))
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
        <Text title={t('Profile')}/>
        <div className={cls.buttons}>
          {readonly
            ? (
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit')}
              </Button>
              )
            : (
              <>
                <Button
                  className={cls.saveBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onSave}
                >
                  {t('Save')}
                </Button>
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onDeclineEdit}
                >
                  {t('Decline')}
                </Button>
              </>
              )
          }
        </div>
    </div>
  )
}
