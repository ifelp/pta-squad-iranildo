function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-xl p-8 w-96 h-40"
            style={{ backgroundColor: "#BFB5FF" }}>
        {children}
      </div>
    </div>
  );
}

export default Card;
