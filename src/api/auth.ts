// import { get } from '@/http/request';

// // 角色列表接口
// export const getAuthList = async (data) => {
//     return get({}, '/getAuthList', data);
// };
import service from '@/http/request';

// 角色列表接口
export function getAuthList() {
    return service({
        url: '/getAuthList',
        method: 'get' //post put del
    });
}
