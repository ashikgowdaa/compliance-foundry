import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

const flexVariants = cva("flex", {
  variants: {
    width: {
      full: "w-full",
      half: "w-1/2",
      auto: "w-auto",
    },
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    gap: {
      "0": "gap-0",
      "1": "gap-1",
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
      "12": "gap-12",
      "16": "gap-16",
    },
    wrap: {
      true: "flex-wrap",
    }
  },
  defaultVariants: {
    width:"full",
    direction: "row",
    justify: "center",
    align: "center",
    gap: "4",
    wrap: false,
  }
});

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, 
  VariantProps<typeof flexVariants> {
  children: React.ReactNode;
}

const Flex = ({
  children,
  width,
  direction,
  justify,
  align,
  wrap,
  gap,
  className,
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(
        flexVariants({
          width,
          direction,
          justify,
          align,
          wrap,
          gap,
          className
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;