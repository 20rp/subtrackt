interface LabelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Label({ title, children, className = "" }: LabelProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
        {title}
      </span>

      <div className={`text-sm text-gray-200 font-medium ${className}`}>
        {children}
      </div>
    </div>
  );
}
