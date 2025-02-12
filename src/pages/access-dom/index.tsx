import { createElement, useState } from 'react';

function AccessDOMPage() {
  // 컴포넌트 바디(body)
  // 렌더링 프로세스
  // 순수성(purity)
  // 상태 선언, 업데이트
  // 리액트 자동 화면 변경

  const [isParse, setIsParse] = useState(false);

  // 사이드 이펙트 처리
  // 리액트돔의 노드가 아닌, 실제 DOM 노드에 접근
  // - 이벤트 핸들러
  // - 이펙트 함수
  // - ref 콜백 함수

  // 마크업(markup) 생성
  return (
    <section
      ref={(element) => {
        if (element) {
          element.style.cssText = `
            padding: 40px;
            border: 4px solid black;
          `;
        }
      }}
    >
      <h2 className="text-2xl text-react font-medium">
        <abbr
          title="Document Object Model"
          className="cursor-help no-underline"
        >
          {isParse ? 'Document Object Model' : 'DOM'}
        </abbr>{' '}
        접근/조작
      </h2>
      <button
        type="button"
        onClick={() => {
          setIsParse((p) => !p);
        }}
      >
        DOM 용어 풀이
      </button>
    </section>
  );
}

export default AccessDOMPage;
