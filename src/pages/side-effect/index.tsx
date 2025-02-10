import { useEffect, useState } from 'react';

function SideEffectDemo() {
  const [count, setCount] = useState(10);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log({ updatedCountValue: count });

    const handleMove = (e: PointerEvent) => {
      setMouse({ x: +e.clientX.toFixed(0), y: +e.clientY.toFixed(0) });
    };

    console.log('이벤트 구독');
    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      console.log('이벤트 구독 해지');
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, [count]);

  return (
    <section className="*:text-slate-800 flex flex-col space-y-10">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <button
        type="button"
        className="px-2 py-1 border text-xl"
        onClick={() => setCount((c) => c + 2)}
      >
        {count}
      </button>
      <output className="inline-flex my-5 py-3 px-5 border-6 text-2xl">
        x = {mouse.x} / y = {mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
