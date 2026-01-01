interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </label>
      <input
        {...props}
        className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all placeholder:text-gray-600"
      />
    </div>
  );
}
