import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TitleSpan = ({children}) => {
    const controls = useAnimationControls();
    const [isMoving, setIsMoving] = useState(false);
    
    const move = () => {
        controls.start({
            transform: [
                'scale3d(1, 1, 1)',
                'scale3d(1.4, .55, 1)',
                'scale3d(.75, 1.25, 1.9)',
                'scale3d(1.25, .95, 1)',
                'scale3d(.9, 1.25, 1.8)',
                'scale3d(1, 1, 1)',
            ]
        })
        setIsMoving(true)
    }

    return ( 
        <motion.span 
            animate={controls} 
            onMouseOver={() => {
                if(!isMoving)
                move()
            }}
            onAnimationComplete={() => setIsMoving(false)}>
                {children}
        </motion.span>
     );
}

export default TitleSpan;