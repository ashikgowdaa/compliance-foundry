import Flex from "@/utitly-css/Flex";
import { testimonialCard } from "./Testimonials";



export default function TestimonialCard({item}:{item:testimonialCard}) {
  return (
  <>
  <Flex className="shadow border-[1px] border-gray-200 rounded-lg p-2 bg-[#F3F5FA] w-96  text-text-tertiary"  justify="between">
   <Flex className="w-[25%]" >
    <img src={item.authorImage.url}  className="rounded-full w-[60px] h-[60px] " alt="no image" />
   </Flex>
   <Flex direction={"col"} className="w-[70%]" align="start" gap="1" >
    <span className="w-full text-wrap text-xs font-normal">{item.comment}</span>
    <span className="font-semibold text-xs secondary-font">--{item.author}</span>
   </Flex>
  </Flex>
  </>)
}