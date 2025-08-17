import React, { useRef, useEffect, useState } from "react";
import { drawSort } from "../animation/logic-draw/sort-logic";
import { drawSearch } from "../animation/logic-draw/search-logic"
import { drawBfs } from "../animation/logic-draw/graph-logic";

const AnimationPlayer = ({ animationGenerator }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);

  const draw = (state) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    if (state.array && state.target !== undefined) drawSearch(ctx, rect.width, rect.height, state);
    else if (state.array) drawSort(ctx, rect.width, rect.height, state);
    else if (state.graph) drawBfs(ctx, rect.width, rect.height, state);
};

  useEffect(() => {
    const gen = animationGenerator();
    const allSteps = [];
    let result = gen.next();
    while (!result.done) {
      allSteps.push(result.value);
      result = gen.next();
    }
    setSteps(allSteps);
    setCurrentStepIndex(0);
  }, [animationGenerator]);

  useEffect(() => {
    if (steps.length > 0 && currentStepIndex >= 0) {
      draw(steps[currentStepIndex]);
    }
  }, [steps, currentStepIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }

      if (steps.length > 0 && currentStepIndex >= 0) {
        draw(steps[currentStepIndex]);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [steps, currentStepIndex]);

  const handleStepForward = () => {
    if (currentStepIndex < steps.length - 1) setCurrentStepIndex((prev) => prev + 1);
  };

  const handleStepBackward = () => {
    if (currentStepIndex > 0) setCurrentStepIndex((prev) => prev - 1);
  };

  const handleRestart = () => setCurrentStepIndex(0);

  return (
    <div
      className="animation-player"
      ref={containerRef}
      style={{ width: "100%", height: "400px", position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        className="canvas"
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      <div className="controls">
        <button onClick={handleStepBackward} disabled={currentStepIndex <= 0} className="btn">
          <i className="fas fa-arrow-left"></i>Назад</button>

        <button
          onClick={handleStepForward}
          disabled={currentStepIndex >= steps.length - 1}
          className="btn">
          Вперед<i className="fas fa-arrow-right"></i></button>

        <button onClick={handleRestart} className="btn restart">
          <i className="fas fa-redo"></i>Заново</button>
      </div>
    </div>
  );
};

export default AnimationPlayer;