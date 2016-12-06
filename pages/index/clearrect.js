Page({
  onReady: function() {
    var context = wx.createContext()

    context.rect(50, 50, 200, 200)
    context.fill()
    
    context.rect(150, 150, 200, 200)
    context.fill()
    context.clearRect(100, 100, 200, 200)

    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  }
})