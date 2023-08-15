import WordCloud from 'wordcloud';

const canvas = document.getElementById('word-cloud');
fetch('http://localhost:3000')
  .then((response) => response.text())
  .then((data) => {
   data=JSON.parse(data)
   console.log(data)
   const {wordFrequency:words}=data
   WordCloud(canvas, {
    list: words,
    gridSize: 5, // 设置较小的网格大小
    weightFactor: 16, // 可根据需要调整词汇大小
    fontFamily: 'Arial',
    color: 'random-dark',
    backgroundColor: '#FFF',
    rotateRatio: 0.5,
    rotationSteps: 2,
    // drawOutOfBound: true, // 允许词汇绘制在边界之外
    shuffle: true,
    shape: 'circle'
  });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


  
