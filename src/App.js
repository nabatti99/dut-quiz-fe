import TakingExam from "./Pages/Taking";

const Questions = [
  {
    id: "1",
    type: "single",
    question:
      "Đây là câu hỏi số 1, câu hỏi số một ở vị trí số 1 và là câu hỏi thứ 1 của bộ câu hỏi",
    answers: [
      {
        state: false,
        content: "Đây là đáp án 1",
      },
      {
        state: true,
        content: "Đây là đáp án 2",
      },
      {
        state: false,
        content: "Đây là đáp án 3",
      },
      {
        state: false,
        content: "Đây là đáp án 4",
      },
    ],
  },
  {
    id: "2",
    type: "multiple",
    question:
      "Đây là câu hỏi số 2, câu hỏi số hai ở vị trí số 2 và là câu hỏi thứ 2 của bộ câu hỏi",
    answers: [
      {
        state: false,
        content: "Đây là đáp án 1",
      },
      {
        state: true,
        content: "Đây là đáp án 2",
      },
      {
        state: false,
        content: "Đây là đáp án 3",
      },
      {
        state: false,
        content: "Đây là đáp án 4",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <TakingExam
        title="THI GIỮA KỲ HỌC PHẦN NGÔN NGỮ LẬP TRÌNH HỌC KỲ I 2022-2023"
        subject="Ngôn ngữ lập trình"
        time="90"
        set={Questions}
      />
    </div>
  );
}

export default App;
