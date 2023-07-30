import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value = '',
    onChange,
    type = 'text',
    placeholder = '',
    autofocus,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const [isFocus, setIsFocus] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autofocus) {
      setIsFocus(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onFocus = () => {
    setIsFocus(true)
  }
  const onBlur = () => {
    setIsFocus(false)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeolder}>
        {`${placeholder}>`}
      </div>}

      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocus && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  )
})
