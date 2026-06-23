interface RotatingTextProps {
  color: string[];
  text: string[];
  font: string[];
  textSize: string[];
  time?: string[];
}
export const RotatingText = ({
  color,
  text,
  font,
  time,
}: RotatingTextProps) => {
  return (
    <span className="text-rotate">
      <span>
        {text.map((item, index) => (
          <span
            key={index}
            className={`${font[index]} ${color[index]} ${time ? time[index] : ""}`}
          >
            {item}
          </span>
        ))}
      </span>
    </span>
  );
};
