import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { usePostQuery } from '../hooks/usePosts';

const ReactQueryPage = () => {
    const { data1, isLoading1, isError1, error1, refetch1 } = usePostQuery();

    // 아이디가 여러개 일 경우
    const ids = [1, 2, 3, 4];

    const fetchPostDetail = (id) => {
        return axios.get(`https://my-json-server.typicode.com/Mitier26/NoonaReact2/posts/${id}`);
    };

    const results = useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: ['posts', id],
                queryFn: () => fetchPostDetail(id),
            };
        }),
        combine: (results) => {
            return {
                data: results.map((result) => result.data.data),
            };
        },
    });

    // queryData는 queryFn 에서 보내주는 값이다.
    // 여기에 queryKey 에서 같이 보낸 것이 들어 있다.
    const fetchPost = (queryData) => {
        const id = queryData.queryKey[1];
        return axios.get('https://my-json-server.typicode.com/Mitier26/NoonaReact2/posts');
    };
    // reactQuery의 대표 훅 useQuery
    // 여기에 들어오면 바로 시작된다. 바로 시작 되지 않게 하는 방법도 있다.
    const { isLoading, data, isError, error, refetch } = useQuery({
        // 각각의 호출 이름, 이름으로 데이터를 가지고 올 수 있다.
        // 유니크 한 이름을 사용해야한다.
        queryKey: ['posts', 1],
        // queryKey: ['posts', 1, 'keyword'],
        // 'posts' 다음에 같이 보내 주고 싶은 값을 추가 할 수 있다.

        // 호출 하고 싶은 API
        queryFn: fetchPost,
        retry: 1, // 재시도 횟수 설정

        // 매번 api를 호출할 필요가 없는 경우가 있다.
        // 메뉴, 고정되어 있는 것
        // 이건 것들이 페이지에 들어 올 때 마다 작동하면 엄청난 낭비다.
        // api를 다시 읽는 간격을 조절 할 수 있다.
        staleTime: 5000,
        // query 에는 사이클리 있다.
        // 신선한, 오래된, 받는중
        // 받아온 정보가 오래된 stale 상태가 되면 Fetching 받아오고
        // fresh 상태가된다. 기본값은 0으로 되어 있어 매번 데이터를 받아온다.
        // 데이터가 fresh 상태이면 api를 읽어 오지 않는다.

        // !! gcTime 이 staleTime 보다 짧아서 먼저 사라진 경우
        // staleTime과는 상관 없이 api를 호출한다.

        // 기본적으로 받앙는 data에는 다른 정보들이 같이 들어 있다.
        // data 내에서 data 만 가지고 오는 방법이 있다.
        select: (data) => {
            return data.data;
        },

        // 처음에 작동하지 않고
        // 버튼을 클릭하면 refetch 가 실행되면서 api 호출되게 할 수 있다.
        enabled: false,
        // enabled: !조건, // 조건을 넣어서 작동 시키는 것을 할 수 있다.

        // 3초마다 계속 api 호출
        // refetchInterval: 3000,

        // 처음 한번 호출하고 다시 호출 하지 않는다.
        // refetchOnMount: false, // true : 매번 호출

        // 윈도우 창이 포커스되면 api를 호출 한다.
        // refetchOnWindowFocus: true,

        // 가비지컬렉터의 작동 주기 ms, 캐쉬가 사용되지 않을 때 5 초 후 캐쉬를 지운다. 기본값 5분
        gcTime: 5000,
    });

    // 캐쉬 기능
    // useQuery는 데이터를 성공적으로 불러오면 캐쉬에 저장을 한다.
    // 캐쉬를 확인 하는 것은 ReactQueryDevtools 을 이용하면 된다.
    // 캐쉬가 있다고 해서 api를 호출 안 하는 것이 아니다.

    console.log(isLoading);
    console.log(data);
    // API 호출에 실패하면 재시도를 한다. 기본 3번
    console.log(isError, error);

    if (isLoading) {
        return <h1>로딩중...</h1>;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div>
            {data?.map((item) => (
                <div>{item.title}</div>
            ))}
            {/* useQuery에 있다.  */}
            <button onClick={refetch}>post리스트 다시 들고오기</button>
        </div>
    );
};

export default ReactQueryPage;
