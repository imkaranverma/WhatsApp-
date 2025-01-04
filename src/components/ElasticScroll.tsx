import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useWheel } from "react-use-gesture";

// import "./styles.css";

const Scroller = styled.div`
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Box = styled.div`
  min-height: 100%;
  overflow: hidden;
`;

// const Container = styled.div`
//   padding: 20px;
//   margin: 20px;
//   border: 1px solid #ddd;
//   border-radius: 3px;
//   height: 300px;
// `;

type ElasticScrollProps = {
  children: React.ReactNode;
};

const ElasticScroll: React.FC<ElasticScrollProps> = ({ children }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
//   const [offset, setOffset] = React.useState<number>(0);
//   const [transition, setTransition] = React.useState<number>(0);
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    config: {
      clamp: true,
      tension: 500,
      mass: 1,
      friction: 26,
    },
  }));

  const bind = useWheel(
    ({ delta, vxvy,  direction, wheeling }) => {
      if (!boxRef.current || !scrollerRef.current) return;

      const { clientHeight: boxHeight } = boxRef.current;
      const { scrollTop, clientHeight: scrollerHeight } = scrollerRef.current;
      const innerHeight = boxHeight - scrollerHeight;

      if (scrollTop <= 0 || scrollTop >= innerHeight) {
        const [, y] = delta;
        const [, vy] = vxvy;
        const [, dy] = direction;
        return wheeling
          ? api.start({
              xy: [0, y * vy * dy * -0.1],
              config: {
                clamp: true,
                tension: 500,
                mass: 1,
                friction: 26,
              },
            })
          : api.stop();
      }
    }
  );

  return (
    <Scroller ref={scrollerRef}>
      <animated.div
        {...bind()}
        style={{
          transform: xy.to((x:any, y:any) => `translate3d(${x}px, ${y}px, 0)`),
        }}
      >
        <Box ref={boxRef}>{children}</Box>
      </animated.div>
    </Scroller>
  );
};

export default ElasticScroll;
