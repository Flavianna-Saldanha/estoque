import { getServerApi } from "@/lib/server-api";

export const userService = {
    getUsers: async (offset: number = 0, limit: number = 10) => {
        try {
            const api = await getServerApi();
            const response = await api.get('/api/users', {
                params: { offset, limit }
            });
            return response.data;
        } catch (error) {
            return { error: 'Erro ao buscar usuários', data: null };
        }
    },

    getUserById: async (id: string) => {
        try {
            const api = await getServerApi();
            const response = await api.get(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            return { error: 'Erro ao buscar usuário', data: null };
        }
    },

		upsertUser: async (
			id: string | null, 
			rawData: { 
				name: FormDataEntryValue | null; 
				email: FormDataEntryValue | null; 
				password: FormDataEntryValue | null;
			},
			avatar: File | null = null
		) => {
			try {
				const api = await getServerApi();
				let response;
				if (!id) {
					 response = await api.post('/api/users', {
              name: rawData.name,
              email: rawData.email,
              password: rawData.password
          })
					return response.data;		
				}

				if (id) {
					const payload = new FormData()
            payload.append('name', rawData.name as string)
            payload.append('email', rawData.email as string)
            if (rawData.password) payload.append('password', rawData.password)

            if (avatar && avatar.size > 0) {
                payload.append('avatar', avatar)
            }

            response = await api.put(`/api/users/${id}`, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
						return response.data;		
				}
			} catch (error) {
				return { error: 'Erro ao inserir/atualizar usuário', data: null };
			}
		}
};
