export const Textarea = (props: React.ComponentProps<"textarea">) => (
    <textarea
      {...props}
      rows={4}
      className="w-full bg-white/5 placeholder-gray-400 text-sm px-4 py-3 border-2 rounded-lg resize-none outline-none focus:ring-1 focus:ring-white/40"
    />
  );