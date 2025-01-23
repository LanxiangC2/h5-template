import { defineStore } from 'pinia';
export const useSettingStore = defineStore('settingStore', {
    state: () => {
        return {
            count: 0
        };
    },
    actions: {
        addCount() {
            this.count++;
        }
    }
});
