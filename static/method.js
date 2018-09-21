function roa(arr)    //arr为可能出现的元素集合
{
    var temp=new array();    //temp存放生成的随机数组
　  var count=arr.length;
    for (i=0;i<count;i++)
    {
        var num=Math.floor(Math.random()*arr.length); //生成随机数num
        temp.push(arr[num]);    //获取arr[num]并放入temp
        arr.splice(num,1);
    }
    return temp;
}

//传入json字符串，然后对json串进行排序，输出标准get参数
function jsonSort(jsonObj) {
  let arr = [];
  for (var key in jsonObj) {
    arr.push(key)
  }
  arr.sort();
  let str = '';
  for (var i in arr) {
    str += arr[i] + "=" + jsonObj[arr[i]] + "&"
  }
  return str.substr(0, str.length - 1)
}

function jsonSort2(jsonObj) {
  let arr = [];
  //先用Object内置类的keys方法获取要排序对象的属性名
  //再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newkey = Object.keys(jsonObj).sort();
  //console.log('newkey='+newkey);
  //创建一个新的对象，用于存放排好序的键值对
  var newObj = {};
  for (var i = 0; i < newkey.length; i++) {
    //遍历newkey数组
    newObj[newkey[i]] = jsonObj[newkey[i]];
    //向新创建的对象中按照排好的顺序依次增加键值对
  }

  return newObj; //返回排好序的新对象
}
