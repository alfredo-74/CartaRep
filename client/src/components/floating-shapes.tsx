export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" data-testid="floating-shapes-container">
      <div className="floating-shape w-64 h-64 border-2 border-primary rounded-full absolute top-20 left-10" data-testid="floating-shape-circle" />
      <div className="floating-shape w-32 h-32 bg-secondary rounded-lg absolute top-96 right-20 rotate-45" data-testid="floating-shape-square" />
      <div className="floating-shape w-48 h-48 border border-accent rounded-xl absolute bottom-40 left-1/4" data-testid="floating-shape-rectangle" />
    </div>
  );
}
