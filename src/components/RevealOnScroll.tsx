import { useEffect, useRef, useState } from "react";
 
const RevealOnScroll = ({ children }: {children: any}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const threshold = 50;
    useEffect(() => {
        const onWindScroll = () => {
            // const element:any = ref.current;
            if (window.scrollY <= threshold) {
                // User is at the top of the page
                setIsVisible(false);
            } else {
                // Check if the element is visible in the viewport
                const element: any = ref.current;
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    const isVisible = top < window.innerHeight;
                    setIsVisible(isVisible);
                }
            }
        };
 
        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);
 
    const classes = `transition-opacity duration-10
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
export default RevealOnScroll