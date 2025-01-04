// import * as React from "react";
// import { animated, useSpring } from "react-spring";

// interface PagerProps {
//   children: React.ReactNode[];
//   id?: string;
//   value: number;
//   onRequestChange?: (newIndex: number) => void;
//   animationConfig?: { tension: number; friction: number; mass: number };
//   style?: React.CSSProperties;
//   [key: string]: any;
// }

// const Pager = React.forwardRef<HTMLDivElement, PagerProps>(
//   (
//     {
//       children,
//       id,
//       value: index,
//       onRequestChange,
//       animationConfig = { tension: 190, friction: 20, mass: 0.4 },
//       style,
//       ...other
//     },
//     ref
//   ) => {
//     const [{ x }, set] = useSpring(() => ({
//       x: index * -100,
//       config: animationConfig,
//     }));

//     // Animate into position if our index changes
//     React.useEffect(() => {
//       set({ x: index * -100 });
//     }, [index, set]);

//     return (
//       <React.Fragment>
//         <div
//           ref={ref}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             overflow: "hidden",
//             width: "100%",
//             height: "100%",
//             ...style,
//           }}
//           {...other}
//         >
//           <animated.div
//             style={{
//               flexDirection: "row",
//               direction: "ltr",
//               willChange: "transform",
//               minHeight: 0,
//               flex: 1,
//               display: "flex",
//               transform: x.to((xValue:any) => `translateX(${xValue}%)`),
//             }}
//           >
//             {children.map((child:any, i:any) => {
//               const props = {
//                 key: i,
//                 tabIndex: index === i ? 0 : -1,
//                 style: {
//                   display: "flex",
//                   flexDirection: "column" as const,
//                   width: "100%",
//                   alignSelf: "stretch",
//                   flexShrink: 0,
//                   overflow: "auto",
//                 },
//                 "aria-hidden": i !== index,
//               };

//               if (typeof child === "function") {
//                 return child(props, index === i);
//               }

//               return <div {...props}>{child}</div>;
//             })}
//           </animated.div>
//         </div>
//       </React.Fragment>
//     );
//   }
// );

// export default Pager;
