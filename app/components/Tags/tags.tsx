export const Tag = ({ text }: { text: string }) => {
  return (
    <span className="m-1 flex items-center justify-center rounded-full border border-edge-primary bg-[linear-gradient(135deg,#8b5cf6,#7c3aed)] px-3 py-1 text-secondary text-sm font-label">
      {text}
    </span>
  );
};
