import { useHttp } from "../hooks/useHttp";
const useChuckService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'https://api.chucknorris.io/jokes/';

    const getAllCategories = async () => {
        const data = await request(`${_apiBase}categories`);
        return data
    }

    const getQueate = async (category = '') => {
        const data = await request(`${_apiBase}random?category=${category}`);
        return data
    }

    return { loading, error, clearError, getAllCategories, getQueate }
}

export default useChuckService;