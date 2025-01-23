export type LoginRequest = {
    username: string;
    password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
    accessToken: string;
};
export type LoginResponse = {
    data: any;
    username: string;
    roles: string[];
    accessToken: string;
};
// // 定义的接口
// export const userLogin = async (data?: LoginRequest) => {
//     return post<LoginResponse>({}, '/login', data);
// };

// export const refreshUserInfo = async (data?: reLoginRequest) => {
//     return post<LoginResponse>({}, '/getUserInfo', data);
// };
// // 获取所有的用户
// export const getUserList = () => {
//     return get({}, '/getUserList');
// };
import service from '@/http/request';

export function userLogin(data: LoginRequest) {
    return service({
        url: '/login',
        method: 'POST',
        data
    });
}

//  获取所有的用户
export function getUserList(data) {
    return service({
        url: '/getUserList',
        method: 'get',
        data
    });
}
