import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];

}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b5616a484e594c668e0afeb6a3205c73",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
/*    
    (gameQuery: GameQuery) => useQuery<FetchResponse<T>,Error>({
      queryKey: ["games", gameQuery],
      queryFn: () => apiClient.get<FetchResponse<T>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        },
      },).then(res => res.data),
      staleTime: 24 * 60 * 60 * 1000, // 24 hours.
    });
*/
  }
}

export default APIClient;