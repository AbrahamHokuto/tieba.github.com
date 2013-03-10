infos=[
	{name:"新手教程",init:fill_link,content:[
		["http://tieba.baidu.com/p/1165625989","解读御坂美琴みさか的菱形打印程序——谈如何学习算法","咱是仙人"],
		["http://tieba.baidu.com/p/1109535412","xxx管理系统(作业党你们懂的,伸手杀无赦)","RichSelian"],
		["http://tieba.baidu.com/p/1098980046","教你构建MinGW＋Notepad++编程环境 for C/C++","5B4B铅笔"],
		["http://tieba.baidu.com/p/1570864020","调试指南(问问题之前请自重)","九头一存"],
		["http://tieba.baidu.com/p/1393147869","链表","万能姬"],
		["http://hi.baidu.com/misaka20001/item/d4a4144036d5fbefbdf451de","[文]某吧主的学习经历","御坂美琴みさか"],
		["http://tieba.baidu.com/f/good?kw=c%D3%EF%D1%D4","更多请阅读'本吧精品区'",""],
	],expanding:true},
	common_info.books, // 书籍介绍
	common_info.hardware, // 硬件介绍
	common_info.operating_system, // 操作系统
	common_info.software, // 软件介绍
	{name:"吧友作品",init:fill_link,content:[
		["http://code.google.com/p/comprox/","Comprox - 肉牛的压缩机","RichSelian"],
		["http://misakamm.github.com/xege/","EGE(Easy Graphics Engine) - 炮姐的图形库","御坂美琴みさか"],
		["http://tieba.baidu.com/p/1535637800","四则计算器(其实人都是慢慢改进的)","c_vs"],
		["http://tieba.baidu.com/p/1894817975","LL1表达式计算器","御坂美琴みさか"],
		["http://tieba.baidu.com/p/1941867601","C语言吧IRC频道","iyzsong"],
		["http://tieba.baidu.com/p/1977678397","拼图游戏","忆_碎碎念"],
	]},
	{name:"吧友语录",init:fill_about,content:[
		["我是不是师兄:关于挂科",[
			"好吧 我的老毛病又犯了",
			"挂科队形 尾巴加一 C挂科",
			"1 挂科不代表没天赋[尤其是C课的补考 展开点说 有时候真的是题目本身是错的你信不信]",
			"2 学C[或者其他任何东西都]需要很多东西 但是唯独不需要天赋",
			"3 忘掉关于天赋的各种神奇的传说吧 每一个人都是从mian函数和少;开始一步一步战斗",
			"4 数组正确起点其实是0不是1",
			"5 '\0'[学C应该懂]"
		].join("<br>")]
	]},
	{name:"人物简介&马甲",init:fill_person,content:[
		["幻の上帝","圆滚滚的工口帝球葱"],
		["RichSelian/EGG娘","ROX-滚床压缩肉牛"],
		["御坂美琴みさか/EGE娘","misaka-传说中的炮姐"],
		["顶之座__赫卡特","hecate"],
		["_craftG/良化纲领_/九头一存/万能姬/守尸神主/...","羊驼-最近不知为何一直在强撸"],
		["Lemoneee/Gilliland/SergeiSobolev/...","好久没出现的G算姬[<a href=\"https://github.com/Golevka\" target=\"_blank\">Golevka</a>]"],
		["User32","被揉坏掉了的冰凉小脸"],
		["汇蓝鸟","英文+图形+... <- 面麻<sub>酱</sub>似乎快无敌了"],
		["assiss","元老"],
		["wysaid","好像在搞3D(gl还是dx)似得"],
		["彩色の夢∩o∩","数学娘、别字娘、正体字娘"],
		["怪兽大战魔人","编译器大神"],
		["阿宾和白洁","已经彻底坏掉了"],
		["Luoji_1995","逻辑神最近不知道去哪了"],
		["NaylonSlain","<sub>好久不见... 忘了擅长...</sub>"],
		["MasterRay","<sub>话说由于某云来的晚，所以不太清楚... 知道的写一下介绍</sub>"],
		["8pm","<sub>话说由于某云来的晚，所以不太清楚... 知道的写一下介绍</sub>"],
		["gccer","<sub>话说由于某云来的晚，所以不太清楚... 知道的写一下介绍</sub>"],
		["CIW_BLUE","<sub>话说由于某云来的晚，所以不太清楚... 知道的写一下介绍</sub>"],
		["星月and圣冰雨","算法大牛"],
		["矮油嫑酱紫唉","法律<sub>好似是婚姻法</sub>人士在这里"],
		["nadesico19",""],
		["Coding狂人","好似很久以前被气走了"],
		["LH_MOUSE_EX","玩窗户<sub>Win</sub>的耗吱"],
		["","ps@hysw. 喂喂喂.... 不能总是只有我写阿..."],
		["Laconism","@Laconism... 你自我介绍一下"],
		["寒云似雾/灵风竹/TetrisNoOSer","某个大水笔"],
		["",""],
	]},
	{name:"给新手的Q&amp;A",init:fill_qa,content:[
		["我现在在读xx[学校/年级...]，能不能C语言",
			"能: 如果你愿意<i>浪费</i>时间在程序的苦海之中, 有兴趣坚持走下去, 并且有一定的数学基础"+"<br>"+
			"不能: C语言对于很多人而言<b>真的很难</b>"+"<br>"+
			"你可以去学,学不学得了是你自己的问题"
		],
		["学C语言该如何入门","看书, 读代码, 敲代码, Wikipedia, csdn, 本吧精品区, Google, Bing, Baidu"],
		["为神马推荐《C Primer Plus》而不推荐销量干万的《C程序设计》","不是说崇洋媚外，不是外国书就没错误了，只是《C程序设计》的概念性错误太多了"],
		["看完了谭的《C程序设计》(或类似)请问下一步该做什么",
			["考二级: 够了，不用学别的了","学校课程要求的，以后不用: 随你","学了要用的: 好吧[扔掉/烧掉/埋掉]随你,具体请看'书籍简介'"].join("<br>")
		],
		["C语言,C++,Java,Python,XXX,YYY改如何选择","自己试去<sub>ps.其实Python是个不错的入门选择</sub>"],
		["怎么样逃离可怕的黑框框","命令行挺好的，实在要图形的话自己去搜GUI/D3D/GDI/OpenGL/QT/GTK..."],
		["关于(i++)+(++i),printf(\"%d%d%d\",++i,i,i++),i+=i*=i","警告: 别写(除了某些特殊情况,没人能保证这些类型的玩意会出现神马问题,参见《C陷阱与缺陷》)"],
		["C语言有前(钱)途么","看你学的怎么样&找的工作怎么样"],
		["32/64位Windows xp/7/8该用神马软件","集成开发环境介绍的基本都可以"],
		["找VC6?为什么不应该用VC6，以及为什么VC6的兼容性如此之差","和Window98同样的道理(话说XP都到该被淘汰的时候了)"],
		["有什么图形库","EGE神马的挺好的(参见吧友作品)"],
		["学C语言要多久","一天(如果只是看语法定义的话),当然,别以为能很轻松的在几年内精通"],
	]},
	{name:"概念与纠错",init:fill_link,content:[
		["http://tieba.baidu.com/p/1411238421","ISO C的一些基本概念","幻の上帝"],
		["http://tieba.baidu.com/p/1422487681","ISO C11附录C","幻の上帝"],
		["http://tieba.baidu.com/p/1969958655","关于main函数的原型和返回值(void main vs int main)","幻の上帝"],
	]},
	{name:"各种教程",init:fill_link,content:[
		["http://tieba.baidu.com/p/1597468718","适合新手练习的几个题目，控制台不再单调呵呵（持续更新）","Geodesic"],
		["http://tieba.baidu.com/p/2025276932","对拼图问题可还原性的探究","忆_碎碎念"],
		["http://tieba.baidu.com/p/2007516908","C语言递归调用转化为栈处理的一般式","elf0223"],
		["http://tieba.baidu.com/p/2092645577","辅助的原理","霸气外露真没有"],
		["http://tieba.baidu.com/p/1313731304","C语言180行随机迷宫代码 详解+分析","追忆曾经_"],
		["http://tieba.baidu.com/p/1360685329","扫雷","wysaid"],
		["http://tieba.baidu.com/p/1972512091","〔九重的百物语之二〕A cellular compiler","守尸神主"],
		["http://tieba.baidu.com/p/1797769781","【新手进阶】话说那些聊天与游戏的网络交互实现","汇蓝鸟"],
		["http://tieba.baidu.com/p/1798139204","【初入老鸟】那些网游外挂中大大小小的远程call","汇蓝鸟"],
		["http://tieba.baidu.com/p/1852969320","【游戏编程】构架游戏中的粒子系统","汇蓝鸟"],
		["http://tieba.baidu.com/p/1795338852","【新手教程】用C语言制作单机游戏外挂","汇蓝鸟"],
		["http://tieba.baidu.com/p/1868393695","【音乐编程】基于DirectSound的音乐播放与FFT频谱可视化(part 1)","汇蓝鸟"],
		["http://tieba.baidu.com/p/1885477077","【音乐编程】基于DirectSound的音乐播放与FFT频谱可视化(part 3)","汇蓝鸟"],
		["http://tieba.baidu.com/p/1906977428","【音乐编程】播放器频谱可视化与语音的智能识别思想(part 3)","汇蓝鸟"],
		["http://tieba.baidu.com/f/good?kw=c%D3%EF%D1%D4","更多请阅读'本吧精品区'",""],
	]},
	{name:"关于二级",init:fill_link,content:[
		["http://tieba.baidu.com/p/1877978397","我们为什么那么痛恨计算机等级与那些问题（二级党请进）","汇蓝鸟"],
		["http://tieba.baidu.com/p/1213185590","建议彻底封杀二级党","serviper"],
	]},
	{name:"关于谭书",init:fill_link,content:[
		["http://pan.baidu.com/share/link?shareid=302843&uk=2417293519","谭浩强《C程序设计》错误之不完全汇集","别急还没硬"],
	]},
	{name:"其他",init:fill_link,content:[
		["http://tieba.baidu.com/p/13382217","原问题资料大全","vc99"],
		["http://tieba.baidu.com/p/1620654727","螺旋方阵","寒云似雾"],
		["http://netlib.bell-labs.com/cm/cs/pearls/index.html","《编程珠玑》(适合有一定数据结构和算法基础的)",""],
		["http://c-faq-chn.sourceforge.net/","C语言常见问题集/495个C语言问题",""],
	]},
	{name:"Credits",init:fill_link,content:[
		["http://tieba.baidu.com/p/1941867601","IRC频道","..."],
		["rox.html","ROX版","RichSelian"],
		["https://github.com/tieba/tieba.github.com","本页源码","寒云似雾"],
		["https://github.com/","Hosted on GitHub Pages &mdash; Theme by <a href=\"http://twitter.com/#!/michigangraham\">mattgraham</a>",""],
	]},
]