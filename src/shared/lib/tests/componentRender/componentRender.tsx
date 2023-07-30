import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../../../config/i18n/i18ForTests'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from '../../../../app/providers/StoreProvider/index'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState
  } = options

  return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
  )
}
