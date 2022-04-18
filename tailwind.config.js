module.exports = {
  
  content: [
    // 어디서 tailwind를 사용할것인가?
    // page에서 사용하고싶으면
    // ** 모든디렉토리의 * 모든파일 .{js,jsx,ts,tsx} 확장자는 {}파일들
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  // media => Os의 기본환경설정 class => 웹사이트에서 선택하는 방식
  darkMode: "class",
  plugins: [],
}
