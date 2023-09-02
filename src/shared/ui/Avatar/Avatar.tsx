import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Record<string, boolean> = {}

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    }
  }, [size])

  return (
    <div className={classNames(cls.Avatar, {}, [className])}>
      <img
        className={classNames(cls.Avatar, mods, [className])}
        src={src}
        style={styles}
        alt={alt}
      />
    </div>
  )
}
