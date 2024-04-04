import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// const fetchPost = (postId) => {
//     // const id = queryData.queryKey[1];
//     return axios.get('http://localhost:3004/posts');
// };

// export const usePostQuery = (postId) => {
//     return useQuery({
//         queryKey: ['posts', postId],
//         queryFn: () => fetchPost(postId),
//         retry: 1,
//         select: (data) => {
//             return data.data;
//         },
//     });
// };

const fetchPost = () => {
    // const id = queryData.queryKey[1];
    return axios.get('https://my-json-server.typicode.com/Mitier26/NoonaReact2/posts');
};

export const usePostQuery = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPost(),
        retry: 1,
        select: (data) => {
            return data.data;
        },
    });
};
