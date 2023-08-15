const nodejieba = require('nodejieba');
const fs = require('fs');
const path = require('path');


// 读取文本
const textPath = path.join(__dirname, 'advice.txt');
const text = fs.readFileSync(textPath, 'utf-8').split('\n').join('');

// 将非中文字符替换为空格
const cleanedText = text.replace(/[^\u4e00-\u9fa5]/g, ' ');

// 使用默认模式进行分词
const segmentedWords = nodejieba.cut(cleanedText);

// 从文件中读取停用词列表
const stopwordsPath = path.join(__dirname, 'stopwords.txt');
const stopwords = fs.readFileSync(stopwordsPath, 'utf-8').split('\n');


// 统计词频函数
function countWordFrequency(wordsArray) {
  const wordFrequency = {};

  wordsArray.forEach((word) => {
    if (word.trim() === '' || stopwords.includes(word)) return; // 忽略空格和停用词
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  });

  return Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
}

// 统计词频
const wordFrequency = countWordFrequency(segmentedWords);
module.exports={
  wordFrequency
}