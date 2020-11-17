<template>
    <div class="card">
        <van-nav-bar
          title="个人资料修改"
          left-text=""
          right-text=""
          left-arrow
          @click-left="onClickLeft"
          style="position: fixed;width: 100%;"
        />
        <van-form @submit="onSubmit" class="form">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="name"
                name="name"
                label="昵称"
                placeholder="昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <van-field
                readonly
                clickable
                name="sex"
                :value="sex"
                label="性别"
                placeholder="点击选择性别"
                @click="showPicker = true"
                />
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
            </van-popup>
            <van-field
                v-model="realName"
                name="realName"
                label="真实姓名"
                placeholder="真实姓名"
                :rules="[{ required: true, message: '请填写真实姓名' }]"
            />
            <van-field
                readonly
                clickable
                name="dateBirth"
                :value="dateBirth"
                label="出生日期"
                placeholder="点击选择出生日期"
                @click="showPickerDate = true"
            />
            <van-popup v-model="showPickerDate" position="bottom">
                <van-datetime-picker  
                    v-model="currentDate"
                    type="date"
                    title="选择日期"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="onConfirmDate"
                    @cancel="showPickerDate = false"
                />
            </van-popup>
            <van-field
                readonly
                clickable
                name="img"
                :value="img"
                label="上传图片"
                placeholder="点击上传图片"
            />
            <img :src='img' />
            <van-uploader :after-read="afterRead" />

            
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>


<script>
export default {
    data(){
        return {
            username: '',
            password: '',
            realName:'',
            name:'',
            sex: '',
            dateBirth: '',
            columns: ['男', '女'],
            showPicker: false,
            showPickerDate: false,
            minDate: new Date(1980, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate:  '',
            img:''
        }
    },
    created (){
    },
    methods :{
        onClickLeft(){
            this.$router.go(-1)
        },
        onConfirm(value) {
            this.sex = value;
            this.showPicker = false;
        },
        onConfirmDate(value){
            this.dateBirth = value.getFullYear() + '-' + value.getMonth()+1 + '-' + value.getDate()
            this.showPickerDate = false;
        },
        onSubmit(values) {
            console.log('submit', values);
        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            this.img = file.file.name;
        },
        
    }
}
</script>


<style scoped>
    .form{
        margin-top: 60px;
        position: fixed;
        width: 100%;
    }
</style>