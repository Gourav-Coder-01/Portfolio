import { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const techs = [
  { icon: <FaHtml5 color="orange" />, name: 'HTML' },
  { icon: <FaCss3Alt color="blue" />, name: 'CSS' },
  { icon: <FaJs color="gold" />, name: 'JS' },
  { icon: <FaNodeJs color="green" />, name: 'Node' },
  { icon: <SiExpress color="gray" />, name: 'Express' },
  { icon: <SiMongodb color="darkgreen" />, name: 'MongoDB' },
  { icon: <FaReact color="cyan" />, name: 'React' },
];

const CursorTrail = () => {
  const [balls, setBalls] = useState([]);
  const indexRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handler = (x, y) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newBall = {
            id: Date.now(),
            x,
            y,
            icon: techs[indexRef.current].icon,
          };

          setBalls((prev) => [...prev.slice(-10), newBall]);

          setTimeout(() => {
            setBalls((prev) => prev.filter((b) => b.id !== newBall.id));
          }, 1000);

          indexRef.current = (indexRef.current + 1) % techs.length;
          ticking = false;
        });
        ticking = true;
      }
    };

    const mouseHandler = (e) => handler(e.clientX, e.clientY);
    const touchHandler = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handler(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener('mousemove', mouseHandler);
    document.addEventListener('touchmove', touchHandler);

    return () => {
      document.removeEventListener('mousemove', mouseHandler);
      document.removeEventListener('touchmove', touchHandler);
    };
  }, []);

  return (
    <>
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="trail-ball fixed pointer-events-none animate-fade"
          style={{
            left: ball.x,
            top: ball.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {ball.icon}
        </div>
      ))}
    </>
  );
};

export default CursorTrail;
