// pages/index/setfillstyle.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady:function(){
    // 页面渲染完成
    var context = wx.createContext()
     context.setFillStyle("#ff00ff")
     context.setStrokeStyle("#00ffff")
//添加一个矩形路径到当前路径。
     context.rect(50,50,100,100)
     context.fill()
     context.stroke()
//添加一个弧形路径到当前路径，顺时针绘制。
     context.moveTo(250,200)
     context.arc(200,200,50,0,Math.PI*2)
     context.fill()
     context.stroke()
//创建二次贝塞尔曲线路径。
    context.moveTo(200,300)
    context.quadraticCurveTo(200,300,400,100)
    context.fill()
    context.stroke()
//创建三次方贝塞尔曲线路径。
    context.moveTo(0,350)
    context.bezierCurveTo(0,350,50,150,100,350)
    context.fill()
    context.stroke()
    
     wx.drawCanvas({
       canvasId: 1,
       actions: context.getActions()
     })

  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})