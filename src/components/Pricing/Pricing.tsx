"use client";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import { useInViewAnimation } from "@/lib/utils/useInViewAnimation";
import AnimatedSection from "../custom-components/Animated";
import { WalletMinimal } from "lucide-react";
import Button from "../custom-components/Button";
import { CircleCheck } from "lucide-react";

// const price = {
//   priceHeading: " Pricing ",
//   priceSubheading: "Choose the plan that fits you best",
//   priceDescription:
//     "No hidden fees. No long-term lock-ins. Whether you're just getting started or scaling across frameworks, we have a plan that fits your compliance journey.",

//   cardData: [
//     {
//       cardHeading: "Basic Plan",
//       cardDescription: "Ideal for individuals just getting started.",
//       cardButtonText: "Get Started",
//       cardPoints: [
//         "Access to core features",
//         "Email support",
//         "Community access",
//         "24/7 phone support",
//       ],
//       priceButtonText: "Get Started",
//     },
//     {
//       cardHeading: "Pro Plan",
//       cardDescription: "Perfect for growing teams and businesses.",
//       cardButtonText: "Upgrade Now",
//       cardPoints: [
//         "All Basic features",
//         "Priority email support",
//         "Advanced analytics",
//         "Team collaboration tools",
//       ],
//       priceButtonText: "Get Started",
//     },
//     {
//       cardHeading: "Enterprise Plan",
//       cardDescription: "Custom solutions for large organizations.",
//       cardButtonText: "Contact Sales",
//       cardPoints: [
//         "All Pro features",
//         "Dedicated account manager",
//         "Custom integrations",
//         "24/7 phone support",
//       ],
//       priceButtonText: "Get Started",
//     },
//   ],
// };

type PriceCardProps = {
  cardHeading: string;
  cardDescription: string;
  cardButtonText: string;
  cardPoints: string[];
};

type priceProps = {
  priceHeading: string;
  priceSubheading: string;
  priceDescription: string;
  cardData: PriceCardProps[];
  priceButtonText: string;
};

const Pricing = ({ price }: any) => {
  const { inView, ref } = useInViewAnimation();

  return (
    <Wrapper
      className="!py-8 "
      ref={ref}
      style={{
        backgroundImage: "radial-gradient(#00000069 0px, #EDEFF6 1px)",
        backgroundSize: "10px 10px",
      }}
    >
      <AnimatedSection animationVariant="slideRight">
        {(inView) => (
          <Flex>
            <Flex
              direction="col"
              justify="start"
              align="start"
              gap="16"
              className="w-[90%]  rounded-4xl sm:p-5 "
            >
              <Flex direction="col" align="start">
                <AnimatedSection animationVariant="zoomIn">
                  {(inView) => (
                    <Flex direction="col" align="start">
                      <Flex
                        justify="start"
                        className="text-text-blue uppercase font-normal tertiary-font"
                        gap="2"
                      >
                        {" "}
                        <WalletMinimal strokeWidth={2.25} />{" "}
                        {price.pricingHeading}
                      </Flex>
                      <h4 className="text-text-primary text-3xl font-medium secondary-font text-start">
                        {price.pricingSubHeading}
                      </h4>
                      <p className="text-text-tertiary font-medium text-sm">
                        {" "}
                        {price.pricingDescription}
                      </p>
                    </Flex>
                  )}
                </AnimatedSection>
              </Flex>
              <Flex gap="10" direction="col-sm-row">
                {price?.priceCard.map((price: any) => {
                  return (
                    <Flex
                      direction="col"
                      className="bg-[#fafbfe]  w-full h-[500px] p-5 rounded-lg hover:border-2 ease-in-out duration-300 transition delay-150 border-text-blue hover:scale-105  "
                      align="start"
                      justify="between"
                    >
                      <Flex
                        justify="between"
                        className="text-text-primary text-[1.5rem] font-medium uppercase secondary-font "
                      >
                        {price.priceCardHeading}{" "}
                        {price?.priceCardTag && (
                          <span className="text-text-blue text-sm font-semibold text-shadow-2xs">
                            {"Popular"}
                          </span>
                        )}
                      </Flex>
                      <p className="text-text-tertiary">
                        {price.pricingCardDescription}
                      </p>
                      <Flex direction="col" align="start" justify="start">
                        {price?.priceCardPoints.map((point: any) => {
                          return (
                            <Flex justify="between" className="gap-2">
                              <Flex className="w-[10%]">
                                <CircleCheck color="#2D69FF" size="24" />{" "}
                              </Flex>

                              <Flex justify="start" className="text-text-tertiary text-sm">
                                {point?.children[0].text}
                              </Flex>
                            </Flex>
                          );
                        })}
                      </Flex>

                      <Button
                        title={price.buttonCardText}
                        variant="outline"
                        width="full"
                        className="hover:bg-text-blue hover:border-0 hover:text-text-secondary"
                      />
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        )}
      </AnimatedSection>
    </Wrapper>
  );
};

export default Pricing;
