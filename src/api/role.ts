import service from '@/http/request';

// 角色列表接口
export function getRoleList(data) {
    return service({
        url: '/getRoleList',
        method: 'get',
        data
    });
}
