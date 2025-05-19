import Flex from "@/utitly-css/Flex";

const Flag = ({ code }: { code: string }) => (
    <span className="text-3xl leading-none">{String.fromCodePoint(...[...code.toUpperCase()].map(c =>  127397 + c.charCodeAt(0) ))}</span>
  );

export function Office({
    flag,
    title,
    address,
  }: {
    flag: string;
    title: string;
    address: string;
  }) {
    return (
      <Flex gap="4" direction="col" align={"start"} className="w-1/3">
        <Flag code={flag} />
        <div>
          <h4 className="font-medium">{title}</h4>
          <pre className="whitespace-pre-wrap text-sm text-gray-300">{address}</pre>
        </div>
      </Flex>
    );
  }