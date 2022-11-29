// const Questions = [
//   {
//     id: "1",
//     type: "single",
//     question:
//       "Đây là câu hỏi số 1, câu hỏi số một ở vị trí số 1 và là câu hỏi thứ 1 của bộ câu hỏi",
//     answers: [
//       {
//         state: false,
//         content: "Đây là đáp án 1",
//       },
//       {
//         state: true,
//         content: "Đây là đáp án 2",
//       },
//       {
//         state: false,
//         content: "Đây là đáp án 3",
//       },
//       {
//         state: false,
//         content: "Đây là đáp án 4",
//       },
//     ],
//   },
//   {
//     id: "2",
//     type: "multiple",
//     question:
//       "Đây là câu hỏi số 2, câu hỏi số hai ở vị trí số 2 và là câu hỏi thứ 2 của bộ câu hỏi",
//     answers: [
//       {
//         state: false,
//         content: "Đây là đáp án 1",
//       },
//       {
//         state: true,
//         content: "Đây là đáp án 2",
//       },
//       {
//         state: false,
//         content: "Đây là đáp án 3",
//       },
//       {
//         state: false,
//         content: "Đây là đáp án 4",
//       },
//     ],
//   },
// ];

let Questions = [];
let n = 5;
for (let i = 1; i <= n; i++) {
  const quest = {
    id: "id" + i,
    type: i % 2 === 0 ? "single" : "multiple",
    question:
      "Đây là câu hỏi số " +
      i +
      ", câu hỏi số một ở vị trí số " +
      i +
      " và là câu hỏi thứ " +
      i +
      " của bộ câu hỏi",
    answers: [
      {
        state: false,
        content: "Đây là đáp án 1 của câu hỏi số " + i,
      },
      {
        state: true,
        content: "Đây là đáp án 2 của câu hỏi số " + i,
      },
      {
        state: false,
        content: "Đây là đáp án 3 của câu hỏi số " + i,
      },
      {
        state: false,
        content: "Đây là đáp án 4 của câu hỏi số " + i,
      },
    ],
  };
  Questions.push(quest);
}

export default Questions;
