Page({
  data: {
    imgsArr: [
      {
        url: '/images/tabbar/card-press.png',
        _index: 1
      },
      {
        url: '/images/tabbar/me-press.png',
        _index: 2
      },
      {
        url: '/images/tabbar/service-press.png',
        _index: 3
      },
      {
        url: '/images/tabbar/summary-press.png',
        _index: 4
      },
      {
        url: '/images/tabbar/card-normal.png',
        _index: 5
      },
    ],
    img2: [
      {
        url: '/images/cardDetail/good-a.png',
        _index: 91
      },
      {
        url: '/images/cardDetail/good-b.png',
        _index: 92
      },
      {
        url: '/images/cardDetail/icon-tel.png',
        _index: 93
      },
    ],
  },
  onLoad: function () {
    console.log('demo has onload')
  },
  choseBtn: function () {
    console.log('btn has clicked');
    let _this = this;
    wx.chooseImage({
      count: 4, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        let tempFilePaths = res.tempFilePaths;
        
        _this.setData({
          imgsArr: _this.data.imgsArr.concat(tempFilePaths[0])
        });
      }
    })
  },
  removeLast: function () {
    let _this = this;
    _this.setData({
      imgsArr: _this.data.imgsArr.splice(0, _this.data.imgsArr.length - 1)
    });
  },
  addLast: function () {
    let _this = this;
    // _this.data.imgsArr.push(_this.data.img2[0]);
    let list = _this.data.imgsArr.concat(_this.data.img2[0]);
    console.log(_this.data.imgsArr);
    _this.setData({
      imgsArr: list
    });
  },
  changeBtn: function () {
    let _this = this;
    // _this.data.imgsArr[3].url = _this.data.img2[0].url;
    // _this.setData({
    //   imgsArr: _this.data.imgsArr
    // });
    _this.setData({
      'imgsArr[3].url': _this.data.img2[0].url
    });
  }
})