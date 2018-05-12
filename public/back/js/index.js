$(function () {

//  1.实现柱状图

var echarts_1 = echarts.init(document.querySelector(".echarts_1"));
 
 var  option1 = {
   
   title: {
     text:'2017年注册人数'
   } ,
   tooltip: {
   },
   
   legend:{
     data:['人数']
   },
   
    xAxis: {
      // type: 'category',  默认
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
    
    },
    series: [{
     name:'人数',
      data: [1200, 2000, 1500, 800, 700, 1100],
      type: 'bar'
    }]
  };
 
 
 echarts_1.setOption(option1);
 
 
 var echarts_2 = echarts.init(document.querySelector(".echarts_2"))
 
 
 var option2 = {
   title : {
     text: '热门品牌销售',
     subtext: '2017年6月',
     x:'center'
   },
   tooltip : {
     trigger: 'item',
     // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
     formatter: "{a} <br/>{b} : {c} ({d}%)"
   },
   legend: {
     orient: 'vertical',
     left: 'left',
     data: ['耐克','阿迪','新百伦','匡威','李宁']
   },
   series : [
     {
       name: '品牌',
       type: 'pie',
       radius : '70%',
       center: ['50%', '60%'],
       data:[
         {value:335, name:'耐克'},
         {value:310, name:'阿迪'},
         {value:234, name:'新百伦'},
         {value:135, name:'匡威'},
         {value:1548, name:'李宁'}
       ],
       itemStyle: {
         emphasis: {
           shadowBlur: 100,
           shadowOffsetX: 0,
           shadowColor: 'rgba(0, 0, 0, 0.5)'
         }
       }
     }
   ]
 };
  echarts_2.setOption(option2);
  
  
  
  
  
  
})