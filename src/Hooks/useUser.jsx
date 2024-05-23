import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const {data: AllUserData= [], isLoading: loading, refetch} = useQuery({
        queryKey: ['AllUserData'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/user-data-get');
            return res.json();
        }
    })

    return [AllUserData, loading, refetch]
}

export default useUser;