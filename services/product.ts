/* eslint-disable @typescript-eslint/no-unused-vars */
import { getServerApi } from "@/lib/server-api";
import { Product } from "@/types/product";

export const productService = {
    getProducts: async (offset: number = 0, limit: number = 10, name?: string) => {
        try {
            const api = await getServerApi();
            const response = await api.get('/api/products', {
                params: { offset, limit, name }
            });
            return response.data;
        } catch (error) {
            return { error: 'Erro ao buscar produtos', data: null };
        }
    },

    getProductById: async (id: string) => {
        try {
            const api = await getServerApi();
            const response = await api.get(`/api/products/${id}`);
            return response.data;
        } catch (error) {
            return { error: 'Erro ao buscar produto', data: null };
        }
    },

		upsertProduct: async (id: string | number | null, payload: Omit<Product, "id">) => {
			try {
            const api = await getServerApi();

						let response;
						if (id) {
							// Update
							response = await api.put(`/api/products/${id}`, payload)
						} else {
							// Create
							response = await api.post('/api/products', payload)
						}
            return response.data;
        } catch (error) {
            return { error: 'Erro ao atualizar/inserir produto', data: null };
        }
		}
};
