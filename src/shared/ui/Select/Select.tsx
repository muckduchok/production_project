import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  readonly?: boolean
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props
  const optionList = useMemo(() => {
    return options?.map(opt => (
      <option
        className={cls.option}
        key={opt.value}
        value={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options])
  const mods: Record<string, boolean> = {
    [cls.readonly]: readonly
  }

  const onChangeHanlder = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        disabled={readonly}
        value={value}
        onChange={onChangeHanlder}
      >
        {optionList}
      </select>
    </div>
  )
})
