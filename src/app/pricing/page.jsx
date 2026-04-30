import { Check } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For trying PixGen and saving a few favorite images.",
    features: ["10 generations per month", "Community gallery access", "Basic downloads"],
    cta: "Start Free",
    href: "/signup",
  },
  {
    name: "Creator",
    price: "$12",
    period: "per month",
    description: "For regular creators who need faster generation and more exports.",
    features: ["500 generations per month", "HD downloads", "Private image history", "Priority queue"],
    cta: "Choose Creator",
    href: "/signup",
    featured: true,
  },
  {
    name: "Studio",
    price: "$29",
    period: "per month",
    description: "For small teams and production workflows.",
    features: ["2,000 generations per month", "Commercial usage", "Team workspace", "Priority support"],
    cta: "Choose Studio",
    href: "/signup",
  },
];

const PricingPage = () => {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Simple pricing
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Start free, then upgrade when you need more generations, higher quality downloads, and faster access.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col border p-6 ${
                plan.featured ? "border-blue-500 shadow-lg shadow-blue-500/10" : ""
              }`}
            >
              {plan.featured && (
                <Chip color="primary" size="sm" className="absolute right-4 top-4">
                  Popular
                </Chip>
              )}

              <div>
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="pb-1 text-sm text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className="mt-6 block">
                <Button variant={plan.featured ? "primary" : "secondary"} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
