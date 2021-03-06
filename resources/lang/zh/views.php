<?php

return [
    /*
     |------------------------------------------------------------
     | 视图相关本地化语言文件
     |------------------------------------------------------------
     |
     | @author Cali
     |
     */

    // 用户验证
    'auth'      => [
        // 登录页面
        'login'    => [
            'header_title'    => '登录',
            'credential'      => '邮箱/手机/昵称',
            'password'        => '密码',
            'remember_me'     => '记住我, 下次免登录',
            'forgot_password' => '忘记密码?',
            'register'        => '注册',
            'no_account'      => '还没有帐号?',
            'error'           => '填写错误',
            'in'              => '到'
        ],
        // 注册页面
        'register' => [
            'header_title'     => '注册',
            'username'         => '昵称',
            'password'         => '密码',
            'email'            => '邮箱地址',
            'confirm_password' => '确认密码',
            'in'               => '在',
            'have_account'     => '已经有帐号了?'
        ],
        // 密码重置页面
        'reset'    => [
            'title'        => '重置密码',
            'button'       => '重置',
            'placeholder'  => '邮箱地址',
            'success'      => '成功发送',
            'error'        => '出错了',
            'new_password' => '新密码',
            'back'         => '返回主页'
        ],
        // 社交平台绑定页面
        'social'   => [
            'title'    => '绑定帐号',
            'headings' => [
                'connect' => '通过:service绑定帐号',
                'tip'     => '请填入以下信息完成注册'
            ],
            'errors'   => [
                'empty' => '请输入内容',
                'email' => '邮箱格式不正确'
            ],
            'inputs'   => [
                'username' => '用户名',
                'name'     => '显示的昵称',
                'email'    => '电子邮件地址'
            ],
            'success'  => '成功绑定帐号!',
            'failed'   => '出错了, 请刷新重试',
            'loading'  => '加载中...',
            'services' => [
                'qq'     => 'QQ',
                'weibo'  => '微博',
                'wechat' => '微信'
            ]
        ],
    ],

    'dashboard' => [
        'home' => [
            'title' => '主页'
        ]
    ],

    // 后台页面
    'admin'     => [
        'main-title'            => '后台管理',
        'titles'                => [
            'dashboard'   => '仪表盘',
            'users'       => [
                'main' => '用户',
                'sub'  => [
                    'index'       => '用户管理',
                    'profile'     => '修改个人资料',
                    'invitations' => '邀请码管理'
                ]
            ],
            'courses'     => [
                'main' => '课程',
                'sub'  => [
                    'index' => '课程管理',
                    'edit'  => '修改课程信息',
                    'add'   => '添加课程'
                ]
            ],
            'posts'       => [
                'main' => '文章',
                'sub'  => [
                    'index' => '文章管理',
                    'edit'  => '修改文章信息',
                    'add'   => '添加文章'
                ]
            ],
            'data-center' => [
                'main' => '数据中心',
                'sub'  => [
                    'index'   => '数据统计',
                    'factory' => '模型工厂'
                ]
            ],
            'settings'    => [
                'main' => '站点设置',
                'sub'  => [
                    'general'  => '常规设置',
                    'advanced' => [
                        'main'        => '高级设置',
                        'develop'     => '开发设置',
                        'database'    => '数据库设置',
                        'cache'       => '缓存设置',
                        'sub-domains' => '二级域名设置'
                    ],
                    'display'  => '界面设置',
                    'services' => '第三方服务',
                    'upgrade'  => '系统更新',
                ]
            ]
        ],
        'theme-color-changed'   => '主题已更换',
        'theme-setting-changed' => ':type 设置已更改',
        'navbar'                => [
            'settings' => [
                'fixed-header'   => '顶部导航固定',
                'fixed-sidebar'  => '边栏固定',
                'horizontal-bar' => '边栏水平/垂直',
                'toggle-sidebar' => '边栏最小化',
                'compact-menu'   => '小菜单',
                'hover-menu'     => '鼠标悬停菜单',
                'theme-color'    => '修改主题颜色',
                'reset'          => '重置设置',
                'errors'         => [
                    'static-header-horizontal-bar' => '非固定的顶部导航无法与固定水平边栏兼容, 已重新设置',
                    'fixed-sidebar-hover-menu'     => '固定边栏无法与悬停菜单兼容, 已重新设置'
                ]
            ],
            'logout'   => '注销'
        ],
        'footer'                => [
            'current-version' => '当前版本'
        ],
        'navigation'            => [

        ],
        'records'               => [
            'user'   => '用户',
            'course' => '课程',
            'post'   => '文章'
        ],
        'operation'             => [
            'search-heading'  => '查找:keyword的相关:record',
            'search'          => '搜索:record',
            'bulk-actions'    => '批量操作',
            'view'            => '查看',
            'edit'            => '编辑',
            'delete'          => '删除',
            'trash'           => '回收站',
            'revert'          => '还原',
            'quick-edit'      => '快速编辑',
            'delete-messages' => [
                'title'   => "确定要删除吗?",
                'text'    => '删除后将无法恢复, 谨慎选择',
                'cancel'  => "手贱了",
                'confirm' => "确定删除",
                'success' => '成功删除'
            ],
            'stick-messages' => [
                'title'   => '确定要加精吗?',
                'text'    => '加精后随便恢复, 随意加精',
                'cancel'  => '手抽筋了',
                'confirm' => '确定加精',
                'success' => '已成功设置为精品'
            ],
            'essencify-messages' => [
                'title'   => '确定要置顶吗?',
                'text'    => '置顶后随便恢复, 随意置顶',
                'cancel'  => '按错了',
                'confirm' => '确定置顶',
                'success' => '已成功置顶'
            ],
            'trash-message' => [
                'title'   => '确认要放入回收站吗?',
                'text'    => '放入回收站后, 可以恢复',
                'cancel'  => '按错了',
                'confirm' => '确定放入回收站',
                'success' => '已成功放入回收站'
            ],
            'revert-message' => [
                'title'   => '确认要还原吗?',
                'text'    => '还原后重新恢复原有状态',
                'cancel'  => '手贱了',
                'confirm' => '确定还原',
                'success' => '还原成功'
            ],
            'no-result'       => '暂无相关:record',
            'publish'         => '确认发布',
            'published'       => '发布成功',
            'published-error' => '发布失败,请重新尝试',
            'update'          => '确认修改',
            'updated'         => '修改成功',
            'updated-error'   => '修改失败，请重新尝试',
            'return'          => '返回',
        ],
        'pages'                 => [
            'dashboard'   => [
                'new-users-this-month'    => '本月新用户',
                'page-views-this-month'   => '本月站点浏览量',
                'new-courses-this-month'  => '本月新课程',
                'new-Posts-this-month'    => '本月新文章',
                'new-Comments-this-month' => '本月新评论',
                'unique-ips-today'        => '今日独立IP',
                'unique-visitors-today'   => '今日网站UV',
                'visitors'                => '访客流量',
                'browser-stats'           => '访客浏览器比例',
                'city-stats'              => '访客地区比例',
                'uri'                     => '页面排行',
                'home'                    => '主页'
            ],
            'users'       => [
                'index'       => [
                    'heading' => '用户管理',
                    'table'   => [
                        'registered_at' => '注册于',
                        'count'         => '每页:perPage名用户, 累计共:total名用户'
                    ],
                ],
                'profile'     => [
                    'basics'   => [
                        'heading' => '基本个人资料',
                    ],
                    'password' => [
                        'heading' => '密码设置',

                    ],
                    'social'   => [
                        'heading'        => '社交帐号设置',
                        'not-found'      => '暂未开启任何社交平台绑定服务',
                        'tips'           => '绑定帐号可以免去输入帐号密码的烦恼',
                        'bind'           => '绑定',
                        'unbind'         => '解除绑定',
                        'bound'          => '已绑定',
                        'unbound'        => '未绑定',
                        'bind-success'   => '成功绑定:service帐号',
                        'bind-error'     => '您的:service帐号已绑定其他用户',
                        'unbind-success' => '成功解绑:service',
                    ],
                    'avatar'   => [
                        'heading'        => '头像设置',
                        'update-success' => '头像更新成功',
                        'update-failure' => '头像更新失败'
                    ]
                ],
                'invitations' => [
                    'tips'        => '将注册码发送给好友后, 访问这个链接进行注册',
                    'unavailable' => '您已开启注册功能',
                    'heading'     => '生成注册码',
                    'quantity'    => '选择生成数量',
                    'generate'    => '生成',
                    'table'       => [
                        'code' => '注册码',
                        'date' => '生成时间'
                    ],
                    'generated'   => '已成功生成注册码',
                    'no-result'   => '目前没有注册码'  
                ]
            ],
            'courses'     => [
                'index' => [
                    'heading' => '课程管理',
                    'table'   => [
                        'category'   => '分类目录',
                        'author'     => '作者',
                        'created_at' => '创建于',
                        'count'      => '每页:perPage门课程, 累计共:total门课程'
                    ],
                    'add'     => [
                        'index'   => '添加课程',
                        'publish' => '发布',
                        'category' => '分类目录'
                    ],
                    'status' => [
                        '0' => '草稿',
                        '1' => '等待审核',
                        '2' => '已发布',
                        '3' => '回收站'
                    ],
                    ''
                ],
            ],
            'posts'       => [
                'index' => [
                    'heading'   => '文章管理',
                    'table'     => [
                        'author'     => '作者',
                        'created_at' => '创建于',
                        'count'      => '每页:perPage帖子, 累计共:total帖子'
                    ],
                    'add'       => '添加文章',
                    'status'    => [
                        '0' => '草稿',
                        '1' => '等待审核',
                        '2' => '已发布',
                        '3' => '回收站'
                    ],
                    'sticky'    => [
                        '0' => '非精品',
                        '1' => '精品',
                    ],
                    'essential' => [
                        '0' => '非置顶',
                        '1' => '置顶'
                    ]
                ]
            ],
            'data-center' => [
                'index'   => [
                    'total-users'      => '用户总数',
                    'total-page-views' => '网站流量总数',
                    'total-posts'      => '文章总数',
                    'total-courses'    => '课程总数',
                    'total-comments'   => '评论总数',
                    'visitor-records'  => '访客记录',
                    'most'             => '最多:item',
                    'attributes'       => [
                        'browser'  => '浏览器',
                        'platform' => '操作系统',
                        'city'     => '城市',
                        'device'   => '设备',
                        'uri'      => '访问地址'
                    ]
                ],
                'factory' => [
                    'heading'       => '欢迎来到模型工厂',
                    'tips'          => '模式工厂是创学特有的数据生产间, 在这里你可以快速生成测试数据, 比如生成50名用户, 100篇博文等.',
                    'model'         => '选择生产模型',
                    'quantity'      => '选择数量',
                    'quantity-tips' => '数量选择越多时间消耗越久, 若超时请选择较少数量',
                    'models'        => [
                        'user'   => '用户模型',
                        'post'   => '文章模型',
                        'course' => '课程模型'
                    ],
                    'create'        => '开始生产',
                    'created'       => ':q个:model 已成功出厂',
                    'half-created'  => '模型生产过程中遇到了数据重复问题, 没有完全生产'
                ]
            ],
            'settings'    => [
                'general'       => [
                    'basics' => [
                        'heading'             => '核心设置',
                        'site-title'          => '站点标题',
                        'home-uri'            => '主页地址',
                        'home-uri-help'       => '主页地址, 网站入口地址',
                        'social-uri'          => '社区地址',
                        'social-uri-help'     => '社区主页地址, 发布图文分享等SNS系统',
                        'post-uri'            => '文章地址',
                        'post-uri-help'       => '文章主页地址, 博文CMS系统',
                        'admin-uri'           => '后台地址',
                        'admin-uri-help'      => '后台管理地址, 请谨慎修改',
                        'registration-on'     => '用户注册',
                        'registration-on-yes' => '开放注册',
                        'registration-on-no'  => '仅注册码邀请',
                        'admin-email'         => '管理邮箱',
                        'admin-email-help'    => '将以该邮箱发邮件给网站用户',
                        'admin-email-setting' => '前往邮件设置',
                        'icp'                 => '备案号',
                    ],
                    'seo'    => [
                        'heading'          => 'SEO设置',
                        'separator'        => '分隔符',
                        'separator-help'   => '用来分隔网站标题, 比如 页面 :: 站名',
                        'description'      => '站点介绍',
                        'description-help' => '简洁的话语来介绍描述您的网站, 将建站目的与网站功能告诉大家',
                        'keywords'         => '关键字',
                        'keywords-help'    => '希望用户通过搜索引擎的什么关键字来索引到网站',
                        'ignores'          => '不收录',
                        'ignores-help'     => '不希望被搜索引擎收录的地址URI',
                    ],
                    'region' => [
                        'heading'          => '地区设置',
                        'timezone'         => '时区',
                        'locale'           => '主要语言',
                        'locale-help'      => '网站的默认界面交互语言',
                        'auto-locale'      => '自动选择',
                        'auto-locale-on'   => '开启',
                        'auto-locale-help' => '根据用户浏览器语言来自动选择相应的界面语言, 若没有该语言将显示"主要语言"',
                    ],
                    'extra'  => [
                        'heading'         => '额外设置',
                        'ssl'             => '安全协议',
                        'ssl-on'          => '强制SSL',
                        'ssl-help'        => 'SSL协议(https)使网站访问更安全, 自动重定向用户, 请确保已安装证书并正确配置',
                        'powered-by'      => 'Powered By',
                        'powered-by-on'   => '自豪地显示',
                        'powered-by-help' => '如果喜欢本程序 望多多宣传并开启显示, 谢谢支持',
                    ]
                ],
                'services'      => [
                    'oauth'   => [
                        'heading'  => '第三方登录',
                        'redirect' => '回调链接',
                        'apply'    => '申请链接',
                        'on'       => '开启',
                        'on-text'  => '开启本登录服务',
                        'tips'     => '使用第三方/社交登录可以让用户快速注册并绑定本地帐号'
                    ],
                    'email'   => [
                        'heading'                   => '邮件服务',
                        'tips'                      => '通过邮件服务可以在用户注册时发送确认链接, 邮件订阅等服务, 对站点的作用必不可少',
                        'on'                        => '开启邮件服务',
                        'mail_driver'               => '邮件驱动',
                        'mail_host'                 => '主机地址',
                        'mail_host-placeholder'     => '如smtp.exmail.qq.com',
                        'mail_port'                 => '端口',
                        'mail_port-placeholder'     => '常用加密端口465',
                        'mail_username'             => '邮箱用户名',
                        'mail_username-placeholder' => '如no-reply@example.com',
                        'mail_password'             => '邮箱验证密码',
                        'mail_encryption'           => '加密方式',
                        'test-heading'              => '发送测试邮件',
                        'test-placeholder'          => '发送测试邮件到...',
                        'test-tip'                  => '(先保存设置后按发送)若一分钟内还没收到, 请检查是否被丢到垃圾箱内了',
                        'test-success'              => '邮件发送成功, 请查收',
                        'test-failure'              => '邮件信息有误, 请重新填写'
                    ],
                    'push'    => [
                        'heading' => '实时推送',
                        'tips'    => '实时推送服务可以实时地聊天, 推送新通知, 监测新用户注册等, 而完全不用刷新页面',
                        'pusher'  => [
                            'on' => '开启Pusher推送服务',
                        ]
                    ],
                    'storage' => [
                        'heading'       => '云存储服务',
                        'tips'          => '云存储服务可以减轻本地服务器的资源压力, 使用CDN等高速分配资源是最佳选择',
                        'disks'         => [
                            'local'     => '本地存储',
                            'ftp'       => 'FTP服务器',
                            's3'        => '亚马逊s3 (aws)',
                            'rackspace' => 'Rackspace',
                            'qiniu'     => '七牛'
                        ],
                        'warning'       => '若使用云存储, 请确保该云服务的配置在下方填写正确',
                        'ftp_host'      => 'FTP主机',
                        'qiniu_notify'  => '提醒URL (可选)',
                        'qiniu_default' => '七牛测试域名',
                        'qiniu_https'   => '七牛https域名',
                        'qiniu_custom'  => '自定义绑定域名',
                    ]
                ],
                'advanced'      => [
                    'warning-title' => '注意!',
                    'warning-text'  => '请谨慎修改本页的高级设置, 设置不妥有可能导致不良的后果, 真的确定了再修改',
                    'develop'       => [
                        'title'                  => '开发模式',
                        'environment'            => '程序环境',
                        'environment-local'      => '本地开发',
                        'environment-production' => '服务器部署',
                        'debug'                  => '错误调试模式',
                        'debug-tips'             => '如果程序出错或者某些地方莫名奇妙的出bug才需要打开调试',
                        'maintenance'            => '网站维护模式',
                        'maintenance-tips'       => '打开维护模式后用户将无法访问网站页面并重定向到503页面',
                        'maintenance-warning'    => '您也可以手动前往网站根目录/storage/framework中删掉down文件来恢复',
                        'admin-ignores'          => '无视管理员',
                        'admin-ignores-tips'     => '开启后管理员有权限在维护下访问与管理站点',
                        'server-info'            => '服务器信息',
                        'noah-installed'         => '安装Noah在',
                        'php-ver'                => 'PHP版本',
                        'mysql-ver'              => 'MySQL版本',
                        'os'                     => '操作系统',
                        'server-software'        => 'Web服务器',
                        'developed-by'           => '开发人员'
                    ],
                    'cache'         => [
                        'title'              => '缓存管理',
                        'tips'               => '开启缓存可以大幅度提升网站编译效率',
                        'main-cache'         => '后台设置缓存',
                        'main-cache-warning' => '开启后将把后台的设置缓存起来, 若修改了任何配置请牢记回来刷新缓存',
                        'route-cache'        => '路由URL缓存',
                        'view-cache'         => '前端编译缓存',
                        'refresh'            => '刷新',
                        'clear'              => '清除',
                        'refreshed'          => ':type 已成功刷新',
                        'cleared'            => ':type 已成功清除'
                    ],
                    'database'      => [
                        'title'  => '数据库总览',
                        'tables' => [
                            'name'          => '表名',
                            'engine'        => '引擎',
                            'rows'          => '行数',
                            'size'          => '大小',
                            'collation'     => '定序',
                            'total_count'   => '合计一共:count张表',
                            'total_records' => ':count行'
                        ]
                    ],
                    'sub-domains'   => [
                        'avatar-sub-domain'         => '头像专属域名',
                        'avatar-uri'                => '二级域名地址',
                        'user-sub-domain'           => '用户主页域名',
                        'switch'                    => '开启二级域名',
                        'sub-domain-name-exclusion' => '不允许域名前缀'
                    ]
                ],
                'display'       => [
                    'upload-logo' => [
                        'title'       => '网站LOGO',
                        'upload'      => '选择图片文件',
                        'upload-tips' => '推荐1:1比例的 不超过500px的Logo图片',
                        'uploaded'    => 'Logo上传成功',
                    ]
                ],
                'upgrade'       => [
                    'heading'        => '版本更新',
                    'latest-version' => '已经是最新版本了',
                    'new-version'    => '新版本更新',
                    'details'        => '更新内容',
                    'tips'           => '小贴士: 在更新前请备份数据库, 以防万一.<br>请勿在升级过程中关闭页面',
                    'manual'         => '手动更新前往:',
                    'official'       => '官方升级网站'
                ],
                'update-button' => '保存设置',
                'updated'       => ':setting 设置已更新',
                'updated-error' => ':setting 设置更新失败,请重试',
                'new-version'   => '新'
            ]
        ]
    ],

    'global' => [
        'user'   => [
            'credit'   => '积分',
            'exp'      => '经验',
            'check_in' => '签到',
            'settings' => '设置',
            'sign-out' => '注销',
            'gender'   => [
                'secret' => '保密',
                'male'   => '男生',
                'female' => '女生',
                'other'  => '其他'
            ]
        ],
        'footer' => [
            'policy'    => '隐私政策',
            'terms'     => '使用条款',
            'copyright' => '版权所有'
        ]
    ],

    'profile' => [
        'settings' => [
            'change-avatar' => '修改头像',
            'titles'        => [
                'overview'   => '帐号总览',
                'edit'       => '编辑资料',
                'password'   => '更改密码',
                'membership' => '我的会员',
                'credits'    => '我的积分',
                'history'    => '学习记录',
                'privacy'    => '隐私信息',
            ],
            'overview'      => [
                'joined-since'       => '我在<time class="timeago" datetime=":time">:when</time>加入的:where',
                'invalid-membership' => '您还未开通会员',
                'go-join'            => '前往开通',
                'go-pay'             => '前往充值',
                'go-check'           => '查看记录',
                'tel-unbound'        => '您还未绑定手机号',
                'go-bind'            => '立即绑定',
                'email-unconfirmed'  => '您还未确认邮箱',
                'email-confirmed'    => '您已激活绑定邮箱',
                'go-confirm'         => '前往确认'
            ],
            'edit'          => [
                'profile' => '个人资料'
            ],
            'password'      => [
                'via-old-password'     => '通过原密码更改',
                'submit'               => '确认修改',
                'invalid-old-password' => '原密码不正确',
                'password-changed'     => '密码已修改',
                'send-verification'    => '发送验证码',
            ],
            'privacy'       => [
                'bind-tel'          => '绑定手机',
                'unbind-tel'        => '取消绑定',
                'bound-tel'         => '已成功绑定手机',
                'confirm-email'     => '激活邮箱',
                'confirmed-email'   => '已激活邮箱',
                'send-code'         => '发送验证码',
                'tel-verify'        => '手机验证',
                'input-message'     => '验证您的手机, 请在10分钟内输入:',
                'code'              => '验证码',
                'submit'            => '提交验证',
                'verified'          => '恭喜您, 验证成功!',
                'invalid'           => '验证码错误, 请重试!',
                'unbound-tel'       => '已取消手机绑定',
                'send-link'         => '重新发送邮件',
                'email-resend-help' => '我们已经发送了一封激活邮件到您的邮箱(:email)中, 请点击邮件中的链接激活绑定!',
                'email-help'        => '您已激活并确认绑定邮箱 :email !',
                'resend-success'    => '邮件已重新发送到您的邮箱',
                'oauth-bindings'    => '社交帐号绑定',
                'oauth-tips'        => '绑定后可直接通过绑定的方式登录网站'
            ]
        ]
    ],

    'nav' => [
        'inbox'      => [
            'unread'  => '条未读通知',
            'see-all' => '查看全部',
            'empty'   => '暂无未读通知 :)'
        ],
        'checked-in' => '签到成功!'
    ],

    'alert' => [
        'confirm' => '确定',
        'cancel'  => '取消',
        'empty'   => '起码输入点什么吧!',
        'retry'   => '请求出错, 请重试!'
    ],

    'chat' => [
        'unread-message' => '条未读消息',
        'new-message'    => '说点什么...',
        'image-message'  => '图片'
    ],

    'datatable' => [
        'info'          => "从_START_ 到 _END_的显示结果 , 一共 _TOTAL_ 条记录",
        'infoEmpty'     => '无结果',
        'infoFiltered'  => '(过滤_MAX_条记录)',
        'lengthMenu'    => '展示 _MENU_ 条记录',
        'loadingRecord' => '加载中...',
        'processing'    => '处理中...',
        'search'        => '搜索:',
        'zeroRecords'   => '无任何搜索结果',
        'paginate'      => [
            'first'    => '第一页',
            'last'     => '最后一页',
            'next'     => '下一页',
            'previous' => '上一页'
        ]
    ],

    'logout' => [
        'title'   => '确定要注销吗',
        'text'    => '注销后将无法访问该页面',
        'confirm' => '确定注销',
        'cancel'  => '算了'
    ],

    'dropzone' => [
        'drag-here' => '支持图片拖拽上传或直接点击'
    ],

    'unavailable' => [
        'coming-soon'    => '即将开放',
        'in-development' => '更多开发中'
    ],
];