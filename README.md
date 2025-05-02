產生一個全螢幕的畫布，背景顏色為#0d1b2a，擷取攝影機的影像，正常的顯示在視窗的正中間，影像畫面寬高為視窗大小的80%，請把程式碼寫在sketch.js內
createCanvas(windowWidth, windowHeight): 建立一個與視窗大小相同的全螢幕畫布。
background('#0d1b2a'): 設定畫布的背景顏色為深藍色（#0d1b2a）。
createCapture(VIDEO): 啟用攝影機，並將影像資料儲存到 capture 變數中。
capture.size(windowWidth * 0.8, windowHeight * 0.8): 將攝影機影像的寬高設定為視窗大小的 80%。
capture.hide(): 隱藏攝影機的原始影像，僅在畫布上顯示。
