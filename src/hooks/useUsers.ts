import { useEffect, useState } from 'react'
import type { User } from '../types/User'


export function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let mounted = true
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((data: User[]) => {
                if (mounted) setUsers(data)
            })
            .catch(() => setError('Erro ao carregar usuários.'))
            .finally(() => mounted && setLoading(false))


        return () => {
            mounted = false
        }
    }, [])


    return { users, loading, error }
}