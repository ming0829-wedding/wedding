import styled, { keyframes } from "styled-components";

const HEARTS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 11.3) % 100,
  size: 10 + ((i * 3) % 10),
  duration: 14 + ((i * 5) % 12),
  delay: -((i * 2.1) % 18),
  swayDuration: 5 + (i % 4),
  flipDuration: 2.5 + ((i * 0.7) % 3.5),
  flipAxis: i % 2 === 0 ? "Y" : "X",
  rotateStart: ((i * 47) % 60) - 30,
  shade: i % 3,
  drift: i % 2 === 0 ? 1 : -1,
}));

const COLORS = ["#e8a8b2", "#d48a96", "#f0bec6"];

export default function FallingHearts() {
  return (
    <Layer aria-hidden="true">
      {HEARTS.map((h, idx) => (
        <Fall
          key={idx}
          $left={h.left}
          $duration={h.duration}
          $delay={h.delay}
        >
          <Sway $duration={h.swayDuration} $drift={h.drift}>
            <Tilt $rotateStart={h.rotateStart} $duration={h.swayDuration * 1.5}>
              <Flip $duration={h.flipDuration} $axis={h.flipAxis}>
                <Heart viewBox="0 0 24 24" $size={h.size}>
                  <path
                    d="M12 21.35 L10.55 20.03 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 C9.24 3 10.91 3.81 12 5.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 C22 12.28 18.6 15.36 13.45 20.04 L12 21.35 Z"
                    fill={COLORS[h.shade]}
                    opacity="0.85"
                  />
                </Heart>
              </Flip>
            </Tilt>
          </Sway>
        </Fall>
      ))}
    </Layer>
  );
}

const fallAnim = keyframes`
  0%   { transform: translateY(-10vh); }
  100% { transform: translateY(110vh); }
`;

const swayAnim = keyframes`
  0%, 100% { transform: translateX(0); }
  50%     { transform: translateX(var(--drift, 20px)); }
`;

const tiltAnim = keyframes`
  0%, 100% { transform: rotate(calc(var(--start, 0deg) - 8deg)); }
  50%     { transform: rotate(calc(var(--start, 0deg) + 8deg)); }
`;

const flipYAnim = keyframes`
  0%   { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const flipXAnim = keyframes`
  0%   { transform: rotateX(0deg); }
  100% { transform: rotateX(360deg); }
`;

const Layer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  perspective: 600px;
`;

const Fall = styled.div`
  position: absolute;
  top: 0;
  left: ${({ $left }) => $left}%;
  animation: ${fallAnim} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  will-change: transform;
  transform-style: preserve-3d;
`;

const Sway = styled.div`
  --drift: ${({ $drift }) => $drift * 24}px;
  animation: ${swayAnim} ${({ $duration }) => $duration}s ease-in-out infinite;
  will-change: transform;
  transform-style: preserve-3d;
`;

const Tilt = styled.div`
  --start: ${({ $rotateStart }) => $rotateStart}deg;
  animation: ${tiltAnim} ${({ $duration }) => $duration}s ease-in-out infinite;
  will-change: transform;
  transform-style: preserve-3d;
`;

const Flip = styled.div`
  animation: ${({ $axis }) => ($axis === "X" ? flipXAnim : flipYAnim)}
    ${({ $duration }) => $duration}s linear infinite;
  transform-style: preserve-3d;
  will-change: transform;
`;

const Heart = styled.svg`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: block;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));
  backface-visibility: visible;
`;
