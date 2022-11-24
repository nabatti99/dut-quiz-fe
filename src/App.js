import TakingExam from "./Pages/Taking";
import Questions from "./Test/test";

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
