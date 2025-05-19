export const Input = (props: React.ComponentProps<"input">) => (
    <input
      {...props}
      className="w-full bg-white/5 placeholder-gray-400 text-sm px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-white/40"
    />
  );