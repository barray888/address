<template>
  <div class="hello">
    <el-row :gutter="10">
      <el-col :sm="24" :md="8" >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>示例</span>
          </div>
          <el-radio-group v-model="radio" @change="onRadioChange">

            <div class="text-sec" v-for="v in radioArr">
              <el-radio :label="v.id">
                <span v-html="v.text"> </span>
              </el-radio>
            </div>
          </el-radio-group>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="16">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="测试文本">
            <el-input type="textarea" v-model="form.desc" placeholder="把用户信息粘贴到这里来" @input="onTextInput"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="省市">
            <v-distpicker :placeholders="placeholders" :province="select.province" :city="select.city"  :area="select.area" @selected="onSelected"></v-distpicker>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.detail"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item hidden>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
export default {
  name: 'HelloWorld',
  components: { VDistpicker },
  props: {
    msg: String
  },
  data(){
    return {
      form: {
        username:'',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        detail: '',
        phone: null,
      },
      radio: 0,
      radioArr: [
        {
          id: 1,
          text: '张某某 13888999001 云南省昆明市东风西路234号'
        },
        {
          id: 2,
          text: '四川成都市金牛区东风西路182号核工业商务楼602 林某某 13888881234'
        },
        {
          id: 3,
          text: '张某某 云南省昆明市五华区东风西路234号 13888999001'
        },
        {
          id: 4,
          text: '18087238726 丁某某 河南省驻马店市新蔡县街道办事处'
        },
        {
          id: 5,
          text: '河南省驻马店市新蔡县街道办事处 18087238726 丁某某 '
        },
        {
          id: 6,
          text: '四川成都市金牛区东风西路182号核工业商务楼602 \n' +
                  ' 林某某 13888881234 \n'
        },
      ],
      allProvince: ' 北京, 天津, 河北省, 山西省, 内蒙古自治区, 辽宁省, 吉林省, 黑龙江省, 上海, 江苏省, 浙江省, 安徽省, 福建省, 江西省, 山东省, 河南省, 湖北省, 湖南省, 广东省, 广西壮族自治区, 海南省, 重庆, 四川省, 贵州省, 云南省, 西藏自治区, 陕西省, 甘肃省, 青海省, 宁夏回族自治区, 新疆维吾尔自治区, 台湾, 香港特别行政区, 澳门特别行政区, 钓鱼岛',
      select: { province: '', city: '', area: '' },
      placeholders: {
        province: '------- 省 --------',
        city: '--- 市 ---',
        area: '--- 区 ---',
      }
    }
  },
  created: function(){

  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    onSelected(e){
      console.log(e)
    },
    onRadioChange(e){
      let that = this
      this.radioArr.forEach(function(v,k){
        if(k+1 === e){
          that.form.desc = v.text
          that.onTextInput(v.text)
        }
      })
    },
    onTextInput(v){
      let resObj = this.recAddressText(v)
      this.form.username = resObj.name
      this.select.province = resObj.province
      this.select.city = resObj.city
      this.select.area = resObj.area
      this.form.detail = resObj.detail
      this.form.phone = resObj.mobile
    },
    recAddressText(str){
      let that = this
      // 去除左右空白
      str = str.replace(/(^\s*)|(\s*$)/g, "");
      let resObj = {
        province: '',
        city: '',
        area: '',
        detail: '',
        name: '',
        mobile: '',
      }
      let tempArr = []; //["林某某", "13888881234", "四川成都市金牛区东风西路182号核工业商务楼602"] 不分顺序

      // 如果有换行符 拆分并处理每个字符串的空白
      if(str.indexOf('\n') != -1){
        str.split('\n').forEach(function(v,k){
          v.replace(/(^\s*)|(\s*$)/g, "").split(" ").forEach(function(v1,k1){
            if(v1 != ''){
              tempArr.push(v1)
            }
          })
        })
      }else{
        str.replace(/(^\s*)|(\s*$)/g, "").split(" ").forEach(function(v1,k1){
          if(v1 != ''){
            tempArr.push(v1)
          }
        })
      }

      // console.log(tempArr)
      tempArr.forEach(function(v,k){
        if(v.length === 11 && Number(v) != 'NaN'){
          resObj.mobile = v
        }else if(v.length <= 5) {
          resObj.name = v
        }else {
          // 处理地址
          // 兼容没有省字的情况
          let matched_str = (v + that.allProvince).replace(/(.+)(.+)\1/, '$1\n').split('\n')[0]
          let correct_str = (v + that.allProvince).replace(/(.+)(.+)\1/, '$1\n').split('\n').join('').split(',')[0]
          let is_find = that.allProvince.split(',').findIndex(
                  (value) => {
                    return value.replace(/\s+/g,"") === correct_str
                  }
          )
          if(is_find != -1){
            v = v.replace(matched_str,correct_str)
          }
          // console.log(v)
          let reg = /.+?(省|市|自治区|自治州|县|区)/g;
          let res = v.match(reg)

          if(res){
            if( res.length > 0) {
              res.forEach(function (e, i) {
                if(i === 0){
                  let r = e.replace(/(^\s*)|(\s*$)/g, "").replace(/\s+/g," ").split(" ")
                  if(r.length === 1){
                    resObj.province = r[0]
                  }else if(r.length === 2){
                    r.forEach(function(res, k){
                      if(that.allProvince.indexOf(res) != -1){
                        resObj.province = res
                      }
                    })
                  }
                }
                if(i === 1) resObj.city = e.replace(/\s+/g,"")
                if(i === 2) {
                  resObj.area = e.replace(/\s+/g,"")
                  resObj.detail = v.substring(v.indexOf(e.replace(/\s+/g,"")) + e.length)
                }
              })
            }
          }
        }
      })
      return resObj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text-sec {
  margin-top: 25px;
}
</style>
