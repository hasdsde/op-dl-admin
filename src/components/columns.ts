export const versionColumns: any = [
    {name: 'id', align: 'center', label: '版本id', field: 'id', type: 'primary-key'},
    {name: 'title', align: 'center', label: '标题', field: 'title', new: true, type: 'input'},
    {name: 'num', align: 'center', label: '版本号', field: 'num', new: true, type: 'number'},
    {name: 'startTime', align: 'center', label: '开始时间', field: 'startTime', type: 'time', new: true},
    {name: 'endTime', align: 'center', label: '结束时间', field: 'endTime', type: 'time', new: true},
    {name: 'tag', align: 'center', label: '标签', field: 'tag'},
]


//学生列表
export const studentColumns: any = [
    {name: 'id', align: 'center', label: '学生id', field: 'id', type: 'primary-key', update: true},
    {name: 'name', align: 'center', label: '姓名', field: 'name', type: 'input', new: true, update: true},
    {name: 'number', align: 'center', label: '学号', field: 'number', type: 'number', new: true, update: true},
    {name: 'className', align: 'center', label: '班级', field: 'className', type: 'other'},
    {name: 'major', align: 'center', label: '专业', field: 'major', new: false},
    {name: 'grade', align: 'center', label: '年级', field: 'grade', new: false},
    {name: 'college', align: 'center', label: '学院', field: 'college', new: false},
    {name: 'phone', align: 'center', label: '电话', field: 'phone', type: 'number', new: true, update: true},
    {name: 'createTime', align: 'center', label: '创建时间', field: 'createTime', new: false},
    {
        name: 'emergencyPhone',
        align: 'center',
        label: '紧急电话',
        field: 'emergencyPhone',
        type: 'number',
        new: true,
        update: true
    },
    {
        name: 'status', align: 'center', label: '学生状态', field: 'status', type: 'bool', new: false, option: [
            {label: '正常', value: 1, color: 'primary'},
            {label: '异常', value: 0, color: 'red'}
        ]
    },
    {
        name: 'enable',
        align: 'center',
        label: '账号状态',
        field: 'enable',
        type: 'bool',
        new: true,
        update: true,
        option: [
            {label: '不可用', value: 0, color: 'red'},
            {label: '正常', value: 1, color: 'primary'},
        ]
    },
    {name: 'handle', align: 'center', label: '操作', field: 'handle', new: false},
]
export const columns = {
    '学生表': studentColumns,
}