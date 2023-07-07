export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-5 flex-1">
      <h1 className="pb-5">Tempalte Dashboard</h1>
      {children}
    </div>
  );
}
