import axios, { type AxiosPromise } from 'axios';
import type { FoodData } from '../interface/FoodData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
    return axios.post(API_URL + '/food', data);
}

const deleteData = async (id: number): AxiosPromise<any> => {
    return axios.delete(`${API_URL}/food/${id}`)
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['food-data']
            });
        }
    });

    return mutate;
}

export function useFoodDataDelete() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['food-data']
            });
        }
    });
}