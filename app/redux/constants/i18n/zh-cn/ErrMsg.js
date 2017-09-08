export default { 
   // session error code
  '-10000': '登录失败',
  '-10001': '会话过期',
  '-10002': '权限不足',
  '-10003': '邮箱或密码不能为空',

  '-10100': '用户名不能为空',
  '-10101': 'Email不能为空',
  '-10102': '邮箱已被注册',
  '-10103': '密码不能为空',
  '-10104': '文件上传有误',
  '-10105': '导入文件不能为空',
  '-10106': '该用户不存在',
  '-10107': '更新失败',
  '-10108': '选择对象不能为空',

  '-10200': '组名不能为空',
  '-10201': '该组不存在',
  '-10202': '选择对象不能为空',

  // issue
  '-11100': '问题类型不能为空',
  '-11101': 'Schema不存在',
  '-11102': '时间跟踪字段格式有误',
  '-11103': '问题不存在或不属于此项目',
  '-11104': '指定经办人不能为空',
  '-11105': '过滤器名称不能为空',
  '-11106': '过滤器名称不能重复',
  '-11107': '过滤器不存在或不属于此项目',
  '-11108': '主题不能为空',
  '-11109': '拷贝对象必须指定',
  '-11110': '父问题对象不存在或不属于此项目',
  '-11111': '父问题对象必须指定',

  '-11121': '必须指定链出问题',
  '-11122': '必须指定链入问题',
  '-11123': '链接关系指定有误',
  '-11124': '链接关系已存在',
  '-11125': '此链接不存在',

  // comments error code
  '-11200': '备注内容不能为空',
  '-11201': '备注不存在或不属于此项目',
  '-11202': '回复ID不能为空',
  '-11203': '该回复不存在',
  '-11204': '操作有误',
  
  // worklog error code
  '-11300': '耗费时间不能为空',
  '-11301': '耗费时间格式不正确',
  '-11302': '开始时间不能为空',
  '-11303': '剩余时间调整方式不正确',
  '-11304': '必须指定剩余时间',
  '-11305': '剩余时间指定格式不正确',
  '-11306': '必须制定缩减时间',
  '-11307': '缩减时间格式不正确',
  '-11308': '问题不存在',
  '-11309': '工作日志不存在或不属于此问题',
  
  // module error code
  '-11400': '模块名称不能为空',
  '-11401': '模块名称不能重复',
  '-11402': '模块不存在或不属于此项目',
  '-11403': '模块在问题中被使用',
  
  // version error code
  '-11500': '版本名称不能为空',
  '-11501': '版本名称不能重复',
  '-11502': '版本开始时间必须小于结束时间',
  '-11503': '版本不存在或不属于此项目',
  '-11504': '版本在问题中被使用',

  // type error code
  '-12000': '类型名称不能为空',
  '-12001': '类型名称不能重复',
  '-12002': '类型缩码不能为空',
  '-12003': '类型缩码不能重复',
  '-12004': '类型关联界面不能为空',
  '-12005': '类型关联工作流不能为空',
  '-12006': '类型不存在或不属于此项目',
  '-12007': '类型在问题中被使用',

  // workflow error code
  '-12100': '工作流名称不能为空',
  '-12101': '工作流不存在或不属于此项目',
  '-12102': '该工作流已绑定了问题类型',

  // field error code
  '-12200': '字段名称不能为空',
  '-12201': '字段键值不能为空',
  '-12202': '该键值已被系统占用',
  '-12203': '键值不能重复',
  '-12204': '字段类型不能为空',
  '-12205': '字段类型值不正确',
  '-12206': '字段不存在或不属于此项目',
  '-12207': '该字段在界面中被使用',

  // screen error code
  '-12300': '界面名称不能为空',
  '-12301': '界面不存在或不属于此项目',
  '-12302': '该界面已绑定了问题类型',
  '-12303': '该界面在流程中被使用',

  // state error code
  '-12400': '状态名称不能为空',
  '-12401': '状态名称不能重复',
  '-12402': '状态不存在或不属于此项目',
  '-12403': '状态在问题中被使用',
  '-12404': '状态在工作流中被使用',

  // resolution error code
  '-12500': '结果名称不能为空',
  '-12501': '结果名称不能重复',
  '-12502': '结果不存在或不属于此项目',
  '-12503': '结果在问题中被使用',

  // priority error code
  '-12600': '优先级名称不能为空',
  '-12601': '优先级名称不能重复',
  '-12602': '优先级不存在或不属于此项目',
  '-12603': '优先级在问题中被使用',

  // role error code
  '-12700': '角色名称不能为空',
  '-12701': '权限项值不正确',
  '-12702': '角色不存在或不属于此项目',
  '-12703': '角色在项目中被使用',

  // event error code
  '-12800': '事件名称不能为空',
  '-12801': '事件名称不能重复',
  '-12802': '事件不存在或不属于此项目',

  // project error code
  '-14000': '项目名称不能为空',
  '-14001': '项目键值不能为空',
  '-14002': '项目键值已被占用',
  '-14003': '指定负责人不存在',
  '-14004': '项目不存在',
  '-14005': '必须指定负责人',
  '-14006': '项目不存在',
  '-14007': '没有选择对象',
  '-14008': '没有指定状态',
  '-14009': '该项目已关闭',

  // mysetting error code
  '-15000': '用户不存在',
  '-15001': '原密码不能为空',
  '-15002': '原密码不正确',
  '-15003': '新密码不能为空',
  '-15004': '密码重置失败',
  '-15005': '用户姓名不能为空',

  // file error code
  '-15100': '文件不存在',
  '-15101': '文件上传失败',
  '-15102': '文件删除失败' 
};
