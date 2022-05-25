export const PHONE_RULES: object = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      message: '请正确输入手机号',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码是6位数字',
      trigger: 'blur'
    }
  ]
}
