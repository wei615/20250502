let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#0d1b2a'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的80%
  capture.hide(); // 隱藏原始影像，僅顯示於畫布上

  // 建立與視訊畫面相同大小的圖形
  overlayGraphics = createGraphics(capture.width, capture.height);
  drawOverlayGraphics(); // 繪製 overlayGraphics 的內容
}

function draw() {
  background('#0d1b2a'); // 確保背景顏色維持一致

  // 確保攝影機影像已準備好
  if (capture.loadedmetadata) {
    translate(width / 2, height / 2); // 將原點移到畫布中心
    scale(-1, 1); // 水平翻轉影像

    // 顯示攝影機影像
    image(capture, -capture.width / 2, -capture.height / 2);

    // 顯示 overlayGraphics 圖形在視訊畫面上方
    image(overlayGraphics, -capture.width / 2, -capture.height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 重新調整影像大小

  // 重新調整 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  drawOverlayGraphics(); // 重新繪製 overlayGraphics 的內容
}

function drawOverlayGraphics() {
  overlayGraphics.background('#70e000'); // 設定背景顏色為 #70e000
  overlayGraphics.noStroke();

  // 每隔 20 單位繪製圓
  for (let y = 0; y < overlayGraphics.height; y += 20) {
    for (let x = 0; x < overlayGraphics.width; x += 20) {
      // 從 capture 中取得相對位置的顏色
      let col = capture.get(x, y);
      overlayGraphics.fill(col); // 設定圓的顏色
      overlayGraphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓，置於單位格中心
    }
  }
}
