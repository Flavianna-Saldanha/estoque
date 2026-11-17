'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getServerApi } from '@/lib/server-api'
import { getFieldErrors } from '@/lib/utils'
import { userSchema } from '@/schemas/user'
import { userService } from '@/services/user'

export async function upsertUserAction(prevState: any, formData: FormData) {
    const id = formData.get('id') as string | null
    const password = formData.get('password') as string

    // Custom validation for password
    if (!id && (!password || password.length < 6)) {
        return {
            error: "Senha é obrigatória e deve ter pelo menos 6 caracteres",
            fieldErrors: { password: ["Senha inválida"] }
        }
    }
    if (id && password && password.length < 6) {
        return {
            error: "Senha deve ter pelo menos 6 caracteres",
            fieldErrors: { password: ["Senha muito curta"] }
        }
    }

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    // Validate fields
    const validation = userSchema.safeParse(rawData)

    if (!validation.success) {
        return {
            error: "Erro de validação",
            fieldErrors: getFieldErrors(validation.error)
        }
    }

		const upsertResult = await userService.upsertUser(
			id, 
			rawData,
			formData.get('avatar') as File
		);

    const api = await getServerApi()

    if (upsertResult.data.error) {
            return { error: upsertResult.data.error }
        }

    revalidatePath('/users')
    redirect('/users')
}

export async function deleteUserAction(id: string) {
    const api = await getServerApi()
    try {
        const response = await api.delete(`/api/users/${id}`)

        if (response.status !== 204 && response.data?.error) {
            return { error: response.data.error }
        }

        revalidatePath('/users')
        return { error: null }
    } catch (error: any) {
        return { error: error.response?.data?.error || 'Erro ao deletar usuário' }
    }
}
