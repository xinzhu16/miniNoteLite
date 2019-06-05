const NOTO_TYPE_MAP = {
  L1: {
    type: 'level_1',
    desc: '个人',
  },
  L2: {
    type: 'level_2',
    desc: '生活',
  },
  L3: {
    type: 'level_3',
    desc: '工作',
  },
  L4: {
    type: 'level_4',
    desc: '工作',
  },
  L5: {
    type: 'level_5',
    desc: '未分类'
  }
};

export const NOTE_TYPE = {
  L1: 'level_1',
  L2: 'level_2',
  L3: 'level_3',
  L4: 'level_4',
  L5: 'level_5'
};


export const CLASS_ARR = [{
  desc: '个人',
  type: NOTE_TYPE.L1
}, {
  desc: '生活',
  type: NOTE_TYPE.L2
},{
  desc: '工作',
  type: NOTE_TYPE.L3
},{
  desc: '所有标签',
  type: NOTE_TYPE.L4
},{
  desc: '未分类',
  type: NOTE_TYPE.L5
}];

export const TYPE_TO_COLOR_MAP = {
  [NOTE_TYPE.L1]: 'red',
  [NOTE_TYPE.L2]: 'yellow',
  [NOTE_TYPE.L3]: 'green',
  [NOTE_TYPE.L4]: '#693536',
  [NOTE_TYPE.L5]: '#423326'
};

export const NOTE_STATE = {
  VALID: 'valid',
  DEL: 'del',
  STASH: 'stash'
}

export class Note {
  constructor(beginDate, endDate, type = NOTE_TYPE.L4, state = NOTE_STATE.VALID) {
    this.type = type;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.content = '';
    this.state = state;
  }
}

export const MORE_TYPE = {
  DUSTBIN: 'dustbin',
  HOME: 'home'
}

export const MORE_ARR = [{
  desc: '垃圾箱',
  type: MORE_TYPE.DUSTBIN
},
  {
    desc: '首页',
    type: MORE_TYPE.HOME
  }
// ,{
//   desc: '批量删除',
//   type: NOTE_TYPE.L1
// }
]
