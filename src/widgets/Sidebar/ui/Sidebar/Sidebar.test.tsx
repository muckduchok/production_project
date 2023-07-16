import { Sidebar } from './Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from '../../../../shared/lib/tests/renderWithTranslations/renderWithTranslations'

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test render', () => {
    renderWithTranslations(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
