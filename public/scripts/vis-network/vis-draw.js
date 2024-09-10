$(document).ready(function () {
  var DIR = './images/home/';
  function preloadImg(url) {
    const image = new Image()
    image.src = DIR + url; 
    image.style.border  = "50"; 
    return image;
  }

  var listImg = [
    {
      avt: preloadImg("icon_avt.png"),
      icon: preloadImg("img_flower.jpg"),
    },{
      avt: preloadImg("icon_avt02.png"),
      icon: preloadImg("icon_telegram.png"),
    },{
      avt: preloadImg("icon_avt03.png"),
      icon: preloadImg("icon_tiktok.png"),
    },{
      avt: preloadImg("icon_avt04.png"),
      icon: preloadImg("icon_zalo.png"),
    },{
      avt: preloadImg("icon_avt.png"),
      icon: preloadImg("icon_facebook.png"),
    }
  ]

  function drawNodeCtx(ctx,x, y, img, txt ) {
    // avt
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, 15, 0, Math.PI * 2, false)
    ctx.strokeStyle = '#3d8bff'
    ctx.stroke()
    ctx.clip()
    ctx.drawImage(img.avt, x-15, y-15, 30, 30);
    ctx.restore()

    // icon
    ctx.save()
    ctx.beginPath()
    ctx.arc(x - 15, y - 15, 7, 0, Math.PI * 2, true)
    ctx.strokeStyle = '#fff'
    ctx.stroke()
    ctx.clip()
    ctx.drawImage(img.icon, x - 22 , y - 22 , 14, 14);
    ctx.restore()

    // text
    ctx.fillStyle = "white"
    ctx.fillText(txt,x - 10 , y - 25);
  }

  function draw() {
        
    var nodes = [
      { id: 0, group: 1,
        shape: "custom",ctxRenderer:
        function ctxRenderer({ ctx, x, y, state: { selected, hover }, style }) {
          return {
            drawNode() {
              drawNodeCtx(ctx,x,y,listImg[0], "Hello 01");
            },
            nodeDimensions: { width: 50, height: 50 }, 
          }
        },
      },
      { id: 2, group: 1,
        shape: "custom",ctxRenderer:
        function ctxRenderer({ ctx, x, y, state: { selected, hover }, style }) {
          return {
            drawNode() {
              drawNodeCtx(ctx,x,y,listImg[1], "Hello 02");
            },
            nodeDimensions: { width: 50, height: 50 }, 
          }
        },
      },
      { id: 3, group: 1,
        shape: "custom",ctxRenderer:
        function ctxRenderer({ ctx, x, y, state: { selected, hover }, style }) {
          return {
            drawNode() {
              drawNodeCtx(ctx,x,y,listImg[2], "Hello 03");
            },
            nodeDimensions: { width: 50, height: 50 }, 
          }
        },
      },
      { id: 4, group: 1,
        shape: "custom",ctxRenderer:
        function ctxRenderer({ ctx, x, y, state: { selected, hover }, style }) {
          return {
            drawNode() {
              drawNodeCtx(ctx,x,y,listImg[3], "Hello 04");
            },
            nodeDimensions: { width: 50, height: 50 }, 
          }
        },
      },
      { id: 5, group: 1,
        shape: "custom",ctxRenderer:
        function ctxRenderer({ ctx, x, y, state: { selected, hover }, style }) {
          return {
            drawNode() {
              drawNodeCtx(ctx,x,y,listImg[4], "Hello 05");
            },
            nodeDimensions: { width: 50, height: 50 }, 
          }
        },
      },
      
    ];

    // create some edges
    var edges = [
      { from: 1, to: 0 },
      { from: 2, to: 0 },
      { from: 3, to: 4 },
      { from: 3, to: 2 },
      { from: 4, to: 5 },
      
    ];
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {
      // 
      nodes: {
        // borderWidth: 2,
        // borderWidthSelected: 8,
        // size: 24,
        // color: {
        //   border: "white",
        //   background: "black",
        //   highlight: {
        //     border: "black",
        //     background: "white",
        //   },
        //   hover: {
        //     border: "orange",
        //     background: "grey",
        //   },
        // },
        // font: { color: "#fff" },
        // shapeProperties: {
        //   useBorderWithImage: true,
        // },
      },
      edges: {
        color: "lightgray",
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
    };
    var network = new vis.Network(container, data, options);
  }
  
  draw();
});
