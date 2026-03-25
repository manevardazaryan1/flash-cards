import apiClient from '../api'
import { API_ENDPOINTS } from '../constants/endpoints/cards'

export const getAll = async () => {
    const response = await apiClient.get(API_ENDPOINTS.getAll)
    return response.data || []
}
