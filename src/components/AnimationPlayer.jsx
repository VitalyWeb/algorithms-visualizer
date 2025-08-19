import React, { useRef, useEffect, useReducer } from "react";
import { drawSort } from "../animation/logic-draw/sort-logic";
import { drawSearch } from "../animation/logic-draw/search-logic";
import { drawGraph } from "../animation/logic-draw/graph-logic";
import { drawTree } from "../animation/logic-draw/tree-logic";

import { generateRandomArray } from "../utils/generate-random-array";
import { setupCanvas } from "../utils/setup-canvas";

const ACTIONS = {
  SET_STEPS: "SET_STEPS",
  STEP_FORWARD: "STEP_FORWARD",
  STEP_BACKWARD: "STEP_BACKWARD",
  RESTART: "RESTART",
  REGENERATE: "REGENERATE",
  PLAY: "PLAY",
  STOP: "STOP",
  SET_ARRAY_SIZE: "SET_ARRAY_SIZE",
};

const initialState = {
  steps: [],
  currentStepIndex: -1,
  arraySize: 20,
  animationKey: 0,
  isPlaying: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_STEPS:
      return { ...state, steps: action.payload, currentStepIndex: 0 };

    case ACTIONS.STEP_FORWARD:
      return {
        ...state,
        currentStepIndex: Math.min(state.currentStepIndex + 1, state.steps.length - 1),
      };

    case ACTIONS.STEP_BACKWARD:
      return {
        ...state,
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      };

    case ACTIONS.RESTART:
      return { ...state, currentStepIndex: 0, isPlaying: false };

    case ACTIONS.REGENERATE:
      return { ...state, animationKey: state.animationKey + 1, isPlaying: false };

    case ACTIONS.PLAY:
      return { ...state, isPlaying: true };

    case ACTIONS.STOP:
      return { ...state, isPlaying: false };

    case ACTIONS.SET_ARRAY_SIZE:
      return { ...state, arraySize: action.payload };

    default:
      return state;
  }
}

const AnimationPlayer = ({ animationGenerator, showArraySizeControls }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { steps, currentStepIndex, arraySize, animationKey, isPlaying } = state;

  const draw = (drawState) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setupCanvas(canvas, ctx);

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (drawState.array && drawState.target !== undefined) {
      drawSearch(ctx, width, height, drawState);
    } else if (drawState.array) {
      drawSort(ctx, width, height, drawState);
    } else if (drawState.graph) {
      drawGraph(ctx, { width, height }, drawState);
    } else if (drawState.tree) {
      drawTree(ctx, { width, height }, drawState);
    }
  };

  useEffect(() => {
    const initialArray = generateRandomArray(arraySize);
    const gen = animationGenerator(initialArray);

    const allSteps = [];
    let result = gen.next();
    while (!result.done) {
      allSteps.push(result.value);
      result = gen.next();
    }
    dispatch({ type: ACTIONS.SET_STEPS, payload: allSteps });
  }, [animationGenerator, arraySize, animationKey]);

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

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: ACTIONS.STEP_FORWARD });
      }, 700);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying]);

  return (
    <div className="animation-player" ref={containerRef}>
      <canvas ref={canvasRef} className="canvas" />

      <div className="controls">
        {showArraySizeControls && (
          <label>
            Размер массива:
            <input
              type="number"
              value={arraySize}
              onChange={(e) =>
                dispatch({ type: ACTIONS.SET_ARRAY_SIZE, payload: Number(e.target.value) })
              }
              min="5"
              max="100"
            />
          </label>
        )}

        <div className="buttons-controls">
          <button onClick={() => dispatch({ type: ACTIONS.REGENERATE })} className="btn replace">
            <i className="fas fa-sync-alt"></i>Заменить
          </button>

          <button onClick={() => dispatch({ type: ACTIONS.STEP_BACKWARD })} disabled={currentStepIndex <= 0} className="btn">
            <i className="fas fa-arrow-left"></i>Назад
          </button>

          <button onClick={() => dispatch({ type: ACTIONS.STEP_FORWARD })} disabled={currentStepIndex >= steps.length - 1} className="btn">
            Вперед<i className="fas fa-arrow-right"></i>
          </button>

          <button onClick={() => dispatch({ type: ACTIONS.RESTART })} className="btn restart">
            <i className="fas fa-redo"></i>Заново
          </button>

          <button onClick={() => dispatch({ type: ACTIONS.PLAY })} disabled={isPlaying} className="btn play">
            <i className="fas fa-play"></i>Старт
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.STOP })} disabled={!isPlaying} className="btn stop">
            <i className="fas fa-pause"></i>Стоп
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimationPlayer;
