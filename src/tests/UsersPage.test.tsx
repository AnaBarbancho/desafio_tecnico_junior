import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UsersPage from '../pages/UsersPage'


// mock global fetch
const mockUsers = [
    { id: 1, name: 'Ana', email: 'ana@example.com', phone: '123', company: { name: 'Cia' }, address: { city: 'SP' } },
    { id: 2, name: 'Bruno', email: 'bruno@example.com', phone: '456', company: { name: 'Cia2' }, address: { city: 'RJ' } },
]


beforeEach(() => {
    global.fetch = vi.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve(mockUsers) } as any)
    ) as any
})


afterEach(() => {
    vi.restoreAllMocks()
})


it('renders users and filters by search and opens modal', async () => {
    render(<UsersPage />)


    await waitFor(() => expect(screen.getByText('Ana')).toBeInTheDocument())


    // search
    const input = screen.getByPlaceholderText(/buscar usuário/i)
    await userEvent.type(input, 'Bruno')
    expect(screen.queryByText('Ana')).not.toBeInTheDocument()
    expect(screen.getByText('Bruno')).toBeInTheDocument()


    // open modal
    await userEvent.click(screen.getByText('Bruno'))
    expect(screen.getByText(/Empresa:/i)).toBeInTheDocument()
})