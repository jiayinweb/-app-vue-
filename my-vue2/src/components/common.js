

var obj = {
	myInfor: {},
	openLogin: false,
	fn:{
		/*
		*判断是否存在
		+参数
		--obj :遍历的对象
		--target:查找的目标
		+返回一个对象{"flag":flag, "index":index }
		--flag:存在为true，
		--index：存在条件下的索引值
		*/
		isExist: function (obj,target) {
			var flag = false;
			var index ;

			obj && obj.forEach(function (ele,i) {
				if (ele.id == target) {
					flag = true;
					index = i;
				}
			});
			return {"flag":flag, "index":index };
		}
	}
};



export default obj;







