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
      "col-sm-row": "flex-col sm:flex-row", // Mobile: column, Desktop: row
      "row-sm-col": "flex-row sm:flex-col", // Mobile: row, Desktop: column
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      "center-sm-between": "justify-center sm:justify-between", // Mobile: center, Desktop: between
      "start-sm-center": "justify-start sm:justify-center", // Mobile: start, Desktop: center
      "between-sm-around": "justify-between sm:justify-around", // Mobile: between, Desktop: around
      "start-sm-end": "items-start sm:items-end",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
      "center-sm-start": "items-center sm:items-start", // Mobile: center, Desktop: start
      "start-sm-center": "items-start sm:items-center", // Mobile: start, Desktop: center
      // Mobile: center, Desktop: end

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
      "2-sm-4": "gap-2 sm:gap-4", // Mobile: gap-2, Desktop: gap-4
      "4-sm-8": "gap-4 sm:gap-8", // Mobile: gap-4, Desktop: gap-8
    },
    wrap: {
      true: "flex-wrap",
      "true-sm-false": "flex-wrap sm:flex-nowrap", // Mobile: wrap, Desktop: no-wrap
    },
    // New responsive width variants
    responsiveWidth: {
      "full-sm-auto": "w-full sm:w-auto", // Mobile: full width, Desktop: auto
      "auto-sm-full": "w-auto sm:w-full", // Mobile: auto, Desktop: full width
      "full-sm-half": "w-full sm:w-1/2", // Mobile: full, Desktop: half
    }
  },
  defaultVariants: {
    width: "full",
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
  responsiveWidth,
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
          responsiveWidth,
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